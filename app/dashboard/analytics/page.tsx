'use client';

import { useState } from 'react';
import { 
  BarChart, 
  PieChart,
  LineChart,
  Download,
  Calendar,
  Filter,
  ChevronDown,
  Users,
  Building,
  FileText,
  Award,
  TrendingUp,
  Briefcase,
  MapPin,
  Search
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle,
  CardFooter 
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function AnalyticsReportsPage() {
  const [timePeriod, setTimePeriod] = useState('this-year');
  const [department, setDepartment] = useState('all');
  const [activeTab, setActiveTab] = useState('placement');
  
  return (
    <div className="p-1 sm:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Analytics & Reports</h1>
          <p className="text-muted-foreground">View placement statistics and generate reports</p>
        </div>
        <div className="flex gap-2 mt-4 sm:mt-0">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button>
            <Calendar className="mr-2 h-4 w-4" />
            Generate Report
          </Button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Select value={timePeriod} onValueChange={setTimePeriod}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Time Period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="this-month">This Month</SelectItem>
              <SelectItem value="last-month">Last Month</SelectItem>
              <SelectItem value="this-quarter">This Quarter</SelectItem>
              <SelectItem value="last-quarter">Last Quarter</SelectItem>
              <SelectItem value="this-year">This Year</SelectItem>
              <SelectItem value="last-year">Last Year</SelectItem>
              <SelectItem value="all-time">All Time</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={department} onValueChange={setDepartment}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Department" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Departments</SelectItem>
              <SelectItem value="cs">Computer Science</SelectItem>
              <SelectItem value="ee">Electrical Engineering</SelectItem>
              <SelectItem value="me">Mechanical Engineering</SelectItem>
              <SelectItem value="ce">Civil Engineering</SelectItem>
              <SelectItem value="bt">Biotechnology</SelectItem>
            </SelectContent>
          </Select>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-[180px]">
                <Filter className="mr-2 h-4 w-4" />
                More Filters
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Filter by</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Company Type</DropdownMenuLabel>
              <DropdownMenuCheckboxItem checked>Tech</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem checked>Finance</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem checked>Consulting</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem checked>Manufacturing</DropdownMenuCheckboxItem>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Batch</DropdownMenuLabel>
              <DropdownMenuCheckboxItem checked>2025</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem checked>2024</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem checked>2023</DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        <div className="relative w-full sm:w-auto">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search companies, skills, etc."
            className="pl-8 w-full sm:w-[240px]"
          />
        </div>
      </div>

      <Tabs defaultValue="placement" onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid grid-cols-4 w-full">
          <TabsTrigger value="placement">Placement Stats</TabsTrigger>
          <TabsTrigger value="company">Company Analysis</TabsTrigger>
          <TabsTrigger value="skill">Skill Demand</TabsTrigger>
          <TabsTrigger value="department">Department Performance</TabsTrigger>
        </TabsList>
        
        <TabsContent value="placement" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Students</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,284</div>
                <p className="text-xs text-muted-foreground">+12% from last year</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Placed Students</CardTitle>
                <Award className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">865</div>
                <p className="text-xs text-muted-foreground">67.4% placement rate</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Average CTC</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₹12.5 LPA</div>
                <p className="text-xs text-muted-foreground">+8% from last year</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Participating Companies</CardTitle>
                <Building className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">48</div>
                <p className="text-xs text-muted-foreground">+4 new this year</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Placement Trend</CardTitle>
                <CardDescription>Monthly placement statistics</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <div className="h-full w-full bg-muted rounded-lg flex items-center justify-center">
                  <div className="flex flex-col items-center justify-center text-center p-4">
                    <LineChart className="h-10 w-10 text-primary mb-2" />
                    <p className="text-sm text-muted-foreground mb-2">Monthly placement trend visualization would appear here</p>
                    <p className="text-xs text-muted-foreground">Showing placements by month across departments</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Placement by Department</CardTitle>
                <CardDescription>Department-wise placement rates</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <div className="h-full w-full bg-muted rounded-lg flex items-center justify-center">
                  <div className="flex flex-col items-center justify-center text-center p-4">
                    <PieChart className="h-10 w-10 text-primary mb-2" />
                    <p className="text-sm text-muted-foreground mb-2">Department-wise placement visualization would appear here</p>
                    <p className="text-xs text-muted-foreground">Comparing placement rates across departments</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Salary Distribution</CardTitle>
              <CardDescription>Distribution of placement packages</CardDescription>
            </CardHeader>
            <CardContent className="h-80">
              <div className="h-full w-full bg-muted rounded-lg flex items-center justify-center">
                <div className="flex flex-col items-center justify-center text-center p-4">
                  <BarChart className="h-10 w-10 text-primary mb-2" />
                  <p className="text-sm text-muted-foreground mb-2">Salary distribution visualization would appear here</p>
                  <p className="text-xs text-muted-foreground">Showing distribution of salary packages across all placements</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="company" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Top Recruiting Companies</CardTitle>
                <CardDescription>By number of students hired</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-primary/10 rounded p-2 mr-3">
                      <Building className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <p className="text-sm font-medium">Google</p>
                        <p className="text-sm font-medium">28</p>
                      </div>
                      <div className="w-full h-2 bg-primary/10 rounded-full mt-1">
                        <div className="h-full bg-primary rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-primary/10 rounded p-2 mr-3">
                      <Building className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <p className="text-sm font-medium">Microsoft</p>
                        <p className="text-sm font-medium">24</p>
                      </div>
                      <div className="w-full h-2 bg-primary/10 rounded-full mt-1">
                        <div className="h-full bg-primary rounded-full" style={{ width: '72%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-primary/10 rounded p-2 mr-3">
                      <Building className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <p className="text-sm font-medium">Amazon</p>
                        <p className="text-sm font-medium">22</p>
                      </div>
                      <div className="w-full h-2 bg-primary/10 rounded-full mt-1">
                        <div className="h-full bg-primary rounded-full" style={{ width: '66%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-primary/10 rounded p-2 mr-3">
                      <Building className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <p className="text-sm font-medium">IBM</p>
                        <p className="text-sm font-medium">18</p>
                      </div>
                      <div className="w-full h-2 bg-primary/10 rounded-full mt-1">
                        <div className="h-full bg-primary rounded-full" style={{ width: '54%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-primary/10 rounded p-2 mr-3">
                      <Building className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <p className="text-sm font-medium">Infosys</p>
                        <p className="text-sm font-medium">15</p>
                      </div>
                      <div className="w-full h-2 bg-primary/10 rounded-full mt-1">
                        <div className="h-full bg-primary rounded-full" style={{ width: '45%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Companies by Sector</CardTitle>
                <CardDescription>Distribution across industry sectors</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <div className="h-full w-full bg-muted rounded-lg flex items-center justify-center">
                  <div className="flex flex-col items-center justify-center text-center p-4">
                    <PieChart className="h-10 w-10 text-primary mb-2" />
                    <p className="text-sm text-muted-foreground mb-2">Sector distribution visualization would appear here</p>
                    <p className="text-xs text-muted-foreground">Showing distribution of companies by industry sector</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Highest Paying Companies</CardTitle>
                <CardDescription>By average CTC offered</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-primary/10 rounded p-2 mr-3">
                      <Building className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <p className="text-sm font-medium">Google</p>
                        <p className="text-sm font-medium">₹24 LPA</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-primary/10 rounded p-2 mr-3">
                      <Building className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <p className="text-sm font-medium">Microsoft</p>
                        <p className="text-sm font-medium">₹22 LPA</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-primary/10 rounded p-2 mr-3">
                      <Building className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <p className="text-sm font-medium">Amazon</p>
                        <p className="text-sm font-medium">₹20 LPA</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-primary/10 rounded p-2 mr-3">
                      <Building className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <p className="text-sm font-medium">Goldman Sachs</p>
                        <p className="text-sm font-medium">₹18 LPA</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-primary/10 rounded p-2 mr-3">
                      <Building className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <p className="text-sm font-medium">Morgan Stanley</p>
                        <p className="text-sm font-medium">₹16 LPA</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Company Recruitment Trends</CardTitle>
              <CardDescription>Year-on-year recruitment patterns</CardDescription>
            </CardHeader>
            <CardContent className="h-80">
              <div className="h-full w-full bg-muted rounded-lg flex items-center justify-center">
                <div className="flex flex-col items-center justify-center text-center p-4">
                  <LineChart className="h-10 w-10 text-primary mb-2" />
                  <p className="text-sm text-muted-foreground mb-2">Company recruitment trend visualization would appear here</p>
                  <p className="text-xs text-muted-foreground">Showing how recruitment patterns have changed over time</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="skill" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Top Skills in Demand</CardTitle>
                <CardDescription>Most requested skills by employers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-primary/10 rounded p-2 mr-3">
                      <FileText className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <p className="text-sm font-medium">Python</p>
                        <p className="text-sm font-medium">42 job listings</p>
                      </div>
                      <div className="w-full h-2 bg-primary/10 rounded-full mt-1">
                        <div className="h-full bg-primary rounded-full" style={{ width: '95%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-primary/10 rounded p-2 mr-3">
                      <FileText className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <p className="text-sm font-medium">Machine Learning</p>
                        <p className="text-sm font-medium">38 job listings</p>
                      </div>
                      <div className="w-full h-2 bg-primary/10 rounded-full mt-1">
                        <div className="h-full bg-primary rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-primary/10 rounded p-2 mr-3">
                      <FileText className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <p className="text-sm font-medium">Java</p>
                        <p className="text-sm font-medium">36 job listings</p>
                      </div>
                      <div className="w-full h-2 bg-primary/10 rounded-full mt-1">
                        <div className="h-full bg-primary rounded-full" style={{ width: '80%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-primary/10 rounded p-2 mr-3">
                      <FileText className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <p className="text-sm font-medium">React</p>
                        <p className="text-sm font-medium">32 job listings</p>
                      </div>
                      <div className="w-full h-2 bg-primary/10 rounded-full mt-1">
                        <div className="h-full bg-primary rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-primary/10 rounded p-2 mr-3">
                      <FileText className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <p className="text-sm font-medium">Cloud Computing</p>
                        <p className="text-sm font-medium">28 job listings</p>
                      </div>
                      <div className="w-full h-2 bg-primary/10 rounded-full mt-1">
                        <div className="h-full bg-primary rounded-full" style={{ width: '65%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Skill Demand Growth</CardTitle>
                <CardDescription>Fastest growing skills in demand</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-primary/10 rounded p-2 mr-3">
                      <TrendingUp className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <p className="text-sm font-medium">GenAI</p>
                        <p className="text-sm font-medium">+245%</p>
                      </div>
                      <div className="w-full h-2 bg-primary/10 rounded-full mt-1">
                        <div className="h-full bg-primary rounded-full" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-primary/10 rounded p-2 mr-3">
                      <TrendingUp className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <p className="text-sm font-medium">LLM Engineering</p>
                        <p className="text-sm font-medium">+180%</p>
                      </div>
                      <div className="w-full h-2 bg-primary/10 rounded-full mt-1">
                        <div className="h-full bg-primary rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-primary/10 rounded p-2 mr-3">
                      <TrendingUp className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <p className="text-sm font-medium">Kubernetes</p>
                        <p className="text-sm font-medium">+120%</p>
                      </div>
                      <div className="w-full h-2 bg-primary/10 rounded-full mt-1">
                        <div className="h-full bg-primary rounded-full" style={{ width: '70%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-primary/10 rounded p-2 mr-3">
                      <TrendingUp className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <p className="text-sm font-medium">Data Engineering</p>
                        <p className="text-sm font-medium">+95%</p>
                      </div>
                      <div className="w-full h-2 bg-primary/10 rounded-full mt-1">
                        <div className="h-full bg-primary rounded-full" style={{ width: '60%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-primary/10 rounded p-2 mr-3">
                      <TrendingUp className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <p className="text-sm font-medium">TypeScript</p>
                        <p className="text-sm font-medium">+85%</p>
                      </div>
                      <div className="w-full h-2 bg-primary/10 rounded-full mt-1">
                        <div className="h-full bg-primary rounded-full" style={{ width: '55%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Skill Gap Analysis</CardTitle>
              <CardDescription>Comparing student skills vs market demand</CardDescription>
            </CardHeader>
            <CardContent className="h-80">
              <div className="h-full w-full bg-muted rounded-lg flex items-center justify-center">
                <div className="flex flex-col items-center justify-center text-center p-4">
                  <BarChart className="h-10 w-10 text-primary mb-2" />
                  <p className="text-sm text-muted-foreground mb-2">Skill gap visualization would appear here</p>
                  <p className="text-xs text-muted-foreground">Comparing student skills with market demand to identify gaps</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Skills by Job Role</CardTitle>
                <CardDescription>Top skills for popular job roles</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium flex items-center">
                      <Briefcase className="h-4 w-4 mr-2" />
                      Software Developer
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                    <Badge className="bg-primary/10 text-primary">JavaScript</Badge>
                      <Badge className="bg-primary/10 text-primary">React</Badge>
                      <Badge className="bg-primary/10 text-primary">TypeScript</Badge>
                      <Badge className="bg-primary/10 text-primary">Node.js</Badge>
                      <Badge className="bg-primary/10 text-primary">SQL</Badge>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium flex items-center">
                      <Briefcase className="h-4 w-4 mr-2" />
                      Data Scientist
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge className="bg-primary/10 text-primary">Python</Badge>
                      <Badge className="bg-primary/10 text-primary">Machine Learning</Badge>
                      <Badge className="bg-primary/10 text-primary">SQL</Badge>
                      <Badge className="bg-primary/10 text-primary">Statistics</Badge>
                      <Badge className="bg-primary/10 text-primary">Data Visualization</Badge>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium flex items-center">
                      <Briefcase className="h-4 w-4 mr-2" />
                      Product Manager
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge className="bg-primary/10 text-primary">Market Research</Badge>
                      <Badge className="bg-primary/10 text-primary">Product Strategy</Badge>
                      <Badge className="bg-primary/10 text-primary">User Experience</Badge>
                      <Badge className="bg-primary/10 text-primary">Agile</Badge>
                      <Badge className="bg-primary/10 text-primary">Data Analysis</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Skills by Location</CardTitle>
                <CardDescription>In-demand skills by location</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      Bengaluru
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge className="bg-primary/10 text-primary">React</Badge>
                      <Badge className="bg-primary/10 text-primary">Machine Learning</Badge>
                      <Badge className="bg-primary/10 text-primary">Cloud</Badge>
                      <Badge className="bg-primary/10 text-primary">Microservices</Badge>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      Hyderabad
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge className="bg-primary/10 text-primary">Java</Badge>
                      <Badge className="bg-primary/10 text-primary">Data Engineering</Badge>
                      <Badge className="bg-primary/10 text-primary">DevOps</Badge>
                      <Badge className="bg-primary/10 text-primary">Python</Badge>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      Mumbai
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge className="bg-primary/10 text-primary">Finance</Badge>
                      <Badge className="bg-primary/10 text-primary">Data Analysis</Badge>
                      <Badge className="bg-primary/10 text-primary">SQL</Badge>
                      <Badge className="bg-primary/10 text-primary">Risk Analysis</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="department" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Department Performance</CardTitle>
                <CardDescription>Placement rates by department</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-primary/10 rounded p-2 mr-3">
                      <Users className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <p className="text-sm font-medium">Computer Science</p>
                        <p className="text-sm font-medium">92%</p>
                      </div>
                      <div className="w-full h-2 bg-primary/10 rounded-full mt-1">
                        <div className="h-full bg-primary rounded-full" style={{ width: '92%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-primary/10 rounded p-2 mr-3">
                      <Users className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <p className="text-sm font-medium">Electronics Engineering</p>
                        <p className="text-sm font-medium">85%</p>
                      </div>
                      <div className="w-full h-2 bg-primary/10 rounded-full mt-1">
                        <div className="h-full bg-primary rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-primary/10 rounded p-2 mr-3">
                      <Users className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <p className="text-sm font-medium">Electrical Engineering</p>
                        <p className="text-sm font-medium">78%</p>
                      </div>
                      <div className="w-full h-2 bg-primary/10 rounded-full mt-1">
                        <div className="h-full bg-primary rounded-full" style={{ width: '78%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-primary/10 rounded p-2 mr-3">
                      <Users className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <p className="text-sm font-medium">Mechanical Engineering</p>
                        <p className="text-sm font-medium">72%</p>
                      </div>
                      <div className="w-full h-2 bg-primary/10 rounded-full mt-1">
                        <div className="h-full bg-primary rounded-full" style={{ width: '72%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-primary/10 rounded p-2 mr-3">
                      <Users className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <p className="text-sm font-medium">Civil Engineering</p>
                        <p className="text-sm font-medium">68%</p>
                      </div>
                      <div className="w-full h-2 bg-primary/10 rounded-full mt-1">
                        <div className="h-full bg-primary rounded-full" style={{ width: '68%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Average Package</CardTitle>
                <CardDescription>Average CTC by department</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-primary/10 rounded p-2 mr-3">
                      <TrendingUp className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <p className="text-sm font-medium">Computer Science</p>
                        <p className="text-sm font-medium">₹18.5 LPA</p>
                      </div>
                      <div className="w-full h-2 bg-primary/10 rounded-full mt-1">
                        <div className="h-full bg-primary rounded-full" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-primary/10 rounded p-2 mr-3">
                      <TrendingUp className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <p className="text-sm font-medium">Electronics Engineering</p>
                        <p className="text-sm font-medium">₹16.2 LPA</p>
                      </div>
                      <div className="w-full h-2 bg-primary/10 rounded-full mt-1">
                        <div className="h-full bg-primary rounded-full" style={{ width: '87%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-primary/10 rounded p-2 mr-3">
                      <TrendingUp className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <p className="text-sm font-medium">Electrical Engineering</p>
                        <p className="text-sm font-medium">₹14.8 LPA</p>
                      </div>
                      <div className="w-full h-2 bg-primary/10 rounded-full mt-1">
                        <div className="h-full bg-primary rounded-full" style={{ width: '80%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-primary/10 rounded p-2 mr-3">
                      <TrendingUp className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <p className="text-sm font-medium">Mechanical Engineering</p>
                        <p className="text-sm font-medium">₹12.5 LPA</p>
                      </div>
                      <div className="w-full h-2 bg-primary/10 rounded-full mt-1">
                        <div className="h-full bg-primary rounded-full" style={{ width: '68%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-primary/10 rounded p-2 mr-3">
                      <TrendingUp className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <p className="text-sm font-medium">Civil Engineering</p>
                        <p className="text-sm font-medium">₹10.2 LPA</p>
                      </div>
                      <div className="w-full h-2 bg-primary/10 rounded-full mt-1">
                        <div className="h-full bg-primary rounded-full" style={{ width: '55%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Improvement Areas</CardTitle>
                <CardDescription>Areas needing focus by department</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium mb-2">Civil Engineering</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Industry Connections</Badge>
                      <Badge variant="outline">Modern Software Skills</Badge>
                      <Badge variant="outline">Project Management</Badge>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium mb-2">Mechanical Engineering</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">CAD/CAM Skills</Badge>
                      <Badge variant="outline">Automation</Badge>
                      <Badge variant="outline">Programming</Badge>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium mb-2">Electronics Engineering</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">IoT Experience</Badge>
                      <Badge variant="outline">Embedded Systems</Badge>
                      <Badge variant="outline">More Internships</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Department Placement Trends</CardTitle>
              <CardDescription>Year-on-year placement rates by department</CardDescription>
            </CardHeader>
            <CardContent className="h-80">
              <div className="h-full w-full bg-muted rounded-lg flex items-center justify-center">
                <div className="flex flex-col items-center justify-center text-center p-4">
                  <LineChart className="h-10 w-10 text-primary mb-2" />
                  <p className="text-sm text-muted-foreground mb-2">Department trend visualization would appear here</p>
                  <p className="text-xs text-muted-foreground">Showing how placement rates have changed over time by department</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Generate Custom Reports</CardTitle>
            <CardDescription>Create and export custom placement and analytics reports</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Placement Summary</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground">Overall placement statistics and highlights</p>
                </CardContent>
                <CardFooter>
                  <Button size="sm" className="w-full">Generate</Button>
                </CardFooter>
              </Card>
              
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Company Report</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground">Detailed analysis of recruiting companies</p>
                </CardContent>
                <CardFooter>
                  <Button size="sm" className="w-full">Generate</Button>
                </CardFooter>
              </Card>
              
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Department Analysis</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground">Performance metrics by academic department</p>
                </CardContent>
                <CardFooter>
                  <Button size="sm" className="w-full">Generate</Button>
                </CardFooter>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}