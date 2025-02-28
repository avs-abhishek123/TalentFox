'use client';

import { useState } from 'react';
import { 
  FolderOpen, 
  Search, 
  Plus, 
  FileText, 
  Video, 
  Link as LinkIcon, 
  Download, 
  Edit, 
  Trash, 
  MoreHorizontal,
  Clock, 
  Bookmark, 
  Filter, 
  Book, 
  PenTool, 
  FileQuestion, 
  Users, 
  Tag,
  Eye,
  ExternalLink,
  Upload,
  LayoutGrid,
  List,
Star,
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
import { Textarea } from '@/components/ui/textarea';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

export default function ResourceHubPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [view, setView] = useState('grid');
  const [activeTab, setActiveTab] = useState('all');
  const [showAddResourceDialog, setShowAddResourceDialog] = useState(false);
  
  // Sample resources data
  const resources = [
    {
      id: 1,
      title: 'Resume Writing Guide',
      description: 'Comprehensive guide to creating an effective resume for tech industry jobs. Includes templates and examples.',
      type: 'document',
      category: 'resume',
      tags: ['resume', 'job-application', 'guide'],
      fileType: 'pdf',
      fileSize: '2.4 MB',
      addedBy: 'Placement Officer',
      addedDate: '2025-02-15',
      views: 324,
      downloads: 185,
      featured: true,
      link: '#',
      icon: FileText
    },
    {
      id: 2,
      title: 'Technical Interview Preparation',
      description: 'Video series covering common technical interview questions and strategies for software engineering roles.',
      type: 'video',
      category: 'interview',
      tags: ['interview', 'technical', 'preparation'],
      fileType: 'mp4',
      fileSize: '450 MB',
      addedBy: 'Placement Officer',
      addedDate: '2025-02-10',
      views: 278,
      downloads: 112,
      featured: true,
      link: '#',
      icon: Video
    },
    {
      id: 3,
      title: 'Company Research Guide',
      description: 'Step-by-step guide on how to research companies before interviews. Includes templates for company research notes.',
      type: 'document',
      category: 'interview',
      tags: ['research', 'company', 'preparation'],
      fileType: 'pdf',
      fileSize: '1.8 MB',
      addedBy: 'Placement Officer',
      addedDate: '2025-02-05',
      views: 196,
      downloads: 104,
      featured: false,
      link: '#',
      icon: FileText
    },
    {
      id: 4,
      title: 'LinkedIn Profile Optimization',
      description: 'Tips and best practices for optimizing your LinkedIn profile to attract recruiters.',
      type: 'document',
      category: 'career',
      tags: ['linkedin', 'social-media', 'profile'],
      fileType: 'pdf',
      fileSize: '1.2 MB',
      addedBy: 'Placement Officer',
      addedDate: '2025-01-28',
      views: 245,
      downloads: 132,
      featured: false,
      link: '#',
      icon: FileText
    },
    {
      id: 5,
      title: 'Mock Interview Videos',
      description: 'Collection of mock interview videos for various roles including software development, data science, and product management.',
      type: 'video',
      category: 'interview',
      tags: ['mock-interview', 'practice', 'feedback'],
      fileType: 'mp4',
      fileSize: '820 MB',
      addedBy: 'Placement Officer',
      addedDate: '2025-01-20',
      views: 312,
      downloads: 95,
      featured: true,
      link: '#',
      icon: Video
    },
    {
      id: 6,
      title: 'Google Tech Interview Resources',
      description: 'Curated collection of resources specifically for preparing for Google technical interviews.',
      type: 'link',
      category: 'company-specific',
      tags: ['google', 'tech-interview', 'preparation'],
      addedBy: 'Placement Officer',
      addedDate: '2025-01-15',
      views: 268,
      downloads: 0,
      featured: false,
      link: 'https://example.com/google-resources',
      icon: LinkIcon
    },
    {
      id: 7,
      title: 'Salary Negotiation Strategies',
      description: 'Guide on how to negotiate your salary and benefits package effectively.',
      type: 'document',
      category: 'career',
      tags: ['salary', 'negotiation', 'offer'],
      fileType: 'pdf',
      fileSize: '1.5 MB',
      addedBy: 'Placement Officer',
      addedDate: '2025-01-10',
      views: 189,
      downloads: 87,
      featured: false,
      link: '#',
      icon: FileText
    },
    {
      id: 8,
      title: 'Amazon Leadership Principles',
      description: 'Explanation of Amazon\'s leadership principles and how to prepare for behavioral interviews based on these principles.',
      type: 'document',
      category: 'company-specific',
      tags: ['amazon', 'leadership', 'behavioral-interview'],
      fileType: 'pdf',
      fileSize: '2.1 MB',
      addedBy: 'Placement Officer',
      addedDate: '2025-01-05',
      views: 224,
      downloads: 115,
      featured: false,
      link: '#',
      icon: FileText
    },
    {
      id: 9,
      title: 'Common Coding Interview Questions',
      description: 'Collection of frequently asked coding interview questions with detailed solutions and explanations.',
      type: 'document',
      category: 'technical',
      tags: ['coding', 'algorithm', 'interview-questions'],
      fileType: 'pdf',
      fileSize: '3.2 MB',
      addedBy: 'Placement Officer',
      addedDate: '2024-12-28',
      views: 356,
      downloads: 208,
      featured: true,
      link: '#',
      icon: FileText
    },
    {
      id: 10,
      title: 'System Design Interview Preparation',
      description: 'Comprehensive guide to preparing for system design interviews at top tech companies.',
      type: 'video',
      category: 'technical',
      tags: ['system-design', 'architecture', 'scalability'],
      fileType: 'mp4',
      fileSize: '520 MB',
      addedBy: 'Placement Officer',
      addedDate: '2024-12-20',
      views: 289,
      downloads: 134,
      featured: false,
      link: '#',
      icon: Video
    },
    {
      id: 11,
      title: 'Microsoft Interview Experience',
      description: 'Collection of recent interview experiences from students who interviewed at Microsoft.',
      type: 'document',
      category: 'company-specific',
      tags: ['microsoft', 'interview-experience', 'feedback'],
      fileType: 'pdf',
      fileSize: '1.6 MB',
      addedBy: 'Placement Officer',
      addedDate: '2024-12-15',
      views: 187,
      downloads: 92,
      featured: false,
      link: '#',
      icon: FileText
    },
    {
      id: 12,
      title: 'Remote Work Job Search Strategies',
      description: 'Guide to finding and securing remote work opportunities in the tech industry.',
      type: 'document',
      category: 'career',
      tags: ['remote-work', 'job-search', 'work-from-home'],
      fileType: 'pdf',
      fileSize: '1.3 MB',
      addedBy: 'Placement Officer',
      addedDate: '2024-12-10',
      views: 142,
      downloads: 83,
      featured: false,
      link: '#',
      icon: FileText
    }
  ];
  
  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Categories', icon: FolderOpen },
    { id: 'resume', name: 'Resume Building', icon: FileText },
    { id: 'interview', name: 'Interview Prep', icon: Users },
    { id: 'technical', name: 'Technical Skills', icon: PenTool },
    { id: 'career', name: 'Career Development', icon: Book },
    { id: 'company-specific', name: 'Company Specific', icon: FileQuestion }
  ];
  
  // Filter resources based on search term, category, and active tab
  const filteredResources = resources.filter(resource => {
    const matchesSearch = 
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = categoryFilter === 'all' || resource.category === categoryFilter;
    
    const matchesTab = 
      activeTab === 'all' || 
      (activeTab === 'documents' && resource.type === 'document') ||
      (activeTab === 'videos' && resource.type === 'video') ||
      (activeTab === 'links' && resource.type === 'link') ||
      (activeTab === 'featured' && resource.featured);
    
    return matchesSearch && matchesCategory && matchesTab;
  });
  
  // Format file size for display
  const formatFileSize = (sizeInMB: string) => {
    const size = parseFloat(sizeInMB);
    if (size >= 1) {
      return `${size} MB`;
    } else {
      return `${Math.round(size * 1024)} KB`;
    }
  };
  
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
  
  // Get icon for resource type
  const getResourceTypeIcon = (type: string) => {
    switch(type) {
      case 'document':
        return <FileText className="h-6 w-6" />;
      case 'video':
        return <Video className="h-6 w-6" />;
      case 'link':
        return <LinkIcon className="h-6 w-6" />;
      default:
        return <FileText className="h-6 w-6" />;
    }
  };
  
  // Get color for resource type
  const getResourceTypeColor = (type: string) => {
    switch(type) {
      case 'document':
        return 'bg-blue-100 text-blue-800';
      case 'video':
        return 'bg-purple-100 text-purple-800';
      case 'link':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-1 sm:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Resource Hub</h1>
          <p className="text-muted-foreground">Access and manage placement resources for students</p>
        </div>
        <div className="flex gap-2 mt-4 sm:mt-0">
          <Dialog open={showAddResourceDialog} onOpenChange={setShowAddResourceDialog}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Resource
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[550px]">
              <DialogHeader>
                <DialogTitle>Add New Resource</DialogTitle>
                <DialogDescription>
                  Upload or link to a new resource for students
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="resource-title">Resource Title</Label>
                  <Input id="resource-title" placeholder="e.g. Resume Writing Guide" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="resource-description">Description</Label>
                  <Textarea 
                    id="resource-description" 
                    placeholder="Provide a brief description of this resource..." 
                    rows={3}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="resource-type">Resource Type</Label>
                    <Select>
                      <SelectTrigger id="resource-type">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="document">Document</SelectItem>
                        <SelectItem value="video">Video</SelectItem>
                        <SelectItem value="link">External Link</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="resource-category">Category</Label>
                    <Select>
                      <SelectTrigger id="resource-category">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="resume">Resume Building</SelectItem>
                        <SelectItem value="interview">Interview Prep</SelectItem>
                        <SelectItem value="technical">Technical Skills</SelectItem>
                        <SelectItem value="career">Career Development</SelectItem>
                        <SelectItem value="company-specific">Company Specific</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="resource-tags">Tags (comma separated)</Label>
                  <Input id="resource-tags" placeholder="e.g. resume, template, guide" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="resource-upload">Upload File or Enter URL</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                      <Input id="resource-url" placeholder="https://example.com/resource" />
                    </div>
                    <div className="col-span-2">
                      <p className="text-xs text-center text-muted-foreground mb-2">OR</p>
                      <div className="flex items-center justify-center w-full">
                        <label className="flex flex-col items-center justify-center w-full h-20 border-2 border-dashed rounded-lg cursor-pointer bg-muted hover:bg-muted/80">
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <Upload className="h-6 w-6 text-muted-foreground mb-2" />
                            <p className="text-xs text-muted-foreground">Click to upload or drag and drop</p>
                          </div>
                          <input type="file" className="hidden" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="featured" className="rounded border-gray-300" />
                  <Label htmlFor="featured">Mark as featured resource</Label>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setShowAddResourceDialog(false)}>Cancel</Button>
                <Button onClick={() => setShowAddResourceDialog(false)}>Add Resource</Button>
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
              placeholder="Search resources..."
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
              {categories.map(category => (
                <SelectItem key={category.id} value={category.id}>
                  <div className="flex items-center">
                    <category.icon className="h-4 w-4 mr-2" />
                    {category.name}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <div className="flex rounded-md border">
            <Button
              variant={view === 'grid' ? 'default' : 'ghost'}
              size="icon"
              className="rounded-l-md rounded-r-none"
              onClick={() => setView('grid')}
            >
              <LayoutGrid className="h-4 w-4" />
            </Button>
            <Separator orientation="vertical" className="h-full" />
            <Button
              variant={view === 'list' ? 'default' : 'ghost'}
              size="icon"
              className="rounded-l-none rounded-r-md"
              onClick={() => setView('list')}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <Tabs defaultValue="all" onValueChange={setActiveTab} className="mb-6">
        <TabsList>
          <TabsTrigger value="all">All Resources</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
          <TabsTrigger value="links">Links</TabsTrigger>
          <TabsTrigger value="featured">Featured</TabsTrigger>
        </TabsList>
      </Tabs>
      
      {filteredResources.length > 0 ? (
        view === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredResources.map((resource) => (
              <Card key={resource.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div className={`p-2 rounded-md ${getResourceTypeColor(resource.type)}`}>
                        {getResourceTypeIcon(resource.type)}
                      </div>
                      <div className="flex">
                        {resource.featured && (
                          <Badge className="bg-amber-100 text-amber-800 mr-2">
                            <Star className="h-3 w-3 mr-1 fill-amber-500" />
                            Featured
                          </Badge>
                        )}
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Eye className="mr-2 h-4 w-4" />
                              View Details
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Download className="mr-2 h-4 w-4" />
                              Download
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Edit className="mr-2 h-4 w-4" />
                              Edit
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600">
                              <Trash className="mr-2 h-4 w-4" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                    
                    <h3 className="font-semibold mb-2">{resource.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{resource.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {resource.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag.replace('-', ' ')}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center text-xs text-muted-foreground">
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {getTimeElapsed(resource.addedDate)}
                      </div>
                      <div className="flex items-center">
                        <Eye className="h-3 w-3 mr-1" />
                        {resource.views}
                      </div>
                      {resource.type !== 'link' && (
                        <div className="flex items-center">
                          <Download className="h-3 w-3 mr-1" />
                          {resource.downloads}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="bg-muted p-3 border-t flex justify-between items-center">
                    <div className="flex items-center">
                      {resource.type === 'document' && (
                        <span className="text-xs">{resource.fileType ? resource.fileType.toUpperCase() : 'Unknown'} • {resource.fileSize || 'N/A'}</span>
                      )}
                      {resource.type === 'video' && (
                        <span className="text-xs">{resource.fileType ? resource.fileType.toUpperCase() : 'Unknown'} • {resource.fileSize || 'N/A'}</span>
                      )}
                      {resource.type === 'link' && (
                        <span className="text-xs">External Link</span>
                      )}
                    </div>
                    
                    <div>
                      {resource.type === 'link' ? (
                        <Button size="sm" variant="outline" asChild>
                          <a href={resource.link} target="_blank" rel="noopener noreferrer">
                            Visit Link
                            <ExternalLink className="ml-2 h-3 w-3" />
                          </a>
                        </Button>
                      ) : (
                        <Button size="sm" variant="outline">
                          Download
                          <Download className="ml-2 h-3 w-3" />
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="space-y-2">
            {filteredResources.map((resource) => (
              <Card key={resource.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <div className="flex flex-col sm:flex-row">
                    <div className={`p-4 sm:p-6 flex-1`}>
                      <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
                        <div className="flex items-start">
                          <div className={`p-2 rounded-md ${getResourceTypeColor(resource.type)} mr-4`}>
                            {getResourceTypeIcon(resource.type)}
                          </div>
                          <div>
                            <div className="flex items-center">
                              <h3 className="font-semibold">{resource.title}</h3>
                              {resource.featured && (
                                <Badge className="bg-amber-100 text-amber-800 ml-2">
                                  <Star className="h-3 w-3 mr-1 fill-amber-500" />
                                  Featured
                                </Badge>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">{resource.description}</p>
                          </div>
                        </div>
                        
                        <div className="sm:text-right">
                          <div className="flex items-center text-xs text-muted-foreground mb-1">
                            <Clock className="h-3 w-3 mr-1" />
                            {getTimeElapsed(resource.addedDate)}
                          </div>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {resource.tags.slice(0, 2).map((tag, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {tag.replace('-', ' ')}
                              </Badge>
                            ))}
                            {resource.tags.length > 2 && (
                              <Badge variant="outline" className="text-xs">
                                +{resource.tags.length - 2}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap items-center justify-between mt-4 pt-4 border-t">
                        <div className="flex items-center space-x-4 text-sm">
                          <div className="flex items-center">
                            <Eye className="h-4 w-4 text-muted-foreground mr-1" />
                            <span>{resource.views} views</span>
                          </div>
                          {resource.type !== 'link' && (
                            <div className="flex items-center">
                              <Download className="h-4 w-4 text-muted-foreground mr-1" />
                              <span>{resource.downloads} downloads</span>
                            </div>
                          )}
                          
                          {resource.type === 'document' && (
                            <div className="flex items-center">
                              <FileText className="h-4 w-4 text-muted-foreground mr-1" />
                              <span>{resource.fileType ? resource.fileType.toUpperCase() : 'Unknown'} • {resource.fileSize || 'N/A'}</span>
                            </div>
                          )}
                          {resource.type === 'video' && (
                            <div className="flex items-center">
                              <Video className="h-4 w-4 text-muted-foreground mr-1" />
                              <span>{resource.fileType ? resource.fileType.toUpperCase() : 'Unknown'} • {resource.fileSize || 'N/A'}</span>
                            </div>
                          )}
                        </div>
                        
                        <div className="flex items-center space-x-2 mt-2 sm:mt-0">
                          {resource.type === 'link' ? (
                            <Button size="sm" variant="outline" asChild>
                              <a href={resource.link} target="_blank" rel="noopener noreferrer">
                                Visit Link
                                <ExternalLink className="ml-2 h-3 w-3" />
                              </a>
                            </Button>
                          ) : (
                            <Button size="sm" variant="outline">
                              Download
                              <Download className="ml-2 h-3 w-3" />
                            </Button>
                          )}
                          
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
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
                                Edit
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Bookmark className="mr-2 h-4 w-4" />
                                Save to Bookmarks
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-red-600">
                                <Trash className="mr-2 h-4 w-4" />
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )
      ) : (
        <Card>
          <CardContent className="p-6 flex flex-col items-center justify-center">
            <FolderOpen className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">No resources found</h3>
            <p className="text-muted-foreground text-center mb-4">
              {searchTerm || categoryFilter !== 'all' || activeTab !== 'all' 
                ? 'Try adjusting your search or filters' 
                : 'Start by adding resources to the hub'}
            </p>
            <Button onClick={() => setShowAddResourceDialog(true)}>
              <Plus className="mr-2 h-4 w-4" />
              Add Resource
            </Button>
          </CardContent>
        </Card>
      )}
      
      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Resource Collections</CardTitle>
            <CardDescription>Curated collections of resources for specific needs</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Interview Preparation Toolkit</CardTitle>
                </CardHeader>
                <CardContent className="pt-2">
                  <p className="text-sm text-muted-foreground mb-3">Complete package of resources for technical and behavioral interviews</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <FileText className="h-4 w-4 text-primary mr-2" />
                      <span>5 documents</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Video className="h-4 w-4 text-primary mr-2" />
                      <span>3 videos</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Eye className="h-4 w-4 text-primary mr-2" />
                      <span>421 views</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button size="sm" className="w-full">View Collection</Button>
                </CardFooter>
              </Card>
              
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Resume Masterclass</CardTitle>
                </CardHeader>
                <CardContent className="pt-2">
                  <p className="text-sm text-muted-foreground mb-3">Everything you need to create an impressive resume that stands out</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <FileText className="h-4 w-4 text-primary mr-2" />
                      <span>4 documents</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Video className="h-4 w-4 text-primary mr-2" />
                      <span>2 videos</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Eye className="h-4 w-4 text-primary mr-2" />
                      <span>368 views</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button size="sm" className="w-full">View Collection</Button>
                </CardFooter>
              </Card>
              
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">FAANG Prep Bundle</CardTitle>
                </CardHeader>
                <CardContent className="pt-2">
                  <p className="text-sm text-muted-foreground mb-3">Specialized resources for preparing for top tech companies</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <FileText className="h-4 w-4 text-primary mr-2" />
                      <span>6 documents</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Video className="h-4 w-4 text-primary mr-2" />
                      <span>4 videos</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Eye className="h-4 w-4 text-primary mr-2" />
                      <span>512 views</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button size="sm" className="w-full">View Collection</Button>
                </CardFooter>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Resource Management</CardTitle>
            <CardDescription>Tools for organizing and managing resources</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="h-auto py-6 justify-start flex-col items-center">
                <Upload className="h-6 w-6 mb-2" />
                <span>Bulk Upload</span>
                <span className="text-xs text-muted-foreground mt-1">Upload multiple resources at once</span>
              </Button>
              
              <Button variant="outline" className="h-auto py-6 justify-start flex-col items-center">
                <Tag className="h-6 w-6 mb-2" />
                <span>Manage Categories</span>
                <span className="text-xs text-muted-foreground mt-1">Organize resources by category</span>
              </Button>
              
              <Button variant="outline" className="h-auto py-6 justify-start flex-col items-center">
                <FileText className="h-6 w-6 mb-2" />
                <span>Generate Report</span>
                <span className="text-xs text-muted-foreground mt-1">Create usage analytics report</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Recent Activity Section */}
      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Recent updates to the resource hub</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Plus className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-medium">Resume Writing Guide added</p>
                    <span className="text-xs text-muted-foreground">2 days ago</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Added by Placement Officer</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Download className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-medium">Technical Interview Preparation downloaded 25 times</p>
                    <span className="text-xs text-muted-foreground">3 days ago</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Popular resource this week</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Edit className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-medium">Company Research Guide updated</p>
                    <span className="text-xs text-muted-foreground">5 days ago</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Updated by Placement Officer</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Star className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-medium">Mock Interview Videos marked as featured</p>
                    <span className="text-xs text-muted-foreground">7 days ago</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Promoted to featured resources</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Student Engagement Section */}
      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Student Engagement</CardTitle>
            <CardDescription>How students are using the resources</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-muted p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium">Top Downloaded</h3>
                  <Download className="h-4 w-4 text-muted-foreground" />
                </div>
                <ol className="space-y-2">
                  <li className="text-sm flex justify-between">
                    <span className="truncate">Common Coding Interview Questions</span>
                    <span className="font-medium">208</span>
                  </li>
                  <li className="text-sm flex justify-between">
                    <span className="truncate">Resume Writing Guide</span>
                    <span className="font-medium">185</span>
                  </li>
                  <li className="text-sm flex justify-between">
                    <span className="truncate">System Design Interview Prep</span>
                    <span className="font-medium">134</span>
                  </li>
                </ol>
              </div>
              
              <div className="bg-muted p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium">Most Viewed</h3>
                  <Eye className="h-4 w-4 text-muted-foreground" />
                </div>
                <ol className="space-y-2">
                  <li className="text-sm flex justify-between">
                    <span className="truncate">Common Coding Interview Questions</span>
                    <span className="font-medium">356</span>
                  </li>
                  <li className="text-sm flex justify-between">
                    <span className="truncate">Resume Writing Guide</span>
                    <span className="font-medium">324</span>
                  </li>
                  <li className="text-sm flex justify-between">
                    <span className="truncate">Mock Interview Videos</span>
                    <span className="font-medium">312</span>
                  </li>
                </ol>
              </div>
              
              <div className="bg-muted p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium">Popular Categories</h3>
                  <FolderOpen className="h-4 w-4 text-muted-foreground" />
                </div>
                <ol className="space-y-2">
                  <li className="text-sm flex justify-between">
                    <span className="truncate">Interview Prep</span>
                    <span className="font-medium">42%</span>
                  </li>
                  <li className="text-sm flex justify-between">
                    <span className="truncate">Technical Skills</span>
                    <span className="font-medium">28%</span>
                  </li>
                  <li className="text-sm flex justify-between">
                    <span className="truncate">Resume Building</span>
                    <span className="font-medium">18%</span>
                  </li>
                </ol>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}