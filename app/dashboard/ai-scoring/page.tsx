'use client';

import { useState } from 'react';
import { 
  BarChart, 
  FileText, 
  Upload, 
  AlertTriangle, 
  CheckCircle2, 
  RefreshCw,
  Search,
  Zap,
  ArrowRight,
  Info,
  CircleSlash,
  CheckCircle,
  Clock,
  XCircle,
  FileQuestion,
  ChevronDown,
  ChevronUp,
  Lightbulb
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function AIScoringPage() {
  const [jdText, setJdText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [activeTab, setActiveTab] = useState('analysis');
  const [expandedSection, setExpandedSection] = useState('');
  
  // Sample result data - in a real app this would come from an API
  const resultData = {
    overallScore: 78,
    sections: [
      { name: 'Skills Match', score: 82, status: 'success' },
      { name: 'Experience Relevance', score: 75, status: 'medium' },
      { name: 'Education', score: 90, status: 'success' },
      { name: 'Formatting', score: 65, status: 'warning' },
      { name: 'Keyword Optimization', score: 72, status: 'medium' },
    ],
    skills: {
      matched: ['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Git', 'REST APIs'],
      missing: ['GraphQL', 'AWS', 'Node.js'],
      recommended: ['Redux', 'NextJS', 'Jest'],
    },
    keywords: {
      matched: ['frontend', 'web development', 'UI/UX', 'responsive design', 'agile'],
      missing: ['microservices', 'CI/CD', 'containerization'],
    },
    suggestions: [
      { id: 1, type: 'high', text: 'Add experience with Node.js or equivalent backend technologies' },
      { id: 2, type: 'high', text: 'Include specific metrics and achievements from your past roles' },
      { id: 3, type: 'medium', text: 'Mention experience with GraphQL to enhance your technical stack' },
      { id: 4, type: 'medium', text: 'Improve formatting consistency throughout your resume' },
      { id: 5, type: 'low', text: 'Consider adding a portfolio link to showcase your projects' },
    ],
    recentResumes: [
      { id: 1, name: 'Abhishek_Resume_2025.pdf', score: 78, lastChecked: '3 days ago' },
      { id: 2, name: 'Abhishek_Resume_Tech.pdf', score: 65, lastChecked: '2 weeks ago' },
      { id: 3, name: 'Resume_Frontend_Dev.pdf', score: 82, lastChecked: '1 month ago' },
    ]
  };
  
  const handleAnalyze = () => {
    if (!jdText.trim()) return;
    
    setIsAnalyzing(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    }, 2500);
  };
  
  const handleReset = () => {
    setJdText('');
    setShowResults(false);
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-emerald-600';
    if (score >= 70) return 'text-blue-600';
    if (score >= 60) return 'text-amber-600';
    return 'text-red-600';
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 80) return 'bg-emerald-600';
    if (score >= 70) return 'bg-blue-600';
    if (score >= 60) return 'bg-amber-600';
    return 'bg-red-600';
  };

  const getSuggestionColor = (type = 'low') => {
    if (type === 'high') return 'border-red-200 bg-red-50';
    if (type === 'medium') return 'border-amber-200 bg-amber-50';
    return 'border-blue-200 bg-blue-50';
  };

  const getSuggestionIcon = (type = 'low') => {
    if (type === 'high') return <AlertTriangle className="h-5 w-5 text-red-500" />;
    if (type === 'medium') return <Info className="h-5 w-5 text-amber-500" />;
    return <Lightbulb className="h-5 w-5 text-blue-500" />;
  };

  const getSectionIcon = (status = 'low') => {
    if (status === 'success') return <CheckCircle className="h-5 w-5 text-emerald-500" />;
    if (status === 'medium') return <Clock className="h-5 w-5 text-blue-500" />;
    if (status === 'warning') return <AlertTriangle className="h-5 w-5 text-amber-500" />;
    return <XCircle className="h-5 w-5 text-red-500" />;
  };

  const handleExpandSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection('');
    } else {
      setExpandedSection(section);
    }
  };

  return (
    <div className="p-1 sm:p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">AI Resume Scoring</h1>
        <p className="text-muted-foreground">Check how your resume performs against specific job descriptions</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column - Input */}
        <div className="md:col-span-1">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Resume Analysis</CardTitle>
              <CardDescription>
                Enter a job description to analyze your resume against
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium">Job Description</label>
                    <button 
                      onClick={() => setJdText('')} 
                      className="text-xs text-primary hover:underline"
                    >
                      Clear
                    </button>
                  </div>
                  <Textarea 
                    value={jdText}
                    onChange={(e) => setJdText(e.target.value)}
                    placeholder="Paste job description here..."
                    className="min-h-[200px]"
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <p className="text-xs text-muted-foreground">
                    Using resume: <span className="font-medium text-primary">Abhishek_Resume_2025.pdf</span>
                  </p>
                  <Button variant="link" size="sm" className="h-auto p-0">
                    Change
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                onClick={showResults ? handleReset : handleAnalyze} 
                disabled={isAnalyzing || (!showResults && !jdText.trim())}
                className="w-full"
              >
                {isAnalyzing ? (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing...
                  </>
                ) : showResults ? (
                  <>
                    <FileText className="mr-2 h-4 w-4" />
                    Analyze New Job
                  </>
                ) : (
                  <>
                    <Zap className="mr-2 h-4 w-4" />
                    Analyze Resume
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>

          {/* Credits Card */}
          <Card>
            <CardHeader>
              <CardTitle>Credits</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Remaining Credits</span>
                    <span className="font-medium">12 / 20</span>
                  </div>
                  <Progress value={60} className="h-2" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Each resume analysis costs 1 credit. Your credits will renew on March 15, 2025.
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline">
                Get More Creditss
              </Button>
            </CardFooter>
          </Card>

          {/* Recent Checks */}
          {showResults && (
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Recent Checks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {resultData.recentResumes.map(resume => (
                    <div key={resume.id} className="flex items-center justify-between border-b pb-3 last:border-0 last:pb-0">
                      <div>
                        <p className="text-sm font-medium">{resume.name}</p>
                        <p className="text-xs text-muted-foreground">{resume.lastChecked}</p>
                      </div>
                      <div className={`text-sm font-bold ${getScoreColor(resume.score)}`}>
                        {resume.score}%
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Right Column - Results */}
        <div className="md:col-span-2">
          {!showResults ? (
            <Card className="border-dashed">
              <CardContent className="p-6 flex flex-col items-center justify-center min-h-[400px] text-center">
                <FileQuestion className="h-16 w-16 text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">No Analysis Yet</h3>
                <p className="text-muted-foreground max-w-md mb-6">
                  Enter a job description to analyze how well your resume matches. Our AI will score your resume and provide improvement suggestions.
                </p>
                <div className="grid grid-cols-3 gap-4 w-full max-w-md">
                  <div className="flex flex-col items-center p-3 rounded-lg bg-primary/5">
                    <Zap className="h-6 w-6 text-primary mb-2" />
                    <span className="text-xs text-center">Skills Analysis</span>
                  </div>
                  <div className="flex flex-col items-center p-3 rounded-lg bg-primary/5">
                    <Search className="h-6 w-6 text-primary mb-2" />
                    <span className="text-xs text-center">Keyword Match</span>
                  </div>
                  <div className="flex flex-col items-center p-3 rounded-lg bg-primary/5">
                    <FileText className="h-6 w-6 text-primary mb-2" />
                    <span className="text-xs text-center">Detailed Report</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-6">
              {/* Score Overview Card */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>
                    <div className="flex items-center justify-between">
                      <span>Resume Score</span>
                      <Badge className={`${getScoreBgColor(resultData.overallScore)} hover:${getScoreBgColor(resultData.overallScore)}`}>
                        {resultData.overallScore}%
                      </Badge>
                    </div>
                  </CardTitle>
                  <CardDescription>
                    How well your resume matches this job description
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <div className="relative h-4 w-full overflow-hidden rounded-full bg-gray-100">
                        <div 
                          className="h-full rounded-full bg-gradient-to-r from-red-500 via-amber-500 to-emerald-500"
                          style={{ width: '100%' }}
                        ></div>
                        <div 
                          className="absolute top-0 h-full w-1 bg-black border-2 border-white"
                          style={{ left: `${resultData.overallScore}%`, transform: "translateX(-50%)" }}
                        ></div>
                      </div>
                      <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                        <span>Poor Match</span>
                        <span>Perfect Match</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-3">Score Breakdown</h4>
                      <div className="space-y-3">
                        {resultData.sections.map((section, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <div className="flex items-center">
                              {getSectionIcon(section.status)}
                              <span className="ml-2 text-sm">{section.name}</span>
                            </div>
                            <div className="flex items-center">
                              <div className="w-32 mr-2">
                                <Progress value={section.score} className="h-2" />
                              </div>
                              <span className={`text-xs font-medium ${getScoreColor(section.score)}`}>
                                {section.score}%
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Tabs for detailed analysis */}
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="w-full">
                  <TabsTrigger value="analysis" className="flex-1">Analysis</TabsTrigger>
                  <TabsTrigger value="skill-match" className="flex-1">Skill Match</TabsTrigger>
                  <TabsTrigger value="suggestions" className="flex-1">Suggestions</TabsTrigger>
                </TabsList>

                {/* Analysis Tab */}
                <TabsContent value="analysis" className="mt-4 space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Detailed Analysis</CardTitle>
                      <CardDescription>Overview of how your resume matches this job</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div 
                          className={`p-4 rounded-lg border ${expandedSection === 'keywords' ? 'border-primary' : 'border-border'} cursor-pointer`}
                          onClick={() => handleExpandSection('keywords')}
                        >
                          <div className="flex justify-between items-center">
                            <div className="flex items-center">
                              <Search className="h-5 w-5 text-primary mr-2" />
                              <span className="font-medium">Keyword Analysis</span>
                            </div>
                            {expandedSection === 'keywords' ? (
                              <ChevronUp className="h-5 w-5 text-primary" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-muted-foreground" />
                            )}
                          </div>
                          
                          {expandedSection === 'keywords' && (
                            <div className="mt-4 space-y-4">
                              <div>
                                <h4 className="text-sm font-medium mb-2">Matched Keywords</h4>
                                <div className="flex flex-wrap gap-2">
                                  {resultData.keywords.matched.map((keyword, index) => (
                                    <Badge key={index} variant="secondary" className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
                                      <CheckCircle2 className="h-3 w-3 mr-1" /> {keyword}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                              
                              <div>
                                <h4 className="text-sm font-medium mb-2">Missing Keywords</h4>
                                <div className="flex flex-wrap gap-2">
                                  {resultData.keywords.missing.map((keyword, index) => (
                                    <Badge key={index} variant="secondary" className="bg-red-100 text-red-800 hover:bg-red-200">
                                      <CircleSlash className="h-3 w-3 mr-1" /> {keyword}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                              
                              <p className="text-sm text-muted-foreground">
                                Your resume matches 5 out of 8 important keywords for this job.
                              </p>
                            </div>
                          )}
                        </div>
                        
                        <div 
                          className={`p-4 rounded-lg border ${expandedSection === 'education' ? 'border-primary' : 'border-border'} cursor-pointer`}
                          onClick={() => handleExpandSection('education')}
                        >
                          <div className="flex justify-between items-center">
                            <div className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-emerald-500 mr-2" />
                              <span className="font-medium">Education Requirements</span>
                            </div>
                            {expandedSection === 'education' ? (
                              <ChevronUp className="h-5 w-5 text-primary" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-muted-foreground" />
                            )}
                          </div>
                          
                          {expandedSection === 'education' && (
                            <div className="mt-4 space-y-2">
                              <div className="flex items-center">
                                <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2" />
                                <span className="text-sm">Your education meets or exceeds the requirements for this role.</span>
                              </div>
                              <div className="flex items-center">
                                <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2" />
                                <span className="text-sm">B.Tech Computer Science degree is well-aligned with this position.</span>
                              </div>
                              <div className="mt-3 text-sm text-muted-foreground">
                                Consider highlighting relevant coursework that specifically relates to this job, such as web development or software architecture.
                              </div>
                            </div>
                          )}
                        </div>
                        
                        <div 
                          className={`p-4 rounded-lg border ${expandedSection === 'experience' ? 'border-primary' : 'border-border'} cursor-pointer`}
                          onClick={() => handleExpandSection('experience')}
                        >
                          <div className="flex justify-between items-center">
                            <div className="flex items-center">
                              <Clock className="h-5 w-5 text-blue-500 mr-2" />
                              <span className="font-medium">Experience Relevance</span>
                            </div>
                            {expandedSection === 'experience' ? (
                              <ChevronUp className="h-5 w-5 text-primary" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-muted-foreground" />
                            )}
                          </div>
                          
                          {expandedSection === 'experience' && (
                            <div className="mt-4 space-y-4">
                              <p className="text-sm text-muted-foreground">
                                Your experience is somewhat aligned with this role, but there are some gaps in specific areas requested by the employer.
                              </p>
                              
                              <div>
                                <h4 className="text-sm font-medium mb-2">Strengths</h4>
                                <ul className="space-y-1">
                                  <li className="text-sm flex items-start">
                                    <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2 mt-0.5" />
                                    <span>Frontend development experience is well-highlighted</span>
                                  </li>
                                  <li className="text-sm flex items-start">
                                    <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2 mt-0.5" />
                                    <span>Team collaboration experience matches requirements</span>
                                  </li>
                                </ul>
                              </div>
                              
                              <div>
                                <h4 className="text-sm font-medium mb-2">Areas to Improve</h4>
                                <ul className="space-y-1">
                                  <li className="text-sm flex items-start">
                                    <AlertTriangle className="h-4 w-4 text-amber-500 mr-2 mt-0.5" />
                                    <span>Limited evidence of backend development experience</span>
                                  </li>
                                  <li className="text-sm flex items-start">
                                    <AlertTriangle className="h-4 w-4 text-amber-500 mr-2 mt-0.5" />
                                    <span>No mention of containerization or CI/CD experience</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          )}
                        </div>
                        
                        <div 
                          className={`p-4 rounded-lg border ${expandedSection === 'formatting' ? 'border-primary' : 'border-border'} cursor-pointer`}
                          onClick={() => handleExpandSection('formatting')}
                        >
                          <div className="flex justify-between items-center">
                            <div className="flex items-center">
                              <AlertTriangle className="h-5 w-5 text-amber-500 mr-2" />
                              <span className="font-medium">Resume Formatting</span>
                            </div>
                            {expandedSection === 'formatting' ? (
                              <ChevronUp className="h-5 w-5 text-primary" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-muted-foreground" />
                            )}
                          </div>
                          
                          {expandedSection === 'formatting' && (
                            <div className="mt-4 space-y-2">
                              <p className="text-sm text-muted-foreground">
                                Your resume format has some inconsistencies that could make it harder for ATS systems to parse correctly.
                              </p>
                              
                              <div className="space-y-1 mt-3">
                                <div className="flex items-start">
                                  <AlertTriangle className="h-4 w-4 text-amber-500 mr-2 mt-0.5" />
                                  <span className="text-sm">Inconsistent bullet point formatting throughout the document</span>
                                </div>
                                <div className="flex items-start">
                                  <AlertTriangle className="h-4 w-4 text-amber-500 mr-2 mt-0.5" />
                                  <span className="text-sm">Section headings use different font sizes and styles</span>
                                </div>
                                <div className="flex items-start">
                                  <AlertTriangle className="h-4 w-4 text-amber-500 mr-2 mt-0.5" />
                                  <span className="text-sm">Dates are formatted differently across experience sections</span>
                                </div>
                              </div>
                              
                              <div className="mt-3 text-sm">
                                <span className="font-medium">Recommendation:</span> Standardize formatting to improve readability and ATS compatibility.
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Skill Match Tab */}
                <TabsContent value="skill-match" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Skills Analysis</CardTitle>
                      <CardDescription>
                        How your skills compare to job requirements
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div>
                          <h3 className="font-medium mb-3 flex items-center">
                            <CheckCircle2 className="text-emerald-500 h-5 w-5 mr-2" />
                            Matched Skills
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {resultData.skills.matched.map((skill, index) => (
                              <Badge key={index} variant="secondary" className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                          <p className="text-sm text-muted-foreground mt-2">
                            Your resume mentions {resultData.skills.matched.length} essential skills for this role.
                          </p>
                        </div>
                        
                        <div>
                          <h3 className="font-medium mb-3 flex items-center">
                            <AlertTriangle className="text-amber-500 h-5 w-5 mr-2" />
                            Missing Skills
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {resultData.skills.missing.map((skill, index) => (
                              <Badge key={index} variant="secondary" className="bg-amber-100 text-amber-800 hover:bg-amber-200">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                          <p className="text-sm text-muted-foreground mt-2">
                            These {resultData.skills.missing.length} skills are mentioned in the job description but not in your resume.
                          </p>

                          <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                            <div className="flex items-start">
                              <Lightbulb className="h-5 w-5 text-amber-600 mr-2 mt-0.5" />
                              <div>
                                <h4 className="text-sm font-medium text-amber-800">Skill Gap Recommendation</h4>
                                <p className="text-sm text-amber-700 mt-1">
                                  Consider adding these missing skills to your resume if you have experience with them. 
                                  If not, consider taking online courses or working on projects that will help you 
                                  gain these skills.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="font-medium mb-3 flex items-center">
                            <Zap className="text-blue-500 h-5 w-5 mr-2" />
                            Recommended Skills
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {resultData.skills.recommended.map((skill, index) => (
                              <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                          <p className="text-sm text-muted-foreground mt-2">
                            These complementary skills would strengthen your application for this role.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Suggestions Tab */}
                <TabsContent value="suggestions" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Improvement Suggestions</CardTitle>
                      <CardDescription>
                        Recommendations to improve your resume match
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <Accordion type="single" collapsible className="w-full">
                          {resultData.suggestions.map((suggestion) => (
                            <AccordionItem key={suggestion.id} value={`suggestion-${suggestion.id}`}>
                              <AccordionTrigger className={`hover:no-underline p-3 rounded-lg border ${getSuggestionColor(suggestion.type)}`}>
                                <div className="flex items-center text-left">
                                  {getSuggestionIcon(suggestion.type)}
                                  <span className="ml-2 text-sm font-medium">{suggestion.text}</span>
                                </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className="p-3 bg-gray-50 rounded-b-lg">
                                        <p className="text-sm text-muted-foreground">
                                        {suggestion.type === 'high' ? 'This is a critical improvement that can significantly boost your chances of getting noticed by recruiters.' : ''}
                                        {suggestion.type === 'medium' ? 'This suggestion can help you stand out from other applicants and improve your resume match.' : ''}
                                        {suggestion.type === 'low' ? 'Consider implementing this suggestion to enhance your resume and increase your chances of getting an interview.' : ''}
                                        </p>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                            ))}
                        </Accordion>
                      </div>
                    </CardContent>
                    </Card>
                </TabsContent>
                </Tabs>
            </div>
            )}
            </div>
            </div>
            </div>
            );
}

