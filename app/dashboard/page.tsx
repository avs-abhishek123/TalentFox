// app/dashboard/page.tsx
'use client';

import { useSession } from 'next-auth/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BarChart, 
  LineChart, 
  CheckCircle, 
  Users, 
  Building, 
  FileText, 
  Clock, 
  Award 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

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

      <div className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Recent Placements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 pt-2 border-b">
                <div className="flex items-center space-x-3">
                  <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-medium text-primary">AJ</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Aditya Joshi</p>
                    <p className="text-xs text-muted-foreground">Computer Science</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">Microsoft</p>
                  <p className="text-xs text-muted-foreground">Software Engineer</p>
                </div>
              </div>
              <div className="flex items-center justify-between pb-2 pt-2 border-b">
                <div className="flex items-center space-x-3">
                  <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-medium text-primary">PS</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Priya Singh</p>
                    <p className="text-xs text-muted-foreground">Electrical Engineering</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">Texas Instruments</p>
                  <p className="text-xs text-muted-foreground">Hardware Engineer</p>
                </div>
              </div>
              <div className="flex items-center justify-between pb-2 pt-2 border-b">
                <div className="flex items-center space-x-3">
                  <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-medium text-primary">RK</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Rahul Khatri</p>
                    <p className="text-xs text-muted-foreground">Data Science</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">Amazon</p>
                  <p className="text-xs text-muted-foreground">Data Scientist</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
  
  // Content for student dashboard
  const StudentDashboard = () => (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold tracking-tight">Student Dashboard</h1>
        <Button>View All Jobs</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Profile Completion</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center mb-2">
              <span className="text-2xl font-bold">75%</span>
              <span className="text-xs text-muted-foreground">5 out of 8 sections</span>
            </div>
            <Progress value={75} className="h-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Applications Submitted</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">3 awaiting response</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Interviews Scheduled</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">Next: March 15, 2025</p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-4">
        <Tabs defaultValue="recommended">
          <TabsList className="mb-4">
            <TabsTrigger value="recommended">Recommended Jobs</TabsTrigger>
            <TabsTrigger value="applications">My Applications</TabsTrigger>
            <TabsTrigger value="events">Upcoming Events</TabsTrigger>
          </TabsList>
          <TabsContent value="recommended">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                    <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center">
                      <Building className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-1 flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium">Frontend Developer</p>
                          <p className="text-sm text-muted-foreground">Microsoft</p>
                        </div>
                        <Button size="sm">Apply</Button>
                      </div>
                      <p className="text-sm">Bengaluru, India • ₹18-24 LPA</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">React</span>
                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">TypeScript</span>
                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">UI/UX</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">Posted 2 days ago • 98% match</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                    <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center">
                      <Building className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-1 flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium">Machine Learning Engineer</p>
                          <p className="text-sm text-muted-foreground">Amazon</p>
                        </div>
                        <Button size="sm">Apply</Button>
                      </div>
                      <p className="text-sm">Hyderabad, India • ₹22-30 LPA</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Python</span>
                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">TensorFlow</span>
                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">NLP</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">Posted 5 days ago • 92% match</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                    <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center">
                      <Building className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-1 flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium">Full Stack Developer</p>
                          <p className="text-sm text-muted-foreground">Flipkart</p>
                        </div>
                        <Button size="sm">Apply</Button>
                      </div>
                      <p className="text-sm">Bengaluru, India • ₹16-22 LPA</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">React</span>
                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Node.js</span>
                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">MongoDB</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">Posted 1 week ago • 85% match</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="applications">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-4 border rounded-lg">
                    <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center">
                      <Building className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-1 flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium">Software Engineer</p>
                          <p className="text-sm text-muted-foreground">Google</p>
                        </div>
                        <div className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                          Under Review
                        </div>
                      </div>
                      <p className="text-sm">Bengaluru, India • ₹20-28 LPA</p>
                      <p className="text-xs text-muted-foreground mt-2">Applied on March 1, 2025</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 border rounded-lg">
                    <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center">
                      <Building className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-1 flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium">Product Manager</p>
                          <p className="text-sm text-muted-foreground">Swiggy</p>
                        </div>
                        <div className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                          Interview Scheduled
                        </div>
                      </div>
                      <p className="text-sm">Bengaluru, India • ₹18-25 LPA</p>
                      <p className="text-xs text-muted-foreground mt-2">Applied on February 20, 2025</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 border rounded-lg">
                    <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center">
                      <Building className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-1 flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium">Data Engineer</p>
                          <p className="text-sm text-muted-foreground">Walmart</p>
                        </div>
                        <div className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">
                          Not Selected
                        </div>
                      </div>
                      <p className="text-sm">Bengaluru, India • ₹15-22 LPA</p>
                      <p className="text-xs text-muted-foreground mt-2">Applied on February 15, 2025</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="events">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-4 border rounded-lg">
                    <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-1 flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium">Mock Interview Session</p>
                          <p className="text-sm text-muted-foreground">With industry experts from Microsoft</p>
                        </div>
                        <Button size="sm">Register</Button>
                      </div>
                      <p className="text-sm">March 12, 2025 • 2:00 - 5:00 PM</p>
                      <p className="text-sm">Main Auditorium</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 border rounded-lg">
                    <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center">
                      <Building className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-1 flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium">Google On-Campus Drive</p>
                          <p className="text-sm text-muted-foreground">For Software Engineering roles</p>
                        </div>
                        <Button size="sm">Register</Button>
                      </div>
                      <p className="text-sm">March 22, 2025 • 9:00 AM</p>
                      <p className="text-sm">CS Department Block</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-4 border rounded-lg">
                    <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-1 flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium">Resume Workshop</p>
                          <p className="text-sm text-muted-foreground">Learn how to build an ATS-friendly resume</p>
                        </div>
                        <Button size="sm">Register</Button>
                      </div>
                      <p className="text-sm">March 10, 2025 • 2:00 PM</p>
                      <p className="text-sm">Online Webinar</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      
      <div className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Skills Gap Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">React.js</span>
                  <span className="text-sm text-muted-foreground">85%</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Node.js</span>
                  <span className="text-sm text-muted-foreground">65%</span>
                </div>
                <Progress value={65} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">TypeScript</span>
                  <span className="text-sm text-muted-foreground">70%</span>
                </div>
                <Progress value={70} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Python</span>
                  <span className="text-sm text-muted-foreground">90%</span>
                </div>
                <Progress value={90} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Data Structures</span>
                  <span className="text-sm text-muted-foreground">80%</span>
                </div>
                <Progress value={80} className="h-2" />
              </div>
            </div>
            <div className="mt-6">
              <Button variant="outline" className="w-full">View Full Skill Assessment</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  return (
    <div>
      {userRole === 'placement_officer' ? <PlacementOfficerDashboard /> : <StudentDashboard />}
    </div>
  );
}