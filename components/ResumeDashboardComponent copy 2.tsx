// 'use client';

// import { useState, useEffect } from 'react';
// import { 
//   Copy, 
//   Download, 
//   Trash2, 
//   Search,
//   Filter,
//   Eye,
//   BarChart3,
//   ChevronUp,
//   ChevronDown,
//   PlusCircle,
//   Upload,
//   Clock,
//   CheckCircle2,
//   Star,
//   TrendingUp,
//   Lightbulb,
//   Settings,
//   Award,
//   Calendar,
//   MoreHorizontal
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Checkbox } from '@/components/ui/checkbox';
// import { Progress } from '@/components/ui/progress';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';

// const ResumeDashboardComponent = () => {
//   const [sortColumn, setSortColumn] = useState('lastModified');
//   const [sortDirection, setSortDirection] = useState('desc');
//   const [selectedResumes, setSelectedResumes] = useState<number[]>([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [activeView, setActiveView] = useState('all');
//   const [animateScores, setAnimateScores] = useState(false);
  
//   // Sample resume data
//   const resumes = [
//     { id: 1, title: 'Allena-Venkata-Sai-Abhishek-Resume2024', owner: 'You', lastModified: '8 months ago', score: 59, status: 'Needs Improvement', category: 'Technical', featured: false },
//     { id: 2, title: 'Modern Simple ATS Friendly Latex CV (1) (Copy)', owner: 'You', lastModified: '8 months ago', score: 76, status: 'Good', category: 'General', featured: true },
//     { id: 3, title: 'Modern Simple ATS Friendly Latex CV (3)', owner: 'You', lastModified: '7 months ago', score: 82, status: 'Excellent', category: 'Creative', featured: false },
//     { id: 4, title: 'Allena-Venkata-Sai-Abhishek-Resume2024-long', owner: 'You', lastModified: '5 months ago', score: 64, status: 'Average', category: 'Technical', featured: false },
//     { id: 5, title: 'Harsh', owner: 'You', lastModified: '4 months ago', score: 65, status: 'Average', category: 'General', featured: false },
//     { id: 6, title: 'Allena-Venkata-Sai-Abhishek-Resume2024-long-cv-latest-no-internship', owner: 'You', lastModified: '4 months ago', score: 70, status: 'Good', category: 'Technical', featured: false },
//     { id: 7, title: 'Allena-Venkata-Sai-Abhishek-Resume2024-long-cv-no-internship', owner: 'You', lastModified: '4 months ago', score: 68, status: 'Average', category: 'Technical', featured: false },
//     { id: 8, title: 'Allena-Venkata-Sai-Abhishek-Resume2024-long-cv-latest-no-internship-(Copy)', owner: 'You', lastModified: '3 months ago', score: 72, status: 'Good', category: 'Technical', featured: false },
//     { id: 9, title: 'Allena-Venkata-Sai-Abhishek-Resume2024-long-cv-latest', owner: 'You', lastModified: '2 months ago', score: 78, status: 'Good', category: 'General', featured: true },
//     { id: 10, title: 'Allena-Venkata-Sai-Abhishek-Resume2025', owner: 'You', lastModified: '3 days ago', score: 85, status: 'Excellent', category: 'Technical', featured: true },
//   ];

//   useEffect(() => {
//     setAnimateScores(true);
//     const timeout = setTimeout(() => setAnimateScores(false), 1000);
//     return () => clearTimeout(timeout);
//   }, []);

//   // Get score color based on value
//   const getScoreColor = (score) => {
//     if (score >= 80) return 'bg-emerald-500';
//     if (score >= 70) return 'bg-blue-500';
//     if (score >= 60) return 'bg-amber-500';
//     return 'bg-red-500';
//   };

//   // Get score gradient based on value (for cards and backgrounds)
//   const getScoreGradient = (score) => {
//     if (score >= 80) return 'from-emerald-500 to-emerald-600';
//     if (score >= 70) return 'from-blue-500 to-blue-600';
//     if (score >= 60) return 'from-amber-500 to-amber-600';
//     return 'from-red-500 to-red-600';
//   };

//   // Get status badge style
//   const getStatusBadge = (status) => {
//     switch(status) {
//       case 'Excellent':
//         return 'bg-emerald-100 text-emerald-800 border-emerald-200';
//       case 'Good':
//         return 'bg-blue-100 text-blue-800 border-blue-200';
//       case 'Average':
//         return 'bg-amber-100 text-amber-800 border-amber-200';
//       case 'Needs Improvement':
//         return 'bg-red-100 text-red-800 border-red-200';
//       default:
//         return 'bg-gray-100 text-gray-800 border-gray-200';
//     }
//   };

//   // Handle sorting
//   const handleSort = (column) => {
//     if (sortColumn === column) {
//       setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
//     } else {
//       setSortColumn(column);
//       setSortDirection('asc');
//     }
//   };

//   // Handle checkbox selection
//   const handleSelect = (id) => {
//     setSelectedResumes(prev => 
//       prev.includes(id) 
//         ? prev.filter(item => item !== id) 
//         : [...prev, id]
//     );
//   };

//   // Handle select all
//   const handleSelectAll = () => {
//     if (selectedResumes.length === filteredAndSortedResumes.length) {
//       setSelectedResumes([]);
//     } else {
//       setSelectedResumes(filteredAndSortedResumes.map(resume => resume.id));
//     }
//   };

//   // Convert time string to comparable value for sorting
//   const extractTimeValue = (timeStr) => {
//     const number = parseInt(timeStr.split(' ')[0]);
//     const unit = timeStr.split(' ')[1];

//     if (unit.includes('day')) return number;
//     if (unit.includes('month')) return number * 30;
//     if (unit.includes('year')) return number * 365;
//     return number;
//   };

//   // Filter by active view and search query
//   const filterResumes = () => {
//     return resumes.filter(resume => {
//       // Filter by active view
//       if (activeView === 'featured' && !resume.featured) return false;
//       if (activeView === 'excellent' && resume.status !== 'Excellent') return false;
//       if (activeView === 'needs-improvement' && resume.status !== 'Needs Improvement') return false;
//       if (activeView === 'technical' && resume.category !== 'Technical') return false;
//       if (activeView === 'creative' && resume.category !== 'Creative') return false;
      
//       // Filter by search query
//       if (searchQuery === '') return true;
      
//       return (
//         resume.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         resume.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         resume.category.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     });
//   };

//   // Filter and sort the resumes
//   const filteredAndSortedResumes = filterResumes().sort((a, b) => {
//     if (sortColumn === 'lastModified') {
//       const timeA = extractTimeValue(a.lastModified);
//       const timeB = extractTimeValue(b.lastModified);
//       return sortDirection === 'asc' ? timeA - timeB : timeB - timeA;
//     }

//     if (sortColumn === 'score') {
//       return sortDirection === 'asc' ? a.score - b.score : b.score - a.score;
//     }

//     const valA = a[sortColumn].toString().toLowerCase();
//     const valB = b[sortColumn].toString().toLowerCase();

//     return sortDirection === 'asc' ? valA.localeCompare(valB) : valB.localeCompare(valA);
//   });

//   // Get highest scoring resume
//   const highestScoringResume = resumes.reduce((prev, current) => 
//     (prev.score > current.score) ? prev : current
//   );

//   // Analytics data for charts
//   const analyticsData = {
//     scoreDistribution: [
//       { range: '90-100', count: 0 },
//       { range: '80-89', count: 2 },
//       { range: '70-79', count: 3 },
//       { range: '60-69', count: 4 },
//       { range: '0-59', count: 1 },
//     ],
//     topImprovements: [
//       { category: 'Skills Section', score: 85 },
//       { category: 'Action Verbs', score: 72 },
//       { category: 'Achievements', score: 65 },
//       { category: 'Job Match', score: 58 },
//     ],
//     recentActivity: [
//       { action: 'Resume updated', time: '3 days ago', resume: 'Allena-Venkata-Sai-Abhishek-Resume2025' },
//       { action: 'Score improved', time: '1 week ago', resume: 'Modern Simple ATS Friendly Latex CV (3)' },
//       { action: 'Resume created', time: '2 weeks ago', resume: 'Allena-Venkata-Sai-Abhishek-Resume2025' },
//     ]
//   };

//   // Calculate average score
//   const averageScore = Math.round(
//     resumes.reduce((total, resume) => total + resume.score, 0) / resumes.length
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
//       <div className="max-w-6xl mx-auto pt-4 sm:pt-6">
//         {/* Dashboard Header */}
//         <div className="mb-8">
//           <div className="flex flex-col md:flex-row md:items-center md:justify-between">
//             <div>
//               <h1 className="text-2xl font-bold text-gray-900 flex items-center">
//                 Resume Dashboard
//                 <Badge className="ml-3 bg-blue-100 text-blue-800 border border-blue-200">Pro</Badge>
//               </h1>
//               <p className="text-gray-500 mt-1">Track, optimize and compare your resumes in one place</p>
//             </div>
//             <div className="mt-4 md:mt-0 flex space-x-3">
//               <Button className="bg-green-500 hover:bg-green-700 text-white shadow-md">
//                 <PlusCircle className="mr-2 h-4 w-4" />
//                 New Resume
//               </Button>
//               <Button className="bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 shadow-sm">
//                 <Upload className="mr-2 h-4 w-4" />
//                 Upload
//               </Button>
//             </div>
//           </div>
//         </div>
        
//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//           <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
//             <CardContent className="p-6">
//               <div className="flex justify-between">
//                 <div>
//                   <p className="text-sm font-medium text-gray-500">Average Score</p>
//                   <h3 className={`text-3xl font-bold mt-1 ${animateScores ? 'animate-pulse' : ''}`}>{averageScore}</h3>
//                 </div>
//                 <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
//                   <Star className="h-6 w-6" />
//                 </div>
//               </div>
//               <div className="mt-3">
//                 <Progress value={averageScore} className={`h-2 ${getScoreColor(averageScore)}`} />
//               </div>
//             </CardContent>
//           </Card>
          
//           <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
//             <CardContent className="p-6">
//               <div className="flex justify-between">
//                 <div>
//                   <p className="text-sm font-medium text-gray-500">Highest Score</p>
//                   <h3 className={`text-3xl font-bold mt-1 ${animateScores ? 'animate-pulse' : ''}`}>{highestScoringResume.score}</h3>
//                 </div>
//                 <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
//                   <Award className="h-6 w-6" />
//                 </div>
//               </div>
//               <div className="mt-3 flex items-center">
//                 <TrendingUp className="h-4 w-4 text-emerald-500 mr-1" />
//                 <span className="text-sm text-emerald-600">Top 10% in your field</span>
//               </div>
//             </CardContent>
//           </Card>
          
//           <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
//             <CardContent className="p-6">
//               <div className="flex justify-between">
//                 <div>
//                   <p className="text-sm font-medium text-gray-500">Total Resumes</p>
//                   <h3 className="text-3xl font-bold mt-1">{resumes.length}</h3>
//                 </div>
//                 <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
//                   <BarChart3 className="h-6 w-6" />
//                 </div>
//               </div>
//               <div className="mt-3 flex items-center">
//                 <div className="flex -space-x-2">
//                   {['bg-blue-500', 'bg-indigo-500', 'bg-purple-500'].map((bg, i) => (
//                     <div key={i} className={`h-6 w-6 rounded-full ${bg} border-2 border-white flex items-center justify-center text-white text-xs font-bold`}>
//                       {i + 1}
//                     </div>
//                   ))}
//                 </div>
//                 <span className="text-sm text-gray-500 ml-2">3 categories</span>
//               </div>
//             </CardContent>
//           </Card>
          
//           <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
//             <CardContent className="p-6">
//               <div className="flex justify-between">
//                 <div>
//                   <p className="text-sm font-medium text-gray-500">Last Updated</p>
//                   <h3 className="text-xl font-bold mt-1">3 days ago</h3>
//                 </div>
//                 <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
//                   <Calendar className="h-6 w-6" />
//                 </div>
//               </div>
//               <div className="mt-3 flex items-center">
//                 <span className="text-sm text-gray-600 truncate">{highestScoringResume.title}</span>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
        
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           {/* Left Column - Resume Table */}
//           <div className="lg:col-span-2">
//             <Card className="border border-gray-200 shadow-sm overflow-hidden">
//               <CardHeader className="p-4 border-b border-gray-200 bg-white">
//                 {/* Filter tabs */}
//                 <div className="flex overflow-x-auto pb-2 mb-2 scrollbar-hide">
//                   <TabsList className="bg-gray-100 p-1 rounded-lg">
//                     <TabsTrigger
//                       value="all"
//                       className={`px-4 py-2 rounded-md transition-all ${activeView === 'all' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'}`}
//                       onClick={() => setActiveView('all')}
//                     >
//                       All
//                     </TabsTrigger>
//                     <TabsTrigger
//                       value="featured"
//                       className={`px-4 py-2 rounded-md transition-all ${activeView === 'featured' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'}`}
//                       onClick={() => setActiveView('featured')}
//                     >
//                       Featured
//                     </TabsTrigger>
//                     <TabsTrigger
//                       value="excellent"
//                       className={`px-4 py-2 rounded-md transition-all ${activeView === 'excellent' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'}`}
//                       onClick={() => setActiveView('excellent')}
//                     >
//                       Excellent
//                     </TabsTrigger>
//                     <TabsTrigger
//                       value="needs-improvement"
//                       className={`px-4 py-2 rounded-md transition-all ${activeView === 'needs-improvement' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'}`}
//                       onClick={() => setActiveView('needs-improvement')}
//                     >
//                       Needs Work
//                     </TabsTrigger>
//                     <TabsTrigger
//                       value="technical"
//                       className={`px-4 py-2 rounded-md transition-all ${activeView === 'technical' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'}`}
//                       onClick={() => setActiveView('technical')}
//                     >
//                       Technical
//                     </TabsTrigger>
//                     <TabsTrigger
//                       value="creative"
//                       className={`px-4 py-2 rounded-md transition-all ${activeView === 'creative' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'}`}
//                       onClick={() => setActiveView('creative')}
//                     >
//                       Creative
//                     </TabsTrigger>
//                   </TabsList>
//                 </div>

//                 {/* Search Bar */}
//                 <div className="relative flex">
//                   <div className="relative flex-grow">
//                     <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
//                     <input
//                       type="text"
//                       placeholder="Search resumes by name, category, or status..."
//                       className="w-full border border-gray-300 rounded-l-lg pl-10 pr-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                       value={searchQuery}
//                       onChange={(e) => setSearchQuery(e.target.value)}
//                     />
//                   </div>
//                   <DropdownMenu>
//                     <DropdownMenuTrigger asChild>
//                       <Button variant="outline" className="rounded-l-none border-l-0 bg-white flex items-center border border-gray-300 hover:bg-gray-50">
//                         <Filter className="mr-2 h-4 w-4" />
//                         Filter
//                         <ChevronDown className="ml-1 h-4 w-4" />
//                       </Button>
//                     </DropdownMenuTrigger>
//                     <DropdownMenuContent className="p-2 shadow-lg rounded-lg border border-gray-200">
//                       <DropdownMenuItem className="cursor-pointer rounded hover:bg-gray-100 p-2">Score: Highest to Lowest</DropdownMenuItem>
//                       <DropdownMenuItem className="cursor-pointer rounded hover:bg-gray-100 p-2">Score: Lowest to Highest</DropdownMenuItem>
//                       <DropdownMenuItem className="cursor-pointer rounded hover:bg-gray-100 p-2">Date: Newest First</DropdownMenuItem>
//                       <DropdownMenuItem className="cursor-pointer rounded hover:bg-gray-100 p-2">Date: Oldest First</DropdownMenuItem>
//                       <DropdownMenuItem className="cursor-pointer rounded hover:bg-gray-100 p-2">Name: A to Z</DropdownMenuItem>
//                     </DropdownMenuContent>
//                   </DropdownMenu>
//                 </div>
//               </CardHeader>

//               {/* Batch Actions */}
//               {selectedResumes.length > 0 && (
//                 <div className="bg-blue-50 p-3 border-y border-blue-100 flex justify-between items-center">
//                   <span className="text-sm text-blue-700 font-medium flex items-center">
//                     <CheckCircle2 className="h-4 w-4 mr-2" />
//                     {selectedResumes.length} {selectedResumes.length === 1 ? 'resume' : 'resumes'} selected
//                   </span>
//                   <div className="flex space-x-2">
//                     <Button size="sm" className="text-xs font-medium bg-white text-blue-700 border border-blue-200 hover:bg-blue-50">
//                       <Copy className="mr-1 h-3 w-3" /> 
//                       Duplicate
//                     </Button>
//                     <Button size="sm" className="text-xs font-medium bg-white text-blue-700 border border-blue-200 hover:bg-blue-50">
//                       <Download className="mr-1 h-3 w-3" /> 
//                       Export
//                     </Button>
//                     <Button size="sm" className="text-xs font-medium bg-white text-red-700 border border-red-200 hover:bg-red-50">
//                       <Trash2 className="mr-1 h-3 w-3" /> 
//                       Delete
//                     </Button>
//                   </div>
//                 </div>
//               )}

//               {/* Table */}
//               {filteredAndSortedResumes.length > 0 ? (
//                 <div className="overflow-y-auto bg-white max-h-96 min-h-[400px]">
//                   <table className="w-full">
//                     <thead className="bg-gray-50 text-gray-600 text-xs uppercase sticky top-0 z-10">
//                       <tr>
//                         <th className="px-4 py-3 text-left w-8">
//                           <Checkbox 
//                             id="select-all" 
//                             className="rounded border-gray-300" 
//                             checked={selectedResumes.length === filteredAndSortedResumes.length && filteredAndSortedResumes.length > 0}
//                             onCheckedChange={handleSelectAll}
//                           />
//                         </th>
//                         <th className="px-4 py-3 text-left cursor-pointer" onClick={() => handleSort('title')}>
//                           <div className="flex items-center">
//                             <span>Resume</span>
//                             {sortColumn === 'title' && (
//                               <span className="ml-1">
//                                 {sortDirection === 'asc' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
//                               </span>
//                             )}
//                           </div>
//                         </th>
//                         <th className="px-4 py-3 text-left cursor-pointer" onClick={() => handleSort('lastModified')}>
//                           <div className="flex items-center">
//                             <span>Last Modified</span>
//                             {sortColumn === 'lastModified' && (
//                               <span className="ml-1">
//                                 {sortDirection === 'asc' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
//                               </span>
//                             )}
//                           </div>
//                         </th>
//                         <th className="px-4 py-3 text-left cursor-pointer" onClick={() => handleSort('score')}>
//                           <div className="flex items-center">
//                             <span>Score</span>
//                             {sortColumn === 'score' && (
//                               <span className="ml-1">
//                                 {sortDirection === 'asc' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
//                               </span>
//                             )}
//                           </div>
//                         </th>
//                         <th className="px-4 py-3 text-right">Actions</th>
//                       </tr>
//                     </thead>
//                     <tbody className="divide-y">
//                       {filteredAndSortedResumes.map((resume) => (
//                         <tr key={resume.id} className="hover:bg-blue-50 transition duration-150">
//                           <td className="px-4 py-4">
//                             <Checkbox 
//                               id={`select-${resume.id}`} 
//                               className="rounded border-gray-300" 
//                               checked={selectedResumes.includes(resume.id)}
//                               onCheckedChange={() => handleSelect(resume.id)}
//                             />
//                           </td>
//                           <td className="px-4 py-4">
//                             <div className="flex items-center">
//                               <div className={`h-10 w-10 rounded-lg flex items-center justify-center mr-3 bg-gradient-to-br ${getScoreGradient(resume.score)} text-white font-bold`}>
//                                 {resume.title.charAt(0).toUpperCase()}
//                               </div>
//                               <div>
//                                 <div className="text-sm font-medium text-gray-900 flex items-center">
//                                   {resume.title}
//                                   {resume.featured && 
//                                     <Star className="h-3 w-3 text-amber-500 ml-1 fill-amber-500" />
//                                   }
//                                 </div>
//                                 <div className="flex items-center mt-1">
//                                   <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${getStatusBadge(resume.status)} border`}>
//                                     {resume.status}
//                                   </span>
//                                   <span className="text-xs text-gray-500 ml-2">{resume.category}</span>
//                                 </div>
//                               </div>
//                             </div>
//                           </td>
//                           <td className="px-4 py-4">
//                             <div className="flex items-center text-sm text-gray-600">
//                               <Clock className="h-3 w-3 mr-1 text-gray-400" />
//                               {resume.lastModified}
//                             </div>
//                           </td>
//                           <td className="px-4 py-4">
//                             <div className="w-full">
//                               <div className="flex items-center mb-1">
//                                 <span className={`text-sm font-bold ${
//                                   resume.score >= 80 ? 'text-emerald-600' :
//                                   resume.score >= 70 ? 'text-blue-600' :
//                                   resume.score >= 60 ? 'text-amber-600' :
//                                   'text-red-600'
//                                 }`}>{resume.score}</span>
//                                 <span className="text-xs text-gray-400 ml-1">/100</span>
//                               </div>
//                               <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
//                                 <div 
//                                   className={`h-full rounded-full ${animateScores ? 'transition-all duration-1000 ease-out' : ''} ${getScoreColor(resume.score)}`} 
//                                   style={{ width: `${resume.score}%` }} 
//                                 ></div>
//                               </div>
//                             </div>
//                           </td>
//                           <td className="px-4 py-4 text-right">
//                             <div className="flex justify-end space-x-1">
//                               <Button variant="ghost" size="sm" className="text-gray-700 hover:text-blue-700 hover:bg-blue-50">
//                                 <Eye className="h-4 w-4" />
//                               </Button>
//                               <Button variant="ghost" size="sm" className="text-gray-700 hover:text-blue-700 hover:bg-blue-50">
//                                 <Download className="h-4 w-4" />
//                               </Button>
//                               <DropdownMenu>
//                                 <DropdownMenuTrigger asChild>
//                                   <Button variant="ghost" size="sm" className="text-gray-700 hover:text-blue-700 hover:bg-blue-50">
//                                     <MoreHorizontal className="h-4 w-4" />
//                                   </Button>
//                                 </DropdownMenuTrigger>
//                                 <DropdownMenuContent>
//                                   <DropdownMenuItem className="cursor-pointer">
//                                     <Copy className="h-4 w-4 mr-2" /> Duplicate
//                                   </DropdownMenuItem>
//                                   <DropdownMenuItem className="cursor-pointer">
//                                     <Star className="h-4 w-4 mr-2" /> Feature
//                                   </DropdownMenuItem>
//                                   <DropdownMenuItem className="cursor-pointer">
//                                     <Settings className="h-4 w-4 mr-2" /> Settings
//                                   </DropdownMenuItem>
//                                   <DropdownMenuItem className="cursor-pointer text-red-600">
//                                     <Trash2 className="h-4 w-4 mr-2" /> Delete
//                                   </DropdownMenuItem>
//                                 </DropdownMenuContent>
//                               </DropdownMenu>
//                             </div>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               ) : (
//                 <div className="p-6 text-center text-gray-500">No resumes found</div>
//               )}
//             </Card>
//           </div>
            
//             {/* Right Column - Analytics */}
//             <div className="lg:col-span-1">
//               <Card className="border border-gray-200 shadow-sm">
//                 <CardHeader className="p-4 border-b border-gray-200 bg-white">
//                   <h2 className="text-sm font-medium text-gray-600">Analytics</h2>
//                 </CardHeader>
//                 <CardContent className="p-4">
//                 <Tabs defaultValue="overview">
//                     <TabsList className="flex space-x-4 mb-4">
//                       <TabsTrigger value="overview" className={`text-sm font-medium ${activeView === 'overview' ? 'text-blue-600' : 'text-gray-500'}`}>
//                         Overview
//                       </TabsTrigger>
//                       <TabsTrigger value="scores" className={`text-sm font-medium ${activeView === 'scores' ? 'text-blue-600' : 'text-gray-500'}`}>
//                         Scores
//                       </TabsTrigger>
//                       <TabsTrigger value="activity" className={`text-sm font-medium ${activeView === 'activity' ? 'text-blue-600' : 'text-gray-500'}`}>
//                         Activity
//                       </TabsTrigger>
//                     </TabsList>
//                     <TabsContent value="overview">
//                       <div className="flex items-center justify-between">
//                         <div>
//                           <h3 className="text-lg font-bold text-gray-900">Score Distribution</h3>
//                           <div className="flex items-center mt-2">
//                             {analyticsData.scoreDistribution.map((data, i) => (
//                               <div key={i} className="flex flex-col items-center mr-4">
//                                 <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold">
//                                   {data.count}
//                                 </div>
//                                 <span className="text-xs text-gray-500 mt-1">{data.range}</span>
//                               </div>
//                             ))}
//                           </div>
//                         </div>
//                         <div className="flex items-center">
//                           <div className="flex flex-col items-center mr-4">
//                             <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold">
//                               78
//                             </div>
//                             <span className="text-xs text-gray-500 mt-1">Average Score</span>
//                           </div>
//                           <div className="flex
//                             flex-col items-center">
//                             <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold">
//                               85
//                             </div>
//                             <span className="text-xs text-gray-500 mt-1">Top Score</span>
//                           </div>
//                         </div>
//                       </div>
//                     </TabsContent>
//                     <TabsContent value="scores">
//                       <div className="flex items-center justify-between">
//                         <div>
//                           <h3 className="text-lg font-bold text-gray-900">Top Improvements</h3>
//                           <div className="mt-2">
//                             {analyticsData.topImprovements.map((data, i) => (
//                               <div key={i} className="flex items-center justify-between py-2">
//                                 <span className="text-sm text-gray-600">{data.category}</span>
//                                 <span className="text-sm font-bold text-gray-900">{data.score}</span>
//                               </div>
//                             ))}
//                           </div>
//                         </div>
//                         <div>
//                           <h3 className="text-lg font-bold text-gray-900">Average Score</h3>
//                           <div className="flex items-center mt-2">
//                             <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold">
//                               78
//                             </div>
//                             <span className="text-xs text-gray-500 ml-2">Average</span>
//                           </div>
//                         </div>
//                       </div>
//                     </TabsContent>
//                     <TabsContent value="activity">
//                       <div className="flex items-center justify-between">
//                         <div>
//                           <h3 className="text-lg font-bold text-gray-900">Recent Activity</h3>
//                           <div className="mt-2">
//                             {analyticsData.recentActivity.map((data, i) => (
//                               <div key={i} className="flex items-center justify-between py-2">
//                                 <div>
//                                   <span className="text-sm text-gray-600">{data.action}</span>
//                                   <span className="text-xs text-gray-400 ml-1">{data.time}</span>
//                                 </div>
//                                 <span className="text-sm text-blue-600">{data.resume}</span>
//                               </div>
//                             ))}
//                           </div>
//                         </div>
//                         <div>
//                           <h3 className="text-lg font-bold text-gray-900">Total Resumes</h3>
//                           <div className="flex items-center mt-2">
//                             <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold">
//                               10
//                             </div>
//                             <span className="text-xs text-gray-500 ml-2">Total</span>
//                           </div>
//                         </div>
//                       </div>
//                     </TabsContent>
//                   </Tabs>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </div>
//   );
// };

// export default ResumeDashboardComponent;
