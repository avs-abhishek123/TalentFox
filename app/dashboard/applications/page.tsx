'use client';

import { useState } from 'react';
import { 
  FileText, 
  Search, 
  Filter, 
  Clock, 
  Building, 
  Calendar, 
  ChevronDown, 
  CheckCircle, 
  XCircle, 
  AlertCircle,
  MapPin,
  ArrowUpRight,
  Eye,
  MessageSquare,
  MoreHorizontal
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ApplicationsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('all');
  
  // Sample applications data
  const applications = [
    {
      id: 1,
      position: 'Frontend Developer',
      company: 'Microsoft',
      location: 'Bengaluru, India',
      type: 'Full-time',
      salary: '₹18-24 LPA',
      appliedDate: '2025-02-20',
      status: 'interview',
      stage: 'Technical Round',
      nextStep: 'Technical Interview on March 15, 2025',
      matchScore: 92,
      activities: [
        { date: '2025-02-20', action: 'Application submitted' },
        { date: '2025-02-25', action: 'Resume screened' },
        { date: '2025-03-01', action: 'Phone interview completed' },
        { date: '2025-03-10', action: 'Technical round scheduled' },
      ]
    },
    {
      id: 2,
      position: 'Software Engineer',
      company: 'Google',
      location: 'Bengaluru, India',
      type: 'Full-time',
      salary: '₹20-28 LPA',
      appliedDate: '2025-02-15',
      status: 'review',
      stage: 'Resume Screening',
      nextStep: 'Awaiting feedback',
      matchScore: 85,
      activities: [
        { date: '2025-02-15', action: 'Application submitted' },
        { date: '2025-02-17', action: 'Application acknowledged' },
      ]
    },
    {
      id: 3,
      position: 'Product Manager',
      company: 'Flipkart',
      location: 'Bengaluru, India',
      type: 'Full-time',
      salary: '₹18-25 LPA',
      appliedDate: '2025-02-10',
      status: 'rejected',
      stage: 'Final Round',
      nextStep: 'Application closed',
      matchScore: 78,
      activities: [
        { date: '2025-02-10', action: 'Application submitted' },
        { date: '2025-02-12', action: 'Resume screened' },
        { date: '2025-02-18', action: 'First interview completed' },
        { date: '2025-02-25', action: 'Second interview completed' },
        { date: '2025-03-02', action: 'Application rejected' },
      ]
    },
    {
      id: 4,
      position: 'Data Scientist',
      company: 'Amazon',
      location: 'Hyderabad, India',
      type: 'Full-time',
      salary: '₹22-30 LPA',
      appliedDate: '2025-02-05',
      status: 'offered',
      stage: 'Offer Stage',
      nextStep: 'Offer acceptance pending',
      matchScore: 94,
      activities: [
        { date: '2025-02-05', action: 'Application submitted' },
        { date: '2025-02-08', action: 'Resume screened' },
        { date: '2025-02-15', action: 'First interview completed' },
        { date: '2025-02-22', action: 'Technical assessment completed' },
        { date: '2025-03-01', action: 'Final interview completed' },
        { date: '2025-03-05', action: 'Offer received' },
      ]
    },
    {
      id: 5,
      position: 'UI/UX Designer',
      company: 'Swiggy',
      location: 'Bengaluru, India',
      type: 'Full-time',
      salary: '₹14-20 LPA',
      appliedDate: '2025-03-01',
      status: 'review',
      stage: 'Portfolio Review',
      nextStep: 'Awaiting portfolio feedback',
      matchScore: 88,
      activities: [
        { date: '2025-03-01', action: 'Application submitted' },
        { date: '2025-03-03', action: 'Application acknowledged' },
      ]
    },
    {
      id: 6,
      position: 'Backend Developer',
      company: 'Zomato',
      location: 'Gurgaon, India',
      type: 'Full-time',
      salary: '₹16-22 LPA',
      appliedDate: '2025-01-25',
      status: 'interview',
      stage: 'HR Round',
      nextStep: 'HR interview on March 12, 2025',
      matchScore: 82,
      activities: [
        { date: '2025-01-25', action: 'Application submitted' },
        { date: '2025-01-30', action: 'Resume screened' },
        { date: '2025-02-08', action: 'Technical assessment completed' },
        { date: '2025-02-15', action: 'First technical interview completed' },
        { date: '2025-02-28', action: 'Second technical interview completed' },
        { date: '2025-03-05', action: 'HR round scheduled' },
      ]
    },
    {
      id: 7,
      position: 'DevOps Engineer',
      company: 'Paytm',
      location: 'Noida, India',
      type: 'Full-time',
      salary: '₹14-18 LPA',
      appliedDate: '2025-01-15',
      status: 'rejected',
      stage: 'Technical Round',
      nextStep: 'Application closed',
      matchScore: 76,
      activities: [
        { date: '2025-01-15', action: 'Application submitted' },
        { date: '2025-01-18', action: 'Resume screened' },
        { date: '2025-01-25', action: 'Technical assessment completed' },
        { date: '2025-02-02', action: 'Technical interview completed' },
        { date: '2025-02-05', action: 'Application rejected' },
      ]
    },
    {
      id: 8,
      position: 'Machine Learning Engineer',
      company: 'Freshworks',
      location: 'Chennai, India',
      type: 'Full-time',
      salary: '₹16-24 LPA',
      appliedDate: '2025-02-28',
      status: 'review',
      stage: 'Technical Assessment',
      nextStep: 'Technical assessment deadline: March 15, 2025',
      matchScore: 91,
      activities: [
        { date: '2025-02-28', action: 'Application submitted' },
        { date: '2025-03-02', action: 'Resume screened' },
        { date: '2025-03-05', action: 'Technical assessment assigned' },
      ]
    }
  ];

  // Filter functions
  const getFilteredApplications = () => {
    return applications.filter(app => {
      // Search term filter
      const matchesSearch = 
        app.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.company.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Status filter
      const matchesStatus = 
        statusFilter === 'all' || 
        app.status === statusFilter;
      
      // Date filter (simplified for demonstration)
      const appDate = new Date(app.appliedDate);
      const currentDate = new Date();
      let matchesDate = true;
      
      if (dateFilter === 'week') {
        const weekAgo = new Date();
        weekAgo.setDate(currentDate.getDate() - 7);
        matchesDate = appDate >= weekAgo;
      } else if (dateFilter === 'month') {
        const monthAgo = new Date();
        monthAgo.setMonth(currentDate.getMonth() - 1);
        matchesDate = appDate >= monthAgo;
      } else if (dateFilter === 'three-months') {
        const threeMonthsAgo = new Date();
        threeMonthsAgo.setMonth(currentDate.getMonth() - 3);
        matchesDate = appDate >= threeMonthsAgo;
      }
      
      return matchesSearch && matchesStatus && matchesDate;
    });
  };

  const filteredApplications = getFilteredApplications();
  
  // Helper functions for formatting
  const formatDate = (dateString = '') => {
    const options = { year: 'numeric' as const, month: 'short' as const, day: 'numeric' as const };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  const getStatusBadge = (status = '') => {
    switch(status) {
      case 'review':
        return <Badge className="bg-blue-100 text-blue-800"><Clock className="mr-1 h-3 w-3" /> In Review</Badge>;
      case 'interview':
        return <Badge className="bg-purple-100 text-purple-800"><Calendar className="mr-1 h-3 w-3" /> Interviewing</Badge>;
      case 'offered':
        return <Badge className="bg-green-100 text-green-800"><CheckCircle className="mr-1 h-3 w-3" /> Offered</Badge>;
      case 'rejected':
        return <Badge className="bg-red-100 text-red-800"><XCircle className="mr-1 h-3 w-3" /> Rejected</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800">{status}</Badge>;
    }
  };
  
  const getMatchScoreColor = (score = 0) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 80) return 'text-blue-600';
    if (score >= 70) return 'text-amber-600';
    return 'text-red-600';
  };

  return (
    <div className="p-1 sm:p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">My Applications</h1>
        <p className="text-muted-foreground">Track and manage your job applications</p>
      </div>

      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-blue-50 rounded-lg p-4 flex items-center">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
                <FileText className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xl font-bold">{applications.length}</p>
                <p className="text-sm text-gray-600">Total Applications</p>
              </div>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-4 flex items-center">
              <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mr-4">
                <Calendar className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xl font-bold">{applications.filter(a => a.status === 'interview').length}</p>
                <p className="text-sm text-gray-600">Interviews</p>
              </div>
            </div>
            
            <div className="bg-green-50 rounded-lg p-4 flex items-center">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-4">
                <CheckCircle className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xl font-bold">{applications.filter(a => a.status === 'offered').length}</p>
                <p className="text-sm text-gray-600">Offers</p>
              </div>
            </div>
            
            <div className="bg-red-50 rounded-lg p-4 flex items-center">
              <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 mr-4">
                <XCircle className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xl font-bold">{applications.filter(a => a.status === 'rejected').length}</p>
                <p className="text-sm text-gray-600">Rejections</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0 mb-4">
        <div className="w-full sm:w-auto flex-1 sm:max-w-sm">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search by position or company..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <div className="flex gap-2 w-full sm:w-auto">
          <Select 
            value={statusFilter} 
            onValueChange={setStatusFilter}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="review">In Review</SelectItem>
              <SelectItem value="interview">Interviewing</SelectItem>
              <SelectItem value="offered">Offered</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>
          
          <Select 
            value={dateFilter} 
            onValueChange={setDateFilter}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by date" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Time</SelectItem>
              <SelectItem value="week">Last Week</SelectItem>
              <SelectItem value="month">Last Month</SelectItem>
              <SelectItem value="three-months">Last 3 Months</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="list" className="space-y-4">
        <TabsList>
          <TabsTrigger value="list">List View</TabsTrigger>
          <TabsTrigger value="board">Board View</TabsTrigger>
          <TabsTrigger value="calendar">Calendar</TabsTrigger>
        </TabsList>
        
        <TabsContent value="list" className="space-y-4">
          {filteredApplications.length > 0 ? (
            filteredApplications.map((application) => (
              <Card key={application.id} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between">
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-semibold">{application.position}</h3>
                          <p className="text-muted-foreground">{application.company}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          {getStatusBadge(application.status)}
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
                                <MessageSquare className="mr-2 h-4 w-4" />
                                Add Note
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <XCircle className="mr-2 h-4 w-4 text-red-500" />
                                Mark as Withdrawn
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                      
                      <div className="flex items-center mt-2 text-sm">
                        <MapPin className="h-4 w-4 text-muted-foreground mr-1" />
                        <span className="text-muted-foreground">{application.location}</span>
                        <span className="mx-2">•</span>
                        <span className="text-muted-foreground">{application.type}</span>
                        <span className="mx-2">•</span>
                        <span className="font-medium">{application.salary}</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-y-2 mt-4">
                        <div className="w-full sm:w-auto sm:mr-8">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 text-muted-foreground mr-2" />
                            <span className="text-sm font-medium">Applied on:</span>
                            <span className="text-sm ml-2">{formatDate(application.appliedDate)}</span>
                          </div>
                        </div>
                        
                        <div className="w-full sm:w-auto">
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 text-muted-foreground mr-2" />
                            <span className="text-sm font-medium">Stage:</span>
                            <span className="text-sm ml-2">{application.stage}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <div className="flex items-center mb-1">
                          <span className="text-sm font-medium mr-2">Match Score:</span>
                          <span className={`text-sm font-bold ${getMatchScoreColor(application.matchScore)}`}>
                            {application.matchScore}%
                          </span>
                        </div>
                        <Progress value={application.matchScore} className="h-2" />
                      </div>
                      
                      {application.nextStep && (
                        <div className="mt-4 p-3 bg-blue-50 border border-blue-100 rounded-md">
                          <div className="flex">
                            <AlertCircle className="h-5 w-5 text-blue-500 mr-2" />
                            <div>
                              <p className="text-sm font-medium text-blue-700">Next Steps</p>
                              <p className="text-sm text-blue-600">{application.nextStep}</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div className="mt-4 md:mt-0 md:ml-6 md:border-l md:pl-6 md:min-w-[200px]">
                      <h4 className="text-sm font-medium mb-2">Activity Timeline</h4>
                      <div className="space-y-3">
                        {application.activities.slice(0, 3).map((activity, index) => (
                          <div key={index} className="flex">
                            <div className="mr-2 h-full">
                              <div className="h-2 w-2 rounded-full bg-primary mt-1.5"></div>
                              {index < application.activities.slice(0, 3).length - 1 && (
                                <div className="h-full w-px bg-gray-200 ml-1 my-1"></div>
                              )}
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground">{formatDate(activity.date)}</p>
                              <p className="text-sm">{activity.action}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      {application.activities.length > 3 && (
                        <Button variant="link" size="sm" className="mt-2 h-auto p-0 text-primary">
                          View all activities ({application.activities.length})
                        </Button>
                      )}
                      <div className="mt-4 pt-4 border-t">
                        <Button className="w-full">
                          View Application <ArrowUpRight className="ml-2 h-4 w-4" />
                        </Button>
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
                <h3 className="text-lg font-semibold mb-2">No applications found</h3>
                <p className="text-muted-foreground text-center mb-4">There are no applications matching your search criteria.</p>
                <Button onClick={() => {
                  setSearchTerm('');
                  setStatusFilter('all');
                  setDateFilter('all');
                }}>
                  Clear Filters
                </Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>
        
        <TabsContent value="board">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <h3 className="text-sm font-medium mb-3 flex items-center">
                <Clock className="h-4 w-4 text-blue-500 mr-2" />
                In Review <Badge className="ml-2 bg-gray-100 text-gray-800">{applications.filter(a => a.status === 'review').length}</Badge>
              </h3>
              <div className="space-y-2">
                {applications.filter(a => a.status === 'review').map((app) => (
                  <Card key={app.id} className="p-3">
                    <h4 className="font-medium text-sm">{app.position}</h4>
                    <p className="text-xs text-muted-foreground">{app.company}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs">{formatDate(app.appliedDate)}</span>
                      <Badge className={`text-xs ${getMatchScoreColor(app.matchScore)}`}>{app.matchScore}%</Badge>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium mb-3 flex items-center">
                <Calendar className="h-4 w-4 text-purple-500 mr-2" />
                Interviewing <Badge className="ml-2 bg-gray-100 text-gray-800">{applications.filter(a => a.status === 'interview').length}</Badge>
              </h3>
              <div className="space-y-2">
                {applications.filter(a => a.status === 'interview').map((app) => (
                  <Card key={app.id} className="p-3">
                    <h4 className="font-medium text-sm">{app.position}</h4>
                    <p className="text-xs text-muted-foreground">{app.company}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs">{app.stage}</span>
                      <Badge className={`text-xs ${getMatchScoreColor(app.matchScore)}`}>{app.matchScore}%</Badge>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium mb-3 flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Offered <Badge className="ml-2 bg-gray-100 text-gray-800">{applications.filter(a => a.status === 'offered').length}</Badge>
              </h3>
              <div className="space-y-2">
                {applications.filter(a => a.status === 'offered').map((app) => (
                  <Card key={app.id} className="p-3">
                    <h4 className="font-medium text-sm">{app.position}</h4>
                    <p className="text-xs text-muted-foreground">{app.company}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs">{app.salary}</span>
                      <Badge className={`text-xs ${getMatchScoreColor(app.matchScore)}`}>{app.matchScore}%</Badge>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium mb-3 flex items-center">
                <XCircle className="h-4 w-4 text-red-500 mr-2" />
                Rejected <Badge className="ml-2 bg-gray-100 text-gray-800">{applications.filter(a => a.status === 'rejected').length}</Badge>
              </h3>
              <div className="space-y-2">
                {applications.filter(a => a.status === 'rejected').map((app) => (
                  <Card key={app.id} className="p-3">
                    <h4 className="font-medium text-sm">{app.position}</h4>
                    <p className="text-xs text-muted-foreground">{app.company}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs">{formatDate(app.appliedDate)}</span>
                      <Badge className={`text-xs ${getMatchScoreColor(app.matchScore)}`}>{app.matchScore}%</Badge>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="calendar">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center justify-center h-64">
                <Calendar className="h-16 w-16 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">Calendar View</h3>
                <p className="text-muted-foreground text-center mb-4">
                  Calendar view is coming soon. This will help you track all your application deadlines and interview schedules in one place.
                </p>
                <Button>Switch to List View</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Application Insights</CardTitle>
            <CardDescription>Overview of your application performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Application Conversion Rate</h3>
                <div className="flex items-center">
                  <div className="w-full mr-4">
                    <div className="h-4 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: '25%' }}></div>
                    </div>
                  </div>
                  <span className="text-sm font-medium">25%</span>
                </div>
                <p className="text-xs text-muted-foreground">Percentage of applications that led to interviews</p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Average Response Time</h3>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-muted-foreground mr-2" />
                  <span className="text-lg font-medium">5.2 days</span>
                </div>
                <p className="text-xs text-muted-foreground">Average time to get a response after applying</p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Top Matching Companies</h3>
                <div className="space-y-1">
                  <div className="flex items-center">
                    <Building className="h-5 w-5 text-muted-foreground mr-2" />
                    <span className="text-sm font-medium">Microsoft</span>
                  </div>
                    <div className="flex items-center">
                        <Building className="h-5 w-5 text-muted-foreground mr-2" />
                        <span className="text-sm font-medium">Google</span>
                    </div>
                    <div className="flex items-center">
                        <Building className="h-5 w-5 text-muted-foreground mr-2" />
                        <span className="text-sm font-medium">Amazon</span>
                    </div>
                </div>
                </div>
            </div>
            </CardContent>
        </Card>
        </div>
    </div>
    );
}