'use client';

import { useState } from 'react';
import {
  Search,
  Filter,
  MapPin,
  Building,
  Briefcase,
  GraduationCap,
  Calendar,
  BarChart4,
  MessageSquare,
  User,
  Users,
  Download,
  Link,
  ExternalLink,
  Mail,
  Phone
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
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function AlumniNetworkPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [industryFilter, setIndustryFilter] = useState('all');
  const [graduationYearFilter, setGraduationYearFilter] = useState('all');
  const [locationFilter, setLocationFilter] = useState('all');
  const [connectionFilter, setConnectionFilter] = useState('all');
  const [selectedAlumni, setSelectedAlumni] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('directory');
  
  // Sample alumni data
  const alumni = [
    {
      id: 1,
      name: 'Emily Johnson',
      avatar: '/avatars/emily.jpg',
      graduation_year: 2022,
      degree: 'B.Tech in Computer Science',
      company: 'Google',
      title: 'Software Engineer',
      location: 'Bangalore, India',
      industry: 'Technology',
      skills: ['Machine Learning', 'Full Stack Development', 'Python', 'ReactJS'],
      connections: 12,
      linkedin: 'https://linkedin.com/in/emilyjohnson',
      email: 'emily.johnson@example.com',
      phone: '+91 9876543210',
      is_mentor: true,
      achievements: ['Google Code Jam Finalist', 'ACM ICPC Regional Winner'],
      open_to_referrals: true,
      last_active: '2025-02-15T14:30:00'
    },
    {
      id: 2,
      name: 'Rahul Sharma',
      avatar: '/avatars/rahul.jpg',
      graduation_year: 2021,
      degree: 'B.Tech in Electronics',
      company: 'Microsoft',
      title: 'Product Manager',
      location: 'Hyderabad, India',
      industry: 'Technology',
      skills: ['Product Management', 'UX Design', 'Data Analysis', 'Agile'],
      connections: 8,
      linkedin: 'https://linkedin.com/in/rahulsharma',
      email: 'rahul.sharma@example.com',
      phone: '+91 9876543211',
      is_mentor: false,
      achievements: ['Microsoft Hackathon Winner', 'Best Product Design Award'],
      open_to_referrals: true,
      last_active: '2025-02-20T09:15:00'
    },
    {
      id: 3,
      name: 'Priya Patel',
      avatar: '/avatars/priya.jpg',
      graduation_year: 2020,
      degree: 'MBA in Finance',
      company: 'Goldman Sachs',
      title: 'Investment Banking Analyst',
      location: 'Mumbai, India',
      industry: 'Finance',
      skills: ['Financial Modeling', 'Valuation', 'M&A', 'Excel'],
      connections: 15,
      linkedin: 'https://linkedin.com/in/priyapatel',
      email: 'priya.patel@example.com',
      phone: '+91 9876543212',
      is_mentor: true,
      achievements: ['CFA Level 3', 'National Finance Olympiad Winner'],
      open_to_referrals: false,
      last_active: '2025-02-18T16:45:00'
    },
    {
      id: 4,
      name: 'Arjun Reddy',
      avatar: '/avatars/arjun.jpg',
      graduation_year: 2019,
      degree: 'B.Tech in Mechanical Engineering',
      company: 'Tesla',
      title: 'Mechanical Design Engineer',
      location: 'San Francisco, USA',
      industry: 'Automotive',
      skills: ['CAD/CAM', 'Finite Element Analysis', 'SolidWorks', 'Materials Science'],
      connections: 7,
      linkedin: 'https://linkedin.com/in/arjunreddy',
      email: 'arjun.reddy@example.com',
      phone: '+1 4155552671',
      is_mentor: true,
      achievements: ['Patent for Battery Cooling System', 'ASME Design Competition Winner'],
      open_to_referrals: true,
      last_active: '2025-02-10T11:30:00'
    },
    {
      id: 5,
      name: 'Sarah Khan',
      avatar: '/avatars/sarah.jpg',
      graduation_year: 2023,
      degree: 'B.Tech in Computer Science',
      company: 'Amazon',
      title: 'SDE I',
      location: 'Bangalore, India',
      industry: 'Technology',
      skills: ['Java', 'AWS', 'Microservices', 'System Design'],
      connections: 5,
      linkedin: 'https://linkedin.com/in/sarahkhan',
      email: 'sarah.khan@example.com',
      phone: '+91 9876543213',
      is_mentor: false,
      achievements: ['Amazon Intern of the Year', 'Best Academic Project'],
      open_to_referrals: true,
      last_active: '2025-02-25T13:20:00'
    },
    {
      id: 6,
      name: 'Vikram Singh',
      avatar: '/avatars/vikram.jpg',
      graduation_year: 2018,
      degree: 'MBA in Marketing',
      company: 'PepsiCo',
      title: 'Brand Manager',
      location: 'Delhi, India',
      industry: 'Consumer Goods',
      skills: ['Brand Strategy', 'Consumer Insights', 'Digital Marketing', 'Product Launch'],
      connections: 18,
      linkedin: 'https://linkedin.com/in/vikramsingh',
      email: 'vikram.singh@example.com',
      phone: '+91 9876543214',
      is_mentor: true,
      achievements: ['Brand Manager of the Year', 'Marketing Excellence Award'],
      open_to_referrals: false,
      last_active: '2025-02-22T15:10:00'
    },
    {
      id: 7,
      name: 'Akshay Kumar',
      avatar: '/avatars/akshay.jpg',
      graduation_year: 2017,
      degree: 'B.Tech in IT',
      company: 'Meta',
      title: 'Engineering Manager',
      location: 'London, UK',
      industry: 'Technology',
      skills: ['People Management', 'React', 'JavaScript', 'Tech Leadership'],
      connections: 22,
      linkedin: 'https://linkedin.com/in/akshaykumar',
      email: 'akshay.kumar@example.com',
      phone: '+44 7700900123',
      is_mentor: true,
      achievements: ['Meta Manager Award', 'Published 3 Research Papers'],
      open_to_referrals: true,
      last_active: '2025-02-17T10:45:00'
    },
    {
      id: 8,
      name: 'Neha Gupta',
      avatar: '/avatars/neha.jpg',
      graduation_year: 2022,
      degree: 'M.Tech in AI & ML',
      company: 'IBM',
      title: 'Data Scientist',
      location: 'Pune, India',
      industry: 'Technology',
      skills: ['Machine Learning', 'NLP', 'Python', 'TensorFlow'],
      connections: 9,
      linkedin: 'https://linkedin.com/in/nehagupta',
      email: 'neha.gupta@example.com',
      phone: '+91 9876543215',
      is_mentor: false,
      achievements: ['IBM Rising Star Award', 'Top Paper at ML Conference'],
      open_to_referrals: true,
      last_active: '2025-02-24T09:30:00'
    },
    {
      id: 9,
      name: 'David Chen',
      avatar: '/avatars/david.jpg',
      graduation_year: 2020,
      degree: 'B.Tech in CSE',
      company: 'Adobe',
      title: 'Front-End Engineer',
      location: 'Bangalore, India',
      industry: 'Technology',
      skills: ['JavaScript', 'React', 'UI/UX', 'CSS'],
      connections: 11,
      linkedin: 'https://linkedin.com/in/davidchen',
      email: 'david.chen@example.com',
      phone: '+91 9876543216',
      is_mentor: false,
      achievements: ['Adobe Design Jam Winner', 'Front-End Excellence Award'],
      open_to_referrals: true,
      last_active: '2025-02-21T14:15:00'
    },
    {
      id: 10,
      name: 'Meera Iyer',
      avatar: '/avatars/meera.jpg',
      graduation_year: 2019,
      degree: 'MBA in HR',
      company: 'Infosys',
      title: 'HR Business Partner',
      location: 'Chennai, India',
      industry: 'Technology',
      skills: ['Talent Acquisition', 'Employee Relations', 'Performance Management', 'HRIS'],
      connections: 14,
      linkedin: 'https://linkedin.com/in/meeraiyer',
      email: 'meera.iyer@example.com',
      phone: '+91 9876543217',
      is_mentor: true,
      achievements: ['HR Leader Award', 'Best HR Initiative'],
      open_to_referrals: false,
      last_active: '2025-02-19T11:00:00'
    },
    {
      id: 11,
      name: 'Ravi Verma',
      avatar: '/avatars/ravi.jpg',
      graduation_year: 2021,
      degree: 'B.Tech in CSE',
      company: 'Flipkart',
      title: 'Backend Engineer',
      location: 'Bangalore, India',
      industry: 'E-commerce',
      skills: ['Java', 'Spring Boot', 'Microservices', 'Kafka'],
      connections: 8,
      linkedin: 'https://linkedin.com/in/raviverma',
      email: 'ravi.verma@example.com',
      phone: '+91 9876543218',
      is_mentor: false,
      achievements: ['Flipkart Star Performer', 'Open Source Contributor'],
      open_to_referrals: true,
      last_active: '2025-02-23T16:30:00'
    },
    {
      id: 12,
      name: 'Ananya Desai',
      avatar: '/avatars/ananya.jpg',
      graduation_year: 2018,
      degree: 'MBA in Finance',
      company: 'JP Morgan Chase',
      title: 'Investment Associate',
      location: 'Mumbai, India',
      industry: 'Finance',
      skills: ['Financial Analysis', 'Investment Banking', 'Equity Research', 'Modeling'],
      connections: 16,
      linkedin: 'https://linkedin.com/in/ananyaDesai',
      email: 'ananya.desai@example.com',
      phone: '+91 9876543219',
      is_mentor: true,
      achievements: ['CFA Charter Holder', 'Top Analyst Award'],
      open_to_referrals: true,
      last_active: '2025-02-15T15:40:00'
    }
  ];
  
  // Get unique values for filters
  const industries = Array.from(new Set(alumni.map(alum => alum.industry)));
  const graduationYears = Array.from(new Set(alumni.map(alum => alum.graduation_year))).sort((a, b) => b - a);
  const locations = Array.from(new Set(alumni.map(alum => alum.location.split(',')[0].trim())));
  
  // Filter alumni based on search term and filters
  const filteredAlumni = alumni.filter(alum => {
    const matchesSearch = 
      alum.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      alum.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alum.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alum.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesIndustry = industryFilter === 'all' || alum.industry === industryFilter;
    const matchesGraduationYear = graduationYearFilter === 'all' || alum.graduation_year.toString() === graduationYearFilter;
    const matchesLocation = locationFilter === 'all' || alum.location.includes(locationFilter);
    const matchesConnection = connectionFilter === 'all' || 
                             (connectionFilter === 'mentors' && alum.is_mentor) ||
                             (connectionFilter === 'referrals' && alum.open_to_referrals);
    
    return matchesSearch && matchesIndustry && matchesGraduationYear && matchesLocation && matchesConnection;
  });
  
  // Stats data
  const statsData = {
    totalAlumni: alumni.length,
    topIndustries: [
      { name: 'Technology', count: alumni.filter(a => a.industry === 'Technology').length },
      { name: 'Finance', count: alumni.filter(a => a.industry === 'Finance').length },
      { name: 'E-commerce', count: alumni.filter(a => a.industry === 'E-commerce').length }
    ],
    totalMentors: alumni.filter(a => a.is_mentor).length,
    totalReferrals: alumni.filter(a => a.open_to_referrals).length,
    alumniByYear: graduationYears.map(year => ({
      year,
      count: alumni.filter(a => a.graduation_year === year).length
    }))
  };
  
  // Format date for display
  const formatDate = (dateString : string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };
  
  // Check if alumni was active recently (last 3 days)
  const isRecentlyActive = (dateString : string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    return diffInDays <= 3;
  };
  
  // Get initials for avatar
  const getInitials = (name : string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <div className="p-1 sm:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Alumni Network</h1>
          <p className="text-muted-foreground">Connect with our graduates and expand your professional network</p>
        </div>
        <div className="flex gap-2 mt-4 sm:mt-0">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Directory
          </Button>
          <Button>
            <User className="mr-2 h-4 w-4" />
            Update Your Profile
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
        <TabsList className="mb-4">
          <TabsTrigger value="directory" className="flex items-center">
            <Users className="mr-2 h-4 w-4" />
            Alumni Directory
          </TabsTrigger>
          <TabsTrigger value="stats" className="flex items-center">
            <BarChart4 className="mr-2 h-4 w-4" />
            Network Statistics
          </TabsTrigger>
          <TabsTrigger value="mentors" className="flex items-center">
            <GraduationCap className="mr-2 h-4 w-4" />
            Mentorship Program
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="directory" className="space-y-4">
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-6">
            <div className="w-full sm:w-auto sm:flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search by name, company, position, or skills..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            <Select value={industryFilter} onValueChange={setIndustryFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Industry" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Industries</SelectItem>
                {industries.map(industry => (
                  <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={graduationYearFilter} onValueChange={setGraduationYearFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Graduation Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Years</SelectItem>
                {graduationYears.map(year => (
                  <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={locationFilter} onValueChange={setLocationFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                {locations.map(location => (
                  <SelectItem key={location} value={location}>{location}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={connectionFilter} onValueChange={setConnectionFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Connection Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Alumni</SelectItem>
                <SelectItem value="mentors">Mentors Only</SelectItem>
                <SelectItem value="referrals">Open to Referrals</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredAlumni.length > 0 ? (
              filteredAlumni.map(alum => (
                <Card key={alum.id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <CardHeader className="p-4 pb-0">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-12 w-12 border-2 border-primary/20">
                          <AvatarFallback>{getInitials(alum.name)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-base flex items-center gap-2">
                            {alum.name}
                            {isRecentlyActive(alum.last_active) && (
                              <span className="h-2 w-2 rounded-full bg-green-500 inline-block" title="Recently active"></span>
                            )}
                          </CardTitle>
                          <CardDescription className="text-sm flex flex-wrap items-center gap-1">
                            <span>{alum.title}</span>
                            <span>•</span>
                            <span>{alum.company}</span>
                          </CardDescription>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" onClick={() => setSelectedAlumni(alum)} className="h-8 w-8">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span>{alum.location}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <GraduationCap className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span>{alum.degree}, {alum.graduation_year}</span>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-3">
                        {alum.skills.slice(0, 3).map((skill, index) => (
                          <Badge key={index} variant="secondary" className="bg-secondary/30">{skill}</Badge>
                        ))}
                        {alum.skills.length > 3 && (
                          <Badge variant="outline">+{alum.skills.length - 3}</Badge>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {alum.is_mentor && (
                          <Badge className="bg-blue-100 text-blue-800">Mentor</Badge>
                        )}
                        {alum.open_to_referrals && (
                          <Badge className="bg-green-100 text-green-800">Open to Referrals</Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between p-4 pt-0 border-t">
                    <Button variant="link" size="sm" className="px-0">
                      View Full Profile
                    </Button>
                    <Button variant="outline" size="sm">
                      <MessageSquare className="h-3.5 w-3.5 mr-1" />
                      Connect
                    </Button>
                  </CardFooter>
                </Card>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <Users className="h-12 w-12 mx-auto text-gray-300 mb-4" />
                <h3 className="font-medium text-gray-900">No alumni found</h3>
                <p className="text-gray-500 mt-1 max-w-md mx-auto">
                  No alumni match your current search criteria. Try adjusting your filters or search terms.
                </p>
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="stats" className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Alumni</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{statsData.totalAlumni}</div>
                <p className="text-xs text-muted-foreground mt-1">From {graduationYears[graduationYears.length - 1]} to {graduationYears[0]}</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Top Industry</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{statsData.topIndustries[0].name}</div>
                <p className="text-xs text-muted-foreground mt-1">{statsData.topIndustries[0].count} alumni ({Math.round(statsData.topIndustries[0].count / statsData.totalAlumni * 100)}%)</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Available Mentors</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{statsData.totalMentors}</div>
                <p className="text-xs text-muted-foreground mt-1">{Math.round(statsData.totalMentors / statsData.totalAlumni * 100)}% of alumni</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Open to Referrals</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{statsData.totalReferrals}</div>
                <p className="text-xs text-muted-foreground mt-1">{Math.round(statsData.totalReferrals / statsData.totalAlumni * 100)}% of alumni</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Alumni by Graduation Year</CardTitle>
                <CardDescription>Distribution of alumni across graduation years</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80 flex items-end justify-between gap-2">
                  {statsData.alumniByYear.map(item => (
                    <div key={item.year} className="flex flex-col items-center space-y-2 flex-1">
                      <div 
                        className="bg-primary/80 rounded-t w-full" 
                        style={{ 
                          height: `${(item.count / Math.max(...statsData.alumniByYear.map(i => i.count))) * 200}px` 
                        }}
                      ></div>
                      <div className="text-xs font-medium">{item.year}</div>
                      <div className="text-xs text-muted-foreground">{item.count}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Top Industries</CardTitle>
                <CardDescription>Where our alumni are working</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {industries.map(industry => {
                    const count = alumni.filter(a => a.industry === industry).length;
                    const percentage = Math.round((count / statsData.totalAlumni) * 100);
                    
                    return (
                      <div key={industry} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium">{industry}</span>
                          <span className="text-muted-foreground">{count} alumni ({percentage}%)</span>
                        </div>
                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-primary rounded-full" 
                            style={{ width: `${percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="mentors" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Alumni Mentorship Program</CardTitle>
              <CardDescription>
                Connect with experienced alumni who are willing to mentor current students
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Our alumni mentorship program connects current students with experienced graduates 
                who can provide guidance, advice, and industry insights to help you navigate your 
                career path successfully.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
                <div className="flex flex-col items-center text-center p-4 bg-secondary/20 rounded-lg">
                  <Users className="h-8 w-8 text-primary mb-2" />
                  <h3 className="font-medium">1-on-1 Mentorship</h3>
                    <p className="text-sm text-muted-foreground">
                        Get personalized guidance from a mentor who understands your field of interest
                    </p>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-secondary/20 rounded-lg">
                  <Calendar className="h-8 w-8 text-primary mb-2" />
                  <h3 className="font-medium">Flexible Scheduling</h3>
                  <p className="text-sm text-muted-foreground">
                    Schedule mentorship sessions at your convenience and pace
                  </p>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-secondary/20 rounded-lg">
                  <MessageSquare className="h-8 w-8 text-primary mb-2" />
                  <h3 className="font-medium">Career Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Receive guidance on job search, resume building, and interview preparation
                  </p>
                </div>
                </div>
                <Button variant="default" className="w-full">
                  Join Mentorship Program
                </Button>
                </CardContent>
                </Card>
                </TabsContent>
                </Tabs>
                </div>
                );
                }