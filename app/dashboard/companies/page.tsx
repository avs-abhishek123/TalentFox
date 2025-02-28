// app/dashboard/companies/page.tsx
'use client';

import { useState } from 'react';
import { 
  Search, 
  Filter, 
  Plus, 
  Building, 
  MapPin, 
  Globe, 
  Users,
  BarChart,
  ChevronDown,
  FileText,
  Eye,
  Edit,
  Trash,
  Download,
  MoreHorizontal,
  Star,
  StarHalf,
  Calendar,
  Link
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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

// Mock data for companies
const companies = [
  {
    id: '1',
    name: 'Google',
    logo: 'G',
    industry: 'Technology',
    size: 'Enterprise',
    location: 'Bengaluru, India',
    website: 'https://google.com',
    openPositions: 5,
    rating: 4.8,
    placementCount: 28,
    status: 'Active',
    description: 'Google LLC is an American multinational technology company focusing on search engine technology, online advertising, cloud computing, computer software, quantum computing, e-commerce, and artificial intelligence.',
    visits: 15,
    lastVisit: '2025-02-15',
    hiringHistory: [
      { year: '2024', count: 24 },
      { year: '2023', count: 18 },
      { year: '2022', count: 22 },
    ],
    contacts: [
      { name: 'Priya Mehta', role: 'HR Manager', email: 'priya.mehta@google.com' },
      { name: 'Aditya Sharma', role: 'Technical Recruiter', email: 'aditya.sharma@google.com' },
    ],
    jobs: [
      { title: 'Software Engineer', department: 'Engineering', applicants: 42 },
      { title: 'Product Manager', department: 'Product', applicants: 35 },
      { title: 'UX Designer', department: 'Design', applicants: 28 },
      { title: 'Data Scientist', department: 'Data', applicants: 31 },
      { title: 'Technical Program Manager', department: 'Engineering', applicants: 24 },
    ]
  },
  {
    id: '2',
    name: 'Microsoft',
    logo: 'M',
    industry: 'Technology',
    size: 'Enterprise',
    location: 'Bengaluru, India',
    website: 'https://microsoft.com',
    openPositions: 7,
    rating: 4.7,
    placementCount: 22,
    status: 'Active',
    description: 'Microsoft Corporation is an American multinational technology corporation producing computer software, consumer electronics, personal computers, and related services.',
    visits: 12,
    lastVisit: '2025-02-18',
    hiringHistory: [
      { year: '2024', count: 20 },
      { year: '2023', count: 16 },
      { year: '2022', count: 18 },
    ],
    contacts: [
      { name: 'Sanjay Kumar', role: 'Talent Acquisition Lead', email: 'sanjay.kumar@microsoft.com' },
      { name: 'Neha Patel', role: 'University Recruiter', email: 'neha.patel@microsoft.com' },
    ],
    jobs: [
      { title: 'Frontend Developer', department: 'Engineering', applicants: 38 },
      { title: 'Cloud Solutions Architect', department: 'Azure', applicants: 26 },
      { title: 'Program Manager', department: 'Product', applicants: 30 },
    ]
  },
  {
    id: '3',
    name: 'Amazon',
    logo: 'A',
    industry: 'Technology',
    size: 'Enterprise',
    location: 'Hyderabad, India',
    website: 'https://amazon.com',
    openPositions: 9,
    rating: 4.5,
    placementCount: 18,
    status: 'Active',
    description: 'Amazon.com, Inc. is an American multinational technology company focusing on e-commerce, cloud computing, online advertising, digital streaming, and artificial intelligence.',
    visits: 10,
    lastVisit: '2025-02-10',
    hiringHistory: [
      { year: '2024', count: 18 },
      { year: '2023', count: 14 },
      { year: '2022', count: 16 },
    ],
    contacts: [
      { name: 'Rahul Verma', role: 'Campus Recruiter', email: 'rahul.verma@amazon.com' },
      { name: 'Ananya Singh', role: 'HR Business Partner', email: 'ananya.singh@amazon.com' },
    ],
    jobs: [
      { title: 'Software Development Engineer', department: 'Engineering', applicants: 45 },
      { title: 'Business Analyst', department: 'Operations', applicants: 32 },
      { title: 'Data Engineer', department: 'Data', applicants: 29 },
      { title: 'UX Researcher', department: 'Design', applicants: 22 },
    ]
  },
  {
    id: '4',
    name: 'Flipkart',
    logo: 'F',
    industry: 'E-commerce',
    size: 'Large',
    location: 'Bengaluru, India',
    website: 'https://flipkart.com',
    openPositions: 6,
    rating: 4.2,
    placementCount: 15,
    status: 'Active',
    description: 'Flipkart is an Indian e-commerce company, headquartered in Bengaluru, and incorporated in Singapore as a private limited company.',
    visits: 8,
    lastVisit: '2025-02-05',
    hiringHistory: [
      { year: '2024', count: 14 },
      { year: '2023', count: 12 },
      { year: '2022', count: 10 },
    ],
    contacts: [
      { name: 'Vishal Mehra', role: 'Talent Acquisition', email: 'vishal.mehra@flipkart.com' },
    ],
    jobs: [
      { title: 'Backend Developer', department: 'Engineering', applicants: 36 },
      { title: 'Product Manager', department: 'Product', applicants: 28 },
      { title: 'Data Scientist', department: 'Analytics', applicants: 31 },
    ]
  },
  {
    id: '5',
    name: 'Infosys',
    logo: 'I',
    industry: 'IT Services',
    size: 'Enterprise',
    location: 'Mysore, India',
    website: 'https://infosys.com',
    openPositions: 15,
    rating: 4.0,
    placementCount: 42,
    status: 'Active',
    description: 'Infosys Limited is an Indian multinational information technology company that provides business consulting, information technology and outsourcing services.',
    visits: 20,
    lastVisit: '2025-01-28',
    hiringHistory: [
      { year: '2024', count: 40 },
      { year: '2023', count: 35 },
      { year: '2022', count: 38 },
    ],
    contacts: [
      { name: 'Rajesh Kumar', role: 'Campus Recruitment Head', email: 'rajesh.kumar@infosys.com' },
      { name: 'Sneha Reddy', role: 'HR Coordinator', email: 'sneha.reddy@infosys.com' },
      { name: 'Vikram Joshi', role: 'Technical Recruiter', email: 'vikram.joshi@infosys.com' },
    ],
    jobs: [
      { title: 'Systems Engineer', department: 'Engineering', applicants: 65 },
      { title: 'Technical Analyst', department: 'Consulting', applicants: 48 },
      { title: 'Digital Marketing Specialist', department: 'Marketing', applicants: 32 },
    ]
  },
  {
    id: '6',
    name: 'TCS',
    logo: 'T',
    industry: 'IT Services',
    size: 'Enterprise',
    location: 'Mumbai, India',
    website: 'https://tcs.com',
    openPositions: 20,
    rating: 3.9,
    placementCount: 48,
    status: 'Active',
    description: 'Tata Consultancy Services Limited is an Indian multinational information technology services and consulting company headquartered in Mumbai.',
    visits: 18,
    lastVisit: '2025-02-02',
    hiringHistory: [
      { year: '2024', count: 45 },
      { year: '2023', count: 42 },
      { year: '2022', count: 40 },
    ],
    contacts: [
      { name: 'Manoj Sharma', role: 'Talent Acquisition Lead', email: 'manoj.sharma@tcs.com' },
      { name: 'Deepika Patel', role: 'University Relations', email: 'deepika.patel@tcs.com' },
    ],
    jobs: [
      { title: 'Software Developer', department: 'IT Services', applicants: 72 },
      { title: 'Business Analyst', department: 'Consulting', applicants: 56 },
      { title: 'Project Manager', department: 'Delivery', applicants: 38 },
    ]
  },
  {
    id: '7',
    name: 'Wipro',
    logo: 'W',
    industry: 'IT Services',
    size: 'Enterprise',
    location: 'Bengaluru, India',
    website: 'https://wipro.com',
    openPositions: 12,
    rating: 3.8,
    placementCount: 35,
    status: 'Active',
    description: 'Wipro Limited is an Indian multinational corporation that provides information technology, consulting and business process services.',
    visits: 14,
    lastVisit: '2025-01-22',
    hiringHistory: [
      { year: '2024', count: 32 },
      { year: '2023', count: 30 },
      { year: '2022', count: 28 },
    ],
    contacts: [
      { name: 'Anjali Desai', role: 'HR Manager', email: 'anjali.desai@wipro.com' },
      { name: 'Prakash Iyer', role: 'Technical Recruitment', email: 'prakash.iyer@wipro.com' },
    ],
    jobs: [
      { title: 'Project Engineer', department: 'Engineering', applicants: 58 },
      { title: 'Java Developer', department: 'Development', applicants: 42 },
      { title: 'Quality Analyst', department: 'QA', applicants: 35 },
    ]
  },
  {
    id: '8',
    name: 'Accenture',
    logo: 'A',
    industry: 'Consulting',
    size: 'Enterprise',
    location: 'Bengaluru, India',
    website: 'https://accenture.com',
    openPositions: 10,
    rating: 4.1,
    placementCount: 32,
    status: 'Active',
    description: 'Accenture plc is an Irish-American professional services company specializing in information technology services and consulting.',
    visits: 12,
    lastVisit: '2025-02-08',
    hiringHistory: [
      { year: '2024', count: 30 },
      { year: '2023', count: 28 },
      { year: '2022', count: 25 },
    ],
    contacts: [
      { name: 'Rohan Singhania', role: 'Campus Recruitment', email: 'rohan.singhania@accenture.com' },
      { name: 'Divya Malhotra', role: 'HR Business Partner', email: 'divya.malhotra@accenture.com' },
    ],
    jobs: [
      { title: 'Associate Software Engineer', department: 'Technology', applicants: 62 },
      { title: 'Consultant', department: 'Consulting', applicants: 48 },
      { title: 'Digital Strategy Manager', department: 'Strategy', applicants: 35 },
    ]
  },
];

export default function CompaniesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterIndustry, setFilterIndustry] = useState<string[]>([]);
  const [selectedCompany, setSelectedCompany] = useState<typeof companies[0] | null>(null);
  const [showDetailView, setShowDetailView] = useState(false);
  
  // Get unique industries for filtering
  const industries = Array.from(new Set(companies.map(company => company.industry)));
  
  // Filter companies based on search and industry filter
  const filteredCompanies = companies.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        company.industry.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        company.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesIndustry = filterIndustry.length === 0 || 
                           filterIndustry.includes(company.industry);
    
    return matchesSearch && matchesIndustry;
  });
  
  const handleViewDetails = (company: typeof companies[0]) => {
    setSelectedCompany(company);
    setShowDetailView(true);
  };
  
  const handleBackToList = () => {
    setShowDetailView(false);
    setSelectedCompany(null);
  };
  
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
  
  const getStarRating = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="h-4 w-4 text-yellow-400 fill-yellow-400" />);
    }
    
    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="h-4 w-4 text-yellow-400 fill-yellow-400" />);
    }
    
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="h-4 w-4 text-gray-300" />);
    }
    
    return stars;
  };

  return (
    <div>
      {!showDetailView ? (
        <>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Companies</h1>
              <p className="text-muted-foreground">Manage partner companies and job postings</p>
            </div>
            <div className="flex gap-2 mt-4 sm:mt-0">
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Company
              </Button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0 mb-4">
            <div className="w-full sm:w-auto flex-1 sm:max-w-sm">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search companies..."
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
                        if (filterIndustry.includes(industry)) {
                          setFilterIndustry(filterIndustry.filter(i => i !== industry));
                        } else {
                          setFilterIndustry([...filterIndustry, industry]);
                        }
                      }}
                    >
                      <div className={`w-4 h-4 border rounded flex items-center justify-center ${filterIndustry.includes(industry) ? 'bg-primary border-primary' : 'border-gray-300'}`}>
                        {filterIndustry.includes(industry) && (
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
            </div>
          </div>

          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Company</TableHead>
                    <TableHead>Industry</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Open Positions</TableHead>
                    <TableHead>Rating</TableHead>
                    <TableHead>Placements</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredCompanies.length > 0 ? (
                    filteredCompanies.map((company) => (
                      <TableRow key={company.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar className={`h-9 w-9 ${getLogoColor(company.name)}`}>
                              <AvatarFallback>{company.logo}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{company.name}</p>
                              <a href={company.website} target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline flex items-center">
                                <Globe className="h-3 w-3 mr-1" />
                                {company.website.replace('https://', '')}
                              </a>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{company.industry}</TableCell>
                        <TableCell>
                          <div className="flex items-center text-sm">
                            <MapPin className="h-4 w-4 text-muted-foreground mr-1" />
                            {company.location}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className="bg-blue-100 text-blue-800">
                            {company.openPositions}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            {getStarRating(company.rating)}
                            <span className="ml-1 text-sm">{company.rating}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 text-muted-foreground mr-1" />
                            {company.placementCount} students
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem onClick={() => handleViewDetails(company)}>
                                <Eye className="mr-2 h-4 w-4" />
                                View Details
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Edit className="mr-2 h-4 w-4" />
                                Edit Company
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <FileText className="mr-2 h-4 w-4" />
                                View Jobs
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-red-600">
                                <Trash className="mr-2 h-4 w-4" />
                                Remove Company
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={7} className="h-24 text-center">
                        <div className="flex flex-col items-center justify-center">
                          <Building className="h-10 w-10 text-muted-foreground mb-2" />
                          <p className="font-medium">No companies found</p>
                          <p className="text-sm text-muted-foreground">
                            {searchTerm || filterIndustry.length > 0 ? 'Try adjusting your filters' : 'Add your first company to get started'}
                          </p>
                        </div>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Industry Distribution</CardTitle>
                <CardDescription>Companies by industry category</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {industries.map((industry) => {
                    const count = companies.filter(c => c.industry === industry).length;
                    const percentage = Math.round((count / companies.length) * 100);
                    
                    return (
                      <div key={industry}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">{industry}</span>
                          <span className="text-sm text-muted-foreground">{count} companies ({percentage}%)</span>
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
                <CardTitle>Placement Insights</CardTitle>
                <CardDescription>Recent placements by company</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {companies
                    .sort((a, b) => b.placementCount - a.placementCount)
                    .slice(0, 5)
                    .map((company) => (
                      <div key={company.id} className="flex items-center">
                        <Avatar className={`h-8 w-8 mr-4 ${getLogoColor(company.name)}`}>
                          <AvatarFallback>{company.logo}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">{company.name}</span>
                            <span className="text-sm">{company.placementCount} students</span>
                          </div>
                          <Progress value={(company.placementCount / 50) * 100} className="h-1.5" />
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </>
      ) : (
        <div>
          {selectedCompany && (
            <>
              <div className="flex items-center mb-6">
                <Button variant="ghost" onClick={handleBackToList} className="mr-2">
                  <ChevronDown className="rotate-90 h-4 w-4 mr-1" />
                  Back to companies
                </Button>
                <h1 className="text-2xl font-bold tracking-tight">{selectedCompany.name}</h1>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-1 space-y-6">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex flex-col items-center">
                        <Avatar className={`h-24 w-24 mb-4 ${getLogoColor(selectedCompany.name)}`}>
                          <AvatarFallback className="text-2xl">{selectedCompany.logo}</AvatarFallback>
                        </Avatar>
                        <h2 className="text-xl font-semibold">{selectedCompany.name}</h2>
                        <p className="text-muted-foreground">{selectedCompany.industry}</p>
                        
                        <div className="flex items-center mt-2">
                          {getStarRating(selectedCompany.rating)}
                          <span className="ml-1">{selectedCompany.rating}</span>
                        </div>
                        
                        <div className="flex items-center mt-3 text-sm">
                          <MapPin className="h-4 w-4 text-muted-foreground mr-1" />
                          {selectedCompany.location}
                        </div>
                        
                        <a href={selectedCompany.website} target="_blank" rel="noopener noreferrer" className="mt-2 text-sm text-primary hover:underline flex items-center">
                          <Globe className="h-4 w-4 mr-1" />
                          {selectedCompany.website.replace('https://', '')}
                        </a>
                      </div>
                      
                      <Separator className="my-4" />
                      
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Open Positions</span>
                          <Badge className="bg-blue-100 text-blue-800">
                            {selectedCompany.openPositions}
                          </Badge>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Students Placed</span>
                          <Badge className="bg-green-100 text-green-800">
                            {selectedCompany.placementCount}
                          </Badge>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Campus Visits</span>
                          <span className="text-sm font-medium">{selectedCompany.visits}</span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Last Visit</span>
                          <span className="text-sm font-medium">{new Date(selectedCompany.lastVisit).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <Button className="w-full">
                          <Plus className="mr-2 h-4 w-4" />
                          Add Job Opening
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Contact Information</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {selectedCompany.contacts.map((contact, index) => (
                          <div key={index} className="space-y-1">
                            <h3 className="font-medium">{contact.name}</h3>
                            <p className="text-sm text-muted-foreground">{contact.role}</p>
                            <a href={`mailto:${contact.email}`} className="text-sm text-primary hover:underline flex items-center">
                              <Mail className="h-3 w-3 mr-1" />
                              {contact.email}
                            </a>
                            {index < selectedCompany.contacts.length - 1 && <Separator className="my-2" />}
                          </div>
                        ))}
                      </div>
                      <Button variant="outline" size="sm" className="mt-4 w-full">
                        <Plus className="mr-2 h-4 w-4" />
                        Add Contact
                      </Button>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="md:col-span-2 space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>About {selectedCompany.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">{selectedCompany.description}</p>
                    </CardContent>
                  </Card>
                  
                  <Tabs defaultValue="jobs">
                    <TabsList className="w-full grid grid-cols-3">
                      <TabsTrigger value="jobs">Open Positions</TabsTrigger>
                      <TabsTrigger value="history">Hiring History</TabsTrigger>
                      <TabsTrigger value="students">Placed Students</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="jobs" className="mt-4">
                      <Card>
                        <CardContent className="pt-6">
                          <div className="space-y-4">
                            {selectedCompany.jobs.map((job, index) => (
                              <div key={index} className="flex items-start p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                                <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center mr-4">
                                  <BriefcaseIcon className="h-5 w-5 text-primary" />
                                </div>
                                <div className="space-y-1 flex-1">
                                  <div className="flex justify-between items-start">
                                    <div>
                                      <p className="font-medium">{job.title}</p>
                                      <p className="text-sm text-muted-foreground">{job.department}</p>
                                    </div>
                                    <Badge variant="outline">{job.applicants} applicants</Badge>
                                  </div>
                                  <div className="flex items-center mt-2">
                                    <Button size="sm" variant="outline" className="mr-2">View Details</Button>
                                    <Button size="sm">Manage Applications</Button>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                    
                    <TabsContent value="history" className="mt-4">
                      <Card>
                        <CardContent className="pt-6">
                          <div className="space-y-4">
                            <div className="grid grid-cols-3 gap-4">
                              {selectedCompany.hiringHistory.map((item, index) => (
                                <div key={index} className="bg-primary/5 p-4 rounded-lg">
                                  <div className="flex justify-between items-center">
                                    <h3 className="text-sm font-medium">{item.year}</h3>
                                    <span className="font-bold text-lg">{item.count}</span>
                                  </div>
                                  <p className="text-xs text-muted-foreground mt-1">Students placed</p>
                                </div>
                              ))}
                            </div>
                            
                            <Separator />
                            
                            <div>
                              <h3 className="text-sm font-medium mb-2">Placement Trend</h3>
                              <div className="h-64 w-full bg-muted rounded-lg flex items-center justify-center">
                                <div className="flex flex-col items-center justify-center text-center p-4">
                                  <BarChart className="h-10 w-10 text-primary mb-2" />
                                  <p className="text-sm text-muted-foreground mb-2">Hiring trend visualization would appear here</p>
                                  <p className="text-xs text-muted-foreground">Year-wise hiring statistics</p>
                                </div>
                              </div>
                            </div>
                            
                            <div className="flex justify-end">
                              <Button variant="outline">
                                <Download className="mr-2 h-4 w-4" />
                                Export Placement Data
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                    
                    <TabsContent value="students" className="mt-4">
                      <Card>
                        <CardContent className="pt-6">
                          <div className="space-y-4">
                            <div className="flex justify-between items-center mb-4">
                              <h3 className="text-sm font-medium">Students Placed at {selectedCompany.name}</h3>
                              <Button variant="outline" size="sm">
                                <Filter className="mr-2 h-4 w-4" />
                                Filter
                              </Button>
                            </div>
                            
                            <div className="border rounded-lg">
                              <div className="grid grid-cols-3 p-3 bg-muted text-sm font-medium border-b">
                                <div>Student Name</div>
                                <div>Position</div>
                                <div>Placement Date</div>
                              </div>
                              
                              <div className="divide-y">
                                {Array.from({ length: 5 }).map((_, index) => (
                                  <div key={index} className="grid grid-cols-3 p-3 text-sm">
                                    <div className="flex items-center">
                                      <Avatar className="h-6 w-6 mr-2">
                                        <AvatarFallback>S{index + 1}</AvatarFallback>
                                      </Avatar>
                                      <span>Student {index + 1}</span>
                                    </div>
                                    <div>{selectedCompany.jobs[index % selectedCompany.jobs.length].title}</div>
                                    <div>{new Date(2025, 0, 15 + index * 3).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</div>
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            <div className="flex justify-between items-center pt-2">
                              <p className="text-sm text-muted-foreground">Showing 5 of {selectedCompany.placementCount} students</p>
                              <div className="flex items-center space-x-2">
                                <Button variant="outline" size="sm" disabled>Previous</Button>
                                <Button variant="outline" size="sm">Next</Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  </Tabs>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Upcoming Events</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-4 p-4 border rounded-lg">
                          <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center">
                            <Calendar className="h-5 w-5 text-primary" />
                          </div>
                          <div className="space-y-1 flex-1">
                            <div className="flex justify-between items-start">
                              <div>
                                <p className="font-medium">Campus Recruitment Drive</p>
                                <p className="text-sm text-muted-foreground">Main Auditorium</p>
                              </div>
                              <Badge className="bg-green-100 text-green-800">Upcoming</Badge>
                            </div>
                            <p className="text-sm">March 15, 2025 • 10:00 AM - 4:00 PM</p>
                            <div className="flex items-center mt-2">
                              <Button size="sm" variant="outline">Edit Event</Button>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-start space-x-4 p-4 border rounded-lg">
                          <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center">
                            <Calendar className="h-5 w-5 text-primary" />
                          </div>
                          <div className="space-y-1 flex-1">
                            <div className="flex justify-between items-start">
                              <div>
                                <p className="font-medium">Technical Workshop</p>
                                <p className="text-sm text-muted-foreground">Computer Science Building</p>
                              </div>
                              <Badge className="bg-blue-100 text-blue-800">Planning</Badge>
                            </div>
                            <p className="text-sm">April 10, 2025 • 2:00 PM - 5:00 PM</p>
                            <div className="flex items-center mt-2">
                              <Button size="sm" variant="outline">Edit Event</Button>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex justify-center">
                          <Button>
                            <Plus className="mr-2 h-4 w-4" />
                            Schedule New Event
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

function BriefcaseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

function LinkIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}