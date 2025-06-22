import { useState } from "react"
import { AdminSidebar } from "@/components/admin-sidebar"
import { TranslationsPage } from "@/components/pages/translations-page"
import { ArticlesPage } from "@/components/pages/articles-page"
import { ArticleCreatePage } from "@/components/pages/article-create-page"
import { SettingsPage } from "@/components/pages/settings-page"
import { TeamPage } from "@/components/pages/team-page"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"

export type PageType = "translations" | "articles" | "article-create" | "settings" | "team"

export default function AdminApp() {
  const [currentPage, setCurrentPage] = useState<PageType>("translations")

  const renderPage = () => {
    switch (currentPage) {
      case "translations":
        return <TranslationsPage />
      case "articles":
        return <ArticlesPage onCreateArticle={() => setCurrentPage("article-create")} />
      case "article-create":
        return <ArticleCreatePage onBack={() => setCurrentPage("articles")} />
      case "settings":
        return <SettingsPage />
      case "team":
        return <TeamPage />
      default:
        return <TranslationsPage />
    }
  }

  return (
    <SidebarProvider>
      <AdminSidebar currentPage={currentPage} onPageChange={setCurrentPage} />
      <SidebarInset>
        <div className="flex flex-1 flex-col">{renderPage()}</div>
      </SidebarInset>
    </SidebarProvider>
  )
}
