import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Settings() {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">设置</h1>
          <p className="text-muted-foreground mt-1">管理系统设置和偏好</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>系统设置</CardTitle>
            <CardDescription>配置您的偏好设置</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">设置功能正在开发中...</p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
