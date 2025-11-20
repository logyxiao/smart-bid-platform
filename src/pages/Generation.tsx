import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Generation() {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">标书生成</h1>
          <p className="text-muted-foreground mt-1">智能生成标书文档</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>标书生成功能</CardTitle>
            <CardDescription>此功能正在开发中</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">即将推出智能标书生成功能...</p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
