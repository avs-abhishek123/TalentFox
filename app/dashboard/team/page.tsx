'use client';

import { useState } from 'react';
import { 
  UserPlus, 
  Search, 
  Plus, 
  Edit, 
  Trash, 
  MoreHorizontal, 
  Phone, 
  Mail, 
  UserCircle, 
  Users,
  Building,
  GraduationCap,
  Calendar,
  ClipboardList,
  BarChart,
  CheckCircle2,
  AlertCircle,
  Clock,
  MessageSquare,
  Download
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
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
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
import { Separator } from '@/components/ui/separator';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';

export default function PlacementTeamPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('all');
  const [roleFilter, setRoleFilter] = useState('all');
  const [showAddMemberDialog, setShowAddMemberDialog] = useState(false);
  const [selectedMember, setSelectedMember] = useState<any>(null);
  
  // Sample team members data
  const teamMembers = [
    {
      id: 1,
      name: 'Raj Kumar',
      role: 'Placement Head',
      department: 'Placement Office',
      email: 'raj.kumar@example.edu',
      phone: '+91 9876543210',
      avatar: 'RK',
      bio: 'Dr. Raj Kumar has over 15 years of experience in academia-industry partnerships and heads the placement cell. He has been instrumental in securing partnerships with top companies globally.',
      education: [
        { degree: 'Ph.D. in Management', institution: 'IIM Ahmedabad', year: '2008' },
        { degree: 'MBA', institution: 'Delhi University', year: '2002' },
      ],
      responsibilities: [
        'Overall management of the placement cell',
        'Strategic partnerships with industry leaders',
        'Final decision-making for placement initiatives'
      ],
      stats: {
        companiesManaged: 48,
        studentsPlaced: 865,
        eventsOrganized: 24
      },
      recentActivity: [
        { action: 'Created partnership with Google', date: '2025-02-24T14:30:00' },
        { action: 'Finalized campus recruitment schedule', date: '2025-02-20T10:15:00' },
        { action: 'Conducted placement team meeting', date: '2025-02-18T09:45:00' }
      ],
      socialMedia: {
        linkedin: 'https://linkedin.com/in/rajkumar',
        twitter: 'https://twitter.com/rajkumar'
      },
      joinedOn: '2020-07-01'
    },
    {
      id: 2,
      name: 'Priya Singh',
      role: 'Corporate Relations Manager',
      department: 'Placement Office',
      email: 'priya.singh@example.edu',
      phone: '+91 9876543211',
      avatar: 'PS',
      bio: 'Priya Singh manages corporate relationships and is the key point of contact for industry partners. She has a strong background in business development and relationship management.',
      education: [
        { degree: 'MBA', institution: 'XLRI Jamshedpur', year: '2015' },
        { degree: 'B.Tech in Electronics', institution: 'NIT Warangal', year: '2012' },
      ],
      responsibilities: [
        'Manage relationships with partner companies',
        'Coordinate campus recruitment drives',
        'Develop new industry partnerships'
      ],
      stats: {
        companiesManaged: 32,
        studentsPlaced: 425,
        eventsOrganized: 18
      },
      recentActivity: [
        { action: 'Finalized Microsoft recruitment schedule', date: '2025-02-22T11:30:00' },
        { action: 'Conducted pre-placement talk for Amazon', date: '2025-02-19T15:00:00' },
        { action: 'Met with IBM HR team', date: '2025-02-15T14:00:00' }
      ],
      socialMedia: {
        linkedin: 'https://linkedin.com/in/priyasingh'
      },
      joinedOn: '2021-05-15'
    },
    {
      id: 3,
      name: 'Sanjay Mehta',
      role: 'Student Development Officer',
      department: 'Placement Office',
      email: 'sanjay.mehta@example.edu',
      phone: '+91 9876543212',
      avatar: 'SM',
      bio: 'Sanjay Mehta focuses on student preparation and skill development. He works directly with students to improve their employability and interview readiness.',
      education: [
        { degree: 'M.Tech in Computer Science', institution: 'IIT Delhi', year: '2016' },
        { degree: 'B.Tech in Computer Science', institution: 'NIT Trichy', year: '2014' },
      ],
      responsibilities: [
        'Conduct resume building workshops',
        'Organize mock interviews and skill development sessions',
        'Provide career counseling to students'
      ],
      stats: {
        companiesManaged: 12,
        studentsPlaced: 320,
        eventsOrganized: 36
      },
      recentActivity: [
        { action: 'Conducted resume writing workshop', date: '2025-02-23T10:00:00' },
        { action: 'Organized mock interviews for CSE students', date: '2025-02-20T14:00:00' },
        { action: 'Updated interview preparation resources', date: '2025-02-18T11:30:00' }
      ],
      socialMedia: {
        linkedin: 'https://linkedin.com/in/sanjaymehta',
        twitter: 'https://twitter.com/sanjaymehta'
      },
      joinedOn: '2022-01-10'
    },
    {
      id: 4,
      name: 'Neha Patel',
      role: 'Technical Coordinator',
      department: 'Computer Science',
      email: 'neha.patel@example.edu',
      phone: '+91 9876543213',
      avatar: 'NP',
      bio: 'Prof. Neha Patel is the technical coordinator for the Computer Science department. She bridges academic knowledge with industry requirements to better prepare students.',
      education: [
        { degree: 'Ph.D. in Computer Science', institution: 'IISc Bangalore', year: '2014' },
        { degree: 'M.Tech in Computer Science', institution: 'IIT Bombay', year: '2009' },
      ],
      responsibilities: [
        'Coordinate technical aspects of placement for CS students',
        'Develop specialized training programs for technical roles',
        'Advise on curriculum alignment with industry needs'
      ],
      stats: {
        companiesManaged: 22,
        studentsPlaced: 210,
        eventsOrganized: 14
      },
      recentActivity: [
        { action: 'Conducted technical interview workshop', date: '2025-02-24T15:30:00' },
        { action: 'Updated coding challenge preparation resources', date: '2025-02-21T11:00:00' },
        { action: 'Met with Google engineers for curriculum feedback', date: '2025-02-17T14:30:00' }
      ],
      socialMedia: {
        linkedin: 'https://linkedin.com/in/nehapatel'
      },
      joinedOn: '2021-08-15'
    },
    {
      id: 5,
      name: 'Vikram Bhat',
      role: 'Industry Liaison Officer',
      department: 'Placement Office',
      email: 'vikram.bhat@example.edu',
      phone: '+91 9876543214',
      avatar: 'VB',
      bio: 'Vikram Bhat works as a liaison between industry and academia. He has extensive experience in industry and brings practical knowledge to the placement process.',
      education: [
        { degree: 'MBA', institution: 'ISB Hyderabad', year: '2015' },
        { degree: 'B.Tech in Mechanical Engineering', institution: 'VIT Vellore', year: '2010' },
      ],
      responsibilities: [
        'Identify emerging industry trends and skill requirements',
        'Organize industry-academia interaction sessions',
        'Develop long-term industry partnerships'
      ],
      stats: {
        companiesManaged: 28,
        studentsPlaced: 285,
        eventsOrganized: 20
      },
      recentActivity: [
        { action: 'Organized industry-academia panel discussion', date: '2025-02-22T16:00:00' },
        { action: 'Conducted industry trends workshop', date: '2025-02-19T14:30:00' },
        { action: 'Met with industry advisory board', date: '2025-02-15T10:00:00' }
      ],
      socialMedia: {
        linkedin: 'https://linkedin.com/in/vikrambhat',
        twitter: 'https://twitter.com/vikrambhat'
      },
      joinedOn: '2022-04-05'
    },
    {
      id: 6,
      name: 'Arjun Reddy',
      role: 'Department Coordinator',
      department: 'Electrical Engineering',
      email: 'arjun.reddy@example.edu',
      phone: '+91 9876543215',
      avatar: 'AR',
      bio: 'Prof. Arjun Reddy is responsible for coordinating placement activities for the Electrical Engineering department. He has strong industry connections in the power and electronics sectors.',
      education: [
        { degree: 'Ph.D. in Electrical Engineering', institution: 'IIT Madras', year: '2012' },
        { degree: 'M.Tech in Power Systems', institution: 'NIT Warangal', year: '2007' },
      ],
      responsibilities: [
        'Coordinate placement activities for EE students',
        'Develop specialized training for electrical engineering roles',
        'Liaise with companies in the power and electronics sectors'
      ],
      stats: {
        companiesManaged: 18,
        studentsPlaced: 165,
        eventsOrganized: 12
      },
      recentActivity: [
        { action: 'Organized specialized workshop for EE students', date: '2025-02-21T11:30:00' },
        { action: 'Coordinated with Schneider Electric for campus visit', date: '2025-02-18T15:00:00' },
        { action: 'Updated EE-specific placement resources', date: '2025-02-14T09:30:00' }
      ],
      socialMedia: {
        linkedin: 'https://linkedin.com/in/arjunreddy'
      },
      joinedOn: '2021-11-20'
    },
    {
      id: 7,
      name: 'Meera Gupta',
      role: 'Department Coordinator',
      department: 'Mechanical Engineering',
      email: 'meera.gupta@example.edu',
      phone: '+91 9876543216',
      avatar: 'MG',
      bio: 'Dr. Meera Gupta coordinates placement activities for the Mechanical Engineering department. She specializes in connecting students with opportunities in manufacturing, automotive, and aerospace industries.',
      education: [
        { degree: 'Ph.D. in Mechanical Engineering', institution: 'IIT Kanpur', year: '2013' },
        { degree: 'M.Tech in Manufacturing Systems', institution: 'IIT Bombay', year: '2008' },
      ],
      responsibilities: [
        'Coordinate placement activities for ME students',
        'Develop industry relationships in manufacturing sector',
        'Organize specialized training for mechanical engineering roles'
      ],
      stats: {
        companiesManaged: 15,
        studentsPlaced: 145,
        eventsOrganized: 10
      },
      recentActivity: [
        { action: 'Organized industry visit to automotive plant', date: '2025-02-23T09:00:00' },
        { action: 'Conducted workshop on CAD/CAM skills', date: '2025-02-19T14:00:00' },
        { action: 'Met with aerospace industry representatives', date: '2025-02-16T11:00:00' }
      ],
      socialMedia: {
        linkedin: 'https://linkedin.com/in/meeragupta'
      },
      joinedOn: '2022-07-10'
    },
    {
      id: 8,
      name: 'Aditya Sharma',
      role: 'Student Placement Coordinator',
      department: 'Student Council',
      email: 'aditya.sharma@example.edu',
      phone: '+91 9876543217',
      avatar: 'AS',
      bio: 'Aditya is a final year Computer Science student serving as the student placement coordinator. He acts as a liaison between students and the placement office, helping address student concerns and facilitating communication.',
      education: [
        { degree: 'B.Tech in Computer Science (ongoing)', institution: 'Current Institution', year: '2021-2025' },
      ],
      responsibilities: [
        'Represent student interests to the placement office',
        'Communicate placement-related information to students',
        'Help organize student participation in placement activities'
      ],
      stats: {
        companiesManaged: 0,
        studentsPlaced: 0,
        eventsOrganized: 8
      },
      recentActivity: [
        { action: 'Organized student briefing for Google recruitment', date: '2025-02-24T16:00:00' },
        { action: 'Collected student feedback on placement portal', date: '2025-02-21T15:30:00' },
        { action: 'Helped coordinate pre-placement talks', date: '2025-02-17T10:00:00' }
      ],
      socialMedia: {
        linkedin: 'https://linkedin.com/in/adityasharma'
      },
      joinedOn: '2024-05-15'
    }
  ];
  
  // Unique departments and roles for filtering
  const departments = Array.from(new Set(teamMembers.map(member => member.department)));
  const roles = Array.from(new Set(teamMembers.map(member => member.role)));
  
  // Filter team members based on search term, department and role filters
  const filteredMembers = teamMembers.filter(member => {
    const matchesSearch = 
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      member.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.department.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDepartment = departmentFilter === 'all' || member.department === departmentFilter;
    const matchesRole = roleFilter === 'all' || member.role === roleFilter;
    
    return matchesSearch && matchesDepartment && matchesRole;
  });
  
  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
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
          <h1 className="text-2xl font-bold tracking-tight">Placement Team</h1>
          <p className="text-muted-foreground">Members of the placement cell and department coordinators</p>
        </div>
        <div className="flex gap-2 mt-4 sm:mt-0">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Team Info
          </Button>
          <Dialog open={showAddMemberDialog} onOpenChange={setShowAddMemberDialog}>
            <DialogTrigger asChild>
              <Button>
                <UserPlus className="mr-2 h-4 w-4" />
                Add Team Member
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[550px]">
              <DialogHeader>
                <DialogTitle>Add New Team Member</DialogTitle>
                <DialogDescription>
                  Add a new member to the placement team
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="member-name">Full Name</Label>
                  <Input id="member-name" placeholder="e.g. John Doe" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="member-role">Role</Label>
                    <Select>
                      <SelectTrigger id="member-role">
                        <SelectValue placeholder="Select role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="head">Placement Head</SelectItem>
                        <SelectItem value="manager">Corporate Relations Manager</SelectItem>
                        <SelectItem value="officer">Student Development Officer</SelectItem>
                        <SelectItem value="coordinator">Department Coordinator</SelectItem>
                        <SelectItem value="liaison">Industry Liaison Officer</SelectItem>
                        <SelectItem value="student">Student Placement Coordinator</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="member-department">Department</Label>
                    <Select>
                      <SelectTrigger id="member-department">
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="placement-office">Placement Office</SelectItem>
                        <SelectItem value="computer-science">Computer Science</SelectItem>
                        <SelectItem value="electrical">Electrical Engineering</SelectItem>
                        <SelectItem value="mechanical">Mechanical Engineering</SelectItem>
                        <SelectItem value="civil">Civil Engineering</SelectItem>
                        <SelectItem value="student-council">Student Council</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="member-email">Email</Label>
                    <Input id="member-email" type="email" placeholder="e.g. john.doe@example.edu" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="member-phone">Phone</Label>
                    <Input id="member-phone" placeholder="e.g. +91 9876543210" />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="member-bio">Bio</Label>
                  <Textarea 
                    id="member-bio" 
                    placeholder="Brief description about the team member..." 
                    rows={3}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="member-responsibilities">Responsibilities (one per line)</Label>
                  <Textarea 
                    id="member-responsibilities" 
                    placeholder="List of responsibilities..." 
                    rows={3}
                  />
                </div>
                <div className="grid gap-2">
                  <Label>Education</Label>
                  <div className="space-y-2">
                    <div className="grid grid-cols-2 gap-2">
                      <Input placeholder="Degree" />
                      <Input placeholder="Institution" />
                    </div>
                    <div className="flex justify-end">
                      <Button variant="outline" size="sm">
                        <Plus className="h-4 w-4 mr-1" />
                        Add Education
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setShowAddMemberDialog(false)}>Cancel</Button>
                <Button onClick={() => setShowAddMemberDialog(false)}>Add Member</Button>
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
              placeholder="Search team members..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <div className="flex gap-2 w-full sm:w-auto">
          <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Department" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Departments</SelectItem>
              {departments.map((department) => (
                <SelectItem key={department} value={department}>
                  {department}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Select value={roleFilter} onValueChange={setRoleFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Roles</SelectItem>
              {roles.map((role) => (
                <SelectItem key={role} value={role}>
                  {role}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {filteredMembers.length > 0 ? (
          filteredMembers.map((member) => (
            <Card 
              key={member.id} 
              className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => setSelectedMember(member)}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="h-12 w-12 mr-4 bg-primary/10">
                    <AvatarFallback className="font-semibold">{member.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm">
                    <Building className="h-4 w-4 text-muted-foreground mr-2" />
                    <span>{member.department}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground mr-2" />
                    <a href={`mailto:${member.email}`} className="text-primary hover:underline" onClick={(e) => e.stopPropagation()}>
                      {member.email}
                    </a>
                  </div>
                  <div className="flex items-center text-sm">
                    <Phone className="h-4 w-4 text-muted-foreground mr-2" />
                    <span>{member.phone}</span>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                  {member.bio}
                </p>
                
                <div className="flex justify-between items-center text-xs text-muted-foreground">
                  <span>Joined {formatDate(member.joinedOn)}</span>
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={(e) => {
                        e.stopPropagation();
                        setSelectedMember(member);
                      }}>
                        <UserCircle className="mr-2 h-4 w-4" />
                        View Profile
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={(e) => e.stopPropagation()}>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit Member
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={(e) => e.stopPropagation()}>
                        <Mail className="mr-2 h-4 w-4" />
                        Send Email
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem 
                        className="text-red-600" 
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Trash className="mr-2 h-4 w-4" />
                        Remove
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="col-span-full">
            <Card>
              <CardContent className="p-6 flex flex-col items-center justify-center">
                <UserCircle className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">No team members found</h3>
                <p className="text-muted-foreground text-center mb-4">
                  {searchTerm || departmentFilter !== 'all' || roleFilter !== 'all' 
                    ? 'Try adjusting your search or filters' 
                    : 'Start by adding team members to the placement cell'}
                </p>
                <Button onClick={() => setShowAddMemberDialog(true)}>
                  <UserPlus className="mr-2 h-4 w-4" />
                  Add Team Member
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
      
      {/* Team overview cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Team Overview</CardTitle>
            <CardDescription>Composition of the placement team</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Placement Office Staff</span>
                  <span className="text-sm font-medium">
                    {teamMembers.filter(m => m.department === 'Placement Office').length}
                  </span>
                </div>
                <Progress 
                  value={(teamMembers.filter(m => m.department === 'Placement Office').length / teamMembers.length) * 100} 
                  className="h-2" 
                />
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Department Coordinators</span>
                  <span className="text-sm font-medium">
                    {teamMembers.filter(m => 
                      m.department !== 'Placement Office' && 
                      m.department !== 'Student Council'
                    ).length}
                  </span>
                </div>
                <Progress 
                  value={(teamMembers.filter(m => 
                    m.department !== 'Placement Office' && 
                    m.department !== 'Student Council'
                  ).length / teamMembers.length) * 100} 
                  className="h-2" 
                />
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Student Representatives</span>
                  <span className="text-sm font-medium">
                    {teamMembers.filter(m => m.department === 'Student Council').length}
                  </span>
                </div>
                <Progress 
                  value={(teamMembers.filter(m => m.department === 'Student Council').length / teamMembers.length) * 100} 
                  className="h-2" 
                />
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t">
              <h3 className="text-sm font-medium mb-3">Department Representation</h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-primary/5 p-2 rounded text-center">
                  <div className="text-xl font-bold">3</div>
                  <p className="text-xs text-muted-foreground">Engineering</p>
                </div>
                <div className="bg-primary/5 p-2 rounded text-center">
                  <div className="text-xl font-bold">1</div>
                  <p className="text-xs text-muted-foreground">Computer Science</p>
                </div>
                <div className="bg-primary/5 p-2 rounded text-center">
                  <div className="text-xl font-bold">1</div>
                  <p className="text-xs text-muted-foreground">Electrical</p>
                </div>
                <div className="bg-primary/5 p-2 rounded text-center">
                  <div className="text-xl font-bold">1</div>
                  <p className="text-xs text-muted-foreground">Mechanical</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Team Performance</CardTitle>
            <CardDescription>Key metrics and achievements</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-green-100 text-green-800 flex items-center justify-center mr-4">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Students Placed</div>
                  <div className="text-xl font-bold">865</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center mr-4">
                  <Building className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Partner Companies</div>
                  <div className="text-xl font-bold">48</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-purple-100 text-purple-800 flex items-center justify-center mr-4">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Events Organized</div>
                  <div className="text-xl font-bold">124</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center mr-4">
                  <ClipboardList className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Training Sessions</div>
                  <div className="text-xl font-bold">86</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest team activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {teamMembers
                .flatMap(member => member.recentActivity.map(activity => ({
                  ...activity,
                  member: member.name,
                  avatar: member.avatar
                })))
                .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                .slice(0, 5)
                .map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Avatar className="h-8 w-8 bg-primary/10">
                      <AvatarFallback className="text-xs">{activity.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{activity.member}</p>
                      <p className="text-xs">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">{getTimeElapsed(activity.date)}</p>
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Team Performance Statistics */}
      <div className="mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Team Performance Statistics</CardTitle>
            <CardDescription>Key metrics for the placement team</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-sm font-medium mb-3">Students Placed by Team Member</h3>
                <div className="space-y-3">
                  {teamMembers
                    .filter(m => m.stats.studentsPlaced > 0)
                    .sort((a, b) => b.stats.studentsPlaced - a.stats.studentsPlaced)
                    .slice(0, 5)
                    .map((member, index) => (
                      <div key={index} className="flex items-center">
                        <Avatar className="h-6 w-6 mr-3 bg-primary/10">
                          <AvatarFallback className="text-xs">{member.avatar}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between mb-1">
                            <p className="text-sm font-medium truncate">{member.name}</p>
                            <p className="text-sm">{member.stats.studentsPlaced}</p>
                          </div>
                          <Progress value={(member.stats.studentsPlaced / 865) * 100} className="h-1.5" />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-3">Companies Managed by Team Member</h3>
                <div className="space-y-3">
                  {teamMembers
                    .filter(m => m.stats.companiesManaged > 0)
                    .sort((a, b) => b.stats.companiesManaged - a.stats.companiesManaged)
                    .slice(0, 5)
                    .map((member, index) => (
                      <div key={index} className="flex items-center">
                        <Avatar className="h-6 w-6 mr-3 bg-primary/10">
                          <AvatarFallback className="text-xs">{member.avatar}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between mb-1">
                            <p className="text-sm font-medium truncate">{member.name}</p>
                            <p className="text-sm">{member.stats.companiesManaged}</p>
                          </div>
                          <Progress value={(member.stats.companiesManaged / 48) * 100} className="h-1.5" />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-3">Events Organized by Team Member</h3>
                <div className="space-y-3">
                  {teamMembers
                    .filter(m => m.stats.eventsOrganized > 0)
                    .sort((a, b) => b.stats.eventsOrganized - a.stats.eventsOrganized)
                    .slice(0, 5)
                    .map((member, index) => (
                      <div key={index} className="flex items-center">
                        <Avatar className="h-6 w-6 mr-3 bg-primary/10">
                          <AvatarFallback className="text-xs">{member.avatar}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between mb-1">
                            <p className="text-sm font-medium truncate">{member.name}</p>
                            <p className="text-sm">{member.stats.eventsOrganized}</p>
                          </div>
                          <Progress value={(member.stats.eventsOrganized / 36) * 100} className="h-1.5" />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Member Details Dialog */}
      {selectedMember && (
        <Dialog open={!!selectedMember} onOpenChange={(open) => !open && setSelectedMember(null)}>
          <DialogContent className="sm:max-w-[700px]">
            <DialogHeader>
              <DialogTitle>Team Member Profile</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-4">
              <div className="flex flex-col items-center text-center">
                <Avatar className="h-24 w-24 mb-4 bg-primary/10">
                  <AvatarFallback className="text-2xl font-semibold">{selectedMember.avatar}</AvatarFallback>
                </Avatar>
                <h2 className="text-xl font-semibold">{selectedMember.name}</h2>
                <p className="text-sm text-muted-foreground">{selectedMember.role}</p>
                <p className="text-sm mt-1">{selectedMember.department}</p>
                
                <div className="mt-4 w-full space-y-2">
                  <Button variant="outline" className="w-full text-sm" asChild>
                    <a href={`mailto:${selectedMember.email}`}>
                      <Mail className="mr-2 h-4 w-4" />
                      Email
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full text-sm" asChild>
                    <a href={`tel:${selectedMember.phone}`}>
                      <Phone className="mr-2 h-4 w-4" />
                      Call
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full text-sm">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Message
                  </Button>
                </div>
                
                <div className="mt-4 flex space-x-2">
                  {selectedMember.socialMedia.linkedin && (
                    <Button variant="ghost" size="icon" asChild>
                      <a href={selectedMember.socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
                        <svg className="h-5 w-5 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                        </svg>
                      </a>
                    </Button>
                  )}
                  {selectedMember.socialMedia.twitter && (
                    <Button variant="ghost" size="icon" asChild>
                      <a href={selectedMember.socialMedia.twitter} target="_blank" rel="noopener noreferrer">
                        <svg className="h-5 w-5 text-[#1DA1F2]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        </svg>
                      </a>
                    </Button>
                  )}
                </div>
              </div>
              
              <div className="md:col-span-2">
                <Tabs defaultValue="bio">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="bio">Bio</TabsTrigger>
                    <TabsTrigger value="responsibilities">Responsibilities</TabsTrigger>
                    <TabsTrigger value="education">Education</TabsTrigger>
                    <TabsTrigger value="activity">Activity</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="bio" className="mt-4">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-sm font-medium mb-2">Biography</h3>
                        <p className="text-sm">{selectedMember.bio}</p>
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <h3 className="text-sm font-medium mb-2">Contact Information</h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-1">
                            <p className="text-xs text-muted-foreground">Email</p>
                            <p className="text-sm">{selectedMember.email}</p>
                          </div>
                          <div className="space-y-1">
                            <p className="text-xs text-muted-foreground">Phone</p>
                            <p className="text-sm">{selectedMember.phone}</p>
                          </div>
                        </div>
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <h3 className="text-sm font-medium mb-2">Key Metrics</h3>
                        <div className="grid grid-cols-3 gap-4">
                          <div className="bg-primary/5 p-3 rounded-lg">
                            <div className="text-xl font-bold">{selectedMember.stats.studentsPlaced}</div>
                            <p className="text-xs text-muted-foreground">Students Placed</p>
                          </div>
                          <div className="bg-primary/5 p-3 rounded-lg">
                            <div className="text-xl font-bold">{selectedMember.stats.companiesManaged}</div>
                            <p className="text-xs text-muted-foreground">Companies Managed</p>
                          </div>
                          <div className="bg-primary/5 p-3 rounded-lg">
                            <div className="text-xl font-bold">{selectedMember.stats.eventsOrganized}</div>
                            <p className="text-xs text-muted-foreground">Events Organized</p>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-sm font-medium mb-2">Team Member Since</h3>
                        <p className="text-sm">{formatDate(selectedMember.joinedOn)}</p>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="responsibilities" className="mt-4">
                    <div>
                      <h3 className="text-sm font-medium mb-4">Key Responsibilities</h3>
                      <ul className="space-y-2">
                        {selectedMember.responsibilities.map((responsibility: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                            <span className="text-sm">{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="education" className="mt-4">
                    <div>
                      <h3 className="text-sm font-medium mb-4">Educational Background</h3>
                      <div className="space-y-4">
                      {selectedMember.education.map((edu: { degree: string; institution: string; year: string }, index: number) => (
                          <div key={index} className="border-l-2 border-primary/20 pl-4 pb-4">
                            <div className="flex items-center">
                              <GraduationCap className="h-5 w-5 text-primary mr-2" />
                              <h4 className="font-medium">{edu.degree}</h4>
                            </div>
                            <p className="text-sm mt-1">{edu.institution}</p>
                            <p className="text-sm text-muted-foreground">{edu.year}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="activity" className="mt-4">
                    <div>
                      <h3 className="text-sm font-medium mb-4">Recent Activities</h3>
                      <div className="space-y-4">
                        {selectedMember.recentActivity.map((activity: { action: string; date: string }, index: number) => (
                          <div key={index} className="flex items-start space-x-3">
                            <div className="bg-primary/10 p-2 rounded-full">
                              <Clock className="h-4 w-4 text-primary" />
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between items-center">
                                <p className="text-sm font-medium">{activity.action}</p>
                                <span className="text-xs text-muted-foreground">{getTimeElapsed(activity.date)}</span>
                              </div>
                              <p className="text-xs text-muted-foreground">{formatDate(activity.date)}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
            <DialogFooter>
              <div className="flex justify-between w-full">
                <Button variant="outline">
                  <Edit className="mr-2 h-4 w-4" />
                  Edit Profile
                </Button>
                <Button onClick={() => setSelectedMember(null)}>Close</Button>
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
      
      {/* Organization Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Placement Team Structure</CardTitle>
          <CardDescription>Organizational hierarchy and team structure</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          <div className="p-4 bg-muted rounded-lg w-full flex items-center justify-center">
            <div className="flex-col items-center text-center">
              <BarChart className="h-12 w-12 text-primary mb-4" />
              <p className="text-sm text-muted-foreground mb-2">
                Organization chart visualization would appear here showing the team hierarchy
              </p>
              <p className="text-xs text-muted-foreground max-w-md">
                This chart would display how the placement team is structured, from the Placement Head down to department coordinators and student representatives
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Team Management Tools</CardTitle>
            <CardDescription>Resources for managing the placement team</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Task Assignment</CardTitle>
                </CardHeader>
                <CardContent className="pt-2">
                  <p className="text-sm text-muted-foreground mb-3">Assign and track tasks for team members</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Active Tasks</span>
                      <Badge variant="outline">24</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Pending Approval</span>
                      <Badge variant="outline">8</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Completed This Week</span>
                      <Badge variant="outline">16</Badge>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button size="sm" className="w-full">Manage Tasks</Button>
                </CardFooter>
              </Card>
              
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Team Schedule</CardTitle>
                </CardHeader>
                <CardContent className="pt-2">
                  <p className="text-sm text-muted-foreground mb-3">Manage team meetings and availability</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Upcoming Meetings</span>
                      <Badge variant="outline">5</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Team Availability</span>
                      <Badge variant="outline" className="bg-green-100 text-green-800">85%</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Schedule Conflicts</span>
                      <Badge variant="outline">2</Badge>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button size="sm" className="w-full">View Schedule</Button>
                </CardFooter>
              </Card>
              
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Performance Tracking</CardTitle>
                </CardHeader>
                <CardContent className="pt-2">
                  <p className="text-sm text-muted-foreground mb-3">Monitor team performance metrics</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Team Performance</span>
                      <Badge variant="outline" className="bg-green-100 text-green-800">92%</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Monthly Reviews</span>
                      <Badge variant="outline">8</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Achievement Rate</span>
                      <Badge variant="outline">94%</Badge>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button size="sm" className="w-full">View Performance</Button>
                </CardFooter>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Team Training & Development</CardTitle>
            <CardDescription>Resources for team member growth and skill development</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <GraduationCap className="h-6 w-6 text-primary mr-3" />
                    <h3 className="font-medium">Industry Knowledge Training</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Regular training sessions to keep the placement team updated with industry trends, technologies, and job market requirements.
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span>Last session: February 18, 2025</span>
                    <Badge variant="outline">Monthly</Badge>
                  </div>
                </div>
                
                <div className="border rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <Users className="h-6 w-6 text-primary mr-3" />
                    <h3 className="font-medium">Communication Skills Workshop</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Interactive workshops focusing on improving communication with students, companies, and other stakeholders.
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span>Last session: February 10, 2025</span>
                    <Badge variant="outline">Quarterly</Badge>
                  </div>
                </div>
                
                <div className="border rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <Building className="h-6 w-6 text-primary mr-3" />
                    <h3 className="font-medium">Corporate Relations Management</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Training on effective management of corporate relationships, negotiation skills, and partnership development.
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span>Next session: March 15, 2025</span>
                    <Badge variant="outline">Quarterly</Badge>
                  </div>
                </div>
                
                <div className="border rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <ClipboardList className="h-6 w-6 text-primary mr-3" />
                    <h3 className="font-medium">Placement Process Management</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Comprehensive training on managing all aspects of the placement process, from job posting to offer acceptance.
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span>Next session: March 5, 2025</span>
                    <Badge variant="outline">Bi-annual</Badge>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center mt-2">
                <Button variant="outline">
                  <Calendar className="mr-2 h-4 w-4" />
                  View Training Calendar
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}