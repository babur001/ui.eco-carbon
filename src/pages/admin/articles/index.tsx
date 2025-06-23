import { useEffect, useState } from "react";
import { Loader, Pen, Plus, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import AdminLayout from "@/components/pages/admin-layout";
import Link from "next/link";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { blogs } from "@/server/db/schema";
import { db } from "@/server/app";
import { GetServerSideProps } from "next";
import { truncate } from "lodash";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import axios from "axios";
import { toast } from "sonner";

type Article = typeof blogs.$inferSelect;

export const getServerSideProps: GetServerSideProps = async () => {
  const articles = await db.select().from(blogs);

  return {
    props: {
      articles,
    },
  };
};

export default function ArticlesPage({ articles }: { articles: Article[] }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const [articlesState, setArticlesState] = useState(articles);
  const [isLoading, setIsLoading] = useState(false);

  if (!isClient) return null;

  const onDelete = async (uuid: string) => {
    setIsLoading(true);
    try {
      const response = await axios({
        url: "/api/delete-article",
        method: "POST",
        data: { uuid },
      });

      if (!response.data.success) {
        throw new Error("Failed to delete article");
      }

      setArticlesState((prev) => prev.filter((article) => article.uuid !== uuid));
      toast.success("Article deleted successfully");
    } catch (error) {
      toast.error("Failed to delete article");
      console.error("Error deleting article:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const columns = [
    { key: "title", label: "Title", editable: false },
    { key: "titleRu", label: "Title (RU)", editable: false },
    { key: "titleEn", label: "Title (EN)", editable: false },
    { key: "image_url", label: "Image URL", editable: false },
    { key: "body", label: "Content", editable: false },
    { key: "bodyRu", label: "Content (RU)", editable: false },
    { key: "bodyEn", label: "Content (EN)", editable: false },
    { key: "created_at", label: "Created At" },
  ];

  return (
    <AdminLayout>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Maqolalar</h1>
            <p className="text-muted-foreground">Maqolalar ro'yxatini boshqarish</p>
          </div>
          <Link href="/admin/articles/create" className="inline-flex items-center">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Create Article
            </Button>
          </Link>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                {columns.map((column) => (
                  <TableHead key={column.key}>{column.label}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {articlesState.map((row) => (
                <TableRow key={row.uuid}>
                  {columns.map((column) => (
                    <TableCell key={column.key} className={`${column.editable ? "cursor-pointer hover:bg-muted/50" : ""}  relative`}>
                      <div className="w-full overflow-hidden whitespace-normal">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <p dangerouslySetInnerHTML={{ __html: truncate(row[column.key as keyof typeof row] || "", { length: 100 }) }} />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{row[column.key as keyof typeof row] || ""}</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </TableCell>
                  ))}

                  <TableCell className="flex items-center justify-end gap-5">
                    <Button variant="destructive" onClick={() => onDelete(row.uuid)} size="icon" className="cursor-pointer" disabled={isLoading}>
                      {isLoading ? (
                        <Loader className="animate-spin" />
                      ) : (
                        <>
                          <Trash />
                        </>
                      )}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </AdminLayout>
  );
}
