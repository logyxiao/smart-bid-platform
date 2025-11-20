import { Building, DollarSign, Users, Wrench } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Knowledge() {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">知识管理</h1>
          <p className="text-muted-foreground mt-1">管理企业信息和档案</p>
        </div>

        <Tabs defaultValue="basic" className="space-y-4">
          <TabsList>
            <TabsTrigger value="basic" className="gap-2">
              <Building className="h-4 w-4" />
              基本信息
            </TabsTrigger>
            <TabsTrigger value="finance" className="gap-2">
              <DollarSign className="h-4 w-4" />
              财务情况
            </TabsTrigger>
            <TabsTrigger value="personnel" className="gap-2">
              <Users className="h-4 w-4" />
              人员档案
            </TabsTrigger>
            <TabsTrigger value="equipment" className="gap-2">
              <Wrench className="h-4 w-4" />
              设备档案
            </TabsTrigger>
          </TabsList>

          <TabsContent value="basic" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>企业基本信息</CardTitle>
                <CardDescription>公司概况和注册信息</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium">企业名称</label>
                    <p className="text-muted-foreground mt-1">示例科技有限公司</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium">统一社会信用代码</label>
                    <p className="text-muted-foreground mt-1">91110000XXXXXXXXXX</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium">成立日期</label>
                    <p className="text-muted-foreground mt-1">2015年3月15日</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium">注册资本</label>
                    <p className="text-muted-foreground mt-1">1000万元</p>
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-sm font-medium">注册地址</label>
                    <p className="text-muted-foreground mt-1">北京市朝阳区XX街道XX号</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="finance" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>财务概况</CardTitle>
                <CardDescription>企业财务状况和资质</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium">年营业额</label>
                    <p className="text-muted-foreground mt-1">5000万元</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium">资产总额</label>
                    <p className="text-muted-foreground mt-1">8000万元</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium">纳税信用等级</label>
                    <p className="text-muted-foreground mt-1">A级</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium">银行信用等级</label>
                    <p className="text-muted-foreground mt-1">AAA</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="personnel" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>人员档案</CardTitle>
                <CardDescription>员工信息和资质证书</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-4 gap-4 text-sm font-medium text-muted-foreground pb-2 border-b">
                    <div>姓名</div>
                    <div>职位</div>
                    <div>资质证书</div>
                    <div>入职日期</div>
                  </div>
                  {[
                    { name: "张三", position: "项目经理", cert: "一级建造师", date: "2018-05-10" },
                    { name: "李四", position: "技术负责人", cert: "高级工程师", date: "2019-03-15" },
                    { name: "王五", position: "财务经理", cert: "注册会计师", date: "2020-01-20" },
                  ].map((person, index) => (
                    <div key={index} className="grid grid-cols-4 gap-4 items-center text-sm">
                      <div className="font-medium">{person.name}</div>
                      <div className="text-muted-foreground">{person.position}</div>
                      <div className="text-muted-foreground">{person.cert}</div>
                      <div className="text-muted-foreground">{person.date}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="equipment" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>设备档案</CardTitle>
                <CardDescription>企业设备清单和状态</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-4 gap-4 text-sm font-medium text-muted-foreground pb-2 border-b">
                    <div>设备名称</div>
                    <div>型号</div>
                    <div>状态</div>
                    <div>购置日期</div>
                  </div>
                  {[
                    { name: "挖掘机", model: "CAT320D", status: "正常", date: "2020-06-15" },
                    { name: "塔吊", model: "QTZ63", status: "正常", date: "2021-03-20" },
                    { name: "混凝土搅拌站", model: "HZS120", status: "维护中", date: "2019-09-10" },
                  ].map((equipment, index) => (
                    <div key={index} className="grid grid-cols-4 gap-4 items-center text-sm">
                      <div className="font-medium">{equipment.name}</div>
                      <div className="text-muted-foreground">{equipment.model}</div>
                      <div className="text-muted-foreground">{equipment.status}</div>
                      <div className="text-muted-foreground">{equipment.date}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
