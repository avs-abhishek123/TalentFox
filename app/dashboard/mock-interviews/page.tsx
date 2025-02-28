'use client';

import { useSession } from 'next-auth/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Users, Building, FileText, CheckCircle, BarChart } from 'lucide-react';
import ApplicationsDashboardComponent from '@/components/ApplicationsDashboardComponent';
import ResumeDashboardComponent from '@/components/ResumeDashboardComponent';

export default function Dashboard() {
  const { data: session } = useSession();
  const userRole = session?.user?.role || 'student';

  // Content for placement officer dashboard
  const PlacementOfficerDashboard = () => (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold tracking-tight">Placement Officer Dashboard</h1>
        <Button>Generate Report</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,284</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Placed Students</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">865</div>
            <p className="text-xs text-muted-foreground">67.4% placement rate</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Partner Companies</CardTitle>
            <Building className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">48</div>
            <p className="text-xs text-muted-foreground">+4 new this semester</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Open Positions</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">129</div>
            </CardContent>
        </Card>
    </div>
</div>
);
    
    return (
        <div className="space-y-6">
        <Tabs>
            <TabsList>
            <TabsTrigger value="applications">Coming Soon</TabsTrigger>
            </TabsList>
            <TabsContent value="applications">
            <TabsContent value="applications">
                <ApplicationsDashboardComponent />
            </TabsContent>
            <TabsContent value="resumes">
                <ResumeDashboardComponent />
            </TabsContent>
            {userRole === 'placement_officer' && (
                <TabsContent value="dashboard">
                    <PlacementOfficerDashboard />
                </TabsContent>
            )}
            </TabsContent>
        </Tabs>
        </div>
    );
}