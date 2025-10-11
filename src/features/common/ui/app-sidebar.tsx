"use client";

import type { User } from "@supabase/supabase-js";
import { ChevronUp, User2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useAuth } from "@/features/auth";

export function AppSidebar() {
  const { user, logOut } = useAuth();

  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter>
        <SidebarFooterContent user={user} onLogOut={logOut} />
      </SidebarFooter>
    </Sidebar>
  );
}

interface SidebarFooterContentProps {
  user: User | undefined;
  onLogOut: () => void;
}

function SidebarFooterContent({ user, onLogOut }: SidebarFooterContentProps) {
  if (!user) {
    return null;
  }

  const displayName = user?.user_metadata?.name || user?.email || "사용자";

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton>
              <User2 /> {displayName}
              <ChevronUp className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            side="top"
            className="w-[--radix-popper-anchor-width]"
          >
            <DropdownMenuItem>
              <span>계정</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>설정</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={onLogOut}>
              <span>로그아웃</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
