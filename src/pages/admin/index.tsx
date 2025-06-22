import { useState } from "react";
import { AdminSidebar } from "@/components/admin-sidebar";
import { TranslationsPage } from "@/components/pages/translations-page";
import { ArticlesPage } from "@/components/pages/articles-page";
import { ArticleCreatePage } from "@/components/pages/article-create-page";
import { SettingsPage } from "@/components/pages/settings-page";
import { TeamPage } from "@/components/pages/team-page";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { db } from "@/server/app";
import { translations } from "@/server/db/schema";

export type PageType = "translations" | "articles" | "article-create" | "settings" | "team";

export const getStaticProps: GetStaticProps = async () => {
  const res_translations = await db.select().from(translations);

  return {
    props: {
      translations: res_translations,
    },
  };
};

export default function AdminApp({ translations }: InferGetStaticPropsType<typeof getStaticProps>) {
  const [currentPage, setCurrentPage] = useState<PageType>("translations");

  const renderPage = () => {
    switch (currentPage) {
      case "translations":
        return <TranslationsPage translations={translations} />;
      case "articles":
        return <ArticlesPage onCreateArticle={() => setCurrentPage("article-create")} />;
      case "article-create":
        return <ArticleCreatePage onBack={() => setCurrentPage("articles")} />;
      case "settings":
        return <SettingsPage />;
      case "team":
        return <TeamPage />;
      default:
        return <TranslationsPage translations={translations} />;
    }
  };

  return (
    <SidebarProvider>
      <AdminSidebar currentPage={currentPage} onPageChange={setCurrentPage} />
      <SidebarInset>
        <div className="flex flex-1 flex-col">{renderPage()}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
