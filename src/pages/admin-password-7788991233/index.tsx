"use client";

import { useState } from "react";
import { AdminSidebar } from "@/components/admin-sidebar";
import { SettingsPage } from "@/components/pages/settings-page";
import { TeamPage } from "@/components/pages/team-page";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";

export type PageType = "translations" | "articles" | "article-create" | "settings" | "team";

export default function AdminApp() {
  const [currentPage, setCurrentPage] = useState<PageType>("translations");

  const renderPage = () => {
    switch (currentPage) {
      case "settings":
        return <SettingsPage />;
      case "team":
        return <TeamPage />;
      default:
    }
  };

  return (
    <SidebarProvider>
      <AdminSidebar />

      <SidebarInset>
        <div className="flex flex-1 flex-col">{renderPage()}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
