// app/dashboard/jobs/page.tsx
'use client';

import { useState } from 'react';
import { 
  Search, 
  Filter, 
  Plus, 
  Edit, 
  Trash, 
  Clock, 
  Users, 
  Building, 
  FileText,
  ChevronDown,
  MoreHorizontal,
  Eye,
  Calendar
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Mock data for jobs
const jobs = [
  {
    id: '1',
    title: 'Software Engineer',
    company: 'Google',
    location: 'Bengaluru, India',
    salary: '₹20-28 LPA',
    type: 'Full-time',
    postedDate: '2025-02-20',
    deadline: '2025-03-20',
    skills: ['JavaScript', 'React', 'Node.js', 'Problem Solving'],
    applications: 48,
    shortlisted: 12,
    rejected: 18,
    pending: 18,
    status: 'Active',
    description: 'We are looking for a Software Engineer to join our team and help us build innovative products...',
  },
  {
    id: '2',
    title: 'Frontend Developer',
    company: 'Microsoft',
    location: 'Bengaluru, India',
    salary: '₹18-24 LPA',
    type: 'Full-time',
    postedDate: '2025-02-22',
    deadline: '2025-03-22',
    skills: ['React', 'TypeScript', 'CSS', 'UI/UX'],
    applications: 35,
    shortlisted: 8,
    rejected: 14,
    pending: 13,
    status: 'Active',
    description: 'Join our team to build beautiful, responsive user interfaces for our products...',
  },
  {
    id: '3',
    title: 'Data Scientist',
    company: 'Amazon',
    location: 'Hyderabad, India',
    salary: '₹22-30 LPA',
    type: 'Full-time',
    postedDate: '2025-02-15',
    deadline: '2025-03-15',
    skills: ['Python', 'Machine Learning', 'TensorFlow', 'SQL'],
    applications: 42,
    shortlisted: 10,
    rejected: 22,
    pending: 10,
    status: 'Active',
    description: 'Looking for a Data Scientist to help us extract insights from large datasets...',
  },
  {
    id: '4',
    title: 'Machine Learning Engineer',
    company: 'Meta',
    location: 'Remote',
    salary: '₹25-32 LPA',
    type: 'Full-time',
    postedDate: '2025-02-10',
    deadline: '2025-03-10',
    skills: ['Python', 'Deep Learning', 'NLP', 'Computer Vision'],
    applications: 38,
    shortlisted: 7,
    rejected: 15,
    pending: 16,
    status: 'Closed',
    description: 'Join our AI team to build cutting-edge machine learning models...',
  },
  {
    id: '5',
    title: 'Full Stack Developer',
    company: 'Flipkart',
    location: 'Bengaluru, India',
    salary: '₹16-22 LPA',
    type: 'Full-time',
    postedDate: '2025-02-18',
    deadline: '2025-03-18',
    skills: ['React', 'Node.js', 'MongoDB', 'Express'],
    applications: 52,
    shortlisted: 14,
    rejected: 20,
    pending: 18,
    status: 'Active',
    description: 'We are seeking a Full Stack Developer proficient in both frontend and backend technologies...',
  },
  {
    id: '6',
    title: 'UI/UX Designer',
    company: 'Swiggy',
    location: 'Bengaluru, India',
    salary: '₹14-20 LPA',
    type: 'Full-time',
    postedDate: '2025-02-12',
    deadline: '2025-03-12',
    skills: ['Figma', 'Adobe XD', 'UI Design', 'User Research'],
    applications: 29,
    shortlisted: 6,
    rejected: 12,
    pending: 11,
    status: 'Draft',
    description: 'Join our design team to create beautiful and user-friendly interfaces...',
  },
  {
    id: '7',
    title: 'DevOps Engineer',
    company: 'Infosys',
    location: 'Pune, India',
    salary: '₹14-18 LPA',
    type: 'Full-time',
    postedDate: '2025-02-14',
    deadline: '2025-03-14',
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
    applications: 32,
    shortlisted: 8,
    rejected: 14,
    pending: 10,
    status: 'Active',
    description: 'Looking for a DevOps Engineer to help us streamline our development and deployment processes...',
  },
  {
    id: '8',
    title: 'Backend Developer',
    company: 'Zomato',
    location: 'Gurgaon, India',
    salary: '₹16-22 LPA',
    type: 'Full-time',
    postedDate: '2025-02-16',
    deadline: '2025-03-16',
    skills: ['Java', 'Spring Boot', 'Microservices', 'PostgreSQL'],
    applications: 39,
    shortlisted: 9,
    rejected: 15,
    pending: 15,
    status: 'Active',
    description: 'Join our backend team to build scalable and robust APIs...',
  }
];

export default function JobsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentTab, setCurrentTab] = useState('all');
  
  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        job.company.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTab = currentTab === 'all' || 
                      (currentTab === 'active' && job.status === 'Active') ||
                      (currentTab === 'closed' && job.status === 'Closed') ||
                      (currentTab === 'draft' && job.status === 'Draft');
    
    return matchesSearch && matchesTab;
  });
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'Closed':
        return 'bg-red-100 text-red-800';
      case 'Draft':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  // Format date to display in a more readable format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };
  
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Jobs</h1>
          <p className="text-muted-foreground">Manage job postings and applications</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Post New Job
          </Button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0 mb-4">
        <div className="w-full sm:w-auto flex-1 sm:max-w-sm">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search jobs..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <div className="flex gap-2 w-full sm:w-auto">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full sm:w-auto">
                <Filter className="mr-2 h-4 w-4" />
                Filter
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
              <DropdownMenuLabel>Filter by company</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Google</DropdownMenuItem>
              <DropdownMenuItem>Microsoft</DropdownMenuItem>
              <DropdownMenuItem>Amazon</DropdownMenuItem>
              <DropdownMenuItem>Meta</DropdownMenuItem>
              <DropdownMenuItem>Flipkart</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Filter by location</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Bengaluru</DropdownMenuItem>
              <DropdownMenuItem>Hyderabad</DropdownMenuItem>
              <DropdownMenuItem>Pune</DropdownMenuItem>
              <DropdownMenuItem>Gurgaon</DropdownMenuItem>
              <DropdownMenuItem>Remote</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <Tabs defaultValue="all" onValueChange={setCurrentTab}>
        <TabsList className="mb-4">
          <TabsTrigger value="all">All Jobs</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="closed">Closed</TabsTrigger>
          <TabsTrigger value="draft">Drafts</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-0">
          <div className="space-y-4">
            {filteredJobs.length > 0 ? (
              filteredJobs.map(job => (
                <Card key={job.id} className="relative overflow-hidden">
                  <div className={`absolute top-0 left-0 w-1 h-full ${job.status === 'Active' ? 'bg-primary' : job.status === 'Closed' ? 'bg-red-500' : 'bg-yellow-500'}`}></div>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between">
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-lg font-semibold">{job.title}</h3>
                            <p className="text-muted-foreground">{job.company} • {job.location}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge className={getStatusColor(job.status)}>
                              {job.status}
                            </Badge>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>
                                  <Eye className="mr-2 h-4 w-4" />
                                  View Details
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Edit className="mr-2 h-4 w-4" />
                                  Edit Job
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Clock className="mr-2 h-4 w-4" />
                                  Extend Deadline
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-red-600">
                                  <Trash className="mr-2 h-4 w-4" />
                                  Delete Job
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mt-3">
                          {job.skills.map((skill, index) => (
                            <Badge key={index} variant="outline" className="bg-primary/5">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                        
                        <p className="mt-3 text-sm">{job.description}</p>
                        
                        <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4 text-sm">
                          <div className="flex items-center text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-1" />
                            Posted: {formatDate(job.postedDate)}
                          </div>
                          <div className="flex items-center text-muted-foreground">
                            <Clock className="h-4 w-4 mr-1" />
                            Deadline: {formatDate(job.deadline)}
                          </div>
                          <div className="flex items-center text-muted-foreground">
                            <FileText className="h-4 w-4 mr-1" />
                            Type: {job.type}
                          </div>
                          <div className="flex items-center font-medium">
                            Salary: {job.salary}
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 md:mt-0 md:ml-6 md:border-l md:pl-6 flex flex-col md:justify-center">
                        <div className="grid grid-cols-2 gap-4 md:gap-6">
                          <div className="text-center">
                            <p className="text-2xl font-semibold text-primary">{job.applications}</p>
                            <p className="text-xs text-muted-foreground">Total Applications</p>
                          </div>
                          <div className="text-center">
                            <p className="text-2xl font-semibold text-green-600">{job.shortlisted}</p>
                            <p className="text-xs text-muted-foreground">Shortlisted</p>
                          </div>
                          <div className="text-center">
                            <p className="text-2xl font-semibold text-yellow-600">{job.pending}</p>
                            <p className="text-xs text-muted-foreground">Pending</p>
                          </div>
                          <div className="text-center">
                            <p className="text-2xl font-semibold text-red-600">{job.rejected}</p>
                            <p className="text-xs text-muted-foreground">Rejected</p>
                          </div>
                        </div>
                        
                        <div className="mt-4 flex flex-col space-y-2">
                          <Button size="sm">View Applications</Button>
                          <Button size="sm" variant="outline">Manage Job</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Card>
                <CardContent className="p-6 flex flex-col items-center justify-center">
                  <FileText className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No jobs found</h3>
                  <p className="text-muted-foreground text-center mb-4">There are no jobs matching your search criteria.</p>
                  <Button onClick={() => setSearchTerm('')}>Clear Filters</Button>
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="active" className="mt-0">
          {/* Content same as "all" but filtered for active jobs */}
        </TabsContent>
        
        <TabsContent value="closed" className="mt-0">
          {/* Content same as "all" but filtered for closed jobs */}
        </TabsContent>
        
        <TabsContent value="draft" className="mt-0">
          {/* Content same as "all" but filtered for draft jobs */}
        </TabsContent>
      </Tabs>
      
      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Job Posting Analytics</CardTitle>
            <CardDescription>Overview of job posting performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center justify-center p-4 bg-primary/5 rounded-lg">
                <div className="text-4xl font-bold text-primary mb-2">215</div>
                <div className="text-sm text-muted-foreground">Total Applications</div>
              </div>
              <div className="flex flex-col items-center justify-center p-4 bg-primary/5 rounded-lg">
                <div className="text-4xl font-bold text-primary mb-2">36%</div>
                <div className="text-sm text-muted-foreground">Average Shortlist Rate</div>
              </div>
              <div className="flex flex-col items-center justify-center p-4 bg-primary/5 rounded-lg">
                <div className="text-4xl font-bold text-primary mb-2">42%</div>
                <div className="text-sm text-muted-foreground">Application Completion Rate</div>
              </div>
              <div className="flex flex-col items-center justify-center p-4 bg-primary/5 rounded-lg">
                <div className="text-4xl font-bold text-primary mb-2">8</div>
                <div className="text-sm text-muted-foreground">Active Job Postings</div>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t">
              <h3 className="text-lg font-medium mb-4">Top Skills in Demand</h3>
              <div className="flex flex-wrap gap-2">
                <Badge className="py-2 px-3">React <span className="ml-1 text-xs bg-primary/20 px-1.5 rounded-full">42</span></Badge>
                <Badge className="py-2 px-3">JavaScript <span className="ml-1 text-xs bg-primary/20 px-1.5 rounded-full">38</span></Badge>
                <Badge className="py-2 px-3">Python <span className="ml-1 text-xs bg-primary/20 px-1.5 rounded-full">35</span></Badge>
                <Badge className="py-2 px-3">Machine Learning <span className="ml-1 text-xs bg-primary/20 px-1.5 rounded-full">28</span></Badge>
                <Badge className="py-2 px-3">Node.js <span className="ml-1 text-xs bg-primary/20 px-1.5 rounded-full">26</span></Badge>
                <Badge className="py-2 px-3">TypeScript <span className="ml-1 text-xs bg-primary/20 px-1.5 rounded-full">24</span></Badge>
                <Badge className="py-2 px-3">AWS <span className="ml-1 text-xs bg-primary/20 px-1.5 rounded-full">20</span></Badge>
                <Badge className="py-2 px-3">SQL <span className="ml-1 text-xs bg-primary/20 px-1.5 rounded-full">18</span></Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}