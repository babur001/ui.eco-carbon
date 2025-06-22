"use client";

import { Languages, FileText, Settings, Users, Building2 } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import type { PageType } from "@/app/page";

interface AdminSidebarProps {
  currentPage: PageType;
  onPageChange: (page: PageType) => void;
}

const navigationItems = [
  {
    title: "Translations",
    icon: Languages,
    page: "translations" as PageType,
  },
  {
    title: "Articles",
    icon: FileText,
    page: "articles" as PageType,
  },
  {
    title: "Settings",
    icon: Settings,
    page: "settings" as PageType,
  },
  {
    title: "Team",
    icon: Users,
    page: "team" as PageType,
  },
];

export function AdminSidebar({ currentPage, onPageChange }: AdminSidebarProps) {
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="data-[state=open]:bg-sidebar-accent | flex items-center gap-2">
              <img src={"/logo.png"} alt="Logo" className="h-12" />
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.page}>
                  <SidebarMenuButton size="lg" isActive={currentPage === item.page} onClick={() => onPageChange(item.page)}>
                    <item.icon className="size-4" />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
