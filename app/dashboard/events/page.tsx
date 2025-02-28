'use client';

import { useState } from 'react';
import { 
  Calendar as CalendarIcon, 
  Plus, 
  Search, 
  ChevronLeft, 
  ChevronRight, 
  MoreHorizontal, 
  Edit, 
  Trash, 
  Users, 
  Building, 
  MapPin, 
  Clock, 
  Check, 
  X, 
  Filter, 
  Download,
  CalendarDays,
  ListFilter
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function EventsCalendarPage() {
  const [viewMode, setViewMode] = useState("month");
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showAddEventDialog, setShowAddEventDialog] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("all");
  
  // Sample events data
  const events = [
    {
      id: 1,
      title: "Tech Career Fair",
      type: "career-fair",
      company: "Multiple Companies",
      date: new Date(2025, 2, 15), // March 15, 2025
      startTime: "10:00 AM",
      endTime: "4:00 PM",
      location: "Main Auditorium",
      description: "Annual technology career fair with participation from 25+ tech companies. Open to all students.",
      attendees: 450,
      status: "upcoming"
    },
    {
      id: 2,
      title: "Google On-Campus Drive",
      type: "recruitment",
      company: "Google",
      date: new Date(2025, 2, 22), // March 22, 2025
      startTime: "9:00 AM",
      endTime: "5:00 PM",
      location: "Computer Science Building",
      description: "Google's on-campus recruitment drive for software engineering positions.",
      attendees: 120,
      status: "upcoming"
    },
    {
      id: 3,
      title: "Resume Workshop",
      type: "workshop",
      company: "Career Services",
      date: new Date(2025, 2, 10), // March 10, 2025
      startTime: "2:00 PM",
      endTime: "4:00 PM",
      location: "Library Conference Room",
      description: "Workshop on resume building and optimization for tech roles.",
      attendees: 75,
      status: "upcoming"
    },
    {
      id: 4,
      title: "Microsoft Info Session",
      type: "info-session",
      company: "Microsoft",
      date: new Date(2025, 2, 5), // March 5, 2025
      startTime: "11:00 AM",
      endTime: "1:00 PM",
      location: "Virtual (Zoom)",
      description: "Information session about Microsoft's work culture and job opportunities.",
      attendees: 200,
      status: "upcoming"
    },
    {
      id: 5,
      title: "Interview Preparation Workshop",
      type: "workshop",
      company: "Career Services",
      date: new Date(2025, 2, 18), // March 18, 2025
      startTime: "3:00 PM",
      endTime: "5:00 PM",
      location: "Room 102, Engineering Building",
      description: "Workshop focusing on technical interview preparation.",
      attendees: 80,
      status: "upcoming"
    },
    {
      id: 6,
      title: "Amazon Recruitment Drive",
      type: "recruitment",
      company: "Amazon",
      date: new Date(2025, 1, 25), // February 25, 2025
      startTime: "10:00 AM",
      endTime: "6:00 PM",
      location: "Main Auditorium",
      description: "Amazon's recruitment drive for Software Development Engineer roles.",
      attendees: 150,
      status: "completed"
    },
    {
      id: 7,
      title: "LinkedIn Profile Workshop",
      type: "workshop",
      company: "Career Services",
      date: new Date(2025, 1, 20), // February 20, 2025
      startTime: "1:00 PM",
      endTime: "3:00 PM",
      location: "Library Conference Room",
      description: "Learn how to optimize your LinkedIn profile for job searching.",
      attendees: 60,
      status: "completed"
    },
    {
      id: 8,
      title: "IBM Technical Talk",
      type: "info-session",
      company: "IBM",
      date: new Date(2025, 3, 5), // April 5, 2025
      startTime: "2:00 PM",
      endTime: "4:00 PM",
      location: "Lecture Hall 3",
      description: "Technical talk on quantum computing and AI advancements.",
      attendees: 90,
      status: "upcoming"
    }
  ];
  
  // Filter events based on search and filter type
  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        event.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterType === "all" || event.type === filterType || event.status === filterType;
    
    return matchesSearch && matchesFilter;
  });
  
  // Get events for the selected date
  const getEventsForDate = (date: Date) => {
    return events.filter(event => 
      event.date.getDate() === date.getDate() && 
      event.date.getMonth() === date.getMonth() && 
      event.date.getFullYear() === date.getFullYear()
    );
  };
  
  // Generate days for the month view
  const generateMonthDays = () => {
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    
    // Previous month days to fill the first week
    const prevMonthDays = [];
    const prevMonthLastDay = new Date(currentYear, currentMonth, 0).getDate();
    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      prevMonthDays.push({
        date: new Date(currentYear, currentMonth - 1, prevMonthLastDay - i),
        isCurrentMonth: false
      });
    }
    
    // Current month days
    const currentMonthDays = [];
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(currentYear, currentMonth, i);
      currentMonthDays.push({
        date,
        isCurrentMonth: true,
        events: getEventsForDate(date)
      });
    }
    
    // Next month days to fill the last week
    const totalDaysSoFar = prevMonthDays.length + currentMonthDays.length;
    const nextMonthDays = [];
    for (let i = 1; i <= (42 - totalDaysSoFar); i++) {
      nextMonthDays.push({
        date: new Date(currentYear, currentMonth + 1, i),
        isCurrentMonth: false
      });
    }
    
    return [...prevMonthDays, ...currentMonthDays, ...nextMonthDays];
  };
  
  const monthDays = generateMonthDays();
  
  // Go to previous month
  const goToPrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };
  
  // Go to next month
  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };
  
  // Format date for display
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };
  
  // Get event type badge
  const getEventTypeBadge = (type: string) => {
    switch(type) {
      case 'career-fair':
        return <Badge className="bg-blue-100 text-blue-800">Career Fair</Badge>;
      case 'recruitment':
        return <Badge className="bg-green-100 text-green-800">Recruitment</Badge>;
      case 'workshop':
        return <Badge className="bg-purple-100 text-purple-800">Workshop</Badge>;
      case 'info-session':
        return <Badge className="bg-amber-100 text-amber-800">Info Session</Badge>;
      default:
        return <Badge>{type}</Badge>;
    }
  };
  
  // Get event status badge
  const getEventStatusBadge = (status: string) => {
    switch(status) {
      case 'upcoming':
        return <Badge className="bg-blue-100 text-blue-800">Upcoming</Badge>;
      case 'completed':
        return <Badge className="bg-gray-100 text-gray-800">Completed</Badge>;
      case 'cancelled':
        return <Badge className="bg-red-100 text-red-800">Cancelled</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };
  
  // Get month name
  const getMonthName = (month: number) => {
    const date = new Date();
    date.setMonth(month);
    return date.toLocaleString('default', { month: 'long' });
  };
  
  return (
    <div className="p-1 sm:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Events Calendar</h1>
          <p className="text-muted-foreground">Manage placement events, workshops, and recruitment drives</p>
        </div>
        <div className="flex gap-2 mt-4 sm:mt-0">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Events
          </Button>
          <Dialog open={showAddEventDialog} onOpenChange={setShowAddEventDialog}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Event
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[550px]">
              <DialogHeader>
                <DialogTitle>Add New Event</DialogTitle>
                <DialogDescription>
                  Create a new event in the placement calendar
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="event-title">Event Title</Label>
                  <Input id="event-title" placeholder="e.g. Tech Career Fair" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="event-type">Event Type</Label>
                    <Select>
                      <SelectTrigger id="event-type">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="career-fair">Career Fair</SelectItem>
                        <SelectItem value="recruitment">Recruitment Drive</SelectItem>
                        <SelectItem value="workshop">Workshop</SelectItem>
                        <SelectItem value="info-session">Info Session</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="event-company">Company/Organizer</Label>
                    <Input id="event-company" placeholder="e.g. Google or Career Services" />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="event-date">Date</Label>
                    <Input id="event-date" type="date" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="event-start-time">Start Time</Label>
                    <Input id="event-start-time" type="time" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="event-end-time">End Time</Label>
                    <Input id="event-end-time" type="time" />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="event-location">Location</Label>
                  <Input id="event-location" placeholder="e.g. Main Auditorium or Virtual (Zoom)" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="event-description">Description</Label>
                  <Input id="event-description" placeholder="Event details..." className="h-20" />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setShowAddEventDialog(false)}>Cancel</Button>
                <Button onClick={() => setShowAddEventDialog(false)}>Add Event</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Tabs defaultValue="month" onValueChange={(value) => setViewMode(value)} className="w-[300px]">
            <TabsList>
              <TabsTrigger value="month">
                <CalendarIcon className="mr-2 h-4 w-4" />
                Month
              </TabsTrigger>
              <TabsTrigger value="week">
                <CalendarDays className="mr-2 h-4 w-4" />
                Week
              </TabsTrigger>
              <TabsTrigger value="list">
                <ListFilter className="mr-2 h-4 w-4" />
                List
              </TabsTrigger>
            </TabsList>
          </Tabs>
          
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter events" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Events</SelectItem>
              <SelectItem value="upcoming">Upcoming</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="career-fair">Career Fairs</SelectItem>
              <SelectItem value="recruitment">Recruitment Drives</SelectItem>
              <SelectItem value="workshop">Workshops</SelectItem>
              <SelectItem value="info-session">Info Sessions</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="relative w-full sm:w-auto">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search events..."
            className="pl-8 w-full sm:w-[250px]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between p-4 pb-2">
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="icon" onClick={goToPrevMonth}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <h2 className="text-lg font-semibold">
              {getMonthName(currentMonth)} {currentYear}
            </h2>
            <Button variant="outline" size="icon" onClick={goToNextMonth}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          <Button variant="outline" onClick={() => {
            setCurrentMonth(new Date().getMonth());
            setCurrentYear(new Date().getFullYear());
          }}>
            Today
          </Button>
        </CardHeader>
        <CardContent className="p-4">
          {viewMode === "month" && (
            <div>
              <div className="grid grid-cols-7 gap-px border-b pb-2 mb-2">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
                  <div key={index} className="text-center text-sm font-medium text-muted-foreground">
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-px">
                {monthDays.map((day, index) => {
                  const dayEvents = events.filter(event => 
                    event.date.getDate() === day.date.getDate() && 
                    event.date.getMonth() === day.date.getMonth() && 
                    event.date.getFullYear() === day.date.getFullYear()
                  );
                  
                  return (
                    <div 
                      key={index} 
                      className={`min-h-[100px] p-1.5 border border-gray-200 ${
                        day.isCurrentMonth 
                          ? 'bg-white' 
                          : 'bg-gray-50 text-muted-foreground'
                      } ${
                        day.date.getDate() === new Date().getDate() && 
                        day.date.getMonth() === new Date().getMonth() && 
                        day.date.getFullYear() === new Date().getFullYear() 
                          ? 'border-primary' 
                          : ''
                      }`}
                      onClick={() => setSelectedDate(day.date)}
                    >
                      <div className="text-right text-sm font-medium mb-1">
                        {day.date.getDate()}
                      </div>
                      <div className="space-y-1">
                        {dayEvents.slice(0, 3).map((event, eIndex) => (
                          <div 
                            key={eIndex} 
                            className={`text-xs p-1 rounded-sm truncate ${
                              event.type === 'career-fair' 
                                ? 'bg-blue-100 text-blue-800' 
                                : event.type === 'recruitment' 
                                ? 'bg-green-100 text-green-800' 
                                : event.type === 'workshop' 
                                ? 'bg-purple-100 text-purple-800' 
                                : 'bg-amber-100 text-amber-800'
                            }`}
                          >
                            {event.title}
                          </div>
                        ))}
                        {dayEvents.length > 3 && (
                          <div className="text-xs text-center text-muted-foreground">
                            +{dayEvents.length - 3} more
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          
          {viewMode === "list" && (
            <div className="space-y-4">
              {filteredEvents.length > 0 ? (
                filteredEvents.map((event) => (
                  <Card key={event.id} className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="flex flex-col sm:flex-row">
                        <div className={`w-full sm:w-2 ${
                          event.type === 'career-fair' 
                            ? 'bg-blue-500' 
                            : event.type === 'recruitment' 
                            ? 'bg-green-500' 
                            : event.type === 'workshop' 
                            ? 'bg-purple-500' 
                            : 'bg-amber-500'
                        }`}></div>
                        <div className="p-4 flex-1">
                          <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2">
                            <h3 className="text-lg font-semibold">{event.title}</h3>
                            <div className="flex items-center space-x-2 mt-2 sm:mt-0">
                              {getEventTypeBadge(event.type)}
                              {getEventStatusBadge(event.status)}
                            </div>
                          </div>
                          <div className="flex flex-col sm:flex-row text-sm text-muted-foreground mb-3 gap-2 sm:gap-4">
                            <div className="flex items-center">
                              <Building className="h-4 w-4 mr-1.5" />
                              {event.company}
                            </div>
                            <div className="flex items-center">
                              <CalendarIcon className="h-4 w-4 mr-1.5" />
                              {formatDate(event.date)}
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1.5" />
                              {event.startTime} - {event.endTime}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1.5" />
                              {event.location}
                            </div>
                          </div>
                          <p className="text-sm mb-3">{event.description}</p>
                          <div className="flex items-center text-sm">
                            <Users className="h-4 w-4 mr-1.5 text-muted-foreground" />
                            <span className="text-muted-foreground">{event.attendees} attendees</span>
                          </div>
                        </div>
                        <div className="p-4 flex flex-row sm:flex-col justify-end">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>
                                <Edit className="mr-2 h-4 w-4" />
                                Edit Event
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Users className="mr-2 h-4 w-4" />
                                Manage Attendees
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-red-600">
                                <Trash className="mr-2 h-4 w-4" />
                                Delete Event
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="flex flex-col items-center justify-center p-8 text-center">
                  <CalendarIcon className="h-12 w-12 text-muted-foreground mb-3" />
                  <h3 className="text-lg font-medium mb-1">No events found</h3>
                  <p className="text-muted-foreground mb-4">
                    {searchQuery || filterType !== "all" 
                      ? "Try changing your search or filter criteria" 
                      : "Start by adding an event to your calendar"}
                  </p>
                  <Button onClick={() => setShowAddEventDialog(true)}>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Event
                  </Button>
                </div>
              )}
            </div>
          )}
          
          {viewMode === "week" && (
            <div className="space-y-4">
              <div className="text-center p-8">
                <CalendarDays className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
                <h3 className="text-lg font-medium mb-1">Week View Coming Soon</h3>
                <p className="text-muted-foreground mb-4">
                  We're working on this feature. Try using the month or list view in the meantime.
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
      
      {selectedDate && (
        <Dialog open={!!selectedDate} onOpenChange={() => setSelectedDate(null)}>
          <DialogContent className="sm:max-w-[550px]">
            <DialogHeader>
              <DialogTitle>Events on {formatDate(selectedDate)}</DialogTitle>
            </DialogHeader>
            <div className="py-4">
              {getEventsForDate(selectedDate).length > 0 ? (
                <div className="space-y-4">
                  {getEventsForDate(selectedDate).map((event) => (
                    <div key={event.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium">{event.title}</h3>
                        {getEventTypeBadge(event.type)}
                      </div>
                      <div className="flex flex-col space-y-1 text-sm text-muted-foreground mb-2">
                        <div className="flex items-center">
                          <Building className="h-4 w-4 mr-1.5" />
                          {event.company}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1.5" />
                          {event.startTime} - {event.endTime}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1.5" />
                          {event.location}
                        </div>
                      </div>
                      <p className="text-sm mb-2">{event.description}</p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center text-sm">
                          <Users className="h-4 w-4 mr-1.5 text-muted-foreground" />
                          <span className="text-muted-foreground">{event.attendees} attendees</span>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4 mr-1" />
                            Edit
                          </Button>
                          <Button size="sm">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center p-4">
                  <p className="text-muted-foreground mb-4">No events scheduled for this date.</p>
                  <Button onClick={() => setShowAddEventDialog(true)}>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Event
                  </Button>
                </div>
              )}
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setSelectedDate(null)}>Close</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
      
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
            <CardDescription>Events scheduled in the next 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {events
                .filter(event => 
                  event.status === 'upcoming' && 
                  new Date(event.date).getTime() <= new Date().getTime() + (30 * 24 * 60 * 60 * 1000)
                )
                .slice(0, 4)
                .map(event => (
                  <div key={event.id} className="flex items-start space-x-3">
                    <div className={`w-1 h-full self-stretch rounded-full ${
                      event.type === 'career-fair' 
                        ? 'bg-blue-500' 
                        : event.type === 'recruitment' 
                        ? 'bg-green-500' 
                        : event.type === 'workshop' 
                        ? 'bg-purple-500' 
                        : 'bg-amber-500'
                    }`}></div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium">{event.title}</h4>
                      <div className="flex items-center mt-1 text-xs text-muted-foreground">
                        <CalendarIcon className="h-3 w-3 mr-1" />
                        {formatDate(event.date)}
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View All Upcoming Events
            </Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Event Analytics</CardTitle>
            <CardDescription>Statistics about your events</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Total Events</p>
                  <p className="text-2xl font-bold">{events.length}</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <CalendarIcon className="h-6 w-6 text-primary" />
                </div>
              </div>
              
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <p>Upcoming Events</p>
                  <p className="font-medium">{events.filter(e => e.status === 'upcoming').length}</p>
                </div>
                <div className="w-full h-2 bg-primary/10 rounded-full">
                  <div 
                    className="h-full bg-primary rounded-full" 
                    style={{ 
                      width: `${(events.filter(e => e.status === 'upcoming').length / events.length) * 100}%` 
                    }}
                  ></div>
                </div>
              </div>
              
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <p>Completed Events</p>
                  <p className="font-medium">{events.filter(e => e.status === 'completed').length}</p>
                </div>
                <div className="w-full h-2 bg-primary/10 rounded-full">
                  <div 
                    className="h-full bg-primary rounded-full" 
                    style={{ 
                      width: `${(events.filter(e => e.status === 'completed').length / events.length) * 100}%` 
                    }}
                  ></div>
                </div>
              </div>
              
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <p>Total Attendance</p>
                  <p className="font-medium">{events.reduce((acc, event) => acc + event.attendees, 0)}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Top Recruiters</CardTitle>
            <CardDescription>Companies with the most events</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-xs font-bold text-blue-700">G</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Google</p>
                    <p className="text-xs text-muted-foreground">2 events</p>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-800">120 attendees</Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                    <span className="text-xs font-bold text-purple-700">A</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Amazon</p>
                    <p className="text-xs text-muted-foreground">1 event</p>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-800">150 attendees</Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center">
                    <span className="text-xs font-bold text-amber-700">M</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Microsoft</p>
                    <p className="text-xs text-muted-foreground">1 event</p>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-800">200 attendees</Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-xs font-bold text-green-700">I</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">IBM</p>
                    <p className="text-xs text-muted-foreground">1 event</p>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-800">90 attendees</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}