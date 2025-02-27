// app/dashboard/students/page.tsx
'use client';

import { useState } from 'react';
import { 
  Search, 
  Filter, 
  Download, 
  ChevronDown, 
  Award, 
  BookOpen,
  User,
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
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

// Mock data for students
const students = [
  {
    id: '1',
    name: 'Rahul Sharma',
    email: 'rahul.sharma@example.com',
    department: 'Computer Science',
    year: '4th Year',
    resumeScore: 85,
    skills: ['React', 'JavaScript', 'Node.js', 'MongoDB'],
    placementStatus: 'Placed',
    company: 'Microsoft',
    position: 'Software Engineer',
  },
  {
    id: '2',
    name: 'Priya Singh',
    email: 'priya.singh@example.com',
    department: 'Electrical Engineering',
    year: '4th Year',
    resumeScore: 78,
    skills: ['Python', 'Machine Learning', 'Circuit Design'],
    placementStatus: 'Placed',
    company: 'Texas Instruments',
    position: 'Hardware Engineer',
  },
  {
    id: '3',
    name: 'Aditya Joshi',
    email: 'aditya.joshi@example.com',
    department: 'Computer Science',
    year: '4th Year',
    resumeScore: 92,
    skills: ['React', 'TypeScript', 'AWS', 'Python'],
    placementStatus: 'Placed',
    company: 'Amazon',
    position: 'Frontend Developer',
  },
  {
    id: '4',
    name: 'Neha Patel',
    email: 'neha.patel@example.com',
    department: 'Computer Science',
    year: '4th Year',
    resumeScore: 80,
    skills: ['Java', 'Spring', 'MySQL', 'Hibernate'],
    placementStatus: 'Interviewing',
    company: 'Infosys',
    position: 'Software Developer',
  },
  {
    id: '5',
    name: 'Siddharth Desai',
    email: 'siddharth.desai@example.com',
    department: 'Mechanical Engineering',
    year: '4th Year',
    resumeScore: 75,
    skills: ['AutoCAD', 'SolidWorks', 'Project Management'],
    placementStatus: 'Seeking',
    company: '',
    position: '',
  },
  {
    id: '6',
    name: 'Anjali Reddy',
    email: 'anjali.reddy@example.com',
    department: 'Electronics Engineering',
    year: '4th Year',
    resumeScore: 82,
    skills: ['VLSI', 'Embedded Systems', 'C++'],
    placementStatus: 'Seeking',
    company: '',
    position: '',
  },
  {
    id: '7',
    name: 'Vishal Kumar',
    email: 'vishal.kumar@example.com',
    department: 'Data Science',
    year: '4th Year',
    resumeScore: 88,
    skills: ['Python', 'Machine Learning', 'TensorFlow', 'SQL'],
    placementStatus: 'Interviewing',
    company: 'Google',
    position: 'Data Scientist',
  },
  {
    id: '8',
    name: 'Meera Kapoor',
    email: 'meera.kapoor@example.com',
    department: 'Information Technology',
    year: '4th Year',
    resumeScore: 79,
    skills: ['React', 'CSS', 'UI/UX Design', 'Figma'],
    placementStatus: 'Placed',
    company: 'Wipro',
    position: 'UI Designer',
  },
  {
    id: '9',
    name: 'Arjun Menon',
    email: 'arjun.menon@example.com',
    department: 'Computer Science',
    year: '4th Year',
    resumeScore: 84,
    skills: ['Python', 'Django', 'PostgreSQL', 'Docker'],
    placementStatus: 'Interviewing',
    company: 'Deloitte',
    position: 'Backend Developer',
  },
  {
    id: '10',
    name: 'Sanya Gupta',
    email: 'sanya.gupta@example.com',
    department: 'Computer Science',
    year: '4th Year',
    resumeScore: 90,
    skills: ['Java', 'Android', 'Firebase', 'Kotlin'],
    placementStatus: 'Placed',
    company: 'Adobe',
    position: 'Android Developer',
  },
];

export default function StudentsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDepartment, setFilterDepartment] = useState<string[]>([]);
  const [filterStatus, setFilterStatus] = useState<string[]>([]);
  
  const departments = Array.from(new Set(students.map(student => student.department)));
  const statuses = Array.from(new Set(students.map(student => student.placementStatus)));
  
  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          student.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDepartment = filterDepartment.length === 0 || 
                             filterDepartment.includes(student.department);
    
    const matchesStatus = filterStatus.length === 0 || 
                          filterStatus.includes(student.placementStatus);
    
    return matchesSearch && matchesDepartment && matchesStatus;
  });
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Placed':
        return 'bg-green-100 text-green-800';
      case 'Interviewing':
        return 'bg-blue-100 text-blue-800';
      case 'Seeking':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
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
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Students</h1>
          <p className="text-muted-foreground">Manage and track student profiles and placements</p>
        </div>
        <div className="flex gap-2 mt-4 sm:mt-0">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button>
            Invite Students
          </Button>
        </div>
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
                Status
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
              <DropdownMenuLabel>Filter by status</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {statuses.map((status) => (
                <DropdownMenuCheckboxItem
                  key={status}
                  checked={filterStatus.includes(status)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setFilterStatus([...filterStatus, status]);
                    } else {
                      setFilterStatus(filterStatus.filter(s => s !== status));
                    }
                  }}
                >
                  {status}
                </DropdownMenuCheckboxItem>
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
                <TableHead>Student</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Resume Score</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Company</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredStudents.map((student) => (
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
                    <div className="w-32">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">{student.resumeScore}%</span>
                      </div>
                      <Progress value={student.resumeScore} className="h-2" />
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusColor(student.placementStatus)}`}>
                      {student.placementStatus}
                    </div>
                  </TableCell>
                  <TableCell>
                    {student.company ? (
                      <div className="flex flex-col">
                        <span>{student.company}</span>
                        <span className="text-sm text-muted-foreground">{student.position}</span>
                      </div>
                    ) : (
                      <span className="text-sm text-muted-foreground">Not placed yet</span>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
              {filteredStudents.length === 0 && (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-6">
                    <div className="flex flex-col items-center justify-center">
                      <User className="h-10 w-10 text-muted-foreground mb-2" />
                      <p className="text-muted-foreground">No students found</p>
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Student Placement Statistics</CardTitle>
            <CardDescription>Current placement status for the batch of 2025</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center justify-center p-4 bg-primary/5 rounded-lg">
                <div className="text-4xl font-bold text-primary mb-2">67%</div>
                <div className="text-sm text-muted-foreground">Overall Placement Rate</div>
              </div>
              <div className="flex flex-col items-center justify-center p-4 bg-primary/5 rounded-lg">
                <div className="text-4xl font-bold text-primary mb-2">48</div>
                <div className="text-sm text-muted-foreground">Partner Companies</div>
              </div>
              <div className="flex flex-col items-center justify-center p-4 bg-primary/5 rounded-lg">
                <div className="text-4xl font-bold text-primary mb-2">92%</div>
                <div className="text-sm text-muted-foreground">Computer Science Placement</div>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="text-lg font-medium mb-2">Department-wise Placement</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Computer Science</span>
                    <span className="text-sm text-muted-foreground">92%</span>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Electrical Engineering</span>
                    <span className="text-sm text-muted-foreground">78%</span>
                  </div>
                  <Progress value={78} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Mechanical Engineering</span>
                    <span className="text-sm text-muted-foreground">65%</span>
                  </div>
                  <Progress value={65} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Electronics Engineering</span>
                    <span className="text-sm text-muted-foreground">71%</span>
                  </div>
                  <Progress value={71} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Data Science</span>
                    <span className="text-sm text-muted-foreground">88%</span>
                  </div>
                  <Progress value={88} className="h-2" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}