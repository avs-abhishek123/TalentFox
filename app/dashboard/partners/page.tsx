'use client';

import { useState } from 'react';
import { 
  Search, 
  Filter, 
  Plus, 
  Building, 
  MapPin, 
  Users, 
  Phone, 
  Mail, 
  Globe, 
  ChevronDown, 
  FileText, 
  Edit, 
  Trash, 
  MoreHorizontal, 
  Link as LinkIcon,
  Star,
  BarChart,
  Handshake,
  Calendar,
  Download,
  Eye,
  User,
Clock,
CheckCircle,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function IndustryPartnersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [industryFilter, setIndustryFilter] = useState<string[]>([]);
  const [partnershipFilter, setPartnershipFilter] = useState<string>('all');
  const [selectedPartner, setSelectedPartner] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('active');
  const [showAddPartnerDialog, setShowAddPartnerDialog] = useState(false);
  
  // Sample partners data
  const partners = [
    {
      id: 1,
      name: "Google",
      logo: "G",
      industry: "Technology",
      status: "Platinum",
      location: "Bengaluru, India",
      contactPerson: "Priya Mehta",
      email: "priya.mehta@google.com",
      phone: "+91 9876543210",
      website: "https://google.com",
      yearJoined: 2022,
      studentsHired: 28,
      eventsSponsored: 4,
      internshipsOffered: 12,
      description: "Long-term strategic partner focused on technical recruitment and research collaborations.",
      upcomingEvents: [
        { id: 1, name: "Tech Career Fair", date: "Mar 15, 2025" },
        { id: 2, name: "Recruitment Drive", date: "Mar 22, 2025" }
      ],
      tags: ["ai", "cloud", "software-engineering"],
      keyProjects: [
        { id: 1, name: "AI Research Lab Sponsorship", year: 2024 },
        { id: 2, name: "Cloud Computing Workshop Series", year: 2023 }
      ]
    },
    {
      id: 2,
      name: "Microsoft",
      logo: "M",
      industry: "Technology",
      status: "Platinum",
      location: "Bengaluru, India",
      contactPerson: "Sanjay Kumar",
      email: "sanjay.kumar@microsoft.com",
      phone: "+91 9876543211",
      website: "https://microsoft.com",
      yearJoined: 2021,
      studentsHired: 24,
      eventsSponsored: 3,
      internshipsOffered: 10,
      description: "Strategic partner with focus on software development and research collaborations in AI and cloud technologies.",
      upcomingEvents: [
        { id: 1, name: "Azure Workshop", date: "Apr 05, 2025" }
      ],
      tags: ["ai", "cloud", "software-engineering"],
      keyProjects: [
        { id: 1, name: "Campus Innovation Hub", year: 2023 },
        { id: 2, name: "Student Developer Program", year: 2022 }
      ]
    },
    {
      id: 3,
      name: "Amazon",
      logo: "A",
      industry: "Technology",
      status: "Gold",
      location: "Hyderabad, India",
      contactPerson: "Rahul Verma",
      email: "rahul.verma@amazon.com",
      phone: "+91 9876543212",
      website: "https://amazon.com",
      yearJoined: 2022,
      studentsHired: 18,
      eventsSponsored: 2,
      internshipsOffered: 8,
      description: "Key partner for logistics, e-commerce and cloud technologies with active recruitment program.",
      upcomingEvents: [],
      tags: ["cloud", "logistics", "e-commerce"],
      keyProjects: [
        { id: 1, name: "AWS Student Certification Program", year: 2023 }
      ]
    },
    {
      id: 4,
      name: "IBM",
      logo: "I",
      industry: "Technology",
      status: "Gold",
      location: "Bengaluru, India",
      contactPerson: "Nisha Patel",
      email: "nisha.patel@ibm.com",
      phone: "+91 9876543213",
      website: "https://ibm.com",
      yearJoined: 2020,
      studentsHired: 15,
      eventsSponsored: 3,
      internshipsOffered: 6,
      description: "Strategic partner for AI, cloud computing and enterprise solutions with focus on research collaboration.",
      upcomingEvents: [
        { id: 1, name: "Technical Talk on Quantum Computing", date: "Apr 05, 2025" }
      ],
      tags: ["ai", "cloud", "quantum-computing"],
      keyProjects: [
        { id: 1, name: "Quantum Computing Lab", year: 2023 },
        { id: 2, name: "AI Ethics Curriculum Development", year: 2022 }
      ]
    },
    {
      id: 5,
      name: "Infosys",
      logo: "I",
      industry: "IT Services",
      status: "Silver",
      location: "Bengaluru, India",
      contactPerson: "Amit Singh",
      email: "amit.singh@infosys.com",
      phone: "+91 9876543214",
      website: "https://infosys.com",
      yearJoined: 2019,
      studentsHired: 40,
      eventsSponsored: 2,
      internshipsOffered: 15,
      description: "Long-term partner with focus on mass recruitment and large-scale training programs.",
      upcomingEvents: [],
      tags: ["software-development", "consulting"],
      keyProjects: [
        { id: 1, name: "Campus Connect Program", year: 2020 }
      ]
    },
    {
      id: 6,
      name: "Goldman Sachs",
      logo: "G",
      industry: "Finance",
      status: "Gold",
      location: "Bengaluru, India",
      contactPerson: "Vikram Mehta",
      email: "vikram.mehta@gs.com",
      phone: "+91 9876543215",
      website: "https://goldmansachs.com",
      yearJoined: 2021,
      studentsHired: 12,
      eventsSponsored: 2,
      internshipsOffered: 8,
      description: "Strategic partner for fintech initiatives and quantitative finance recruitment.",
      upcomingEvents: [
        { id: 1, name: "Fintech Workshop", date: "May 10, 2025" }
      ],
      tags: ["finance", "fintech", "quantitative-analysis"],
      keyProjects: [
        { id: 1, name: "Fintech Innovation Lab", year: 2022 },
        { id: 2, name: "Quantitative Finance Course Sponsorship", year: 2023 }
      ]
    },
    {
      id: 7,
      name: "Deloitte",
      logo: "D",
      industry: "Consulting",
      status: "Silver",
      location: "Bengaluru, India",
      contactPerson: "Ananya Sharma",
      email: "ananya.sharma@deloitte.com",
      phone: "+91 9876543216",
      website: "https://deloitte.com",
      yearJoined: 2020,
      studentsHired: 22,
      eventsSponsored: 1,
      internshipsOffered: 10,
      description: "Partner focused on business consulting, technology advisory and digital transformation roles.",
      upcomingEvents: [],
      tags: ["consulting", "business-analytics", "digital-transformation"],
      keyProjects: [
        { id: 1, name: "Business Analytics Bootcamp", year: 2022 }
      ]
    },
    {
      id: 8,
      name: "Samsung",
      logo: "S",
      industry: "Electronics",
      status: "Gold",
      location: "Noida, India",
      contactPerson: "Rajesh Kumar",
      email: "rajesh.kumar@samsung.com",
      phone: "+91 9876543217",
      website: "https://samsung.com",
      yearJoined: 2021,
      studentsHired: 16,
      eventsSponsored: 2,
      internshipsOffered: 9,
      description: "Partner focusing on electronics, mobile development and IoT initiatives.",
      upcomingEvents: [
        { id: 1, name: "Mobile App Development Challenge", date: "Apr 20, 2025" }
      ],
      tags: ["electronics", "mobile", "iot"],
      keyProjects: [
        { id: 1, name: "IoT Innovation Lab", year: 2022 },
        { id: 2, name: "Mobile App Contest", year: 2023 }
      ]
    }
  ];
  
  // Get unique industries for filtering
  const industries = Array.from(new Set(partners.map(partner => partner.industry)));
  
  // Partner status levels for filtering
  const partnershipLevels = ["all", "Platinum", "Gold", "Silver", "Bronze"];
  
  // Filter partners based on search, industry and partnership level
  const filteredPartners = partners.filter(partner => {
    const matchesSearch = partner.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         partner.industry.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         partner.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesIndustry = industryFilter.length === 0 || 
                           industryFilter.includes(partner.industry);
    
    const matchesPartnershipLevel = partnershipFilter === 'all' || 
                                   partner.status === partnershipFilter;
    
    const matchesTab = activeTab === 'all' || 
                      (activeTab === 'active' && partner.upcomingEvents.length > 0) ||
                      (activeTab === 'inactive' && partner.upcomingEvents.length === 0);
    
    return matchesSearch && matchesIndustry && matchesPartnershipLevel && matchesTab;
  });
  
  const getLogoColor = (name: string) => {
    const colors = [
      'bg-red-100 text-red-800',
      'bg-blue-100 text-blue-800',
      'bg-green-100 text-green-800',
      'bg-yellow-100 text-yellow-800',
      'bg-purple-100 text-purple-800',
      'bg-indigo-100 text-indigo-800',
      'bg-pink-100 text-pink-800',
      'bg-orange-100 text-orange-800',
    ];
    
    // Use the company name's first character code as a deterministic way to select a color
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };
  
  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'Platinum':
        return <Badge className="bg-slate-900 text-white hover:bg-slate-900">Platinum</Badge>;
      case 'Gold':
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">Gold</Badge>;
      case 'Silver':
        return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200">Silver</Badge>;
      case 'Bronze':
        return <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200">Bronze</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="p-1 sm:p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Industry Partners</h1>
          <p className="text-muted-foreground">Manage relationships with corporate and industry partners</p>
        </div>
        <div className="flex gap-2 mt-4 md:mt-0">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Dialog open={showAddPartnerDialog} onOpenChange={setShowAddPartnerDialog}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Partner
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[550px]">
              <DialogHeader>
                <DialogTitle>Add New Industry Partner</DialogTitle>
                <DialogDescription>
                  Add a new company to your network of industry partners
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="company-name">Company Name</Label>
                  <Input id="company-name" placeholder="e.g. Google" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="industry">Industry</Label>
                    <Select>
                      <SelectTrigger id="industry">
                        <SelectValue placeholder="Select industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technology">Technology</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="consulting">Consulting</SelectItem>
                        <SelectItem value="manufacturing">Manufacturing</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="retail">Retail</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="status">Partnership Level</Label>
                    <Select>
                      <SelectTrigger id="status">
                        <SelectValue placeholder="Select level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="platinum">Platinum</SelectItem>
                        <SelectItem value="gold">Gold</SelectItem>
                        <SelectItem value="silver">Silver</SelectItem>
                        <SelectItem value="bronze">Bronze</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" placeholder="e.g. Bengaluru, India" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="website">Website</Label>
                  <Input id="website" placeholder="e.g. https://company.com" />
                </div>
                <div className="grid gap-2">
                  <Label>Contact Person</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="Name" />
                    <Input placeholder="Position" />
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-2">
                    <Input placeholder="Email" />
                    <Input placeholder="Phone" />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="description">Description & Notes</Label>
                  <Textarea id="description" placeholder="Add details about this partnership..." />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setShowAddPartnerDialog(false)}>Cancel</Button>
                <Button onClick={() => setShowAddPartnerDialog(false)}>Add Partner</Button>
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
              placeholder="Search partners..."
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
                Industry
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
              <DropdownMenuLabel>Filter by industry</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {industries.map((industry) => (
                <DropdownMenuItem
                  key={industry}
                  className="flex items-center space-x-2 cursor-pointer"
                  onClick={() => {
                    if (industryFilter.includes(industry)) {
                      setIndustryFilter(industryFilter.filter(i => i !== industry));
                    } else {
                      setIndustryFilter([...industryFilter, industry]);
                    }
                  }}
                >
                  <div className={`w-4 h-4 border rounded flex items-center justify-center ${industryFilter.includes(industry) ? 'bg-primary border-primary' : 'border-gray-300'}`}>
                    {industryFilter.includes(industry) && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <span>{industry}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Select value={partnershipFilter} onValueChange={setPartnershipFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Partner Level" />
            </SelectTrigger>
            <SelectContent>
              {partnershipLevels.map((level) => (
                <SelectItem key={level} value={level}>
                  {level === 'all' ? 'All Levels' : level}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="active" onValueChange={setActiveTab} className="mb-6">
        <TabsList>
          <TabsTrigger value="active">Active Partners</TabsTrigger>
          <TabsTrigger value="inactive">Inactive Partners</TabsTrigger>
          <TabsTrigger value="all">All Partners</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Partners Grid */}
        <div className="md:col-span-2">
          {filteredPartners.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredPartners.map((partner) => (
                <Card 
                  key={partner.id} 
                  className="cursor-pointer hover:border-primary/50 transition-colors"
                  onClick={() => setSelectedPartner(partner)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Avatar className={`h-12 w-12 mr-4 ${getLogoColor(partner.name)}`}>
                        <AvatarFallback>{partner.logo}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">{partner.name}</h3>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Building className="h-3 w-3 mr-1" />
                          {partner.industry}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center mb-4">
                      {getStatusBadge(partner.status)}
                      <span className="text-sm text-muted-foreground">Since {partner.yearJoined}</span>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm">
                        <MapPin className="h-4 w-4 text-muted-foreground mr-2" />
                        <span>{partner.location}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Users className="h-4 w-4 text-muted-foreground mr-2" />
                        <span>{partner.studentsHired} students hired</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Calendar className="h-4 w-4 text-muted-foreground mr-2" />
                        <span>{partner.eventsSponsored} events sponsored</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-1">
                        {partner.tags.slice(0, 2).map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag.replace('-', ' ')}
                          </Badge>
                        ))}
                        {partner.tags.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{partner.tags.length - 2}
                          </Badge>
                        )}
                      </div>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="p-6 flex flex-col items-center justify-center">
                <Building className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">No partners found</h3>
                <p className="text-muted-foreground text-center mb-4">
                  {searchTerm || industryFilter.length > 0 || partnershipFilter !== 'all' 
                    ? 'Try adjusting your search or filters' 
                    : 'Add your first industry partner to get started'}
                </p>
                <Button onClick={() => setShowAddPartnerDialog(true)}>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Partner
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
        
        {/* Stats and Summary */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Partnership Summary</CardTitle>
              <CardDescription>Overview of industry partnerships</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Total Partners</p>
                  <p className="text-2xl font-bold">{partners.length}</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Handshake className="h-6 w-6 text-primary" />
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-sm font-medium mb-3">Partnership Levels</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Platinum</span>
                    <span className="font-medium">{partners.filter(p => p.status === 'Platinum').length}</span>
                  </div>
                  <div className="w-full h-2 bg-primary/10 rounded-full">
                    <div 
                      className="h-full bg-slate-900 rounded-full" 
                      style={{ 
                        width: `${(partners.filter(p => p.status === 'Platinum').length / partners.length) * 100}%` 
                      }}
                    ></div>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span>Gold</span>
                    <span className="font-medium">{partners.filter(p => p.status === 'Gold').length}</span>
                  </div>
                  <div className="w-full h-2 bg-primary/10 rounded-full">
                    <div 
                      className="h-full bg-yellow-500 rounded-full" 
                      style={{ 
                        width: `${(partners.filter(p => p.status === 'Gold').length / partners.length) * 100}%` 
                      }}
                    ></div>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span>Silver</span>
                    <span className="font-medium">{partners.filter(p => p.status === 'Silver').length}</span>
                  </div>
                  <div className="w-full h-2 bg-primary/10 rounded-full">
                    <div 
                      className="h-full bg-gray-400 rounded-full" 
                      style={{ 
                        width: `${(partners.filter(p => p.status === 'Silver').length / partners.length) * 100}%` 
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-sm font-medium mb-2">Key Metrics</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-primary/5 p-3 rounded-lg">
                    <div className="text-2xl font-bold">{partners.reduce((acc, partner) => acc + partner.studentsHired, 0)}</div>
                    <p className="text-xs text-muted-foreground">Students Hired</p>
                  </div>
                  <div className="bg-primary/5 p-3 rounded-lg">
                    <div className="text-2xl font-bold">{partners.reduce((acc, partner) => acc + partner.eventsSponsored, 0)}</div>
                    <p className="text-xs text-muted-foreground">Events Sponsored</p>
                  </div>
                  <div className="bg-primary/5 p-3 rounded-lg">
                    <div className="text-2xl font-bold">{partners.reduce((acc, partner) => acc + partner.internshipsOffered, 0)}</div>
                    <p className="text-xs text-muted-foreground">Internships Offered</p>
                  </div>
                  <div className="bg-primary/5 p-3 rounded-lg">
                    <div className="text-2xl font-bold">{partners.filter(p => p.upcomingEvents.length > 0).length}</div>
                    <p className="text-xs text-muted-foreground">Active Partners</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Top Recruiting Partners</CardTitle>
              <CardDescription>By number of students hired</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[...partners]
                  .sort((a, b) => b.studentsHired - a.studentsHired)
                  .slice(0, 5)
                  .map((partner, index) => (
                    <div key={partner.id} className="flex items-center">
                      <Avatar className={`h-8 w-8 mr-3 ${getLogoColor(partner.name)}`}>
                        <AvatarFallback>{partner.logo}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex justify-between mb-1">
                          <p className="text-sm font-medium">{partner.name}</p>
                          <p className="text-sm">{partner.studentsHired} students</p>
                        </div>
                        <Progress value={(partner.studentsHired / partners[0].studentsHired) * 100} className="h-1.5" />
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Partner Events</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {partners
                  .flatMap(partner => 
                    partner.upcomingEvents.map(event => ({
                      ...event,
                      partner: partner.name,
                      logo: partner.logo,
                      status: partner.status,
                    }))
                  )
                  .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
                  .slice(0, 4)
                  .map((event, index) => (
                    <div key={event.id} className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        <Avatar className={`h-8 w-8 ${getLogoColor(event.partner)}`}>
                          <AvatarFallback>{event.logo}</AvatarFallback>
                        </Avatar>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{event.name}</p>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Calendar className="inline h-3 w-3 mr-1" />
                          <span>{event.date}</span>
                          <span className="mx-1">•</span>
                          <span>{event.partner}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                
                {partners.flatMap(p => p.upcomingEvents).length === 0 && (
                  <div className="text-center py-4">
                    <Calendar className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">No upcoming partner events</p>
                  </div>
                )}
              </div>
            </CardContent>
            {partners.flatMap(p => p.upcomingEvents).length > 0 && (
              <CardFooter className="border-t px-6 py-4">
                <Button variant="ghost" className="w-full text-sm">View All Events</Button>
              </CardFooter>
            )}
          </Card>
        </div>
      </div>
      
      {selectedPartner && (
        <Dialog open={!!selectedPartner} onOpenChange={() => setSelectedPartner(null)}>
          <DialogContent className="sm:max-w-[700px]">
            <DialogHeader>
              <DialogTitle className="flex items-center">
                <Avatar className={`h-6 w-6 mr-2 ${getLogoColor(selectedPartner.name)}`}>
                  <AvatarFallback>{selectedPartner.logo}</AvatarFallback>
                </Avatar>
                {selectedPartner.name}
                <div className="ml-2">{getStatusBadge(selectedPartner.status)}</div>
              </DialogTitle>
              <DialogDescription>
                Industry partner since {selectedPartner.yearJoined}
              </DialogDescription>
            </DialogHeader>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
              <div>
                <h3 className="text-sm font-medium mb-2">Partner Details</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <Building className="h-4 w-4 text-muted-foreground mr-2" />
                    <span className="text-muted-foreground mr-2">Industry:</span>
                    <span>{selectedPartner.industry}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground mr-2" />
                    <span className="text-muted-foreground mr-2">Location:</span>
                    <span>{selectedPartner.location}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Globe className="h-4 w-4 text-muted-foreground mr-2" />
                    <span className="text-muted-foreground mr-2">Website:</span>
                    <a href={selectedPartner.website} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center">
                      {selectedPartner.website.replace('https://', '')}
                      <LinkIcon className="h-3 w-3 ml-1" />
                    </a>
                  </div>
                  
                  <div className="pt-3 border-t">
                    <h4 className="text-sm font-medium mb-2">Contact Person</h4>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <User className="h-4 w-4 text-muted-foreground mr-2" />
                        <span>{selectedPartner.contactPerson}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Mail className="h-4 w-4 text-muted-foreground mr-2" />
                        <a href={`mailto:${selectedPartner.email}`} className="text-primary hover:underline">
                          {selectedPartner.email}
                        </a>
                      </div>
                      <div className="flex items-center text-sm">
                        <Phone className="h-4 w-4 text-muted-foreground mr-2" />
                        <span>{selectedPartner.phone}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-3 border-t">
                    <h4 className="text-sm font-medium mb-2">Tags</h4>
                    <div className="flex flex-wrap gap-2">
                    {selectedPartner.tags.map((tag: string, index: number) => (
                        <Badge key={index} variant="outline">
                          {tag.replace('-', ' ')}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-2">Partnership Overview</h3>
                <p className="text-sm mb-4">
                  {selectedPartner.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-primary/5 p-3 rounded-lg">
                    <div className="text-xl font-bold">{selectedPartner.studentsHired}</div>
                    <p className="text-xs text-muted-foreground">Students Hired</p>
                  </div>
                  <div className="bg-primary/5 p-3 rounded-lg">
                    <div className="text-xl font-bold">{selectedPartner.eventsSponsored}</div>
                    <p className="text-xs text-muted-foreground">Events Sponsored</p>
                  </div>
                  <div className="bg-primary/5 p-3 rounded-lg">
                    <div className="text-xl font-bold">{selectedPartner.internshipsOffered}</div>
                    <p className="text-xs text-muted-foreground">Internships Offered</p>
                  </div>
                  <div className="bg-primary/5 p-3 rounded-lg">
                    <div className="text-xl font-bold">{selectedPartner.yearJoined}</div>
                    <p className="text-xs text-muted-foreground">Partnership Since</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium mb-2">Key Projects</h4>
                    <div className="space-y-2">
                      {selectedPartner.keyProjects.length > 0 ? (
                        selectedPartner.keyProjects.map((project : any, index: number) => (
                          <div key={index} className="flex justify-between text-sm border-b pb-2 last:border-0">
                            <span>{project.name}</span>
                            <span className="text-muted-foreground">{project.year}</span>
                          </div>
                        ))
                      ) : (
                        <p className="text-sm text-muted-foreground">No key projects recorded</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium mb-2">Upcoming Events</h4>
                    <div className="space-y-2">
                      {selectedPartner.upcomingEvents.length > 0 ? (
                        selectedPartner.upcomingEvents.map((event : any, index: number) => (
                          <div key={index} className="flex justify-between text-sm border-b pb-2 last:border-0">
                            <span>{event.name}</span>
                            <span className="text-muted-foreground">{event.date}</span>
                          </div>
                        ))
                      ) : (
                        <p className="text-sm text-muted-foreground">No upcoming events scheduled</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <DialogFooter className="flex justify-between sm:justify-between">
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit
                </Button>
                <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                  <Trash className="h-4 w-4 mr-2" />
                  Delete
                </Button>
              </div>
              <Button size="sm" onClick={() => setSelectedPartner(null)}>
                Close
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
      
      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Partner Engagement Strategies</CardTitle>
            <CardDescription>Manage and grow your industry partnerships</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Partner Onboarding</CardTitle>
                </CardHeader>
                <CardContent className="pt-2">
                  <p className="text-sm text-muted-foreground mb-3">Structured process to onboard new industry partners</p>
                  <ul className="text-sm space-y-1">
                    <li className="flex items-start">
                      <Star className="h-3 w-3 text-primary mt-1 mr-2" />
                      Initial outreach and relationship building
                    </li>
                    <li className="flex items-start">
                      <Star className="h-3 w-3 text-primary mt-1 mr-2" />
                      Partnership level determination
                    </li>
                    <li className="flex items-start">
                      <Star className="h-3 w-3 text-primary mt-1 mr-2" />
                      MOU signing and documentation
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button size="sm" className="w-full">View Onboarding Guide</Button>
                </CardFooter>
              </Card>
              
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Engagement Calendar</CardTitle>
                </CardHeader>
                <CardContent className="pt-2">
                  <p className="text-sm text-muted-foreground mb-3">Scheduled activities to maintain partner relationships</p>
                  <ul className="text-sm space-y-1">
                    <li className="flex items-start">
                      <Star className="h-3 w-3 text-primary mt-1 mr-2" />
                      Quarterly feedback meetings
                    </li>
                    <li className="flex items-start">
                      <Star className="h-3 w-3 text-primary mt-1 mr-2" />
                      Annual partnership review sessions
                    </li>
                    <li className="flex items-start">
                      <Star className="h-3 w-3 text-primary mt-1 mr-2" />
                      Industry-academia collaboration events
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button size="sm" className="w-full">View Engagement Calendar</Button>
                </CardFooter>
              </Card>
              
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Growth Initiatives</CardTitle>
                </CardHeader>
                <CardContent className="pt-2">
                  <p className="text-sm text-muted-foreground mb-3">Strategies to expand partner network and deepen engagement</p>
                  <ul className="text-sm space-y-1">
                    <li className="flex items-start">
                      <Star className="h-3 w-3 text-primary mt-1 mr-2" />
                      Industry-specific outreach campaigns
                    </li>
                    <li className="flex items-start">
                      <Star className="h-3 w-3 text-primary mt-1 mr-2" />
                      Partner referral program
                    </li>
                    <li className="flex items-start">
                      <Star className="h-3 w-3 text-primary mt-1 mr-2" />
                      Alumni connection leveraging
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button size="sm" className="w-full">View Growth Plan</Button>
                </CardFooter>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}