import { AdminSidebar } from "@/components/admin-sidebar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";

export type PageType = "translations" | "articles" | "article-create" | "settings" | "team";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AdminSidebar />

      <SidebarInset>
        <div className="flex flex-1 flex-col">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
