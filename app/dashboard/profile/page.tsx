// app/dashboard/profile/page.tsx
'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { 
  User, 
  Mail, 
  Smartphone, 
  MapPin, 
  Calendar, 
  GraduationCap, 
  Award, 
  FileText, 
  Plus, 
  X, 
  Upload, 
  Briefcase,
  ExternalLink 
} from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';

export default function ProfilePage() {
  const { data: session } = useSession();
  const [isEditing, setIsEditing] = useState(false);
  
  // Mock data for profile
  const [profileData, setProfileData] = useState({
    name: 'Rahul Sharma',
    email: 'rahul.sharma@example.com',
    phone: '+91 9876543210',
    location: 'Bengaluru, India',
    about: 'Passionate Computer Science student with a focus on web development and machine learning. Looking for opportunities to apply my skills in innovative projects.',
    education: [
      {
        degree: 'B.Tech Computer Science',
        institution: 'National Institute of Technology',
        year: '2021 - 2025',
        grade: 'CGPA: 8.7/10',
      },
      {
        degree: 'Higher Secondary Education',
        institution: 'Delhi Public School',
        year: '2019 - 2021',
        grade: '94.5%',
      },
    ],
    skills: ['JavaScript', 'React', 'Node.js', 'Python', 'Machine Learning', 'MongoDB', 'Git', 'Problem Solving'],
    certificates: [
      {
        name: 'AWS Certified Developer Associate',
        issuer: 'Amazon Web Services',
        date: 'May 2024',
      },
      {
        name: 'Machine Learning Specialization',
        issuer: 'Coursera (Stanford University)',
        date: 'January 2024',
      },
      {
        name: 'Full Stack Web Development',
        issuer: 'Udemy',
        date: 'November 2023',
      },
    ],
    projects: [
      {
        title: 'E-commerce Platform',
        description: 'Built a full-stack e-commerce platform with React, Node.js, and MongoDB. Implemented features like product listing, shopping cart, user authentication, and payment integration.',
        link: 'https://github.com/rahulsharma/ecommerce',
        year: '2024',
      },
      {
        title: 'Image Classification Model',
        description: 'Developed a deep learning model for image classification using TensorFlow and Keras. Achieved 92% accuracy on the test dataset.',
        link: 'https://github.com/rahulsharma/image-classification',
        year: '2023',
      },
    ],
    experience: [
      {
        title: 'Software Development Intern',
        company: 'TechCorp Solutions',
        duration: 'May 2024 - July 2024',
        description: 'Worked on developing a responsive web application using React and Redux. Collaborated with a team of developers using agile methodologies.',
      },
      {
        title: 'Research Assistant',
        company: 'University AI Lab',
        duration: 'Jan 2024 - April 2024',
        description: 'Assisted in research on natural language processing algorithms. Implemented and tested various models using Python and TensorFlow.',
      },
    ],
  });

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  const [newSkill, setNewSkill] = useState('');
  
  const addSkill = () => {
    if (newSkill.trim() && !profileData.skills.includes(newSkill.trim())) {
      setProfileData({
        ...profileData,
        skills: [...profileData.skills, newSkill.trim()],
      });
      setNewSkill('');
    }
  };
  
  const removeSkill = (skillToRemove: string) => {
    setProfileData({
      ...profileData,
      skills: profileData.skills.filter((skill) => skill !== skillToRemove),
    });
  };

  // Calculate profile completion percentage
  const calculateProfileCompletion = () => {
    let score = 0;
    const totalSections = 8; // Basic info, about, education, skills, certificates, projects, experience, resume
    
    if (profileData.name && profileData.email) score++; // Basic info
    if (profileData.about) score++; // About
    if (profileData.education.length > 0) score++; // Education
    if (profileData.skills.length > 0) score++; // Skills
    if (profileData.certificates.length > 0) score++; // Certificates
    if (profileData.projects.length > 0) score++; // Projects
    if (profileData.experience.length > 0) score++; // Experience
    score++; // Assuming resume is uploaded
    
    return Math.round((score / totalSections) * 100);
  };

  const profileCompletionScore = calculateProfileCompletion();

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Your Profile</h1>
          <p className="text-muted-foreground">Manage your personal information and resume</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Button onClick={() => setIsEditing(!isEditing)}>
            {isEditing ? 'Save Changes' : 'Edit Profile'}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 space-y-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
                    {getInitials(profileData.name)}
                  </AvatarFallback>
                </Avatar>
                <h2 className="text-xl font-semibold">{profileData.name}</h2>
                <p className="text-muted-foreground">B.Tech Computer Science</p>
                <p className="text-sm text-muted-foreground mt-1">National Institute of Technology</p>
                
                <div className="w-full mt-6">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Profile Completion</span>
                    <span className="text-sm text-muted-foreground">{profileCompletionScore}%</span>
                  </div>
                  <Progress value={profileCompletionScore} className="h-2" />
                </div>
              </div>
              
              <div className="mt-6 space-y-4">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-muted-foreground mt-0.5 mr-3" />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-sm">{profileData.email}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Smartphone className="h-5 w-5 text-muted-foreground mt-0.5 mr-3" />
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="text-sm">{profileData.phone}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-muted-foreground mt-0.5 mr-3" />
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-sm">{profileData.location}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <Button variant="outline" className="w-full">
                  <Upload className="mr-2 h-4 w-4" />
                  Update Profile Picture
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Resume</CardTitle>
              <CardDescription>Upload and manage your resume</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border rounded-md p-4 bg-muted/50 flex items-center justify-between">
                <div className="flex items-center">
                  <FileText className="h-8 w-8 text-primary mr-3" />
                  <div>
                    <p className="font-medium">Rahul_Sharma_Resume.pdf</p>
                    <p className="text-xs text-muted-foreground">Updated 2 weeks ago</p>
                  </div>
                </div>
                <Button size="sm" variant="ghost">
                  <Upload className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="mt-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">AI Resume Score</span>
                  <span className="text-sm text-muted-foreground">85/100</span>
                </div>
                <Progress value={85} className="h-2" />
                <p className="text-xs text-muted-foreground mt-2">Your resume is optimized for 85% of job applications in your field.</p>
              </div>
              
              <div className="mt-4">
                <Button variant="outline" className="w-full">
                  Get AI Resume Enhancement
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="md:col-span-2">
          <Tabs defaultValue="about">
            <TabsList className="mb-4">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
            </TabsList>
            
            <TabsContent value="about">
              <Card>
                <CardHeader>
                  <CardTitle>About</CardTitle>
                  <CardDescription>Share information about yourself</CardDescription>
                </CardHeader>
                <CardContent>
                  {isEditing ? (
                    <Textarea 
                      value={profileData.about}
                      onChange={(e) => setProfileData({...profileData, about: e.target.value})}
                      rows={6}
                      placeholder="Write something about yourself..."
                    />
                  ) : (
                    <p className="text-sm leading-6">{profileData.about}</p>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="education">
              <Card>
                <CardHeader>
                  <CardTitle>Education</CardTitle>
                  <CardDescription>Your academic background</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {profileData.education.map((edu, index) => (
                      <div key={index} className="border-b pb-6 last:border-0 last:pb-0">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium">{edu.degree}</h3>
                            <p className="text-sm text-muted-foreground">{edu.institution}</p>
                          </div>
                          <p className="text-sm text-muted-foreground">{edu.year}</p>
                        </div>
                        <p className="text-sm mt-2">{edu.grade}</p>
                      </div>
                    ))}
                  </div>
                  
                  {isEditing && (
                    <div className="mt-6 pt-6 border-t">
                      <h3 className="font-medium mb-4">Add Education</h3>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="degree">Degree</Label>
                            <Input id="degree" placeholder="e.g. B.Tech Computer Science" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="institution">Institution</Label>
                            <Input id="institution" placeholder="e.g. University Name" />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="year">Year</Label>
                            <Input id="year" placeholder="e.g. 2021 - 2025" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="grade">Grade</Label>
                            <Input id="grade" placeholder="e.g. CGPA: 8.7/10" />
                          </div>
                        </div>
                        <Button>Add Education</Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="skills">
              <Card>
                <CardHeader>
                  <CardTitle>Skills</CardTitle>
                  <CardDescription>Your technical and professional skills</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {profileData.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="py-1.5">
                        {skill}
                        {isEditing && (
                          <button 
                            onClick={() => removeSkill(skill)}
                            className="ml-1.5 text-muted-foreground hover:text-foreground"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        )}
                      </Badge>
                    ))}
                  </div>
                  
                  {isEditing && (
                    <div className="mt-6 pt-6 border-t">
                      <h3 className="font-medium mb-4">Add Skill</h3>
                      <div className="flex gap-2">
                        <Input 
                          placeholder="e.g. JavaScript"
                          value={newSkill}
                          onChange={(e) => setNewSkill(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              e.preventDefault();
                              addSkill();
                            }
                          }}
                        />
                        <Button type="button" onClick={addSkill}>
                          <Plus className="h-4 w-4" />
                          Add
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="experience">
              <Card>
                <CardHeader>
                  <CardTitle>Experience</CardTitle>
                  <CardDescription>Your work experience and internships</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {profileData.experience.map((exp, index) => (
                      <div key={index} className="border-b pb-6 last:border-0 last:pb-0">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium">{exp.title}</h3>
                            <p className="text-sm text-muted-foreground">{exp.company}</p>
                          </div>
                          <p className="text-sm text-muted-foreground">{exp.duration}</p>
                        </div>
                        <p className="text-sm mt-2">{exp.description}</p>
                      </div>
                    ))}
                  </div>
                  
                  {isEditing && (
                    <div className="mt-6 pt-6 border-t">
                      <h3 className="font-medium mb-4">Add Experience</h3>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="title">Title</Label>
                            <Input id="title" placeholder="e.g. Software Developer Intern" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="company">Company</Label>
                            <Input id="company" placeholder="e.g. Google" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="duration">Duration</Label>
                          <Input id="duration" placeholder="e.g. May 2024 - July 2024" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="description">Description</Label>
                          <Textarea id="description" placeholder="Describe your responsibilities and achievements..." rows={3} />
                        </div>
                        <Button>Add Experience</Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="projects">
              <Card>
                <CardHeader>
                  <CardTitle>Projects</CardTitle>
                  <CardDescription>Your personal and academic projects</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {profileData.projects.map((project, index) => (
                      <div key={index} className="border-b pb-6 last:border-0 last:pb-0">
                        <div className="flex justify-between items-start">
                          <h3 className="font-medium">{project.title}</h3>
                          <p className="text-sm text-muted-foreground">{project.year}</p>
                        </div>
                        <p className="text-sm mt-2">{project.description}</p>
                        {project.link && (
                          <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-sm text-primary hover:underline inline-flex items-center mt-2"
                          >
                            View Project <ExternalLink className="h-3 w-3 ml-1" />
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  {isEditing && (
                    <div className="mt-6 pt-6 border-t">
                      <h3 className="font-medium mb-4">Add Project</h3>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="projectTitle">Title</Label>
                            <Input id="projectTitle" placeholder="e.g. E-commerce Platform" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="projectYear">Year</Label>
                            <Input id="projectYear" placeholder="e.g. 2024" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="projectDescription">Description</Label>
                          <Textarea id="projectDescription" placeholder="Describe your project..." rows={3} />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="projectLink">Link (Optional)</Label>
                          <Input id="projectLink" placeholder="e.g. https://github.com/username/project" />
                        </div>
                        <Button>Add Project</Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
          <div className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Job Matching</CardTitle>
                <CardDescription>AI-powered job recommendations based on your profile</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4 hover:bg-muted/50 transition-colors cursor-pointer">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">Frontend Developer</h3>
                        <p className="text-sm text-muted-foreground">Microsoft • Bengaluru, India</p>
                      </div>
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">98% Match</Badge>
                    </div>
                    <div className="mt-2">
                      <div className="flex flex-wrap gap-2 mt-2">
                        <Badge variant="outline" className="bg-primary/5">React</Badge>
                        <Badge variant="outline" className="bg-primary/5">TypeScript</Badge>
                        <Badge variant="outline" className="bg-primary/5">UI/UX</Badge>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">Posted 2 days ago</p>
                  </div>
                  
                  <div className="border rounded-lg p-4 hover:bg-muted/50 transition-colors cursor-pointer">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">Software Engineer</h3>
                        <p className="text-sm text-muted-foreground">Google • Bengaluru, India</p>
                      </div>
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">95% Match</Badge>
                    </div>
                    <div className="mt-2">
                      <div className="flex flex-wrap gap-2 mt-2">
                        <Badge variant="outline" className="bg-primary/5">JavaScript</Badge>
                        <Badge variant="outline" className="bg-primary/5">Node.js</Badge>
                        <Badge variant="outline" className="bg-primary/5">Problem Solving</Badge>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">Posted 1 week ago</p>
                  </div>
                </div>
                
                <div className="mt-4">
                  <Button variant="outline" className="w-full">
                    View All Recommended Jobs
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}