'use client';

import { useState } from 'react';
import { 
  MessageSquare, 
  Send,
  Clock,
  CheckCircle2,
  AlertCircle,
  User
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

export default function ContactAdminPage() {
  const [messageText, setMessageText] = useState('');
  const [messageCategory, setMessageCategory] = useState('Technical');
  const [messageSent, setMessageSent] = useState(false);
  
  // Sample previous queries data
  const previousQueries = [
    { 
      id: 1, 
      subject: 'Resume score calculation issue', 
      category: 'Technical', 
      date: '2 days ago', 
      status: 'Resolved',
      issued: '2 days ago',
      messages: [
        {
          sender: 'you',
          text: 'Hi, I noticed that my resume score suddenly dropped from 85 to 72 without any changes. Is this a bug?',
          time: '2 days ago'
        },
        {
          sender: 'admin',
          text: 'Hello! Thank you for reaching out. We recently updated our scoring algorithm to better align with industry standards. Your score changed because we now weigh quantifiable achievements more heavily. If you add more metrics to your experience section, your score should improve.',
          time: '1 day ago'
        },
        {
          sender: 'you',
          text: 'Thanks for the explanation! I\'ll update my resume with more quantifiable achievements.',
          time: '1 day ago'
        },
        {
          sender: 'admin',
          text: 'You\'re welcome! Feel free to reach out if you have any other questions.',
          time: '1 day ago'
        }
      ]
    },
    { 
      id: 2, 
      subject: 'Payment issue with credit purchase', 
      category: 'Billing', 
      date: '1 week ago', 
      status: 'Resolved',
      messages: [
        {
          sender: 'you',
          text: 'I was charged twice for my credit purchase. Order #TF-20250215-002.',
          time: '1 week ago'
        },
        {
          sender: 'admin',
          text: 'I apologize for the inconvenience. We\'ve verified the double charge and have issued a refund for the duplicate transaction. It should appear in your account within 3-5 business days.',
          time: '6 days ago'
        },
        {
          sender: 'you',
          text: 'Thank you for the quick resolution!',
          time: '6 days ago'
        }
      ]
    },
    { 
      id: 3, 
      subject: 'Feature request: Multiple resume versions', 
      category: 'Feature Request', 
      date: '3 weeks ago', 
      status: 'In Progress',
      messages: [
        {
          sender: 'you',
          text: 'It would be great if we could have multiple versions of the same resume for different job applications.',
          time: '3 weeks ago'
        },
        {
          sender: 'admin',
          text: 'Thanks for the suggestion! We\'re actually working on a resume versioning feature now. It should be available in our next update, scheduled for next month.',
          time: '3 weeks ago'
        },
        {
          sender: 'you',
          text: 'That\'s great news! Looking forward to it.',
          time: '3 weeks ago'
        }
      ]
    }
  ];
  
  const handleSendMessage = () => {
    if (messageText.trim() === '') return;
    
    // In a real app, here you would send the message to the backend
    console.log('Sending message:', {
      text: messageText,
      category: messageCategory
    });
    
    setMessageSent(true);
    setTimeout(() => {
      setMessageText('');
      setMessageSent(false);
    }, 2000);
  };
  
  const getStatusBadge = (status = 'Pending') => {
    switch(status) {
      case 'Resolved':
        return <Badge className="bg-green-100 text-green-800"><CheckCircle2 className="mr-1 h-3 w-3" /> Resolved</Badge>;
      case 'In Progress':
        return <Badge className="bg-blue-100 text-blue-800"><Clock className="mr-1 h-3 w-3" /> In Progress</Badge>;
      case 'Pending':
        return <Badge className="bg-yellow-100 text-yellow-800"><AlertCircle className="mr-1 h-3 w-3" /> Pending</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800">{status}</Badge>;
    }
  };
  
  return (
    <div className="p-1 sm:p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Help Center</h1>
        <p className="text-muted-foreground">Get help with technical issues, billing questions, or feature requests</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Contact Form */}
        <div className="lg:col-span-1 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>Our team usually responds within 24 hours</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Category</label>
                <Select value={messageCategory} onValueChange={setMessageCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="technical">Technical Support</SelectItem>
                    <SelectItem value="billing">Billing Question</SelectItem>
                    <SelectItem value="feature">Feature Request</SelectItem>
                    <SelectItem value="bug">Bug Report</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Subject</label>
                <Input placeholder="Enter a subject" />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Message</label>
                <Textarea 
                  placeholder="Describe your issue or request in detail..." 
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  rows={6}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full"
                onClick={handleSendMessage}
                disabled={messageText.trim() === '' || messageSent}
              >
                {messageSent ? (
                  <>
                    <CheckCircle2 className="mr-2 h-4 w-4" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <MessageSquare className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email Support</p>
                    <p className="text-sm text-muted-foreground">support@talentfox.com</p>
                  </div>
                </div>
                
                <Separator />
                
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Response Time</p>
                    <p className="text-sm text-muted-foreground">Within 24 hours</p>
                  </div>
                </div>
                
                <Separator />
                
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Helpdesk Hours</p>
                    <p className="text-sm text-muted-foreground">Monday - Friday, 9AM - 6PM IST</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Right Column - Previous Queries */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Your Queries</CardTitle>
              <CardDescription>History of your previous communications with our team</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="all">
                <TabsList className="mb-4">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="resolved">Resolved</TabsTrigger>
                  <TabsTrigger value="in-progress">In Progress</TabsTrigger>
                  <TabsTrigger value="pending">Pending</TabsTrigger>
                </TabsList>
                
                <TabsContent value="all">
                  {previousQueries.length > 0 ? (
                    <div className="space-y-4">
                      {previousQueries.map((query) => (
                        <Card key={query.id} className="border border-gray-200">
                          <CardHeader className="py-3">
                            <div className="flex justify-between items-start">
                              <div>
                                <CardTitle className="text-base">{query.subject}</CardTitle>
                                <div className="flex items-center mt-1">
                                  <Badge variant="outline" className="mr-2">{query.category}</Badge>
                                  <span className="text-xs text-muted-foreground">{query.date}</span>
                                </div>
                              </div>
                              {getStatusBadge(query.status)}
                            </div>
                          </CardHeader>
                          <CardContent className="pt-0 pb-3">
                            <div className="space-y-3 max-h-[300px] overflow-y-auto">
                              {query.messages.map((message, index) => (
                                <div 
                                  key={index} 
                                  className={`flex ${message.sender === 'admin' ? 'justify-start' : 'justify-end'}`}
                                >
                                  <div 
                                    className={`max-w-[80%] rounded-lg p-3 ${
                                      message.sender === 'admin' 
                                        ? 'bg-gray-100' 
                                        : 'bg-primary/10 text-primary-foreground'
                                    }`}
                                  >
                                    <div className="flex items-center mb-1.5">
                                      {message.sender === 'admin' ? (
                                        <>
                                          <Avatar className="h-6 w-6 mr-2">
                                            <AvatarFallback className="bg-primary text-primary-foreground text-xs">TF</AvatarFallback>
                                          </Avatar>
                                          <span className="text-xs font-medium">Admin</span>
                                        </>
                                      ) : (
                                        <>
                                          <Avatar className="h-6 w-6 mr-2">
                                            <AvatarFallback className="bg-primary text-primary-foreground text-xs">You</AvatarFallback>
                                          </Avatar>
                                          <span className="text-xs font-medium">You</span>
                                        </>
                                      )}
                                      <span className="text-xs text-muted-foreground ml-auto">{message.time}</span>
                                    </div>
                                    <p className="text-sm">{message.text}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                          {query.status !== 'Resolved' && (
                            <CardFooter className="border-t pt-3">
                              <div className="w-full">
                                <div className="flex gap-2">
                                  <Input placeholder="Type a reply..." className="flex-1" />
                                  <Button size="sm">
                                    <Send className="h-4 w-4" />
                                  </Button>
                                </div>
                              </div>
                            </CardFooter>
                          )}
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center p-8 text-center border border-dashed rounded-lg">
                      <MessageSquare className="h-12 w-12 text-muted-foreground mb-3" />
                      <h3 className="font-medium mb-1">No queries yet</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        You haven&apos;t sent any messages to the admin team yet
                      </p>
                    </div>
                  )}
                </TabsContent>
                
                <TabsContent value="resolved">
                  {/* Content filtered for resolved queries */}
                </TabsContent>
                
                <TabsContent value="in-progress">
                  {/* Content filtered for in-progress queries */}
                </TabsContent>
                
                <TabsContent value="pending">
                  {/* Content filtered for pending queries */}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          
          <div className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium mb-1">How long does it take to get a response?</h3>
                    <p className="text-sm text-muted-foreground">
                      Our team typically responds within 24 hours during business days. For urgent issues, we prioritize responses as quickly as possible.
                    </p>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="text-sm font-medium mb-1">How can I check the status of my ticket?</h3>
                    <p className="text-sm text-muted-foreground">
                      You can view the status of all your submitted queries in the &quot;Your Queries&quot; section above. Each query is marked as Pending, In Progress, or Resolved.
                    </p>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="text-sm font-medium mb-1">What information should I include in my support request?</h3>
                    <p className="text-sm text-muted-foreground">
                      Please include specific details about the issue you&apos;re experiencing, including steps to reproduce the problem, error messages if any, and screenshots if applicable.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}