import type React from "react";

import { useState } from "react";
import { Upload, Save, Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import AdminLayout from "@/components/pages/admin-layout";
import { GetServerSideProps } from "next";
import { db } from "@/server/app";
import { settings as settingsSchema } from "@/server/db/schema";
import axios from "axios";
import { toast } from "sonner";
import { minutesToSeconds } from "@/utils/minutes-to-seconds";

export const getServerSideProps: GetServerSideProps = async () => {
  const [settingsShema] = await db.select().from(settingsSchema);

  return {
    props: {
      settings: settingsShema,
    },
    revalidate: minutesToSeconds(5),
  };
};

export default function SettingsPage({ settings: settingsProp }: { settings: typeof settingsSchema.$inferSelect }) {
  const [isLoading, setIsLoading] = useState(false);
  const [settings, setSettings] = useState({
    companyName: settingsProp.companyName || "",
    email: settingsProp.email || "",
    phone: settingsProp.tel || "",
    facebook: settingsProp.facebook || "",
    telegram: settingsProp.telegram || "",
    linkedin: settingsProp.linkedin || "",
    instagram: settingsProp.instagram || "",
    youtube: settingsProp.youtube || "",
  });

  const handleSubmit = async () => {
    setIsLoading(true);

    try {
      const { data } = await axios({
        url: `/api/settings-update`,
        method: "POST",
        data: settings,
      });

      if (data.success) {
        toast.success("Maqola muvaffaqiyatli saqlandi!");
      } else {
        toast.error("Xatolik, qayta urinib koring");
      }
    } catch (err) {
      toast.error("Xatolik, qayta urinib koring");
    }

    setIsLoading(false);
  };

  return (
    <AdminLayout>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Konfiguratsiyalash</h1>
          <p className="text-muted-foreground">Saytdagi umumiy konfiguratsiyalar</p>
        </div>

        <div className="grid gap-6 max-w-2xl">
          <Card>
            <CardHeader>
              <CardTitle>Korxona umumiy ma'lumotlari</CardTitle>
              {/* <CardDescription>Upload and manage your company logo</CardDescription> */}
            </CardHeader>
            <CardContent className="space-y-4">
              {/* <div className="space-y-2">
                <Label htmlFor="logo">Company Logo</Label>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                    {settings.logo ? (
                      <img src={settings.logo || "/placeholder.svg"} alt="Logo" className="w-full h-full object-cover rounded-lg" />
                    ) : (
                      <span className="text-xs text-muted-foreground">No logo</span>
                    )}
                  </div>
                  <Button variant="outline" size="sm">
                    <Upload className="mr-2 h-4 w-4" />
                    Upload Logo
                  </Button>
                </div>
              </div> */}
              <div className="space-y-2">
                <Label htmlFor="companyName">Korxona nomi</Label>
                <Input id="companyName" value={settings.companyName} onChange={(e) => setSettings((prev) => ({ ...prev, companyName: e.target.value }))} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Umumiy</CardTitle>
              {/* <CardDescription>Update your contact information</CardDescription> */}
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={settings.email} onChange={(e) => setSettings((prev) => ({ ...prev, email: e.target.value }))} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Telefon raqam</Label>
                <Input id="phone" value={settings.phone} onChange={(e) => setSettings((prev) => ({ ...prev, phone: e.target.value }))} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Ijtimoiy tarmoqlar</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="facebook">Facebook</Label>
                <Input
                  id="facebook"
                  value={settings.facebook}
                  onChange={(e) => setSettings((prev) => ({ ...prev, facebook: e.target.value }))}
                  placeholder="https://facebook.com/yourcompany"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="instagram">Instagram</Label>
                <Input
                  id="instagram"
                  value={settings.instagram}
                  onChange={(e) => setSettings((prev) => ({ ...prev, instagram: e.target.value }))}
                  placeholder="https://instagram.com/yourcompany"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="linkedin">LinkedIn</Label>
                <Input
                  id="linkedin"
                  value={settings.linkedin}
                  onChange={(e) => setSettings((prev) => ({ ...prev, linkedin: e.target.value }))}
                  placeholder="https://linkedin.com/company/yourcompany"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="telegram">Telegram</Label>
                <Input
                  id="telegram"
                  value={settings.telegram}
                  onChange={(e) => setSettings((prev) => ({ ...prev, telegram: e.target.value }))}
                  placeholder="https://telegram.com/yourcompany"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="youtube">Youtube</Label>
                <Input
                  id="youtube"
                  value={settings.youtube}
                  onChange={(e) => setSettings((prev) => ({ ...prev, youtube: e.target.value }))}
                  placeholder="https://telegram.com/yourcompany"
                />
              </div>
            </CardContent>
          </Card>

          <Button type="submit" size="lg" className="cursor-pointer" disabled={isLoading} onClick={handleSubmit}>
            {isLoading ? (
              <Loader className="animate-spin" />
            ) : (
              <>
                <Save className="mr-2 h-4 w-4" />
                Saqlash
              </>
            )}
          </Button>
        </div>
      </div>
    </AdminLayout>
  );
}
