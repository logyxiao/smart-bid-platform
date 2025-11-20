import { LayoutGrid, FolderKanban, LineChart, FileText, Settings, LogOut, Database, ChevronDown } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const menuItems = [
  { title: "仪表盘", url: "/", icon: LayoutGrid },
  { title: "项目管理", url: "/projects", icon: FolderKanban },
  { title: "招标解析", url: "/analysis", icon: LineChart },
  { title: "标书生成", url: "/generation", icon: FileText },
];

const knowledgeSubItems = [
  { title: "基本情况库", url: "/knowledge/basic" },
  { title: "人员档案库", url: "/knowledge/personnel" },
  { title: "设备档案库", url: "/knowledge/equipment" },
  { title: "财务情况库", url: "/knowledge/finance" },
  { title: "信用情况库", url: "/knowledge/credit" },
  { title: "售后历史库", url: "/knowledge/aftersales" },
  { title: "企业资质库", url: "/knowledge/qualification" },
  { title: "企业荣誉库", url: "/knowledge/honor" },
  { title: "知识产权库", url: "/knowledge/ip" },
  { title: "企业业绩库", url: "/knowledge/performance" },
  { title: "历史投标库", url: "/knowledge/bidding" },
];

export function AppSidebar() {
  const [knowledgeOpen, setKnowledgeOpen] = useState(true);

  return (
    <Sidebar className="border-r border-sidebar-border">
      <SidebarHeader className="border-b border-sidebar-border p-4">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <LineChart className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-lg font-semibold">智能标书平台</span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild size="lg">
                    <NavLink
                      to={item.url}
                      end
                      className="flex items-center gap-3 px-4 py-3 text-sidebar-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                      activeClassName="bg-sidebar-accent text-sidebar-primary font-medium"
                    >
                      <item.icon className="h-5 w-5" />
                      <span className="text-base">{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              
              <Collapsible open={knowledgeOpen} onOpenChange={setKnowledgeOpen}>
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton size="lg" className="px-4 py-3">
                      <Database className="h-5 w-5" />
                      <span className="text-base">知识管理</span>
                      <ChevronDown className={`ml-auto h-4 w-4 transition-transform ${knowledgeOpen ? 'rotate-180' : ''}`} />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {knowledgeSubItems.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild>
                            <NavLink
                              to={subItem.url}
                              className="flex items-center px-4 py-2.5 text-sidebar-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                              activeClassName="bg-sidebar-accent text-sidebar-primary font-medium"
                            >
                              <span className="text-sm">{subItem.title}</span>
                            </NavLink>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild size="lg">
              <NavLink
                to="/settings"
                className="flex items-center gap-3 px-4 py-3 text-sidebar-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                activeClassName="bg-sidebar-accent text-sidebar-primary font-medium"
              >
                <Settings className="h-5 w-5" />
                <span className="text-base">设置</span>
              </NavLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild size="lg">
              <a
                href="/login"
                className="flex items-center gap-3 px-4 py-3 text-sidebar-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              >
                <LogOut className="h-5 w-5" />
                <span className="text-base">退出登录</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
