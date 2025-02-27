'use client';

import { useState } from 'react';
import { 
  UserPlus, 
  Copy, 
  Share2, 
  Mail, 
  Gift, 
  ChevronRight,
  CheckCircle2,
  Users,
  Zap,
  MailCheck,
  ExternalLink,
  Facebook,
  Twitter,
  Linkedin,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { Textarea } from '@/components/ui/textarea';

export default function ReferFriendPage() {
  const [copied, setCopied] = useState(false);
  const [emailsSent, setEmailsSent] = useState(false);
  const [activeTab, setActiveTab] = useState('email');
  const [emailInputs, setEmailInputs] = useState(['', '', '']);
  
  const referralCode = 'ABC123FRIEND';
  const referralLink = `https://talentfox.com/signup?ref=${referralCode}`;
  
  // Mock referral history data
  const referralHistory = [
    { id: 1, name: 'Priya Singh', email: 'priya.singh@example.com', status: 'joined', date: 'Feb 28, 2025', credits: 10 },
    { id: 2, name: 'Rahul Verma', email: 'rahul.verma@example.com', status: 'pending', date: 'Feb 25, 2025', credits: 0 },
    { id: 3, name: 'Aditya Kumar', email: 'aditya.kumar@example.com', status: 'joined', date: 'Feb 20, 2025', credits: 10 },
  ];
  
  const handleCopyLink = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const WhatsAppIcon = ({ className }: { className?: string }) => (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h12z"></path>
      <path d="M8 10h8M8 14h5"></path>
    </svg>
  );
  
  const handleUpdateEmail = (index: number, value: string) => {
    setEmailInputs((prev) =>
      prev.map((email, i) => (i === index ? value : email))
    );
  };
  
  const handleAddEmailField = () => {
    setEmailInputs([...emailInputs, '']);
  };
  
  const handleRemoveEmailField = (index: number) => {
    const newInputs = [...emailInputs];
    newInputs.splice(index, 1);
    setEmailInputs(newInputs);
  };
  
  const handleSendEmails = () => {
    // Here you would send the emails via API
    setEmailsSent(true);
    setTimeout(() => setEmailsSent(false), 3000);
  };
  
  return (
    <div className="p-1 sm:p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Refer Your Friends</h1>
        <p className="text-muted-foreground">Invite friends and earn free credits when they join</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Gift className="h-5 w-5 text-primary mr-2" />
                Referral Program
              </CardTitle>
              <CardDescription>
                Share Talent Fox with your friends and both get rewarded
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-6">
                <h3 className="font-medium mb-2 text-primary">How it works</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="relative">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                        1
                      </div>
                      <div className="hidden md:block absolute top-4 left-8 h-0.5 w-[calc(100%-2rem)] bg-primary/30"></div>
                    </div>
                    <div className="mt-2">
                      <h4 className="text-sm font-medium">Invite Friends</h4>
                      <p className="text-xs text-muted-foreground">Share your unique referral link or send email invites</p>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                        2
                      </div>
                      <div className="hidden md:block absolute top-4 left-8 h-0.5 w-[calc(100%-2rem)] bg-primary/30"></div>
                    </div>
                    <div className="mt-2">
                      <h4 className="text-sm font-medium">Friends Sign Up</h4>
                      <p className="text-xs text-muted-foreground">Your friends create an account using your referral link</p>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                        3
                      </div>
                    </div>
                    <div className="mt-2">
                      <h4 className="text-sm font-medium">Both Get Rewarded</h4>
                      <p className="text-xs text-muted-foreground">You and your friend each get 10 free credits</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-3">Your Referral Link</h3>
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 bg-muted p-2 rounded-lg text-sm break-all">
                      {referralLink}
                    </div>
                    <Button 
                      variant={copied ? "default" : "outline"} 
                      size="sm" 
                      onClick={handleCopyLink}
                    >
                      {copied ? (
                        <>
                          <CheckCircle2 className="mr-2 h-4 w-4" />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy className="mr-2 h-4 w-4" />
                          Copy
                        </>
                      )}
                    </Button>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3">Share with Friends</h3>
                  <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as string)}>
                    <TabsList className="w-full grid grid-cols-2">
                      <TabsTrigger value="email">
                        <Mail className="mr-2 h-4 w-4" />
                        Via Email
                      </TabsTrigger>
                      <TabsTrigger value="social">
                        <Share2 className="mr-2 h-4 w-4" />
                        Social Media
                      </TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="email" className="mt-4 space-y-4">
                      {emailInputs.map((email, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Input
                            type="email"
                            placeholder="friend@example.com"
                            value={email}
                            onChange={(e) => handleUpdateEmail(index, e.target.value)}
                          />
                          {emailInputs.length > 1 && (
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleRemoveEmailField(index)}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-4 w-4"
                              >
                                <path d="M18 6 6 18" />
                                <path d="m6 6 12 12" />
                              </svg>
                            </Button>
                          )}
                        </div>
                      ))}
                      
                      <div className="flex items-center space-x-2">
                        <Button 
                          variant="outline"
                          size="sm"
                          onClick={handleAddEmailField}
                          className="text-xs"
                        >
                          + Add another email
                        </Button>
                      </div>
                      
                      <div className="pt-2">
                        <Button 
                          onClick={handleSendEmails}
                          disabled={!emailInputs.some(email => email.trim() !== '') || emailsSent}
                          className="w-full"
                        >
                          {emailsSent ? (
                            <>
                              <MailCheck className="mr-2 h-4 w-4" />
                              Invitations Sent!
                            </>
                          ) : (
                            <>
                              <Mail className="mr-2 h-4 w-4" />
                              Send Invitations
                            </>
                          )}
                        </Button>
                      </div>
                    </TabsContent>

                    <TabsContent value="social" className="mt-4 space-y-4">
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        <Button variant="outline" className="flex-col h-20 space-y-1" aria-label="Share on Facebook">
                          <div className="h-6 w-6 text-[#1877F2]">
                            <Facebook className="h-6 w-6" />
                          </div>
                          <span className="text-xs">Facebook</span>
                        </Button>
                        <Button variant="outline" className="flex-col h-20 space-y-1" aria-label="Share on Twitter">
                          <div className="h-6 w-6 text-[#1DA1F2]">
                            <Twitter className="h-6 w-6" />
                          </div>
                          <span className="text-xs">Twitter</span>
                        </Button>
                        <Button variant="outline" className="flex-col h-20 space-y-1" aria-label="Share on LinkedIn">
                          <div className="h-6 w-6 text-[#0A66C2]">
                            <Linkedin className="h-6 w-6" />
                          </div>
                          <span className="text-xs">LinkedIn</span>
                        </Button>
                        <Button variant="outline" className="flex-col h-20 space-y-1" aria-label="Share on WhatsApp">
                          <div className="h-6 w-6 text-[#25D366]">
                            <WhatsAppIcon className="h-6 w-6" />
                          </div>
                          <span className="text-xs">WhatsApp</span>
                        </Button>
                      </div>
                      
                      <div className="mt-4">
                        <h4 className="text-sm font-medium mb-2">Personalize your message:</h4>
                        <Textarea
                          placeholder="I've been using Talent Fox to enhance my resume. Join using my referral link to get 10 free credits!"
                          className="h-24"
                        />
                      </div>
                    </TabsContent>
                    
                  </Tabs>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 text-primary mr-2" />
                Your Referrals
              </CardTitle>
              <CardDescription>
                Track the status of your referrals and earned credits
              </CardDescription>
            </CardHeader>
            <CardContent>
              {referralHistory.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-xs text-muted-foreground border-b">
                        <th className="text-left py-3 font-medium">Name</th>
                        <th className="text-left py-3 font-medium">Email</th>
                        <th className="text-left py-3 font-medium">Date</th>
                        <th className="text-left py-3 font-medium">Status</th>
                        <th className="text-right py-3 font-medium">Credits Earned</th>
                      </tr>
                    </thead>
                    <tbody>
                      {referralHistory.map((referral) => (
                        <tr key={referral.id} className="border-b last:border-b-0">
                          <td className="py-3">{referral.name}</td>
                          <td className="py-3">{referral.email}</td>
                          <td className="py-3">{referral.date}</td>
                          <td className="py-3">
                            {referral.status === 'joined' ? (
                              <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                                <CheckCircle2 className="mr-1 h-3 w-3" />
                                Joined
                              </Badge>
                            ) : (
                              <Badge variant="outline" className="bg-amber-100 text-amber-800 hover:bg-amber-200">
                                Pending
                              </Badge>
                            )}
                          </td>
                          <td className="py-3 text-right font-medium">
                            {referral.credits > 0 ? `+${referral.credits}` : '-'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-center py-6">
                  <Users className="h-12 w-12 text-muted-foreground mx-auto mb-3 opacity-50" />
                  <h3 className="font-medium mb-1">No referrals yet</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Start sharing your referral link to earn rewards
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
        
        {/* Right Column */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Referral Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-primary/5 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <h3 className="text-sm font-medium">Total Referrals</h3>
                    <span className="font-bold text-lg">3</span>
                  </div>
                </div>
                <div className="bg-primary/5 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <h3 className="text-sm font-medium">Credits Earned</h3>
                    <span className="font-bold text-lg">20</span>
                  </div>
                </div>
                <div className="bg-primary/5 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <h3 className="text-sm font-medium">Conversion Rate</h3>
                    <span className="font-bold text-lg">67%</span>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-sm font-medium mb-2">Rewards Breakdown</h3>
                <div className="text-sm space-y-1">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Per successful referral</span>
                    <span>10 credits</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Your friend gets</span>
                    <span>10 credits</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>FAQ</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-sm font-medium">How do I earn credits?</h3>
                <p className="text-xs text-muted-foreground">
                  You earn 10 credits when a friend signs up using your referral link and completes registration.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-medium">When do I receive my credits?</h3>
                <p className="text-xs text-muted-foreground">
                  Credits are added to your account immediately after your friend completes the registration process.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Is there a limit to how many friends I can refer?</h3>
                <p className="text-xs text-muted-foreground">
                  There's no limit! You can refer as many friends as you want and earn credits for each successful referral.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Can I use credits for anything?</h3>
                <p className="text-xs text-muted-foreground">
                  Credits can be used for resume analysis, AI enhancement, and other premium features on the platform.
                </p>
              </div>
              
              <Button variant="outline" className="w-full">
                View All FAQs
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
