import { Plus, TrendingUp, FileText, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Layout } from "@/components/Layout";

export default function Dashboard() {
  const stats = [
    { title: "项目总数", value: "28", change: "本周 +2", trend: "up", icon: FileText },
    { title: "进行中投标", value: "12", change: "+5.2%", trend: "up", icon: TrendingUp },
    { title: "即将截止", value: "3", change: "未来7天内", trend: "warning", icon: AlertCircle },
    { title: "中标率", value: "33%", change: "-1.5%", trend: "down", icon: CheckCircle2 },
  ];

  const projects = [
    { name: "项目 Alpha - 基础设施投标", status: "起草中", deadline: "2023年10月25日", statusColor: "info" },
    { name: "项目 Beta - 软件RFP", status: "审核中", deadline: "2023年11月2日", statusColor: "warning" },
    { name: "项目 Gamma - 咨询服务", status: "已提交", deadline: "-", statusColor: "success" },
    { name: "项目 Delta - 城市维护", status: "起草中", deadline: "2023年11月15日", statusColor: "info" },
  ];

  const workflows = [
    { title: "提交项目Alpha的投标", deadline: "截止日期: 2023年10月25日", icon: FileText, iconColor: "text-destructive" },
    { title: "审查项目Beta的反馈", deadline: "已收到法务团队的反馈。（项目 Beta - 软件RFP）", icon: CheckCircle2, iconColor: "text-warning" },
    { title: "公司保险证书即将到期", deadline: "12天后到期", icon: AlertCircle, iconColor: "text-info" },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">欢迎回来, User Name!</h1>
            <p className="text-muted-foreground mt-1">这是您的投标活动摘要。</p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            开始新投标
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.title}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <p className={`text-xs mt-1 ${
                    stat.trend === "up" ? "text-success" : 
                    stat.trend === "down" ? "text-destructive" : 
                    "text-warning"
                  }`}>
                    {stat.change}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>我的项目概览</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-4 gap-4 text-sm font-medium text-muted-foreground pb-2 border-b">
                  <div>项目名称</div>
                  <div>当前阶段</div>
                  <div>下一截止日期</div>
                  <div>操作</div>
                </div>
                {projects.map((project) => (
                  <div key={project.name} className="grid grid-cols-4 gap-4 items-center">
                    <div className="font-medium text-sm">{project.name}</div>
                    <div>
                      <Badge variant={
                        project.statusColor === "info" ? "secondary" :
                        project.statusColor === "warning" ? "default" :
                        "outline"
                      }>
                        {project.status}
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">{project.deadline}</div>
                    <div>
                      <Button variant="link" className="text-primary p-0 h-auto">查看</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>我的工作流程</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {workflows.map((workflow, index) => {
                  const Icon = workflow.icon;
                  return (
                    <div key={index} className="flex gap-3">
                      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted ${workflow.iconColor}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{workflow.title}</p>
                        <p className="text-xs text-muted-foreground mt-1">{workflow.deadline}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
