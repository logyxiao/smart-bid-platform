import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Building2,
  Users,
  Factory,
  DollarSign,
  Award,
  FileText,
  Briefcase,
  HeadphonesIcon,
  Trophy,
  Lightbulb,
  Upload,
  Download,
  Eye,
  Calendar,
  AlertCircle,
  CheckCircle2,
  Search,
  Plus,
} from "lucide-react";
import { cn } from "@/lib/utils";

type KnowledgeCategory = {
  id: string;
  name: string;
  icon: any;
  description: string;
  itemCount: number;
};

export default function Knowledge() {
  const [activeCategory, setActiveCategory] = useState("basic");
  const [searchQuery, setSearchQuery] = useState("");

  const categories: KnowledgeCategory[] = [
    {
      id: "basic",
      name: "基本情况",
      icon: Building2,
      description: "企业简介、营业执照、法人信息等",
      itemCount: 6,
    },
    {
      id: "organization",
      name: "组织架构与人员",
      icon: Users,
      description: "组织架构、人员档案、资质证书等",
      itemCount: 8,
    },
    {
      id: "production",
      name: "生产与设备资源",
      icon: Factory,
      description: "生产场地、设备清单、质检报告等",
      itemCount: 7,
    },
    {
      id: "finance",
      name: "财务与信用",
      icon: DollarSign,
      description: "财务报告、信用查询截图等",
      itemCount: 4,
    },
    {
      id: "certification",
      name: "资质与体系认证",
      icon: Award,
      description: "各类体系认证证书、资质等级等",
      itemCount: 12,
    },
    {
      id: "commitment",
      name: "承诺与声明",
      icon: FileText,
      description: "承诺函、声明、股权结构说明等",
      itemCount: 3,
    },
    {
      id: "cases",
      name: "业绩案例",
      icon: Briefcase,
      description: "项目清单、合同扫描件等",
      itemCount: 15,
    },
    {
      id: "service",
      name: "售后服务",
      icon: HeadphonesIcon,
      description: "售后承诺、服务网点、质量保证等",
      itemCount: 6,
    },
    {
      id: "honor",
      name: "荣誉与奖项",
      icon: Trophy,
      description: "荣誉证书清单及照片",
      itemCount: 9,
    },
    {
      id: "ip",
      name: "知识产权",
      icon: Lightbulb,
      description: "专利、软著、标准、论文等",
      itemCount: 18,
    },
  ];

  const documentData: Record<string, any[]> = {
    basic: [
      { name: "企业简介", type: "PDF", size: "2.3MB", status: "已上传", updatedAt: "2024-08-10", expiryDate: null },
      { name: "营业执照", type: "PDF", size: "1.8MB", status: "已上传", updatedAt: "2024-07-15", expiryDate: "2034-07-15" },
      { name: "法人授权书", type: "PDF", size: "0.8MB", status: "已上传", updatedAt: "2024-08-01", expiryDate: null },
      { name: "法人资格证明证书", type: "PDF", size: "1.2MB", status: "已上传", updatedAt: "2024-07-20", expiryDate: null },
      { name: "主营产品说明", type: "DOCX", size: "3.5MB", status: "已上传", updatedAt: "2024-08-05", expiryDate: null },
      { name: "股权结构说明", type: "PDF", size: "1.5MB", status: "待上传", updatedAt: null, expiryDate: null },
    ],
    organization: [
      { name: "组织架构图", type: "PDF", size: "2.1MB", status: "已上传", updatedAt: "2024-08-12", expiryDate: null },
      { name: "中高级人员情况表", type: "XLSX", size: "0.5MB", status: "已上传", updatedAt: "2024-08-08", expiryDate: null },
      { name: "相关人员资格证书", type: "ZIP", size: "15.2MB", status: "已上传", updatedAt: "2024-07-25", expiryDate: null },
      { name: "主要生产人员一览表", type: "XLSX", size: "0.4MB", status: "已上传", updatedAt: "2024-08-10", expiryDate: null },
      { name: "主要质量管理人员一览表", type: "XLSX", size: "0.3MB", status: "已上传", updatedAt: "2024-08-10", expiryDate: null },
      { name: "主要技术人员一览表", type: "XLSX", size: "0.6MB", status: "已上传", updatedAt: "2024-08-10", expiryDate: null },
      { name: "主要检测人员一览表", type: "XLSX", size: "0.3MB", status: "已上传", updatedAt: "2024-08-10", expiryDate: null },
      { name: "人员技能矩阵", type: "XLSX", size: "1.2MB", status: "待上传", updatedAt: null, expiryDate: null },
    ],
    production: [
      { name: "生产场地平面图", type: "PDF", size: "8.5MB", status: "已上传", updatedAt: "2024-07-30", expiryDate: null },
      { name: "生产场地清单", type: "XLSX", size: "0.4MB", status: "已上传", updatedAt: "2024-07-30", expiryDate: null },
      { name: "主要生产设备清单", type: "XLSX", size: "1.2MB", status: "已上传", updatedAt: "2024-08-05", expiryDate: null },
      { name: "主要检测设备清单", type: "XLSX", size: "0.8MB", status: "已上传", updatedAt: "2024-08-05", expiryDate: null },
      { name: "主要原材料产地清单", type: "XLSX", size: "0.6MB", status: "已上传", updatedAt: "2024-08-01", expiryDate: null },
      { name: "质量抽检报告", type: "PDF", size: "12.3MB", status: "已上传", updatedAt: "2024-08-08", expiryDate: null },
      { name: "原料质量检测报告", type: "PDF", size: "18.5MB", status: "已上传", updatedAt: "2024-08-08", expiryDate: null },
    ],
    finance: [
      { name: "2023年财务审计报告", type: "PDF", size: "5.6MB", status: "已上传", updatedAt: "2024-03-15", expiryDate: null },
      { name: "2022年财务审计报告", type: "PDF", size: "5.2MB", status: "已上传", updatedAt: "2023-03-10", expiryDate: null },
      { name: "2021年财务审计报告", type: "PDF", size: "4.8MB", status: "已上传", updatedAt: "2022-03-08", expiryDate: null },
      { name: "信用中国网站查询截图", type: "PNG", size: "0.8MB", status: "已上传", updatedAt: "2024-08-12", expiryDate: null },
      { name: "企业信用信息公示截图", type: "PNG", size: "1.2MB", status: "已上传", updatedAt: "2024-08-12", expiryDate: null },
      { name: "政府采购网查询截图", type: "PNG", size: "0.6MB", status: "已上传", updatedAt: "2024-08-12", expiryDate: null },
    ],
    certification: [
      { name: "生产许可证", type: "PDF", size: "2.1MB", status: "已上传", updatedAt: "2023-05-20", expiryDate: "2026-05-20" },
      { name: "ISO9001质量管理体系认证", type: "PDF", size: "1.8MB", status: "已上传", updatedAt: "2023-06-15", expiryDate: "2026-06-15" },
      { name: "ISO14001环境管理体系认证", type: "PDF", size: "1.6MB", status: "已上传", updatedAt: "2023-06-15", expiryDate: "2026-06-15" },
      { name: "ISO45001职业健康安全认证", type: "PDF", size: "1.7MB", status: "已上传", updatedAt: "2023-06-15", expiryDate: "2026-06-15" },
      { name: "资信等级证书", type: "PDF", size: "1.2MB", status: "已上传", updatedAt: "2024-01-10", expiryDate: "2025-01-10" },
      { name: "信用等级证书", type: "PDF", size: "1.3MB", status: "已上传", updatedAt: "2024-01-10", expiryDate: "2025-01-10" },
      { name: "绿色供应链管理体系认证", type: "PDF", size: "1.9MB", status: "已上传", updatedAt: "2023-08-20", expiryDate: "2026-08-20" },
      { name: "测量管理体系认证", type: "PDF", size: "1.5MB", status: "已上传", updatedAt: "2023-09-10", expiryDate: "2026-09-10" },
      { name: "3C认证证书", type: "PDF", size: "2.2MB", status: "已上传", updatedAt: "2023-07-05", expiryDate: "2028-07-05" },
      { name: "社会责任管理体系认证", type: "PDF", size: "1.8MB", status: "已上传", updatedAt: "2023-10-15", expiryDate: "2026-10-15" },
      { name: "能源管理体系认证", type: "PDF", size: "1.6MB", status: "已上传", updatedAt: "2023-11-20", expiryDate: "2026-11-20" },
      { name: "其他行业资质证书", type: "ZIP", size: "8.5MB", status: "已上传", updatedAt: "2024-08-01", expiryDate: null },
    ],
    commitment: [
      { name: "投标承诺函模板", type: "DOCX", size: "0.3MB", status: "已上传", updatedAt: "2024-08-10", expiryDate: null },
      { name: "合规性声明", type: "PDF", size: "0.5MB", status: "已上传", updatedAt: "2024-08-10", expiryDate: null },
      { name: "股权结构说明", type: "PDF", size: "1.2MB", status: "已上传", updatedAt: "2024-07-25", expiryDate: null },
    ],
    cases: [
      { name: "智慧城市项目（杭州）", type: "PDF", size: "8.2MB", status: "已上传", updatedAt: "2024-02-15", expiryDate: null },
      { name: "智慧城市项目合同", type: "PDF", size: "3.5MB", status: "已上传", updatedAt: "2024-02-15", expiryDate: null },
      { name: "数字政务平台（宁波）", type: "PDF", size: "6.8MB", status: "已上传", updatedAt: "2024-03-20", expiryDate: null },
      { name: "数字政务平台合同", type: "PDF", size: "2.8MB", status: "已上传", updatedAt: "2024-03-20", expiryDate: null },
      { name: "智能交通系统（绍兴）", type: "PDF", size: "7.5MB", status: "已上传", updatedAt: "2024-04-10", expiryDate: null },
      { name: "智能交通系统合同", type: "PDF", size: "3.2MB", status: "已上传", updatedAt: "2024-04-10", expiryDate: null },
      { name: "近三年项目清单汇总", type: "XLSX", size: "1.5MB", status: "已上传", updatedAt: "2024-08-01", expiryDate: null },
    ],
    service: [
      { name: "售后服务承诺书", type: "PDF", size: "1.2MB", status: "已上传", updatedAt: "2024-08-05", expiryDate: null },
      { name: "质量承诺书", type: "PDF", size: "0.9MB", status: "已上传", updatedAt: "2024-08-05", expiryDate: null },
      { name: "售后服务机构说明", type: "DOCX", size: "2.3MB", status: "已上传", updatedAt: "2024-08-08", expiryDate: null },
      { name: "售后网点明细表", type: "XLSX", size: "0.6MB", status: "已上传", updatedAt: "2024-08-08", expiryDate: null },
      { name: "质量保证措施方案", type: "PDF", size: "4.5MB", status: "已上传", updatedAt: "2024-08-08", expiryDate: null },
      { name: "客户满意度调查报告", type: "PDF", size: "3.2MB", status: "已上传", updatedAt: "2024-07-30", expiryDate: null },
    ],
    honor: [
      { name: "2023年度优秀企业奖", type: "PDF", size: "2.1MB", status: "已上传", updatedAt: "2024-01-15", expiryDate: null },
      { name: "智慧城市建设优秀案例奖", type: "PDF", size: "1.8MB", status: "已上传", updatedAt: "2023-12-20", expiryDate: null },
      { name: "科技创新企业认证", type: "PDF", size: "1.5MB", status: "已上传", updatedAt: "2023-09-10", expiryDate: null },
      { name: "高新技术企业证书", type: "PDF", size: "1.9MB", status: "已上传", updatedAt: "2023-08-05", expiryDate: "2026-08-05" },
      { name: "行业贡献奖", type: "PDF", size: "1.6MB", status: "已上传", updatedAt: "2024-03-15", expiryDate: null },
      { name: "绿色企业认证", type: "PDF", size: "1.4MB", status: "已上传", updatedAt: "2024-05-20", expiryDate: null },
      { name: "荣誉证书清单", type: "XLSX", size: "0.8MB", status: "已上传", updatedAt: "2024-08-10", expiryDate: null },
    ],
    ip: [
      { name: "智慧城市管理系统专利", type: "PDF", size: "3.2MB", status: "已上传", updatedAt: "2023-06-15", expiryDate: "2043-06-15" },
      { name: "数据分析算法专利", type: "PDF", size: "2.8MB", status: "已上传", updatedAt: "2023-09-20", expiryDate: "2043-09-20" },
      { name: "智能调度系统软著", type: "PDF", size: "1.5MB", status: "已上传", updatedAt: "2024-01-10", expiryDate: null },
      { name: "数据可视化平台软著", type: "PDF", size: "1.6MB", status: "已上传", updatedAt: "2024-02-15", expiryDate: null },
      { name: "AI辅助决策系统软著", type: "PDF", size: "1.4MB", status: "已上传", updatedAt: "2024-03-20", expiryDate: null },
      { name: "专利清单汇总", type: "XLSX", size: "1.2MB", status: "已上传", updatedAt: "2024-08-10", expiryDate: null },
      { name: "软著清单汇总", type: "XLSX", size: "0.9MB", status: "已上传", updatedAt: "2024-08-10", expiryDate: null },
      { name: "企业标准清单", type: "XLSX", size: "0.7MB", status: "已上传", updatedAt: "2024-08-05", expiryDate: null },
      { name: "学术论文集", type: "PDF", size: "15.6MB", status: "已上传", updatedAt: "2024-07-20", expiryDate: null },
      { name: "研究报告集", type: "PDF", size: "12.3MB", status: "已上传", updatedAt: "2024-07-25", expiryDate: null },
    ],
  };

  const currentCategory = categories.find((c) => c.id === activeCategory);
  const documents = documentData[activeCategory] || [];

  const isExpiringSoon = (expiryDate: string | null) => {
    if (!expiryDate) return false;
    const expiry = new Date(expiryDate);
    const today = new Date();
    const daysUntilExpiry = Math.floor((expiry.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    return daysUntilExpiry <= 90 && daysUntilExpiry > 0;
  };

  const isExpired = (expiryDate: string | null) => {
    if (!expiryDate) return false;
    const expiry = new Date(expiryDate);
    const today = new Date();
    return expiry < today;
  };

  return (
    <Layout>
      <div className="flex gap-6">
        {/* Left Navigation */}
        <div className="w-72 shrink-0">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">知识库分类</CardTitle>
              <CardDescription>企业信息全要素管理</CardDescription>
            </CardHeader>
            <CardContent className="space-y-1">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <Button
                    key={category.id}
                    variant={activeCategory === category.id ? "secondary" : "ghost"}
                    className="w-full justify-start gap-3 h-auto py-3"
                    onClick={() => setActiveCategory(category.id)}
                  >
                    <Icon className="h-5 w-5 shrink-0" />
                    <div className="flex-1 text-left">
                      <div className="font-medium">{category.name}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">
                        {category.itemCount} 项
                      </div>
                    </div>
                  </Button>
                );
              })}
            </CardContent>
          </Card>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{currentCategory?.name}</h1>
            <p className="text-muted-foreground mt-1">{currentCategory?.description}</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="搜索文档..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              上传文档
            </Button>
          </div>

          {/* Document Cards Grid */}
          <div className="grid gap-4 md:grid-cols-2">
            {documents.map((doc, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-base">{doc.name}</CardTitle>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge variant="outline" className="text-xs">
                          {doc.type}
                        </Badge>
                        {doc.size && (
                          <span className="text-xs text-muted-foreground">{doc.size}</span>
                        )}
                      </div>
                    </div>
                    {doc.status === "已上传" ? (
                      <Badge variant="default" className="gap-1">
                        <CheckCircle2 className="h-3 w-3" />
                        已上传
                      </Badge>
                    ) : (
                      <Badge variant="secondary" className="gap-1">
                        <AlertCircle className="h-3 w-3" />
                        待上传
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {doc.updatedAt && (
                    <div className="text-sm text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      更新时间: {doc.updatedAt}
                    </div>
                  )}
                  {doc.expiryDate && (
                    <div
                      className={cn(
                        "text-sm flex items-center gap-1",
                        isExpired(doc.expiryDate)
                          ? "text-destructive"
                          : isExpiringSoon(doc.expiryDate)
                          ? "text-warning"
                          : "text-muted-foreground"
                      )}
                    >
                      <AlertCircle className="h-3 w-3" />
                      有效期至: {doc.expiryDate}
                      {isExpired(doc.expiryDate) && " (已过期)"}
                      {isExpiringSoon(doc.expiryDate) && " (即将到期)"}
                    </div>
                  )}
                  {doc.status === "已上传" && (
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1 gap-1">
                        <Eye className="h-3 w-3" />
                        查看
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1 gap-1">
                        <Download className="h-3 w-3" />
                        下载
                      </Button>
                    </div>
                  )}
                  {doc.status === "待上传" && (
                    <Button variant="outline" size="sm" className="w-full gap-1">
                      <Upload className="h-3 w-3" />
                      上传文件
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
