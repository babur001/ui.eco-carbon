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
import Link from "next/link";
import { useRouter } from "next/router";

const navigationItems = [
  {
    title: "Tarjimalar",
    icon: Languages,
    href: "/admin-password-7788991233/translations",
  },
  {
    title: "Maqolalar",
    icon: FileText,
    href: "/admin-password-7788991233/articles",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/admin-password-7788991233/settings",
  },
  // {
  //   title: "Team",
  //   icon: Users,
  //   href: "/admin-password-7788991233/team",
  // },
];

export function AdminSidebar() {
  const router = useRouter();

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <Link href={"/"}>
            <SidebarMenuItem>
              <div className="data-[state=open]:bg-sidebar-accent | flex items-center gap-2">
                <img src={"/logo.png"} alt="Logo" className="h-12" />
              </div>
            </SidebarMenuItem>
          </Link>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Admin</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <Link href={item.href} className="w-full">
                    <SidebarMenuButton size="lg" isActive={router.asPath === item.href}>
                      <item.icon className="size-4" />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </Link>
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
