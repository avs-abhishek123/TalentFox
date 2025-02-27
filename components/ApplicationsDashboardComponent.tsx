'use client';

import { 
  Building, 
  FileText, 
  Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ApplicationsDashboardComponent = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold tracking-tight">Applications Dashboard</h1>
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
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ApplicationsDashboardComponent;