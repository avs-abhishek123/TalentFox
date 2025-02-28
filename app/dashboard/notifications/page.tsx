'use client';

import { useState } from 'react';
import { 
  Bell, 
  Search, 
  Filter, 
  ChevronDown, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  Building, 
  FileText, 
  MessageSquare, 
  User, 
  Link as LinkIcon,
  X,
  MoreHorizontal,
  Settings,
  Download,
  AlertCircle,
  BadgeCheck,
  Mail,
  Trash,
  Megaphone
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
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function NotificationsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [activeTab, setActiveTab] = useState('all');
  const [showAnnouncementDialog, setShowAnnouncementDialog] = useState(false);
  const [showSettingsDialog, setShowSettingsDialog] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState<any>(null);
  
  // Sample notifications data
  const notifications = [
    {
      id: 1,
      title: 'Google recruitment drive registration open',
      message: 'Registration for Google recruitment drive is now open. Eligible students from Computer Science, IT, and Electronics departments can apply by March 10, 2025.',
      type: 'recruitment',
      date: '2025-02-28T09:30:00',
      read: false,
      company: 'Google',
      link: '/dashboard/jobs?id=123',
      icon: Building
    },
    {
      id: 2,
      title: 'Resume feedback available',
      message: 'Your resume has been reviewed. Check the feedback and suggested improvements to enhance your resume.',
      type: 'resume',
      date: '2025-02-27T14:45:00',
      read: true,
      link: '/dashboard/resume-builder',
      icon: FileText
    },
    {
      id: 3,
      title: 'Scheduled: Technical Interview Workshop',
      message: 'You are registered for the Technical Interview Workshop scheduled on March 5, 2025 from 2:00 PM to 4:00 PM at the Main Seminar Hall.',
      type: 'event',
      date: '2025-02-27T10:00:00',
      read: false,
      link: '/dashboard/events?id=456',
      icon: Calendar
    },
    {
      id: 4,
      title: 'Microsoft application status updated',
      message: 'Your application for the Software Engineer position at Microsoft has been shortlisted for the technical interview round.',
      type: 'application',
      date: '2025-02-26T16:20:00',
      read: true,
      company: 'Microsoft',
      link: '/dashboard/applications?id=789',
      icon: CheckCircle2
    },
    {
      id: 5,
      title: 'New resource available: System Design Interview Preparation',
      message: 'A new resource on System Design Interview Preparation has been added to the Resource Hub. Check it out to improve your system design interview skills.',
      type: 'resource',
      date: '2025-02-25T11:30:00',
      read: false,
      link: '/dashboard/resources?id=012',
      icon: LinkIcon
    },
    {
      id: 6,
      title: 'Important: Pre-placement talk by Amazon',
      message: 'Amazon will be conducting a pre-placement talk on March 2, 2025 from 10:00 AM to 12:00 PM. Attendance is mandatory for all registered students.',
      type: 'announcement',
      date: '2025-02-24T15:00:00',
      read: true,
      company: 'Amazon',
      link: '/dashboard/events?id=345',
      icon: Megaphone
    },
    {
      id: 7,
      title: 'Feedback response received',
      message: 'The placement cell has responded to your feedback regarding the resume review process. Check your feedback history for details.',
      type: 'feedback',
      date: '2025-02-23T13:15:00',
      read: false,
      link: '/dashboard/feedback?id=678',
      icon: MessageSquare
    },
    {
      id: 8,
      title: 'Profile completion reminder',
      message: 'Your profile is 85% complete. Add your project details and certifications to complete your profile for better visibility to recruiters.',
      type: 'profile',
      date: '2025-02-22T09:45:00',
      read: true,
      link: '/dashboard/profile',
      icon: User
    },
    {
      id: 9,
      title: 'Reminder: IBM aptitude test tomorrow',
      message: 'This is a reminder that the IBM aptitude test is scheduled for tomorrow, February 28, 2025, from 9:00 AM to 11:00 AM. Make sure you are prepared and log in 15 minutes before the test starts.',
      type: 'reminder',
      date: '2025-02-27T16:00:00',
      read: false,
      company: 'IBM',
      link: '/dashboard/applications?id=901',
      icon: Clock
    },
    {
      id: 10,
      title: 'Application deadline approaching: Goldman Sachs',
      message: 'The application deadline for Goldman Sachs Software Engineer position is approaching. Make sure to complete your application by March 1, 2025.',
      type: 'deadline',
      date: '2025-02-26T10:30:00',
      read: true,
      company: 'Goldman Sachs',
      link: '/dashboard/jobs?id=234',
      icon: AlertCircle
    },
    {
      id: 11,
      title: 'Congratulations! Accenture interview cleared',
      message: 'Congratulations! You have cleared the technical interview round for Accenture. The HR interview is scheduled for March 3, 2025.',
      type: 'success',
      date: '2025-02-25T17:15:00',
      read: false,
      company: 'Accenture',
      link: '/dashboard/applications?id=567',
      icon: BadgeCheck
    },
    {
      id: 12,
      title: 'New message from Placement Officer',
      message: 'You have received a new message from the Placement Officer regarding your query about the upcoming campus recruitment season.',
      type: 'message',
      date: '2025-02-24T11:45:00',
      read: true,
      link: '/dashboard/contact?id=890',
      icon: Mail
    }
  ];
  
  // Get notification types for filtering
  const notificationTypes = Array.from(new Set(notifications.map(notification => notification.type)));
  
  // Filter notifications based on search term, type filter, and active tab
  const filteredNotifications = notifications.filter(notification => {
    const matchesSearch = 
      notification.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      notification.message.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = typeFilter === 'all' || notification.type === typeFilter;
    
    const matchesTab = 
      activeTab === 'all' || 
      (activeTab === 'unread' && !notification.read) ||
      (activeTab === 'read' && notification.read);
    
    return matchesSearch && matchesType && matchesTab;
  });
  
  // Get notification type label
  const getNotificationTypeLabel = (type: string) => {
    const typeLabels: {[key: string]: string} = {
      'recruitment': 'Recruitment Drive',
      'resume': 'Resume Feedback',
      'event': 'Event',
      'application': 'Application Update',
      'resource': 'New Resource',
      'announcement': 'Announcement',
      'feedback': 'Feedback Response',
      'profile': 'Profile Update',
      'reminder': 'Reminder',
      'deadline': 'Deadline Alert',
      'success': 'Success',
      'message': 'Message'
    };
    
    return typeLabels[type] || type;
  };
  
  // Get notification type badge
  const getNotificationTypeBadge = (type: string) => {
    const typeColors: {[key: string]: string} = {
      'recruitment': 'bg-blue-100 text-blue-800',
      'resume': 'bg-purple-100 text-purple-800',
      'event': 'bg-green-100 text-green-800',
      'application': 'bg-sky-100 text-sky-800',
      'resource': 'bg-indigo-100 text-indigo-800',
      'announcement': 'bg-amber-100 text-amber-800',
      'feedback': 'bg-pink-100 text-pink-800',
      'profile': 'bg-slate-100 text-slate-800',
      'reminder': 'bg-orange-100 text-orange-800',
      'deadline': 'bg-red-100 text-red-800',
      'success': 'bg-emerald-100 text-emerald-800',
      'message': 'bg-teal-100 text-teal-800'
    };
    
    return (
      <Badge className={typeColors[type] || 'bg-gray-100 text-gray-800'}>
        {getNotificationTypeLabel(type)}
      </Badge>
    );
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
  
  const markAsRead = (id: number) => {
    // In a real application, this would update the read status in the database
    console.log(`Marking notification ${id} as read`);
  };
  
  const markAllAsRead = () => {
    // In a real application, this would update all notifications as read
    console.log('Marking all notifications as read');
  };

  const deleteNotification = (id: number) => {
    // In a real application, this would delete the notification
    console.log(`Deleting notification ${id}`);
  };

  const openNotificationDetails = (notification: any) => {
    setSelectedNotification(notification);
  };

  return (
    <div className="p-1 sm:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Notifications</h1>
          <p className="text-muted-foreground">Stay updated with the latest placement activities and updates</p>
        </div>
        <div className="flex gap-2 mt-4 sm:mt-0">
          <Dialog open={showSettingsDialog} onOpenChange={setShowSettingsDialog}>
            <DialogTrigger asChild>
              <Button variant="outline">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[550px]">
              <DialogHeader>
                <DialogTitle>Notification Settings</DialogTitle>
                <DialogDescription>
                  Customize your notification preferences
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div>
                  <h3 className="text-sm font-medium mb-3">Email Notifications</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="email-recruitment" className="flex-1">Recruitment Drives</Label>
                      <Switch id="email-recruitment" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="email-application" className="flex-1">Application Updates</Label>
                      <Switch id="email-application" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="email-events" className="flex-1">Events and Workshops</Label>
                      <Switch id="email-events" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="email-feedback" className="flex-1">Resume Feedback</Label>
                      <Switch id="email-feedback" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="email-announcements" className="flex-1">General Announcements</Label>
                      <Switch id="email-announcements" defaultChecked />
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-sm font-medium mb-3">Push Notifications</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="push-recruitment" className="flex-1">Recruitment Drives</Label>
                      <Switch id="push-recruitment" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="push-application" className="flex-1">Application Updates</Label>
                      <Switch id="push-application" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="push-events" className="flex-1">Events and Workshops</Label>
                      <Switch id="push-events" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="push-feedback" className="flex-1">Resume Feedback</Label>
                      <Switch id="push-feedback" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="push-announcements" className="flex-1">General Announcements</Label>
                      <Switch id="push-announcements" defaultChecked />
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-sm font-medium mb-3">Notification Frequency</h3>
                  <Select defaultValue="immediate">
                    <SelectTrigger>
                      <SelectValue placeholder="Select frequency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="immediate">Immediate</SelectItem>
                      <SelectItem value="hourly">Hourly Digest</SelectItem>
                      <SelectItem value="daily">Daily Digest</SelectItem>
                      <SelectItem value="weekly">Weekly Digest</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setShowSettingsDialog(false)}>Cancel</Button>
                <Button onClick={() => setShowSettingsDialog(false)}>Save Preferences</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          
          <Dialog open={showAnnouncementDialog} onOpenChange={setShowAnnouncementDialog}>
            <DialogTrigger asChild>
              <Button>
                <Megaphone className="mr-2 h-4 w-4" />
                Create Announcement
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[550px]">
              <DialogHeader>
                <DialogTitle>Create New Announcement</DialogTitle>
                <DialogDescription>
                  Create a new announcement for students
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="announcement-title">Announcement Title</Label>
                  <Input id="announcement-title" placeholder="e.g. Important: Pre-placement talk by Google" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="announcement-message">Message</Label>
                  <Textarea 
                    id="announcement-message" 
                    placeholder="Enter announcement details..." 
                    rows={3}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="announcement-type">Type</Label>
                    <Select defaultValue="announcement">
                      <SelectTrigger id="announcement-type">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="announcement">General Announcement</SelectItem>
                        <SelectItem value="recruitment">Recruitment Drive</SelectItem>
                        <SelectItem value="event">Event</SelectItem>
                        <SelectItem value="deadline">Deadline Alert</SelectItem>
                        <SelectItem value="reminder">Reminder</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="announcement-company">Related Company (Optional)</Label>
                    <Input id="announcement-company" placeholder="e.g. Google" />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="announcement-link">Related Link (Optional)</Label>
                  <Input id="announcement-link" placeholder="e.g. /dashboard/events?id=123" />
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="send-email" className="rounded border-gray-300" />
                  <Label htmlFor="send-email">Also send as email to students</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="urgent" className="rounded border-gray-300" />
                  <Label htmlFor="urgent">Mark as urgent</Label>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setShowAnnouncementDialog(false)}>Cancel</Button>
                <Button onClick={() => setShowAnnouncementDialog(false)}>Send Announcement</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0 mb-4">
        <div className="w-full sm:w-auto flex-1 sm:max-w-sm">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search notifications..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <div className="flex gap-2 w-full sm:w-auto">
          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              {notificationTypes.map(type => (
                <SelectItem key={type} value={type}>{getNotificationTypeLabel(type)}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button onClick={markAllAsRead} variant="outline">
            Mark All as Read
          </Button>
        </div>
      </div>
      
      {/* Tabs Navigation */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-4">
        <TabsList className="w-full sm:w-auto">
          <TabsTrigger value="all" className="flex-1">
            All
            <Badge variant="outline" className="ml-2">{notifications.length}</Badge>
          </TabsTrigger>
          <TabsTrigger value="unread" className="flex-1">
            Unread
            <Badge variant="outline" className="ml-2">
              {notifications.filter(notification => !notification.read).length}
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="read" className="flex-1">
            Read
            <Badge variant="outline" className="ml-2">
              {notifications.filter(notification => notification.read).length}
            </Badge>
          </TabsTrigger>
        </TabsList>
      </Tabs>
      
      {/* Notification List */}
      <div className="space-y-4">
        {filteredNotifications.length > 0 ? (
          filteredNotifications.map(notification => (
            <Card key={notification.id} className={`transition-all hover:shadow-md ${!notification.read ? 'border-l-4 border-l-primary' : ''}`}>
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-full mt-1">
                    <notification.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 space-y-1" onClick={() => openNotificationDetails(notification)} style={{ cursor: 'pointer' }}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <h4 className="font-medium">{notification.title}</h4>
                      <div className="flex flex-wrap gap-2 items-center">
                        {getNotificationTypeBadge(notification.type)}
                        <span className="text-xs text-muted-foreground">{getTimeElapsed(notification.date)}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">{notification.message}</p>
                    <div className="flex flex-wrap items-center gap-2 mt-2">
                      {notification.company && (
                        <Badge variant="outline" className="bg-slate-50">
                          <Building className="h-3 w-3 mr-1" />
                          {notification.company}
                        </Badge>
                      )}
                      <span className="text-xs text-muted-foreground">{formatDate(notification.date)}</span>
                    </div>
                  </div>
                  <div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => markAsRead(notification.id)}>
                          <CheckCircle2 className="mr-2 h-4 w-4" />
                          {notification.read ? 'Mark as unread' : 'Mark as read'}
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => deleteNotification(notification.id)} className="text-red-600">
                          <Trash className="mr-2 h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="text-center py-10">
            <Bell className="h-12 w-12 mx-auto text-gray-300 mb-4" />
            <h3 className="font-medium text-gray-900">No notifications</h3>
            <p className="text-gray-500 mt-1">
              {searchTerm || typeFilter !== 'all' 
                ? 'No notifications match your current filters.' 
                : 'You have no notifications at this time.'}
            </p>
          </div>
        )}
      </div>
      
      {/* Notification Detail Dialog */}
      {selectedNotification && (
        <Dialog open={!!selectedNotification} onOpenChange={(open) => !open && setSelectedNotification(null)}>
          <DialogContent className="sm:max-w-[550px]">
            <DialogHeader>
              <div className="flex items-center gap-2">
                <selectedNotification.icon className="h-5 w-5 text-primary" />
                <DialogTitle>{selectedNotification.title}</DialogTitle>
              </div>
              <div className="flex items-center gap-2 mt-2">
                {getNotificationTypeBadge(selectedNotification.type)}
                <span className="text-xs">{formatDate(selectedNotification.date)}</span>
              </div>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <p>{selectedNotification.message}</p>
              
              {selectedNotification.company && (
                <div className="flex items-center text-sm">
                  <Building className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>{selectedNotification.company}</span>
                </div>
              )}
              
              {selectedNotification.link && (
                <div className="mt-4">
                  <Button variant="outline" className="w-full" asChild>
                    <a href={selectedNotification.link}>
                      <LinkIcon className="mr-2 h-4 w-4" />
                      View Details
                    </a>
                  </Button>
                </div>
              )}
            </div>
            <DialogFooter>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => deleteNotification(selectedNotification.id)}
                className="text-red-600 hover:bg-red-50 hover:text-red-700"
              >
                <Trash className="mr-2 h-4 w-4" />
                Delete
              </Button>
              <Button onClick={() => setSelectedNotification(null)}>Close</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}