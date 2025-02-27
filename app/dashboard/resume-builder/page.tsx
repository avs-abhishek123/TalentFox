'use client';

import { useState } from 'react';
import { 
  FileText, 
  Plus, 
  Clock, 
  Download, 
  Edit, 
  Trash, 
  CheckCircle2, 
  Copy,
  LayoutTemplate,
  Upload,
  Sparkles,
  ArrowRight
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

export default function ResumeBuilderPage() {
  const [activeTab, setActiveTab] = useState('my-resumes');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data for resumes
  const resumes = [
    { 
      id: 1, 
      title: 'Abhishek_Resume_2025.pdf', 
      lastModified: '3 days ago', 
      completionScore: 85, 
      tags: ['Technical', 'Frontend'],
      thumbnail: '/placeholder/200/300'
    },
    { 
      id: 2, 
      title: 'Abhishek_Resume_Tech.pdf', 
      lastModified: '2 weeks ago', 
      completionScore: 65, 
      tags: ['Technical'],
      thumbnail: '/placeholder/200/300'
    },
    { 
      id: 3, 
      title: 'Resume_Frontend_Dev.pdf', 
      lastModified: '1 month ago', 
      completionScore: 92, 
      tags: ['Frontend', 'Creative'],
      thumbnail: '/placeholder/200/300'
    },
    { 
      id: 4, 
      title: 'Resume_UX_Design.pdf', 
      lastModified: '2 months ago', 
      completionScore: 78, 
      tags: ['Design', 'Creative'],
      thumbnail: '/placeholder/200/300'
    }
  ];

  // Mock data for templates
  const templates = [
    {
      id: 1,
      title: 'Modern Professional',
      category: 'General',
      popularity: 'High',
      thumbnail: '/placeholder/200/300'
    },
    {
      id: 2,
      title: 'Technical Specialist',
      category: 'Technical',
      popularity: 'High',
      thumbnail: '/placeholder/200/300'
    },
    {
      id: 3,
      title: 'Creative Portfolio',
      category: 'Creative',
      popularity: 'Medium',
      thumbnail: '/placeholder/200/300'
    },
    {
      id: 4,
      title: 'ATS Optimized',
      category: 'General',
      popularity: 'Very High',
      thumbnail: '/placeholder/200/300'
    },
    {
      id: 5,
      title: 'Executive Summary',
      category: 'Management',
      popularity: 'Medium',
      thumbnail: '/placeholder/200/300'
    },
    {
      id: 6,
      title: 'Minimalist',
      category: 'General',
      popularity: 'High',
      thumbnail: '/placeholder/200/300'
    }
  ];

  // Filter resumes based on search term
  const filteredResumes = resumes.filter(resume => 
    resume.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resume.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Filter templates based on search term
  const filteredTemplates = templates.filter(template => 
    template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    template.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-1 sm:p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Resume Builder</h1>
        <p className="text-muted-foreground">Create, edit, and manage your professional resumes</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Sidebar */}
        <div className="col-span-1 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button className="w-full justify-start" size="lg">
                <Plus className="mr-2 h-4 w-4" />
                Create New Resume
              </Button>
              <Button variant="outline" className="w-full justify-start" size="lg">
                <Upload className="mr-2 h-4 w-4" />
                Upload Resume
              </Button>
              <Button variant="outline" className="w-full justify-start" size="lg">
                <Sparkles className="mr-2 h-4 w-4" />
                AI Resume Enhancement
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Resume Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm">Total Resumes</span>
                  <span className="font-medium">{resumes.length}</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm">Average Score</span>
                  <span className="font-medium">80%</span>
                </div>
                <Progress value={80} className="h-2" />
              </div>
              <Separator className="my-2" />
              <div className="flex items-center justify-between">
                <span className="text-sm">Last Updated</span>
                <span className="text-sm text-muted-foreground">3 days ago</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tips & Resources</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border border-dashed border-primary/50 rounded-lg p-3 space-y-2">
                <h3 className="text-sm font-medium flex items-center">
                  <Sparkles className="h-4 w-4 text-primary mr-2" />
                  Resume Writing Tips
                </h3>
                <p className="text-xs text-muted-foreground">Use action verbs and quantify achievements to make your resume stand out.</p>
                <Button variant="link" size="sm" className="h-8 px-0 text-xs">Learn more</Button>
              </div>
              <div className="border border-dashed border-primary/50 rounded-lg p-3 space-y-2">
                <h3 className="text-sm font-medium flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-primary mr-2" />
                  ATS Compatibility
                </h3>
                <p className="text-xs text-muted-foreground">Ensure your resume passes through Applicant Tracking Systems with these tips.</p>
                <Button variant="link" size="sm" className="h-8 px-0 text-xs">Learn more</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="relative w-full sm:max-w-xs">
              <Input
                placeholder="Search resumes or templates..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
              <div className="absolute left-3 top-2.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-muted-foreground"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </div>
            </div>
            <div>
              <Button className="w-full sm:w-auto">
                <Plus className="mr-2 h-4 w-4" />
                Create New Resume
              </Button>
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="my-resumes">My Resumes</TabsTrigger>
              <TabsTrigger value="templates">Resume Templates</TabsTrigger>
            </TabsList>

            <TabsContent value="my-resumes" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredResumes.length > 0 ? (
                  filteredResumes.map((resume) => (
                    <Card key={resume.id} className="overflow-hidden">
                      <div className="aspect-[3/4] bg-muted relative overflow-hidden">
                        <img
                          src={resume.thumbnail}
                          alt={resume.title}
                          className="object-cover w-full h-full"
                        />
                        <div className="absolute top-2 right-2 flex space-x-1">
                          <Badge className="bg-primary">
                            {resume.completionScore}%
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-medium truncate" title={resume.title}>
                          {resume.title}
                        </h3>
                        <div className="flex items-center text-xs text-muted-foreground mt-1">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>Updated {resume.lastModified}</span>
                        </div>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {resume.tags.map((tag, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="p-4 pt-0 grid grid-cols-4 gap-2">
                        <Button variant="outline" size="icon" className="h-9 w-9">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon" className="h-9 w-9">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon" className="h-9 w-9">
                          <Copy className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon" className="h-9 w-9 text-red-500 hover:text-red-600">
                          <Trash className="h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  ))
                ) : (
                  <div className="col-span-3 flex items-center justify-center p-8 border border-dashed rounded-lg">
                    <div className="text-center">
                      <FileText className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
                      <h3 className="font-medium mb-1">No resumes found</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {searchTerm ? `No results for "${searchTerm}"` : "You haven't created any resumes yet"}
                      </p>
                      <Button>
                        <Plus className="mr-2 h-4 w-4" />
                        Create Your First Resume
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="templates" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredTemplates.length > 0 ? (
                  filteredTemplates.map((template) => (
                    <Card key={template.id} className="overflow-hidden group cursor-pointer hover:border-primary/50 transition-colors">
                      <div className="aspect-[3/4] bg-muted relative overflow-hidden">
                        <img
                          src={template.thumbnail}
                          alt={template.title}
                          className="object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button className="bg-white text-black hover:bg-white/90">
                            Use Template
                          </Button>
                        </div>
                        <div className="absolute top-2 left-2">
                          <Badge className="bg-white text-black">
                            {template.category}
                          </Badge>
                        </div>
                        <div className="absolute top-2 right-2">
                          <Badge className="bg-primary">
                            {template.popularity}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-medium">{template.title}</h3>
                        <p className="text-xs text-muted-foreground mt-1">
                          Professional template for {template.category.toLowerCase()} roles
                        </p>
                      </CardContent>
                      <CardFooter className="p-4 pt-0">
                        <Button className="w-full">
                          <LayoutTemplate className="mr-2 h-4 w-4" />
                          Use Template
                        </Button>
                      </CardFooter>
                    </Card>
                  ))
                ) : (
                  <div className="col-span-3 flex items-center justify-center p-8 border border-dashed rounded-lg">
                    <div className="text-center">
                      <LayoutTemplate className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
                      <h3 className="font-medium mb-1">No templates found</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {searchTerm ? `No results for "${searchTerm}"` : "No templates available"}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>

          {/* AI Resume Enhancement Card */}
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Sparkles className="h-5 w-5 text-primary mr-2" />
                AI Resume Enhancement
              </CardTitle>
              <CardDescription>
                Let our AI help you optimize your resume for better job matches
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg border shadow-sm">
                  <div className="flex items-center mb-2">
                    <div className="bg-primary/10 p-2 rounded-full mr-2">
                      <Sparkles className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-medium">Content Improvement</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    AI-powered suggestions to enhance your resume content and wording.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border shadow-sm">
                  <div className="flex items-center mb-2">
                    <div className="bg-primary/10 p-2 rounded-full mr-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-medium">ATS Optimization</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Ensure your resume passes through Applicant Tracking Systems.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border shadow-sm">
                  <div className="flex items-center mb-2">
                    <div className="bg-primary/10 p-2 rounded-full mr-2">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-medium">Formatting Check</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Ensure consistent formatting and professional layout.
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                Enhance Your Resume <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}