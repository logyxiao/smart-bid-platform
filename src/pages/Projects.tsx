import { useState } from "react";
import { LayoutGrid, List, Plus, Search } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Projects() {
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");

  const projects = [
    {
      name: "项目 Alpha",
      description: "基础设施投标",
      status: "起草中",
      deadline: "2023年10月25日",
      budget: "500万",
      statusColor: "secondary",
    },
    {
      name: "项目 Beta",
      description: "软件RFP",
      status: "审核中",
      deadline: "2023年11月2日",
      budget: "300万",
      statusColor: "default",
    },
    {
      name: "项目 Gamma",
      description: "咨询服务",
      status: "已提交",
      deadline: "已完成",
      budget: "200万",
      statusColor: "outline",
    },
    {
      name: "项目 Delta",
      description: "城市维护",
      status: "起草中",
      deadline: "2023年11月15日",
      budget: "800万",
      statusColor: "secondary",
    },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">项目管理</h1>
            <p className="text-muted-foreground mt-1">管理和跟踪所有投标项目</p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            新建项目
          </Button>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="搜索项目..." className="pl-9" />
          </div>
          <div className="flex gap-2">
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="icon"
              onClick={() => setViewMode("list")}
            >
              <List className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="icon"
              onClick={() => setViewMode("grid")}
            >
              <LayoutGrid className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {viewMode === "list" ? (
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="grid grid-cols-5 gap-4 text-sm font-medium text-muted-foreground pb-2 border-b">
                  <div>项目名称</div>
                  <div>状态</div>
                  <div>截止日期</div>
                  <div>预算</div>
                  <div>操作</div>
                </div>
                {projects.map((project) => (
                  <div key={project.name} className="grid grid-cols-5 gap-4 items-center">
                    <div>
                      <p className="font-medium">{project.name}</p>
                      <p className="text-sm text-muted-foreground">{project.description}</p>
                    </div>
                    <div>
                      <Badge variant={project.statusColor as any}>{project.status}</Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">{project.deadline}</div>
                    <div className="text-sm text-muted-foreground">{project.budget}</div>
                    <div>
                      <Button variant="link" className="text-primary p-0 h-auto">
                        查看详情
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.name} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg">{project.name}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </div>
                    <Badge variant={project.statusColor as any}>{project.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">截止日期</span>
                      <span className="font-medium">{project.deadline}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">预算</span>
                      <span className="font-medium">{project.budget}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    查看详情
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}
