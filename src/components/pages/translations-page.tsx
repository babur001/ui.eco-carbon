import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { EditableTable } from "@/components/editable-table";
import { translations as translationsSchema } from "@/server/db/schema";
import axios from "axios";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";

export function TranslationsPage({ translations: translationsProp }: { translations: (typeof translationsSchema.$inferSelect)[] }) {
  const [translations, setTranslations] = useState(translationsProp);
  const columns = [
    { key: "key", label: "Key", editable: false },
    { key: "valueEn", label: "English", editable: true },
    { key: "valueRu", label: "Русский", editable: true },
    { key: "value", label: "O'zbek tili", editable: true },
  ];

  const handleCellUpdate = (id: string, field: string, value: string) => {
    axios
      .post("/api/translation-update", {
        uuid: id,
        field,
        value,
      })
      .then((response) => {
        console.log("Translation updated successfully:", response.data);
        toast.success("Tarjima muvaffaqiyatli yangilandi!");
        // Optionally, you can update the local state here if needed
        setTranslations((prev) => prev.map((item) => (item.uuid === id ? { ...item, [field]: value } : item)));
      })
      .catch((error) => {
        console.error("Error updating translation:", error);
        toast.error("Xatolik yuz berdi. Iltimos, qayta urinib ko'ring.");
      });
  };

  return (
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
          <EditableTable data={translations} columns={columns} onCellUpdate={handleCellUpdate} />
        </CardContent>
      </Card>
    </div>
  );
}
