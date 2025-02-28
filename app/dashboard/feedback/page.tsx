'use client';

import { useState } from 'react';
import { 
  MessageSquare, 
  Search, 
  Filter, 
  ChevronDown, 
  User, 
  Clock, 
  Calendar, 
  CheckCircle, 
  XCircle, 
  AlertCircle, 
  Download, 
  ThumbsUp, 
  ThumbsDown, 
  MoreHorizontal, 
  Reply, 
  BarChart,
  Star,
  FileText,
  HelpCircle,
  Building
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Progress } from '@/components/ui/progress';
import { Label } from '@/components/ui/label';

export default function StudentFeedbackPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedFeedback, setSelectedFeedback] = useState<any>(null);
  
  // Sample feedback data
  const feedbacks = [
    {
      id: 1,
      student: 'Rahul Sharma',
      email: 'rahul.sharma@example.com',
      avatar: 'RS',
      category: 'placement-process',
      subject: 'Delay in interview scheduling',
      message: 'I applied for the Google recruitment drive but have not received any update on my interview schedule. It has been two weeks since the application deadline.',
      date: '2025-02-24T14:30:00',
      status: 'pending',
      priority: 'high',
      tags: ['recruitment', 'scheduling'],
      company: 'Google',
      responses: [],
      satisfaction: null
    },
    {
      id: 2,
      student: 'Aditya Patel',
      email: 'aditya.patel@example.com',
      avatar: 'AP',
      category: 'resume-review',
      subject: 'Need more detailed resume feedback',
      message: 'I submitted my resume for review 3 days ago but received very generic feedback. I would appreciate more specific suggestions for improvement, especially regarding my project descriptions.',
      date: '2025-02-23T10:15:00',
      status: 'in-progress',
      priority: 'medium',
      tags: ['resume', 'feedback'],
      company: null,
      responses: [
        {
          id: 1,
          responder: 'Placement Officer',
          message: 'Thank you for your feedback. We will ask our resume review team to provide more detailed comments on your project descriptions. Please allow 1-2 business days for this review.',
          date: '2025-02-23T15:45:00'
        }
      ],
      satisfaction: null
    },
    {
      id: 3,
      student: 'Priya Singh',
      email: 'priya.singh@example.com',
      avatar: 'PS',
      category: 'interview-preparation',
      subject: 'Mock interview feedback was helpful',
      message: 'I wanted to thank the placement cell for arranging the mock interview session with industry experts. The feedback I received was very constructive and helped me improve my interviewing skills significantly.',
      date: '2025-02-20T09:45:00',
      status: 'resolved',
      priority: 'low',
      tags: ['interview', 'appreciation'],
      company: null,
      responses: [
        {
          id: 1,
          responder: 'Placement Officer',
          message: 'We are glad to hear that the mock interview session was beneficial for you! We will continue to organize similar sessions in the future.',
          date: '2025-02-20T11:30:00'
        }
      ],
      satisfaction: 'satisfied'
    },
    {
      id: 4,
      student: 'Vikram Mehta',
      email: 'vikram.mehta@example.com',
      avatar: 'VM',
      category: 'company-specific',
      subject: 'Concerns about Microsoft work location',
      message: 'The Microsoft job posting mentioned the location as Bengaluru, but during the pre-placement talk, the recruiter mentioned the possibility of being placed in Hyderabad. This is a significant concern for me due to personal reasons. Can you please clarify this with the company?',
      date: '2025-02-19T16:20:00',
      status: 'in-progress',
      priority: 'high',
      tags: ['location', 'clarification'],
      company: 'Microsoft',
      responses: [
        {
          id: 1,
          responder: 'Placement Officer',
          message: 'Thank you for bringing this to our attention. We have reached out to the Microsoft recruitment team for clarification and will update you as soon as we hear back from them.',
          date: '2025-02-19T17:45:00'
        }
      ],
      satisfaction: null
    },
    {
      id: 5,
      student: 'Neha Reddy',
      email: 'neha.reddy@example.com',
      avatar: 'NR',
      category: 'technical-issue',
      subject: 'Unable to upload resume to portal',
      message: 'I have been trying to upload my updated resume to the placement portal, but I keep getting an error message saying "File upload failed". I have tried multiple times with different browsers but facing the same issue.',
      date: '2025-02-18T11:30:00',
      status: 'resolved',
      priority: 'medium',
      tags: ['technical', 'portal'],
      company: null,
      responses: [
        {
          id: 1,
          responder: 'Placement Officer',
          message: 'We apologize for the inconvenience. Our technical team has identified the issue with the file upload feature. Please try again now.',
          date: '2025-02-18T14:20:00'
        },
        {
          id: 2,
          responder: 'Neha Reddy',
          message: 'Thank you! I was able to upload my resume successfully.',
          date: '2025-02-18T15:05:00'
        },
        {
          id: 3,
          responder: 'Placement Officer',
          message: 'Great! Please let us know if you encounter any other issues.',
          date: '2025-02-18T15:30:00'
        }
      ],
      satisfaction: 'satisfied'
    },
    {
      id: 6,
      student: 'Sanjay Kumar',
      email: 'sanjay.kumar@example.com',
      avatar: 'SK',
      category: 'company-specific',
      subject: 'Discrepancy in Amazon job description',
      message: 'The job description for the Amazon SDE role mentions 0-2 years of experience, but during the pre-placement talk, they specifically mentioned they are looking for freshers only. This is causing confusion among students.',
      date: '2025-02-17T13:15:00',
      status: 'resolved',
      priority: 'medium',
      tags: ['job-description', 'clarification'],
      company: 'Amazon',
      responses: [
        {
          id: 1,
          responder: 'Placement Officer',
          message: 'Thank you for pointing this out. We have confirmed with Amazon that they are indeed looking for freshers (0 years of experience) for this particular drive. We have updated the job description accordingly.',
          date: '2025-02-17T15:30:00'
        }
      ],
      satisfaction: 'satisfied'
    },
    {
      id: 7,
      student: 'Ananya Desai',
      email: 'ananya.desai@example.com',
      avatar: 'AD',
      category: 'suggestion',
      subject: 'Suggestion for improvement in placement process',
      message: 'I would like to suggest implementing a feature that sends automatic email notifications when there is an update to our application status. Currently, we have to keep checking the portal manually which can be time-consuming.',
      date: '2025-02-15T10:45:00',
      status: 'in-progress',
      priority: 'low',
      tags: ['suggestion', 'notification'],
      company: null,
      responses: [
        {
          id: 1,
          responder: 'Placement Officer',
          message: 'Thank you for your valuable suggestion. This is a feature that we are currently working on implementing. We hope to roll it out in the next system update.',
          date: '2025-02-15T14:10:00'
        }
      ],
      satisfaction: null
    },
    {
      id: 8,
      student: 'Rajesh Verma',
      email: 'rajesh.verma@example.com',
      avatar: 'RV',
      category: 'placement-process',
      subject: 'Request for additional companies in mechanical engineering',
      message: 'I notice that most of the companies visiting campus are IT companies. As a mechanical engineering student, I would appreciate if more core mechanical companies could be invited for campus recruitment.',
      date: '2025-02-14T09:30:00',
      status: 'pending',
      priority: 'medium',
      tags: ['mechanical', 'companies'],
      company: null,
      responses: [],
      satisfaction: null
    }
  ];
  
  // Filter feedbacks based on search, category, and status filters
  const filteredFeedbacks = feedbacks.filter(feedback => {
    const matchesSearch = feedback.subject.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        feedback.student.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        feedback.message.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = categoryFilter === 'all' || feedback.category === categoryFilter;
    
    const matchesStatus = statusFilter === 'all' || feedback.status === statusFilter;
    
    const matchesTab = activeTab === 'all' || 
                      (activeTab === 'unresolved' && feedback.status !== 'resolved') ||
                      (activeTab === 'high-priority' && feedback.priority === 'high') ||
                      (activeTab === 'resolved' && feedback.status === 'resolved');
    
    return matchesSearch && matchesCategory && matchesStatus && matchesTab;
  });
  
  // Get badge for feedback status
  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800"><Clock className="mr-1 h-3 w-3" /> Pending</Badge>;
      case 'in-progress':
        return <Badge className="bg-blue-100 text-blue-800"><AlertCircle className="mr-1 h-3 w-3" /> In Progress</Badge>;
      case 'resolved':
        return <Badge className="bg-green-100 text-green-800"><CheckCircle className="mr-1 h-3 w-3" /> Resolved</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };
  
  // Get badge for feedback priority
  const getPriorityBadge = (priority: string) => {
    switch(priority) {
      case 'high':
        return <Badge variant="outline" className="bg-red-50 text-red-800 border-red-200">High</Badge>;
      case 'medium':
        return <Badge variant="outline" className="bg-yellow-50 text-yellow-800 border-yellow-200">Medium</Badge>;
      case 'low':
        return <Badge variant="outline" className="bg-blue-50 text-blue-800 border-blue-200">Low</Badge>;
      default:
        return <Badge variant="outline">{priority}</Badge>;
    }
  };
  
  // Get category label
  const getCategoryLabel = (category: string) => {
    switch(category) {
      case 'placement-process':
        return 'Placement Process';
      case 'resume-review':
        return 'Resume Review';
      case 'interview-preparation':
        return 'Interview Preparation';
      case 'company-specific':
        return 'Company Specific';
      case 'technical-issue':
        return 'Technical Issue';
      case 'suggestion':
        return 'Suggestion';
      default:
        return category;
    }
  };
  
  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
  };
  
  // Get time elapsed since date
  const getTimeElapsed = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    
    if (diffInSeconds < 60) {
      return `${diffInSeconds} seconds ago`;
    }
    
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) {
      return `${diffInMinutes} minute${diffInMinutes !== 1 ? 's' : ''} ago`;
    }
    
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) {
      return `${diffInHours} hour${diffInHours !== 1 ? 's' : ''} ago`;
    }
    
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 30) {
      return `${diffInDays} day${diffInDays !== 1 ? 's' : ''} ago`;
    }
    
    const diffInMonths = Math.floor(diffInDays / 30);
    return `${diffInMonths} month${diffInMonths !== 1 ? 's' : ''} ago`;
  };

  return (
    <div className="p-1 sm:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Student Feedback</h1>
          <p className="text-muted-foreground">Manage and respond to student inquiries and feedback</p>
        </div>
        <div className="flex gap-2 mt-4 sm:mt-0">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button>
            <BarChart className="mr-2 h-4 w-4" />
            Analytics
          </Button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0 mb-4">
        <div className="w-full sm:w-auto flex-1 sm:max-w-sm">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search feedbacks..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <div className="flex gap-2 w-full sm:w-auto">
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="placement-process">Placement Process</SelectItem>
              <SelectItem value="resume-review">Resume Review</SelectItem>
              <SelectItem value="interview-preparation">Interview Preparation</SelectItem>
              <SelectItem value="company-specific">Company Specific</SelectItem>
              <SelectItem value="technical-issue">Technical Issue</SelectItem>
              <SelectItem value="suggestion">Suggestion</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="in-progress">In Progress</SelectItem>
              <SelectItem value="resolved">Resolved</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Left Column - Feedback List */}
        <div className="md:col-span-3">
          <Tabs defaultValue="all" onValueChange={setActiveTab} className="mb-6">
            <TabsList>
              <TabsTrigger value="all">All Feedbacks</TabsTrigger>
              <TabsTrigger value="unresolved">Unresolved</TabsTrigger>
              <TabsTrigger value="high-priority">High Priority</TabsTrigger>
              <TabsTrigger value="resolved">Resolved</TabsTrigger>
            </TabsList>
          </Tabs>
          
          {filteredFeedbacks.length > 0 ? (
            <div className="space-y-4">
              {filteredFeedbacks.map((feedback) => (
                <Card 
                  key={feedback.id} 
                  className={`overflow-hidden hover:border-primary/50 transition-colors cursor-pointer ${
                    selectedFeedback?.id === feedback.id ? 'border-primary' : ''
                  }`}
                  onClick={() => setSelectedFeedback(feedback)}
                >
                  <CardContent className="p-0">
                    <div className="flex">
                      <div 
                        className={`w-1 ${
                          feedback.priority === 'high' 
                            ? 'bg-red-500' 
                            : feedback.priority === 'medium' 
                            ? 'bg-yellow-500' 
                            : 'bg-blue-500'
                        }`}
                      ></div>
                      <div className="p-4 flex-1">
                        <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2">
                          <h3 className="font-medium">{feedback.subject}</h3>
                          <div className="flex items-center space-x-2 mt-2 sm:mt-0">
                            {getStatusBadge(feedback.status)}
                            {getPriorityBadge(feedback.priority)}
                          </div>
                        </div>
                        
                        <div className="flex items-center mb-3">
                          <Avatar className="h-6 w-6 mr-2 bg-primary/10">
                            <AvatarFallback className="text-xs">{feedback.avatar}</AvatarFallback>
                          </Avatar>
                          <span className="text-sm font-medium">{feedback.student}</span>
                          <span className="mx-2 text-muted-foreground">•</span>
                          <span className="text-sm text-muted-foreground">{getTimeElapsed(feedback.date)}</span>
                        </div>
                        
                        <p className="text-sm line-clamp-2">{feedback.message}</p>
                        
                        <div className="flex flex-wrap items-center mt-3 gap-2">
                          <Badge variant="outline">{getCategoryLabel(feedback.category)}</Badge>
                          {feedback.company && (
                            <Badge variant="outline" className="bg-blue-50 text-blue-800 border-blue-200">
                              <Building className="h-3 w-3 mr-1" />
                              {feedback.company}
                            </Badge>
                          )}
                          <span className="text-xs text-muted-foreground ml-auto">
                            {feedback.responses.length > 0 ? `${feedback.responses.length} response${feedback.responses.length !== 1 ? 's' : ''}` : 'No responses yet'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="p-6 flex flex-col items-center justify-center">
                <MessageSquare className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">No feedbacks found</h3>
                <p className="text-muted-foreground text-center mb-4">
                  {searchTerm || categoryFilter !== 'all' || statusFilter !== 'all' 
                    ? 'Try adjusting your search or filters' 
                    : 'There are no student feedbacks that match your criteria'}
                </p>
                <Button variant="outline" onClick={() => {
                  setSearchTerm('');
                  setCategoryFilter('all');
                  setStatusFilter('all');
                  setActiveTab('all');
                }}>
                  Clear Filters
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
        
        {/* Right Column - Stats and Summary */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Feedback Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Total Feedbacks</p>
                  <p className="text-2xl font-bold">{feedbacks.length}</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-sm font-medium mb-3">Status Breakdown</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Pending</span>
                    <span className="font-medium">{feedbacks.filter(f => f.status === 'pending').length}</span>
                  </div>
                  <div className="w-full h-2 bg-primary/10 rounded-full">
                    <div 
                      className="h-full bg-yellow-500 rounded-full" 
                      style={{ 
                        width: `${(feedbacks.filter(f => f.status === 'pending').length / feedbacks.length) * 100}%` 
                      }}
                    ></div>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span>In Progress</span>
                    <span className="font-medium">{feedbacks.filter(f => f.status === 'in-progress').length}</span>
                  </div>
                  <div className="w-full h-2 bg-primary/10 rounded-full">
                    <div 
                      className="h-full bg-blue-500 rounded-full" 
                      style={{ 
                        width: `${(feedbacks.filter(f => f.status === 'in-progress').length / feedbacks.length) * 100}%` 
                      }}
                    ></div>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span>Resolved</span>
                    <span className="font-medium">{feedbacks.filter(f => f.status === 'resolved').length}</span>
                  </div>
                  <div className="w-full h-2 bg-primary/10 rounded-full">
                    <div 
                      className="h-full bg-green-500 rounded-full" 
                      style={{ 
                        width: `${(feedbacks.filter(f => f.status === 'resolved').length / feedbacks.length) * 100}%` 
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-sm font-medium mb-3">Priority Breakdown</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>High Priority</span>
                    <span className="font-medium">{feedbacks.filter(f => f.priority === 'high').length}</span>
                  </div>
                  <div className="w-full h-2 bg-primary/10 rounded-full">
                    <div 
                      className="h-full bg-red-500 rounded-full" 
                      style={{ 
                        width: `${(feedbacks.filter(f => f.priority === 'high').length / feedbacks.length) * 100}%` 
                      }}
                    ></div>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span>Medium Priority</span>
                    <span className="font-medium">{feedbacks.filter(f => f.priority === 'medium').length}</span>
                  </div>
                  <div className="w-full h-2 bg-primary/10 rounded-full">
                    <div 
                      className="h-full bg-yellow-500 rounded-full" 
                      style={{ 
                        width: `${(feedbacks.filter(f => f.priority === 'medium').length / feedbacks.length) * 100}%` 
                      }}
                    ></div>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span>Low Priority</span>
                    <span className="font-medium">{feedbacks.filter(f => f.priority === 'low').length}</span>
                  </div>
                  <div className="w-full h-2 bg-primary/10 rounded-full">
                    <div 
                      className="h-full bg-blue-500 rounded-full" 
                      style={{ 
                        width: `${(feedbacks.filter(f => f.priority === 'low').length / feedbacks.length) * 100}%` 
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Category Distribution</CardTitle>
              <CardDescription>Feedback by category</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {['placement-process', 'company-specific', 'resume-review', 'technical-issue', 'interview-preparation', 'suggestion'].map((category) => {
                  const count = feedbacks.filter(f => f.category === category).length;
                  const percentage = Math.round((count / feedbacks.length) * 100) || 0;
                  
                  return (
                    <div key={category}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">{getCategoryLabel(category)}</span>
                        <span className="text-sm">{count} ({percentage}%)</span>
                      </div>
                      <Progress value={percentage} className="h-2" />
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {feedbacks
                  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                  .slice(0, 5)
                  .map((feedback) => (
                    <div key={feedback.id} className="flex items-start space-x-3">
                      <Avatar className="h-8 w-8 bg-primary/10">
                        <AvatarFallback className="text-xs">{feedback.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">{feedback.student}</p>
                        <p className="text-xs text-muted-foreground">{feedback.subject}</p>
                        <p className="text-xs text-muted-foreground">{getTimeElapsed(feedback.date)}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Selected Feedback Detail View */}
      {selectedFeedback && (
        <Dialog open={!!selectedFeedback} onOpenChange={(open) => !open && setSelectedFeedback(null)}>
          <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <div className="flex items-center justify-between">
                <DialogTitle>{selectedFeedback.subject}</DialogTitle>
                <div className="flex items-center space-x-2">
                  {getStatusBadge(selectedFeedback.status)}
                  {getPriorityBadge(selectedFeedback.priority)}
                </div>
              </div>
              <DialogDescription>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge variant="outline">{getCategoryLabel(selectedFeedback.category)}</Badge>
                  {selectedFeedback.tags.map((tag: string, index: number) => (
                    <Badge key={index} variant="outline">{tag}</Badge>
                  ))}
                  {selectedFeedback.company && (
                    <Badge variant="outline" className="bg-blue-50 text-blue-800 border-blue-200">
                      <Building className="h-3 w-3 mr-1" />
                      {selectedFeedback.company}
                    </Badge>
                  )}
                </div>
              </DialogDescription>
            </DialogHeader>
            
            <div className="py-4">
              <div className="flex items-start space-x-3 mb-6">
                <Avatar className="h-10 w-10 bg-primary/10">
                  <AvatarFallback>{selectedFeedback.avatar}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center">
                    <h3 className="font-medium">{selectedFeedback.student}</h3>
                    <span className="mx-2 text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">{formatDate(selectedFeedback.date)}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{selectedFeedback.email}</p>
                  <div className="bg-muted p-3 rounded-md mt-3">
                    <p className="text-sm whitespace-pre-line">{selectedFeedback.message}</p>
                  </div>
                </div>
              </div>
              
              {selectedFeedback.responses.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-sm font-medium mb-3">Responses</h3>
                  <div className="space-y-4">
                    {selectedFeedback.responses.map((response: any, index: number) => (
                      <div key={index} className="flex items-start space-x-3">
                        <Avatar className="h-8 w-8 bg-primary/10">
                          <AvatarFallback>{response.responder === 'Placement Officer' ? 'PO' : selectedFeedback.avatar}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center">
                            <h4 className="text-sm font-medium">{response.responder}</h4>
                            <span className="mx-2 text-muted-foreground">•</span>
                            <span className="text-xs text-muted-foreground">{formatDate(response.date)}</span>
                          </div>
                          <div className={`p-3 rounded-md mt-2 ${response.responder === 'Placement Officer' ? 'bg-primary/5' : 'bg-muted'}`}>
                            <p className="text-sm">{response.message}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {selectedFeedback.status !== 'resolved' && (
                <div className="pt-4 border-t">
                  <h3 className="text-sm font-medium mb-3">Add Response</h3>
                  <Textarea 
                    placeholder="Type your response here..." 
                    className="min-h-[100px] mb-3"
                  />
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-2">
                        <Label htmlFor="update-status">Status:</Label>
                        <Select defaultValue={selectedFeedback.status}>
                          <SelectTrigger id="update-status" className="w-[140px]">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pending">Pending</SelectItem>
                            <SelectItem value="in-progress">In Progress</SelectItem>
                            <SelectItem value="resolved">Resolved</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Label htmlFor="update-priority">Priority:</Label>
                        <Select defaultValue={selectedFeedback.priority}>
                          <SelectTrigger id="update-priority" className="w-[120px]">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="high">High</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="low">Low</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <Button>
                      <Reply className="mr-2 h-4 w-4" />
                      Send Response
                    </Button>
                  </div>
                </div>
              )}
              
              {selectedFeedback.status === 'resolved' && selectedFeedback.satisfaction === null && (
                <div className="pt-4 border-t">
                  <h3 className="text-sm font-medium mb-3">Feedback Resolution</h3>
                  <p className="text-sm text-muted-foreground mb-3">This feedback has been marked as resolved. You can update the satisfaction level if the student has provided feedback on the resolution.</p>
                  <div className="flex items-center space-x-4">
                    <Button variant="outline" className="flex items-center space-x-2">
                      <ThumbsUp className="h-4 w-4 text-green-500" />
                      <span>Mark as Satisfied</span>
                    </Button>
                    <Button variant="outline" className="flex items-center space-x-2">
                      <ThumbsDown className="h-4 w-4 text-red-500" />
                      <span>Mark as Unsatisfied</span>
                    </Button>
                  </div>
                </div>
              )}
              
              {selectedFeedback.satisfaction && (
                <div className="pt-4 border-t">
                  <h3 className="text-sm font-medium mb-3">Resolution Feedback</h3>
                  <div className={`flex items-center p-3 rounded-md ${
                    selectedFeedback.satisfaction === 'satisfied' 
                      ? 'bg-green-50 text-green-800' 
                      : 'bg-red-50 text-red-800'
                  }`}>
                    {selectedFeedback.satisfaction === 'satisfied' ? (
                      <>
                        <ThumbsUp className="h-5 w-5 mr-2" />
                        <span>Student was satisfied with the resolution</span>
                      </>
                    ) : (
                      <>
                        <ThumbsDown className="h-5 w-5 mr-2" />
                        <span>Student was not satisfied with the resolution</span>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
            
            <DialogFooter className="flex justify-between sm:justify-between">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    <MoreHorizontal className="mr-2 h-4 w-4" />
                    More Actions
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    View Student Profile
                  </DropdownMenuItem>
                  {selectedFeedback.company && (
                    <DropdownMenuItem>
                      <Building className="mr-2 h-4 w-4" />
                      View Company Details
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuItem>
                    <FileText className="mr-2 h-4 w-4" />
                    Create Report
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-600">
                    <XCircle className="mr-2 h-4 w-4" />
                    Delete Feedback
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button onClick={() => setSelectedFeedback(null)}>Close</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
      
      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Feedback Management Resources</CardTitle>
            <CardDescription>Guides and tools to help manage student feedback effectively</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Response Templates</CardTitle>
                </CardHeader>
                <CardContent className="pt-2">
                  <p className="text-sm text-muted-foreground mb-3">Common response templates for different types of student inquiries</p>
                  <ul className="text-sm space-y-1">
                    <li className="flex items-start">
                      <Star className="h-3 w-3 text-primary mt-1 mr-2" />
                      Technical issue resolution
                    </li>
                    <li className="flex items-start">
                      <Star className="h-3 w-3 text-primary mt-1 mr-2" />
                      Company clarification requests
                    </li>
                    <li className="flex items-start">
                      <Star className="h-3 w-3 text-primary mt-1 mr-2" />
                      Resume feedback follow-ups
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button size="sm" className="w-full">View Templates</Button>
                </CardFooter>
              </Card>
              
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Feedback Guidelines</CardTitle>
                </CardHeader>
                <CardContent className="pt-2">
                  <p className="text-sm text-muted-foreground mb-3">Best practices for managing student feedback effectively</p>
                  <ul className="text-sm space-y-1">
                    <li className="flex items-start">
                      <Star className="h-3 w-3 text-primary mt-1 mr-2" />
                      Response time standards
                    </li>
                    <li className="flex items-start">
                      <Star className="h-3 w-3 text-primary mt-1 mr-2" />
                      Escalation procedures
                    </li>
                    <li className="flex items-start">
                      <Star className="h-3 w-3 text-primary mt-1 mr-2" />
                      Quality of response metrics
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button size="sm" className="w-full">View Guidelines</Button>
                </CardFooter>
              </Card>
              
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Training Resources</CardTitle>
                </CardHeader>
                <CardContent className="pt-2">
                  <p className="text-sm text-muted-foreground mb-3">Training materials for placement team on handling student feedback</p>
                  <ul className="text-sm space-y-1">
                    <li className="flex items-start">
                      <Star className="h-3 w-3 text-primary mt-1 mr-2" />
                      Communication skills
                    </li>
                    <li className="flex items-start">
                      <Star className="h-3 w-3 text-primary mt-1 mr-2" />
                      Technical issue troubleshooting
                    </li>
                    <li className="flex items-start">
                      <Star className="h-3 w-3 text-primary mt-1 mr-2" />
                      Conflict resolution
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button size="sm" className="w-full">View Resources</Button>
                </CardFooter>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}