import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  CheckCircle2, 
  Plus, 
  TriangleAlert,
  XCircle,
  AlertCircle,
  CheckCircle,
  PenSquare
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function AnalysisDetail() {
  const [activeSection, setActiveSection] = useState("overview");

  const matchingScore = 85;

  const matchingDetails = [
    { label: "公司资质", status: "matched", icon: CheckCircle },
    { label: "项目业绩", status: "partial", icon: AlertCircle },
    { label: "技术能力", status: "matched", icon: CheckCircle },
    { label: "核心产品认证", status: "unmatched", icon: XCircle },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Layout>
      <div className="flex gap-6">
        {/* Left Sidebar - Project Overview */}
        <div className="w-64 space-y-4 shrink-0">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">项目概览</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div>
                <div className="text-muted-foreground mb-1">项目编号</div>
                <div className="font-medium">GZ2024-001</div>
              </div>
              <div>
                <div className="text-muted-foreground mb-1">预算金额</div>
                <div className="font-medium">¥5,000,000</div>
              </div>
              <div>
                <div className="text-muted-foreground mb-1">发布日期</div>
                <div className="font-medium">2024-08-01</div>
              </div>
              <div>
                <div className="text-muted-foreground mb-1">截止日期</div>
                <div className="font-medium text-warning">2024-08-21 (剩12天)</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">快速导航</CardTitle>
              <p className="text-xs text-muted-foreground">跳转至详情章节</p>
            </CardHeader>
            <CardContent className="space-y-1">
              <Button
                variant={activeSection === "overview" ? "secondary" : "ghost"}
                className="w-full justify-start gap-2"
                onClick={() => scrollToSection("overview")}
              >
                <FileText className="h-4 w-4" />
                项目概览
              </Button>
              <Button
                variant={activeSection === "requirements" ? "secondary" : "ghost"}
                className="w-full justify-start gap-2"
                onClick={() => scrollToSection("requirements")}
              >
                <CheckCircle2 className="h-4 w-4" />
                资格要求
              </Button>
              <Button
                variant={activeSection === "technical" ? "secondary" : "ghost"}
                className="w-full justify-start gap-2"
                onClick={() => scrollToSection("technical")}
              >
                <FileText className="h-4 w-4" />
                技术参数
              </Button>
              <Button
                variant={activeSection === "scoring" ? "secondary" : "ghost"}
                className="w-full justify-start gap-2"
                onClick={() => scrollToSection("scoring")}
              >
                <FileText className="h-4 w-4" />
                评分标准
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-3">智慧城市管理平台项目 - 招标公告分析</h1>
            <div className="flex gap-3">
              <Button variant="outline" className="gap-2">
                <FileText className="h-4 w-4" />
                导出报告
              </Button>
              <Button variant="outline" className="gap-2">
                <CheckCircle2 className="h-4 w-4" />
                标记为已处理
              </Button>
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                加入我的投标
              </Button>
            </div>
          </div>

          <Tabs defaultValue="structured" className="w-full">
            <TabsList>
              <TabsTrigger value="structured">结构化解析</TabsTrigger>
              <TabsTrigger value="analysis">核心条款分析</TabsTrigger>
              <TabsTrigger value="original">公告原文</TabsTrigger>
            </TabsList>

            <TabsContent value="structured" className="space-y-6 mt-6">
              {/* 项目概览 */}
              <div id="overview">
                <h2 className="text-xl font-semibold mb-3">项目概览</h2>
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground leading-relaxed">
                      本项目旨在建设一套全面的智慧城市管理平台，集成数据分析、可视化监控和应急响应功能，以提升城市运营效率和公共服务水平。
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* 投标人资格要求 */}
              <div id="requirements">
                <h2 className="text-xl font-semibold mb-3">投标人资格要求</h2>
                <Card>
                  <CardContent className="pt-6 space-y-4">
                    <ul className="space-y-3">
                      <li className="flex gap-2">
                        <span className="text-muted-foreground">•</span>
                        <span>投标人必须是在中华人民共和国境内注册的独立法人，注册资本不低于1000万元人民币。</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-muted-foreground">•</span>
                        <span>具备有效的ISO9001质量管理体系认证和ISO27001信息安全管理体系认证。</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-muted-foreground">•</span>
                        <span>近三年内（2021年至今）至少完成过2个合同金额不低于300万元的类似智慧城市或软件平台开发项目业绩。</span>
                      </li>
                    </ul>
                    <div className="mt-4 p-3 bg-warning/10 border border-warning/20 rounded-lg flex gap-2">
                      <TriangleAlert className="h-5 w-5 text-warning shrink-0 mt-0.5" />
                      <p className="text-sm">
                        <strong>关键条款：</strong>必须提供合同复印件及用户验收报告作为证明。
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* 技术规格与参数 */}
              <div id="technical">
                <h2 className="text-xl font-semibold mb-3">技术规格与参数</h2>
                <Card>
                  <CardContent className="pt-6">
                    <ul className="space-y-3">
                      <li className="flex gap-2">
                        <span className="text-muted-foreground">•</span>
                        <span>平台需采用微服务架构，支持容器化部署（Docker, Kubernetes）。</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-muted-foreground">•</span>
                        <span>数据可视化模块要求支持至少10万个并发数据点实时渲染，地图引擎需支持三维GIS。</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-muted-foreground">•</span>
                        <span>系统平均响应时间不得超过500毫秒，关键业务处理成功率需达到99.99%。</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* 评分细则 */}
              <div id="scoring">
                <h2 className="text-xl font-semibold mb-3">评分细则（总分100）</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">技术分 (50分)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        方案完整性、技术先进性、实施计划。
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">商务分 (20分)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        公司资质、项目业绩、售后服务。
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="md:col-span-2">
                    <CardHeader>
                      <CardTitle className="text-base">价格分 (30分)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        采用低价优先法计算。
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="analysis" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground">核心条款分析功能开发中...</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="original" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground">公告原文展示功能开发中...</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Right Sidebar - Matching Analysis */}
        <div className="w-80 space-y-4 shrink-0">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">投标匹配度分析</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Circular Progress */}
              <div className="flex flex-col items-center justify-center py-4">
                <div className="relative w-48 h-48">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="96"
                      cy="96"
                      r="88"
                      stroke="hsl(var(--muted))"
                      strokeWidth="16"
                      fill="none"
                    />
                    <circle
                      cx="96"
                      cy="96"
                      r="88"
                      stroke="hsl(var(--primary))"
                      strokeWidth="16"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 88}`}
                      strokeDashoffset={`${2 * Math.PI * 88 * (1 - matchingScore / 100)}`}
                      strokeLinecap="round"
                      className="transition-all duration-1000"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-5xl font-bold">{matchingScore}%</div>
                    <div className="text-sm text-muted-foreground mt-1">综合匹配</div>
                  </div>
                </div>
              </div>

              {/* Detailed Matching List */}
              <div>
                <h3 className="font-semibold mb-3">详细匹配清单</h3>
                <div className="space-y-3">
                  {matchingDetails.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm">{item.label}</span>
                        <div className="flex items-center gap-2">
                          {item.status === "matched" && (
                            <>
                              <span className="text-sm text-success">匹配</span>
                              <Icon className="h-5 w-5 text-success" />
                            </>
                          )}
                          {item.status === "partial" && (
                            <>
                              <span className="text-sm text-warning">部分匹配</span>
                              <Icon className="h-5 w-5 text-warning" />
                            </>
                          )}
                          {item.status === "unmatched" && (
                            <>
                              <span className="text-sm text-destructive">不匹配</span>
                              <Icon className="h-5 w-5 text-destructive" />
                            </>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <Button className="w-full gap-2">
                <PenSquare className="h-4 w-4" />
                生成待办事项
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
