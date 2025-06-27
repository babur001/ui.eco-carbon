import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { EditableTable } from "@/components/editable-table";
import { translations, translations as translationsSchema } from "@/server/db/schema";
import axios from "axios";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { GetServerSideProps, GetStaticProps } from "next";
import { db } from "@/server/app";
import AdminLayout from "@/components/pages/admin-layout";
import { minutesToSeconds } from "@/utils/minutes-to-seconds";
import { desc } from "drizzle-orm";

export const getServerSideProps: GetServerSideProps = async () => {
  const res_translations = await db.select().from(translations).orderBy(desc(translations.created_at));

  return {
    props: {
      translations: res_translations,
    },
  };
};

export default function TranslationsPage({ translations: translationsProp }: { translations: (typeof translationsSchema.$inferSelect)[] }) {
  const [translations, setTranslations] = useState(translationsProp);
  const [submittingId, setSubmittingId] = useState({}); // uuid of the article

  const columns = [
    { key: "key", label: "Key", editable: false },
    { key: "valueEn", label: "English", editable: true },
    { key: "valueRu", label: "Русский", editable: true },
    { key: "value", label: "O'zbek tili", editable: true },
  ];

  const handleCellUpdate = (id: string, field: string, value: string) => {
    setSubmittingId({ uuid: id, field });
    setTranslations((prev) => prev.map((item) => (item.uuid === id ? { ...item, [field]: value } : item)));

    axios
      .post("/api/translation-update", {
        uuid: id,
        field,
        value,
      })
      .then((response) => {
        console.log("Translation updated successfully:", response.data);
        toast.success("Tarjima muvaffaqiyatli yangilandi!");
      })
      .catch((error) => {
        console.error("Error updating translation:", error);
        toast.error("Xatolik yuz berdi. Iltimos, qayta urinib ko'ring.");
      })

      .finally(() => setSubmittingId(""));
  };

  return (
    <AdminLayout>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Tarjimalar</h1>
            <p className="text-muted-foreground">Ilovadagi barcha tarjimalar ro'yxati</p>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Tarjima Kalitlari</CardTitle>
            <CardDescription>
              Katakcha ustiga bir marta bosib, kerakli tarjimani yozib <Badge variant="secondary">Enter</Badge> tugmasini bosing!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <EditableTable data={translations} columns={columns} onCellUpdate={handleCellUpdate} submittingId={submittingId} />
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
