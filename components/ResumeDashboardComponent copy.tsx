'use client';

import { useState } from 'react';
import { 
  Copy, 
  Download, 
  Trash2, 
  Search,
  Filter,
  Eye,
  BarChart3,
  ChevronUp,
  ChevronDown,
  PlusCircle,
  Upload,
  Clock,
  CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

const ResumeDashboardComponent = () => {
  const [sortColumn, setSortColumn] = useState('lastModified');
  const [sortDirection, setSortDirection] = useState('desc');
  const [selectedResumes, setSelectedResumes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Sample resume data
  const resumes = [
    { id: 1, title: 'Allena-Venkata-Sai-Abhishek-Resume2024', owner: 'You', lastModified: '8 months ago', score: 59, status: 'Needs Improvement' },
    { id: 2, title: 'Modern Simple ATS Friendly Latex CV (1) (Copy)', owner: 'You', lastModified: '8 months ago', score: 76, status: 'Good' },
    { id: 3, title: 'Modern Simple ATS Friendly Latex CV (3)', owner: 'You', lastModified: '7 months ago', score: 82, status: 'Excellent' },
    { id: 4, title: 'Allena-Venkata-Sai-Abhishek-Resume2024-long', owner: 'You', lastModified: '5 months ago', score: 64, status: 'Average' },
    { id: 5, title: 'Harsh', owner: 'You', lastModified: '4 months ago', score: 65, status: 'Average' },
    { id: 6, title: 'Allena-Venkata-Sai-Abhishek-Resume2024-long-cv-latest-no-internship', owner: 'You', lastModified: '4 months ago', score: 70, status: 'Good' },
    { id: 7, title: 'Allena-Venkata-Sai-Abhishek-Resume2024-long-cv-no-internship', owner: 'You', lastModified: '4 months ago', score: 68, status: 'Average' },
    { id: 8, title: 'Allena-Venkata-Sai-Abhishek-Resume2024-long-cv-latest-no-internship-(Copy)', owner: 'You', lastModified: '3 months ago', score: 72, status: 'Good' },
    { id: 9, title: 'Allena-Venkata-Sai-Abhishek-Resume2024-long-cv-latest', owner: 'You', lastModified: '2 months ago', score: 78, status: 'Good' },
    { id: 10, title: 'Allena-Venkata-Sai-Abhishek-Resume2025', owner: 'You', lastModified: '3 days ago', score: 85, status: 'Excellent' },
  ];

  // Get score color based on value
  const getScoreColor = (score) => {
    if (score >= 80) return 'bg-emerald-500';
    if (score >= 70) return 'bg-blue-500';
    if (score >= 60) return 'bg-amber-500';
    return 'bg-red-500';
  };

  // Get status badge style
  const getStatusBadge = (status) => {
    switch(status) {
      case 'Excellent':
        return 'bg-emerald-100 text-emerald-800';
      case 'Good':
        return 'bg-blue-100 text-blue-800';
      case 'Average':
        return 'bg-amber-100 text-amber-800';
      case 'Needs Improvement':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Handle sorting
  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  // Handle checkbox selection
  const handleSelect = (id) => {
    setSelectedResumes(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id) 
        : [...prev, id]
    );
  };

  // Handle select all
  const handleSelectAll = () => {
    if (selectedResumes.length === resumes.length) {
      setSelectedResumes([]);
    } else {
      setSelectedResumes(resumes.map(resume => resume.id));
    }
  };

  // Convert time string to comparable value for sorting
  const extractTimeValue = (timeStr) => {
    const number = parseInt(timeStr.split(' ')[0]);
    const unit = timeStr.split(' ')[1];

    if (unit.includes('day')) return number;
    if (unit.includes('month')) return number * 30;
    if (unit.includes('year')) return number * 365;
    return number;
  };

  // Filter and sort the resumes
  const filteredAndSortedResumes = [...resumes]
    .filter(resume => 
      searchQuery === '' || 
      resume.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resume.status.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortColumn === 'lastModified') {
        const timeA = extractTimeValue(a.lastModified);
        const timeB = extractTimeValue(b.lastModified);
        return sortDirection === 'asc' ? timeA - timeB : timeB - timeA;
      }

      if (sortColumn === 'score') {
        return sortDirection === 'asc' ? a.score - b.score : b.score - a.score;
      }

      const valA = a[sortColumn].toString().toLowerCase();
      const valB = b[sortColumn].toString().toLowerCase();

      return sortDirection === 'asc' ? valA.localeCompare(valB) : valB.localeCompare(valA);
    });

  // Analytics data for charts
  const analyticsData = {
    scoreDistribution: [
      { range: '90-100', count: 0 },
      { range: '80-89', count: 2 },
      { range: '70-79', count: 3 },
      { range: '60-69', count: 4 },
      { range: '0-59', count: 1 },
    ],
    topImprovements: [
      { category: 'Skills Section', score: 85 },
      { category: 'Action Verbs', score: 72 },
      { category: 'Achievements', score: 65 },
      { category: 'Job Match', score: 58 },
    ]
  };

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Resume Manager</h1>
          <p className="text-gray-500">Organize, analyze, and optimize your resumes in one place</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Resume Table */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-4 border-b border-gray-200">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold text-gray-800">Your Resumes</h2>
                  <div className="flex space-x-2">
                    <Button className="bg-indigo-600 hover:bg-indigo-700">
                      <Upload className="mr-2 h-4 w-4" />
                      Upload
                    </Button>
                    <Button className="bg-indigo-600 hover:bg-indigo-700">
                      <PlusCircle className="mr-2 h-4 w-4" />
                      Create New
                    </Button>
                  </div>
                </div>

                {/* Search and Filter Bar */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-grow">
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search resumes..."
                      className="w-full border border-gray-300 rounded-md pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="flex items-center">
                        <Filter className="mr-2 h-4 w-4" />
                        Filter
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>All Resumes</DropdownMenuItem>
                      <DropdownMenuItem>Excellent Score</DropdownMenuItem>
                      <DropdownMenuItem>Good Score</DropdownMenuItem>
                      <DropdownMenuItem>Needs Improvement</DropdownMenuItem>
                      <DropdownMenuItem>Recently Modified</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>

              {/* Batch Actions */}
              {selectedResumes.length > 0 && (
                <div className="bg-indigo-50 p-3 border-b border-indigo-100 flex justify-between items-center">
                  <span className="text-sm text-indigo-700 font-medium">
                    {selectedResumes.length} {selectedResumes.length === 1 ? 'resume' : 'resumes'} selected
                  </span>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="text-indigo-700 border-indigo-200">
                      <Copy className="mr-1 h-4 w-4" /> 
                      Copy
                    </Button>
                    <Button variant="outline" size="sm" className="text-indigo-700 border-indigo-200">
                      <Download className="mr-1 h-4 w-4" /> 
                      Download
                    </Button>
                    <Button variant="outline" size="sm" className="text-red-700 border-red-200">
                      <Trash2 className="mr-1 h-4 w-4" /> 
                      Delete
                    </Button>
                  </div>
                </div>
              )}

              {/* Table */}
              {filteredAndSortedResumes.length > 0 ? (
                <div className="overflow-y-auto max-h-96">
                  <table className="w-full">
                    <thead className="bg-gray-50 text-gray-600 text-xs uppercase sticky top-0 z-10">
                      <tr>
                        <th className="px-4 py-3 text-left w-8">
                          <Checkbox 
                            id="select-all" 
                            className="rounded border-gray-300" 
                            checked={selectedResumes.length === resumes.length && resumes.length > 0}
                            onCheckedChange={handleSelectAll}
                          />
                        </th>
                        <th className="px-4 py-3 text-left cursor-pointer" onClick={() => handleSort('title')}>
                          <div className="flex items-center">
                            <span>Title</span>
                            {sortColumn === 'title' && (
                              <span className="ml-1">
                                {sortDirection === 'asc' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                              </span>
                            )}
                          </div>
                        </th>
                        <th className="px-4 py-3 text-left cursor-pointer" onClick={() => handleSort('lastModified')}>
                          <div className="flex items-center">
                            <span>Last Modified</span>
                            {sortColumn === 'lastModified' && (
                              <span className="ml-1">
                                {sortDirection === 'asc' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                              </span>
                            )}
                          </div>
                        </th>
                        <th className="px-4 py-3 text-left cursor-pointer" onClick={() => handleSort('score')}>
                          <div className="flex items-center">
                            <span>Score</span>
                            {sortColumn === 'score' && (
                              <span className="ml-1">
                                {sortDirection === 'asc' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                              </span>
                            )}
                          </div>
                        </th>
                        <th className="px-4 py-3 text-left cursor-pointer" onClick={() => handleSort('status')}>
                          <div className="flex items-center">
                            <span>Status</span>
                            {sortColumn === 'status' && (
                              <span className="ml-1">
                                {sortDirection === 'asc' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                              </span>
                            )}
                          </div>
                        </th>
                        <th className="px-4 py-3 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {filteredAndSortedResumes.map((resume) => (
                        <tr key={resume.id} className="hover:bg-gray-50 transition duration-150">
                          <td className="px-4 py-3">
                            <Checkbox 
                              id={`select-${resume.id}`} 
                              className="rounded border-gray-300" 
                              checked={selectedResumes.includes(resume.id)}
                              onCheckedChange={() => handleSelect(resume.id)}
                            />
                          </td>
                          <td className="px-4 py-3">
                            <div className="flex items-center">
                              <div className="h-9 w-9 bg-indigo-100 text-indigo-700 rounded-md flex items-center justify-center mr-3">
                                <span className="font-semibold">{resume.title.charAt(0).toUpperCase()}</span>
                              </div>
                              <div>
                                <div className="text-sm font-medium text-indigo-600">{resume.title}</div>
                                <div className="text-xs text-gray-500">ID: {resume.id}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-3">
                            <div className="flex items-center text-sm text-gray-600">
                              <Clock className="h-3 w-3 mr-1 text-gray-400" />
                              {resume.lastModified}
                            </div>
                          </td>
                          <td className="px-4 py-3">
                            <div className="w-full">
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-sm font-medium">{resume.score}</span>
                                <span className="text-xs text-gray-500">100</span>
                              </div>
                              <Progress value={resume.score} className={`h-2 ${getScoreColor(resume.score)}`} />
                            </div>
                          </td>
                          <td className="px-4 py-3">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadge(resume.status)}`}>
                              {resume.status}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-right">
                            <div className="flex justify-end space-x-1">
                              <Button variant="ghost" size="sm" className="text-indigo-600 hover:text-indigo-800">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm" className="text-indigo-600 hover:text-indigo-800">
                                <Copy className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm" className="text-indigo-600 hover:text-indigo-800">
                                <Download className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-800">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="p-8 text-center">
                  <div className="inline-flex items-center justify-center p-4 bg-indigo-50 rounded-full mb-4">
                    <PlusCircle className="h-8 w-8 text-indigo-500" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-1">No resumes found</h3>
                  <p className="text-gray-500 mb-4">Get started by creating your first resume or uploading an existing one</p>
                  <div className="flex justify-center space-x-3">
                    <Button className="bg-indigo-600 hover:bg-indigo-700">
                      <PlusCircle className="mr-2 h-4 w-4" />
                      Create New Resume
                    </Button>
                    <Button variant="outline">
                      <Upload className="mr-2 h-4 w-4" />
                      Upload Resume
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Analytics and Performance */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Resume Performance Card */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-800">Resume Performance</h3>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-center mb-4">
                    <div className="relative w-32 h-32 flex items-center justify-center">
                      <svg className="w-full h-full" viewBox="0 0 36 36">
                        <circle cx="18" cy="18" r="16" fill="none" stroke="#e6e6e6" strokeWidth="2"></circle>
                        <circle cx="18" cy="18" r="16" fill="none" stroke="#4f46e5" strokeWidth="2" strokeDasharray={`${100 * 3.14 * 0.72} ${100}`} strokeLinecap="round" transform="rotate(-90 18 18)"></circle>
                      </svg>
                      <div className="absolute text-center">
                        <div className="text-3xl font-bold text-indigo-600">72</div>
                        <div className="text-xs text-gray-500">Average Score</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-gray-700">Latest Score</span>
                        <span className="text-sm font-medium text-emerald-600">85</span>
                      </div>
                      <Progress value={85} className="h-2 bg-emerald-500" />
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-gray-700">Peer Average</span>
                        <span className="text-sm font-medium text-blue-600">78</span>
                      </div>
                      <Progress value={78} className="h-2 bg-blue-500" />
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-gray-700">Industry Standard</span>
                        <span className="text-sm font-medium text-amber-600">82</span>
                      </div>
                      <Progress value={82} className="h-2 bg-amber-500" />
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                      <BarChart3 className="mr-2 h-4 w-4" />
                      Compare with Peers
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Improvement Suggestions */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-800">Improvement Areas</h3>
                </div>
                <div className="p-4">
                  <ul className="space-y-3">
                    {analyticsData.topImprovements.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <div className={`h-8 w-8 rounded-full flex items-center justify-center mr-3 ${
                          item.score >= 80 ? 'bg-emerald-100 text-emerald-700' :
                          item.score >= 70 ? 'bg-blue-100 text-blue-700' :
                          item.score >= 60 ? 'bg-amber-100 text-amber-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {item.score >= 80 ? (
                            <CheckCircle2 className="h-4 w-4" />
                          ) : (
                            <span className="text-xs font-medium">{item.score}</span>
                          )}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-700">{item.category}</div>
                          <div className="text-xs text-gray-500">
                            {item.score >= 80 ? 'Excellent' :
                             item.score >= 70 ? 'Good' :
                             item.score >= 60 ? 'Needs attention' :
                             'Urgent improvement needed'}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Button variant="outline" className="w-full">View Detailed Report</Button>
                  </div>
                </div>
              </div>
              
              {/* Quick Tips Card */}
              <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-lg shadow-sm overflow-hidden text-white">
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">Pro Tips</h3>
                  <p className="text-indigo-100 text-sm mb-4">Boost your resume score with these quick improvements:</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 mr-2 mt-0.5 text-indigo-300" />
                      <span>Use action verbs to start bullet points</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 mr-2 mt-0.5 text-indigo-300" />
                      <span>Quantify achievements with numbers</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 mr-2 mt-0.5 text-indigo-300" />
                      <span>Tailor skills to match job descriptions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeDashboardComponent;