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
            <p className="text-xs text-muted-foreground">Across 27 companies</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mt-4">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Placement Analytics</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <div className="h-[300px] flex items-center justify-center border-dashed border-2 border-gray-200 rounded-md">
              <div className="flex flex-col items-center text-center p-4">
                <BarChart className="h-10 w-10 text-primary mb-2" />
                <p className="text-sm text-muted-foreground mb-2">Placement statistics visualization would appear here</p>
                <p className="text-xs text-muted-foreground">Monthly placements by department</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 rounded p-2">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Tech Career Fair</p>
                  <p className="text-xs text-muted-foreground">March 15, 2025 • 10:00 AM</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 rounded p-2">
                  <Building className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Google On-Campus Drive</p>
                  <p className="text-xs text-muted-foreground">March 22, 2025 • 9:00 AM</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 rounded p-2">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Resume Workshop</p>
                  <p className="text-xs text-muted-foreground">March 10, 2025 • 2:00 PM</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  return (
    <div>
      {userRole === 'placement_officer' ? (
        <PlacementOfficerDashboard />
      ) : (
        <div>
          <Tabs defaultValue="resume" className="w-full">
            <div className="flex items-center justify-center border-b">
              <TabsList className="bg-transparent h-12">
              <TabsTrigger
                  value="resume"
                  className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-6 py-3 rounded-none"
                >
                  Resume Dashboard
                </TabsTrigger>
                <TabsTrigger
                  value="applications"
                  className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-6 py-3 rounded-none"
                >
                  Applications Dashboard
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="resume" className="pt-0">
              <ResumeDashboardComponent />
            </TabsContent>
            <TabsContent value="applications" className="pt-6">
              <ApplicationsDashboardComponent />
            </TabsContent>
            
          </Tabs>
        </div>
      )}
    </div>
  );
}
