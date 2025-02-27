'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { 
  BarChart,
  FileText, 
  Copy, 
  Download, 
  Trash2, 
  PieChart, 
  BrainCircuit,
  User,
  Clock,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Checkbox } from '@/components/ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const StudentDashboard = () => {
  const { data: session } = useSession();
  const [sortedColumn, setSortedColumn] = useState('lastModified');
  const [sortDirection, setSortDirection] = useState('desc');
  
  // Sample resume data
  const resumes = [
    { id: 1, title: 'Allena-Venkata-Sai-Abhishek-Resume2025', owner: 'You', lastModified: '3 days ago', score: 85 },
    { id: 2, title: 'Allena-Venkata-Sai-Abhishek-Resume2024-long-cv-latest', owner: 'You', lastModified: '2 months ago', score: 78 },
    { id: 3, title: 'Allena-Venkata-Sai-Abhishek-Resume2024-long-cv-latest-no-internship-(Copy)', owner: 'You', lastModified: '3 months ago', score: 72 },
    { id: 4, title: 'Harsh', owner: 'You', lastModified: '4 months ago', score: 65 },
    { id: 5, title: 'Allena-Venkata-Sai-Abhishek-Resume2024-long-cv-latest-no-internship', owner: 'You', lastModified: '4 months ago', score: 70 },
    { id: 6, title: 'Allena-Venkata-Sai-Abhishek-Resume2024-long-cv-no-internship', owner: 'You', lastModified: '4 months ago', score: 68 },
    { id: 7, title: 'Allena-Venkata-Sai-Abhishek-Resume2024-long', owner: 'You', lastModified: '5 months ago', score: 64 },
    { id: 8, title: 'Modern Simple ATS Friendly Latex CV (3)', owner: 'You', lastModified: '7 months ago', score: 82 },
    { id: 9, title: 'Allena-Venkata-Sai-Abhishek-Resume2024', owner: 'You', lastModified: '8 months ago', score: 59 },
    { id: 10, title: 'Modern Simple ATS Friendly Latex CV (1) (Copy)', owner: 'You', lastModified: '8 months ago', score: 76 },
  ];

  // Sort function
const sortResumes = (column: string) => {
    if (sortedColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortedColumn(column);
      setSortDirection('asc');
    }
  };

  // Sort the resumes
  const sortedResumes = [...resumes].sort((a, b) => {
    if (sortedColumn === 'lastModified') {
     // Add type annotation for timeStr parameter
const extractTimeValue = (timeStr: string) => {
    const number = parseInt(timeStr.split(' ')[0]);
    const unit = timeStr.split(' ')[1];
    
    // Rest of your function logic
    if (unit.includes('day')) return number;
    if (unit.includes('month')) return number * 30;
    if (unit.includes('year')) return number * 365;
    return number;
  };
      
      const timeA = extractTimeValue(a.lastModified);
      const timeB = extractTimeValue(b.lastModified);
      
      return sortDirection === 'asc' ? timeA - timeB : timeB - timeA;
    }
    
    if (sortedColumn === 'score') {
      return sortDirection === 'asc' ? a.score - b.score : b.score - a.score;
    }
    
    // Default sort by title
    const valA = a.title.toLowerCase();
    const valB = b.title.toLowerCase();
        
    if (valA < valB) return sortDirection === 'asc' ? -1 : 1;
    if (valA > valB) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  // Analytics data
  const analyticsData = {
    resumeScore: 85,
    atsCompatibility: 92,
    keywordsMatched: 78,
    improvementAreas: ['Work experience details', 'Technical skills section', 'Education formatting']
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <div className="bg-primary p-4 text-white">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <BrainCircuit size={24} />
            <span className="text-xl font-bold">Talentfox Navbar</span>
          </div>
          <div>
            <Avatar className="h-8 w-8 bg-primary-foreground text-primary">
              <AvatarFallback>AV</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
      
      <div className="flex">
        {/* Sidebar */}
        <div className="w-56 min-h-screen border-r border-gray-200 bg-white p-4">
          <nav className="space-y-2">
            <div className="py-2 px-3 font-medium text-gray-800">Dashboard</div>
            <div className="py-2 px-3 rounded-md bg-gray-100 flex items-center gap-2 font-medium text-primary cursor-pointer">
              <div className="w-1 h-8 bg-primary rounded-full"></div>
              <BarChart className="h-5 w-5" /> 
              <span>Check AI Scoring based on JD</span>
            </div>
            <div className="py-2 px-3 font-medium text-gray-800 flex items-center gap-2 cursor-pointer">
              <FileText className="h-5 w-5" /> 
              <span>Resume Builder</span>
            </div>
            <div className="py-2 px-3 font-medium text-gray-800 flex items-center gap-2 cursor-pointer">
              <PieChart className="h-5 w-5" /> 
              <span>Buy More Credit</span>
            </div>
            <div className="py-2 px-3 font-medium text-gray-800 flex items-center gap-2 cursor-pointer">
              <User className="h-5 w-5" /> 
              <span>Refer Your Friend</span>
            </div>
            <div className="mt-6 py-2 px-3 font-medium text-gray-800 flex items-center gap-2 cursor-pointer">
              <FileText className="h-5 w-5" /> 
              <span>Contact Admin</span>
            </div>
          </nav>
        </div>
        
        {/* Main content */}
        <div className="flex-1 p-6">
          <div className="mb-6 flex justify-between items-center">
            <h1 className="text-2xl font-bold">All Projects</h1>
            <div className="flex gap-2">
              <Button variant="outline" className="bg-primary text-white hover:bg-primary/90">
                Upload Resume
              </Button>
              <Button className="bg-emerald-500 text-white hover:bg-emerald-600">
                Create New Resume+
              </Button>
            </div>
          </div>
          
          <div className="mb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search in all projects..."
                className="w-full p-2 pl-8 border rounded-md"
              />
              <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-md shadow mb-6">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-8">
                      <Checkbox id="select-all" />
                    </th>
                    <th 
                      scope="col" 
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                      onClick={() => sortResumes('title')}
                    >
                      Title
                      {sortedColumn === 'title' && (
                        <span className="ml-1">{sortDirection === 'asc' ? '↑' : '↓'}</span>
                      )}
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Owner
                    </th>
                    <th 
                      scope="col" 
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                      onClick={() => sortResumes('lastModified')}
                    >
                      Last Modified
                      {sortedColumn === 'lastModified' && (
                        <span className="ml-1">{sortDirection === 'asc' ? '↑' : '↓'}</span>
                      )}
                    </th>
                    <th 
                      scope="col" 
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                      onClick={() => sortResumes('score')}
                    >
                      Score
                      {sortedColumn === 'score' && (
                        <span className="ml-1">{sortDirection === 'asc' ? '↑' : '↓'}</span>
                      )}
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {sortedResumes.map((resume) => (
                    <tr key={resume.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Checkbox id={`select-${resume.id}`} />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600 cursor-pointer">
                        {resume.title}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {resume.owner}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {resume.lastModified} by {resume.owner}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {resume.score}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="icon" title="Copy Resume">
                            <Copy className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" title="Download PDF">
                            <Download className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" title="Delete Resume">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-3">
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-xl font-bold mb-4">Analytics Graph</h2>
                  <div className="h-64 bg-gray-100 rounded-md flex items-center justify-center">
                    <BarChart size={48} className="text-gray-400" />
                    <span className="ml-2 text-gray-500">Resume performance analytics visualization</span>
                  </div>
                  
                  <div className="mt-6 grid grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-md border">
                      <div className="flex items-center mb-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <h3 className="font-medium">Resume Score</h3>
                      </div>
                      <div className="text-2xl font-bold text-green-600">{analyticsData.resumeScore}%</div>
                      <p className="text-xs text-gray-500 mt-1">+5% from last update</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-md border">
                      <div className="flex items-center mb-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <h3 className="font-medium">ATS Compatibility</h3>
                      </div>
                      <div className="text-2xl font-bold text-green-600">{analyticsData.atsCompatibility}%</div>
                      <p className="text-xs text-gray-500 mt-1">Good compatibility score</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-md border">
                      <div className="flex items-center mb-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <h3 className="font-medium">Keywords Matched</h3>
                      </div>
                      <div className="text-2xl font-bold text-green-600">{analyticsData.keywordsMatched}%</div>
                      <p className="text-xs text-gray-500 mt-1">15/18 key skills matched</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card className="mb-4">
                <CardContent className="p-4">
                  <h3 className="font-bold text-center mb-2">Check how your resume performs compared to your batchmates NOW!</h3>
                  <Button className="w-full bg-primary hover:bg-primary/90 mt-2">Check NOW!</Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-bold mb-2">Resume Health</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Content Quality</span>
                        <span className="text-sm font-medium">85%</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Keyword Optimization</span>
                        <span className="text-sm font-medium">78%</span>
                      </div>
                      <Progress value={78} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Format & Structure</span>
                        <span className="text-sm font-medium">92%</span>
                      </div>
                      <Progress value={92} className="h-2" />
                    </div>
                  </div>
                  <div className="mt-4">
                    <Button variant="outline" className="w-full text-primary border-primary hover:bg-primary/5">
                      View Full Report
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;