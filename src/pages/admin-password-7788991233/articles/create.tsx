import type React from "react";

import { useState } from "react";
import { ArrowLeft, Loader, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AdminLayout from "@/components/pages/admin-layout";
import { RichTextEditor, RichTextEditorContent, RichTextEditorToolbar } from "@/components/ui/rich-text-editor";
import * as z from "zod";
import { cn } from "@/lib/utils";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/router";

const titleValidation = z.string().min(1, "Sarlavha kiritilishi shart");
const imageValidation = z.string().url("Rasm URL manzili noto'g'ri");
const contentValidation = z.string().min(10, "Maqola matni kamida 10 ta belgidan iborat bo'lishi shart");

const articleCreateShape = z.object({
  title: titleValidation,
  titleRu: titleValidation,
  titleEn: titleValidation,
  image: imageValidation,
  content: contentValidation,
  contentRu: contentValidation,
  contentEn: contentValidation,
});

const initialFormData = {
  image: "",
  title: "",
  titleRu: "",
  titleEn: "",
  content: "",
  contentRu: "",
  contentEn: "",
  submitted: false,
};

export default function ArticleCreatePage() {
  const router = useRouter();
  const [formData, setFormData] = useState(initialFormData);
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = (data: typeof formData) => articleCreateShape.safeParse(data);
  const errors = formData.submitted ? validateForm(formData).error?.format() : null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData((prev) => ({ ...prev, submitted: true }));

    const validatedForm = validateForm(formData);

    if (validatedForm.success) {
      setIsLoading(true);
      const { data } = await axios({
        url: `/api/add-article`,
        method: "POST",
        data: validatedForm.data,
      });

      setIsLoading(false);

      if (data.success) {
        toast.success("Maqola muvaffaqiyatli saqlandi!");
        router.push("/admin-password-7788991233/articles");
      }
    }

    // Here you would typically send the data to your backend
    console.log("Form submitted successfully:", formData);
  };

  return (
    <AdminLayout>
      <div className="px-3 space-y-5">
        <div className="mt-5">
          <Button variant="outline" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Articles
          </Button>
        </div>

        <div className="flex flex-1 flex-col gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Create New Article</h1>
            <p className="text-muted-foreground">Write and publish a new article</p>
          </div>

          <Card>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="space-y-2">
                  <Label htmlFor="image">Rasm</Label>
                  <Input
                    id="image"
                    value={formData.image}
                    onChange={(e) => setFormData((prev) => ({ ...prev, image: e.target.value }))}
                    placeholder="https://example.com/image.jpg"
                    className={errors?.image ? "border border-red-500" : ""}
                  />
                  {errors?.image ? <p className="text-red-500 text-xs">{errors?.image._errors[0]}</p> : null}
                </div>

                <div className="grid grid-cols-3 gap-5">
                  {(["title", "titleRu", "titleEn"] as const).map((value) => {
                    return (
                      <div className="space-y-2">
                        <Label htmlFor={value}>Sarlavha {value}</Label>
                        <Input
                          id={value}
                          value={formData[value]}
                          onChange={(e) => setFormData((prev) => ({ ...prev, [value]: e.target.value }))}
                          placeholder={`sarlavha...`}
                          className={errors?.[value] ? "border border-red-500" : ""}
                        />
                        {errors?.[value] ? <p className="text-red-500 text-xs">{errors?.[value]._errors[0]}</p> : null}
                      </div>
                    );
                  })}
                </div>

                <div className="space-y-10">
                  {(["content", "contentRu", "contentEn"] as const).map((value) => {
                    return (
                      <div className="space-y-2">
                        <Label htmlFor={value}>Maqola matni {value}</Label>

                        <RichTextEditor
                          value={formData[value]}
                          onChange={(e) => setFormData((prev) => ({ ...prev, [value]: e }))}
                          className={cn({
                            "h-full": true,
                            "border border-red-500": errors?.[value],
                          })}
                          autofocus={"start"}
                          placeholder="Maqola matnini kiriting..."
                        >
                          <RichTextEditorToolbar />
                          <RichTextEditorContent />
                        </RichTextEditor>

                        {errors?.[value] ? <p className="text-red-500 text-xs">{errors?.[value]._errors[0]}</p> : null}
                      </div>
                    );
                  })}
                </div>

                <div className="flex gap-2">
                  <Button type="submit" size="lg" className="cursor-pointer" disabled={isLoading}>
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
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
}
