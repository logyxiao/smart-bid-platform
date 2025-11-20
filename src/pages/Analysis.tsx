import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Upload, FileText, Calendar, DollarSign } from "lucide-react";

export default function Analysis() {
  const navigate = useNavigate();

  const projects = [
    {
      id: "GZ2024-001",
      name: "智慧城市管理平台项目",
      type: "招标公告分析",
      budget: "¥5,000,000",
      deadline: "2024-08-21",
      daysLeft: 12,
      matchScore: 85,
      status: "待处理",
      statusColor: "secondary" as const,
    },
    {
      id: "SZ2024-015",
      name: "数字政务一体化平台",
      type: "招标公告分析",
      budget: "¥3,200,000",
      deadline: "2024-09-05",
      daysLeft: 27,
      matchScore: 72,
      status: "已分析",
      statusColor: "default" as const,
    },
    {
      id: "BJ2024-088",
      name: "智能交通信号控制系统",
      type: "招标公告分析",
      budget: "¥8,000,000",
      deadline: "2024-08-30",
      daysLeft: 21,
      matchScore: 91,
      status: "待处理",
      statusColor: "secondary" as const,
    },
    {
      id: "SH2024-042",
      name: "区域医疗信息化平台建设",
      type: "招标公告分析",
      budget: "¥6,500,000",
      deadline: "2024-09-15",
      daysLeft: 37,
      matchScore: 68,
      status: "已分析",
      statusColor: "default" as const,
    },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">招标解析</h1>
            <p className="text-muted-foreground mt-1">智能分析招标文件和需求</p>
          </div>
          <Button className="gap-2">
            <Upload className="h-4 w-4" />
            上传招标文件
          </Button>
        </div>

        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="搜索招标项目..." className="pl-9" />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className="hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => navigate(`/analysis/${project.id}`)}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg">{project.name}</CardTitle>
                    <CardDescription className="mt-1">
                      <span className="inline-flex items-center gap-1">
                        <FileText className="h-3 w-3" />
                        {project.type}
                      </span>
                    </CardDescription>
                  </div>
                  <Badge variant={project.statusColor}>{project.status}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-muted-foreground mb-1">项目编号</div>
                    <div className="font-medium">{project.id}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground mb-1">预算金额</div>
                    <div className="font-medium flex items-center gap-1">
                      <DollarSign className="h-3 w-3" />
                      {project.budget}
                    </div>
                  </div>
                  <div>
                    <div className="text-muted-foreground mb-1">截止日期</div>
                    <div className="font-medium flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {project.deadline}
                    </div>
                  </div>
                  <div>
                    <div className="text-muted-foreground mb-1">剩余天数</div>
                    <div className={`font-medium ${project.daysLeft <= 15 ? 'text-warning' : ''}`}>
                      {project.daysLeft}天
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">匹配度</span>
                    <span className="text-sm font-semibold">{project.matchScore}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-primary rounded-full h-2 transition-all"
                      style={{ width: `${project.matchScore}%` }}
                    />
                  </div>
                </div>

                <Button variant="outline" className="w-full" onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/analysis/${project.id}`);
                }}>
                  查看详情
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}
