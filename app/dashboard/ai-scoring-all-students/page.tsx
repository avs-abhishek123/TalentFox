'use client';

import { useState } from 'react';
import { 
  Search, 
  Filter, 
  BarChart, 
  ChevronDown, 
  Users,
  FileText,
  CheckCircle,
  AlertTriangle,
  Clock,
  Download,
  SlidersHorizontal,
  Zap,
  ArrowUpRight,
  Eye
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardDescription,
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
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Mock data for students with AI scores
const students = [
  {
    id: '1',
    name: 'Rahul Sharma',
    email: 'rahul.sharma@example.com',
    department: 'Computer Science',
    year: '4th Year',
    aiScore: 92,
    lastScan: '2025-02-20',
    resumeStatus: 'Excellent',
    skills: ['React', 'JavaScript', 'Node.js', 'MongoDB'],
    improvements: ['Add more quantifiable achievements', 'Include LinkedIn profile'],
    interviewReadiness: 85,
  },
  {
    id: '2',
    name: 'Priya Singh',
    email: 'priya.singh@example.com',
    department: 'Electrical Engineering',
    year: '4th Year',
    aiScore: 78,
    lastScan: '2025-02-18',
    resumeStatus: 'Good',
    skills: ['Python', 'Machine Learning', 'Circuit Design'],
    improvements: ['Highlight leadership roles', 'Add more technical skills', 'Improve formatting'],
    interviewReadiness: 72,
  },
  {
    id: '3',
    name: 'Aditya Joshi',
    email: 'aditya.joshi@example.com',
    department: 'Computer Science',
    year: '4th Year',
    aiScore: 95,
    lastScan: '2025-02-15',
    resumeStatus: 'Excellent',
    skills: ['React', 'TypeScript', 'AWS', 'Python'],
    improvements: ['Add GitHub profile', 'Expand on project details'],
    interviewReadiness: 90,
  },
  {
    id: '4',
    name: 'Neha Patel',
    email: 'neha.patel@example.com',
    department: 'Computer Science',
    year: '4th Year',
    aiScore: 80,
    lastScan: '2025-02-14',
    resumeStatus: 'Good',
    skills: ['Java', 'Spring', 'MySQL', 'Hibernate'],
    improvements: ['Add more projects', 'Detail internship experience', 'Update skills section'],
    interviewReadiness: 75,
  },
  {
    id: '5',
    name: 'Siddharth Desai',
    email: 'siddharth.desai@example.com',
    department: 'Mechanical Engineering',
    year: '4th Year',
    aiScore: 65,
    lastScan: '2025-02-10',
    resumeStatus: 'Needs Improvement',
    skills: ['AutoCAD', 'SolidWorks', 'Project Management'],
    improvements: ['Complete missing sections', 'Add industry-relevant skills', 'Reformat resume'],
    interviewReadiness: 60,
  },
  {
    id: '6',
    name: 'Anjali Reddy',
    email: 'anjali.reddy@example.com',
    department: 'Electronics Engineering',
    year: '4th Year',
    aiScore: 82,
    lastScan: '2025-02-08',
    resumeStatus: 'Good',
    skills: ['VLSI', 'Embedded Systems', 'C++'],
    improvements: ['Add certification details', 'Expand education section'],
    interviewReadiness: 78,
  },
  {
    id: '7',
    name: 'Vishal Kumar',
    email: 'vishal.kumar@example.com',
    department: 'Data Science',
    year: '4th Year',
    aiScore: 88,
    lastScan: '2025-02-05',
    resumeStatus: 'Very Good',
    skills: ['Python', 'Machine Learning', 'TensorFlow', 'SQL'],
    improvements: ['Add more data visualization projects', 'Include kaggle profile'],
    interviewReadiness: 86,
  },
  {
    id: '8',
    name: 'Meera Kapoor',
    email: 'meera.kapoor@example.com',
    department: 'Information Technology',
    year: '4th Year',
    aiScore: 79,
    lastScan: '2025-02-03',
    resumeStatus: 'Good',
    skills: ['React', 'CSS', 'UI/UX Design', 'Figma'],
    improvements: ['Add portfolio link', 'Include design process', 'Add more metrics'],
    interviewReadiness: 74,
  },
  {
    id: '9',
    name: 'Arjun Menon',
    email: 'arjun.menon@example.com',
    department: 'Computer Science',
    year: '4th Year',
    aiScore: 84,
    lastScan: '2025-01-30',
    resumeStatus: 'Very Good',
    skills: ['Python', 'Django', 'PostgreSQL', 'Docker'],
    improvements: ['Add recent hackathon experience', 'Update skills section'],
    interviewReadiness: 80,
  },
  {
    id: '10',
    name: 'Sanya Gupta',
    email: 'sanya.gupta@example.com',
    department: 'Computer Science',
    year: '4th Year',
    aiScore: 90,
    lastScan: '2025-01-28',
    resumeStatus: 'Excellent',
    skills: ['Java', 'Android', 'Firebase', 'Kotlin'],
    improvements: ['Add Play Store app links', 'Include user metrics'],
    interviewReadiness: 88,
  },
];

export default function AIScoreAllStudentsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDepartment, setFilterDepartment] = useState<string[]>([]);
  const [filterScore, setFilterScore] = useState<string[]>([]);
  
  // Get unique departments for filtering
  const departments = Array.from(new Set(students.map(student => student.department)));
  
  // Score ranges for filtering
  const scoreRanges = [
    { label: 'Excellent (90-100)', value: 'excellent' },
    { label: 'Very Good (80-89)', value: 'very-good' },
    { label: 'Good (70-79)', value: 'good' },
    { label: 'Average (60-69)', value: 'average' },
    { label: 'Needs Improvement (<60)', value: 'needs-improvement' },
  ];
  
  // Filter students based on search, department and score filters
  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        student.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDepartment = filterDepartment.length === 0 || 
                             filterDepartment.includes(student.department);
    
    let matchesScore = true;
    if (filterScore.length > 0) {
      matchesScore = false;
      if (filterScore.includes('excellent') && student.aiScore >= 90) matchesScore = true;
      if (filterScore.includes('very-good') && student.aiScore >= 80 && student.aiScore < 90) matchesScore = true;
      if (filterScore.includes('good') && student.aiScore >= 70 && student.aiScore < 80) matchesScore = true;
      if (filterScore.includes('average') && student.aiScore >= 60 && student.aiScore < 70) matchesScore = true;
      if (filterScore.includes('needs-improvement') && student.aiScore < 60) matchesScore = true;
    }
    
    return matchesSearch && matchesDepartment && matchesScore;
  });
  
  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 80) return 'text-blue-600';
    if (score >= 70) return 'text-amber-600';
    if (score >= 60) return 'text-orange-600';
    return 'text-red-600';
  };
  
  const getScoreBadgeColor = (score: number) => {
    if (score >= 90) return 'bg-green-100 text-green-800';
    if (score >= 80) return 'bg-blue-100 text-blue-800';
    if (score >= 70) return 'bg-amber-100 text-amber-800';
    if (score >= 60) return 'bg-orange-100 text-orange-800';
    return 'bg-red-100 text-red-800';
  };
  
  const getResumeStatusIcon = (status: string) => {
    switch(status) {
      case 'Excellent':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'Very Good':
        return <CheckCircle className="h-4 w-4 text-blue-500" />;
      case 'Good':
        return <CheckCircle className="h-4 w-4 text-amber-500" />;
      case 'Average':
        return <Clock className="h-4 w-4 text-orange-500" />;
      case 'Needs Improvement':
        return <AlertTriangle className="h-4 w-4 text-red-500" />;
      default:
        return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };
  
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <div className="p-1 sm:p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">AI Resume Scoring Analysis</h1>
        <p className="text-muted-foreground">Analyze and compare AI resume scores across all students</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average AI Score</CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">83.3</div>
            <p className="text-xs text-muted-foreground">+2.1 points from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Excellent Scores</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">3</div>
            <p className="text-xs text-muted-foreground">30% of students</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Needs Improvement</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">1</div>
            <p className="text-xs text-muted-foreground">10% of students</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Analyzed</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">10</div>
            <p className="text-xs text-muted-foreground">Out of 120 students</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0 mb-4">
        <div className="w-full sm:w-auto flex-1 sm:max-w-sm">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search students..."
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
                Department
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
              <DropdownMenuLabel>Filter by department</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {departments.map((department) => (
                <DropdownMenuCheckboxItem
                  key={department}
                  checked={filterDepartment.includes(department)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setFilterDepartment([...filterDepartment, department]);
                    } else {
                      setFilterDepartment(filterDepartment.filter(d => d !== department));
                    }
                  }}
                >
                  {department}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full sm:w-auto">
                <Filter className="mr-2 h-4 w-4" />
                Score Range
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[230px]">
              <DropdownMenuLabel>Filter by score range</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {scoreRanges.map((range) => (
                <DropdownMenuCheckboxItem
                  key={range.value}
                  checked={filterScore.includes(range.value)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setFilterScore([...filterScore, range.value]);
                    } else {
                      setFilterScore(filterScore.filter(s => s !== range.value));
                    }
                  }}
                >
                  {range.label}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <Tabs defaultValue="table-view" className="space-y-4">
        <TabsList>
          <TabsTrigger value="table-view">Table View</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>
        
        <TabsContent value="table-view">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Student</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>AI Score</TableHead>
                    <TableHead>Resume Status</TableHead>
                    <TableHead>Interview Readiness</TableHead>
                    <TableHead>Last Analyzed</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredStudents.length > 0 ? (
                    filteredStudents.map((student) => (
                      <TableRow key={student.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar className="h-9 w-9 bg-primary/10">
                              <AvatarFallback className="text-primary">{getInitials(student.name)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{student.name}</p>
                              <p className="text-sm text-muted-foreground">{student.email}</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-col">
                            <span>{student.department}</span>
                            <span className="text-sm text-muted-foreground">{student.year}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <Badge className={getScoreBadgeColor(student.aiScore)}>
                              {student.aiScore}
                            </Badge>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            {getResumeStatusIcon(student.resumeStatus)}
                            <span className="ml-2">{student.resumeStatus}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="w-32">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-sm font-medium">{student.interviewReadiness}%</span>
                            </div>
                            <Progress value={student.interviewReadiness} className="h-2" />
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center text-sm">
                            <Clock className="h-4 w-4 text-muted-foreground mr-1" />
                            {new Date(student.lastScan).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0" title="View Details">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={7} className="h-24 text-center">
                        <div className="flex flex-col items-center justify-center">
                          <Users className="h-10 w-10 text-muted-foreground mb-2" />
                          <p className="font-medium">No students found</p>
                          <p className="text-sm text-muted-foreground">
                            {searchTerm || filterDepartment.length > 0 || filterScore.length > 0
                              ? 'Try adjusting your filters'
                              : 'No students have been analyzed yet'}
                          </p>
                        </div>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="analytics">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Score Distribution</CardTitle>
                <CardDescription>Distribution of AI scores across all students</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80 w-full bg-muted rounded-lg flex items-center justify-center">
                  <div className="flex flex-col items-center justify-center text-center p-4">
                    <BarChart className="h-10 w-10 text-primary mb-2" />
                    <p className="text-sm text-muted-foreground mb-2">Score distribution visualization would appear here</p>
                    <p className="text-xs text-muted-foreground">Showing histogram of student scores in ranges</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Department Performance</CardTitle>
                <CardDescription>Average AI scores by department</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {departments.map((department) => {
                    const deptStudents = students.filter(s => s.department === department);
                    const avgScore = deptStudents.reduce((sum, s) => sum + s.aiScore, 0) / deptStudents.length;
                    
                    return (
                      <div key={department}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">{department}</span>
                          <span className={`text-sm font-medium ${getScoreColor(avgScore)}`}>{avgScore.toFixed(1)}</span>
                        </div>
                        <Progress value={avgScore} className="h-2" />
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Common Improvement Areas</CardTitle>
                <CardDescription>Most frequently suggested improvements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Add quantifiable achievements</span>
                    <Badge variant="outline">65%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Improve formatting</span>
                    <Badge variant="outline">52%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Update skills section</span>
                    <Badge variant="outline">48%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Add portfolio/GitHub</span>
                    <Badge variant="outline">39%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Add certifications</span>
                    <Badge variant="outline">25%</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Score Trend</CardTitle>
                <CardDescription>Average AI score trend over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80 w-full bg-muted rounded-lg flex items-center justify-center">
                  <div className="flex flex-col items-center justify-center text-center p-4">
                    <BarChart className="h-10 w-10 text-primary mb-2" />
                    <p className="text-sm text-muted-foreground mb-2">Score trend visualization would appear here</p>
                    <p className="text-xs text-muted-foreground">Showing average scores over last 6 months</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Top Performing Students</CardTitle>
                <CardDescription>Students with highest AI scores</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {students
                    .sort((a, b) => b.aiScore - a.aiScore)
                    .slice(0, 5)
                    .map((student, index) => (
                      <div key={student.id} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="bg-primary/5 h-7 w-7 rounded-full flex items-center justify-center text-xs mr-3">
                            {index + 1}
                          </div>
                          <div>
                            <p className="text-sm font-medium">{student.name}</p>
                            <p className="text-xs text-muted-foreground">{student.department}</p>
                          </div>
                        </div>
                        <Badge className={getScoreBadgeColor(student.aiScore)}>
                          {student.aiScore}
                        </Badge>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Actions & Recommendations</CardTitle>
            <CardDescription>Suggested next steps based on AI score analysis</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border rounded-lg p-4 bg-amber-50 border-amber-200">
                <h3 className="font-medium flex items-center text-amber-800">
                  <AlertTriangle className="mr-2 h-5 w-5 text-amber-600" />
                  Students Needing Assistance
                </h3>
                <p className="mt-2 text-sm text-amber-700">
                  1 student has a score below 70 and needs immediate attention. Schedule resume review sessions with these students.
                </p>
                <Button size="sm" variant="outline" className="mt-4 border-amber-200 text-amber-700 hover:bg-amber-100">
                  Schedule Sessions
                </Button>
              </div>
              
              <div className="border rounded-lg p-4 bg-blue-50 border-blue-200">
                <h3 className="font-medium flex items-center text-blue-800">
                  <SlidersHorizontal className="mr-2 h-5 w-5 text-blue-600" />
                  Workshop Recommendation
                </h3>
                <p className="mt-2 text-sm text-blue-700">
                  Common improvement areas suggest scheduling a "Resume Achievements Workshop" focused on quantifying achievements.
                </p>
                <Button size="sm" variant="outline" className="mt-4 border-blue-200 text-blue-700 hover:bg-blue-100">
                  Plan Workshop
                </Button>
              </div>
              
              <div className="border rounded-lg p-4 bg-green-50 border-green-200">
                <h3 className="font-medium flex items-center text-green-800">
                  <Zap className="mr-2 h-5 w-5 text-green-600" />
                  Interview Preparation
                </h3>
                <p className="mt-2 text-sm text-green-700">
                  3 students are scoring exceptionally well and are ready for interview preparation. Consider mock interviews.
                </p>
                <Button size="sm" variant="outline" className="mt-4 border-green-200 text-green-700 hover:bg-green-100">
                  Schedule Mock Interviews
                </Button>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end">
              <Button className="flex items-center">
                Run Batch Analysis
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}