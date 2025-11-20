import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Analysis() {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">招标解析</h1>
          <p className="text-muted-foreground mt-1">智能分析招标文件和需求</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>招标解析功能</CardTitle>
            <CardDescription>此功能正在开发中</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">即将推出智能招标文件解析功能...</p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
