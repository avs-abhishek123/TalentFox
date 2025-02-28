'use client';

import { useState } from 'react';
import { 
  Settings, 
  User, 
  Bell, 
  Shield, 
  CreditCard, 
  LogOut, 
  Mail, 
  Key, 
  Save,
  CheckCircle2,
  Smartphone,
  X
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge'; // Add this import
import { signOut } from 'next-auth/react';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('account');
  const [isSaving, setIsSaving] = useState(false);
  const [savedSuccessfully, setSavedSuccessfully] = useState(false);
  
  // Form states
  const [formData, setFormData] = useState({
    name: 'Abhishek Sharma',
    email: 'abhishek.sharma@example.com',
    phone: '+91 9876543210',
    bio: 'Computer Science student with a focus on web development and machine learning.',
    
    notifications: {
      email: {
        jobAlerts: true,
        applicationUpdates: true,
        accountUpdates: true,
        marketingEmails: false
      },
      push: {
        jobAlerts: true,
        applicationUpdates: true,
        accountUpdates: false,
        marketingEmails: false
      }
    },
    
    appearance: {
      theme: 'system',
      density: 'comfortable',
      fontSize: 'medium',
    },
    
    privacy: {
      profileVisibility: 'public',
      activityTracking: true,
      dataUsage: true
    },
    
    billing: {
      plan: 'pro',
      creditBalance: 42,
      paymentMethod: 'card'
    }
  });

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value
    });
};

  const Toggle = ({ className }: { className: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 13l4 4L19 7"
      ></path>
    </svg>
  );

interface Notifications {
    email: {
        jobAlerts: boolean;
        applicationUpdates: boolean;
        accountUpdates: boolean;
        marketingEmails: boolean;
    };
    push: {
        jobAlerts: boolean;
        applicationUpdates: boolean;
        accountUpdates: boolean;
        marketingEmails: boolean;
    };
}

interface Appearance {
    theme: 'light' | 'dark' | 'system';
    density: 'compact' | 'comfortable' | 'spacious';
    fontSize: 'small' | 'medium' | 'large';
}

interface Privacy {
    profileVisibility: 'public' | 'limited' | 'private';
    activityTracking: boolean;
    dataUsage: boolean;
}

interface Billing {
    plan: 'pro';
    creditBalance: number;
    paymentMethod: 'card';
}

interface FormData {
    name: string;
    email: string;
    phone: string;
    bio: string;
    notifications: Notifications;
    appearance: Appearance;
    privacy: Privacy;
    billing: Billing;
}

const handleNotificationChange = (category: keyof Notifications['email'], type: keyof Notifications, checked: boolean) => {
    setFormData({
        ...formData,
        notifications: {
            ...formData.notifications,
            [type]: {
                ...formData.notifications[type],
                [category]: checked
            }
        }
    });
};

const handleAppearanceChange = (setting: keyof Appearance, value: Appearance[keyof Appearance]) => {
    setFormData({
        ...formData,
        appearance: {
            ...formData.appearance,
            [setting]: value
        }
    });
};

const handlePrivacyChange = (setting: keyof Privacy, value: Privacy[keyof Privacy]) => {
    setFormData({
        ...formData,
        privacy: {
            ...formData.privacy,
            [setting]: value
        }
    });
};

  const handleSaveChanges = () => {
    setIsSaving(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      setSavedSuccessfully(true);
      
      setTimeout(() => {
        setSavedSuccessfully(false);
      }, 3000);
    }, 1500);
  };

  const getInitials = (name = '') => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <div className="p-1 sm:p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Preferences & Settings</h1>
        <p className="text-muted-foreground">Manage your account settings and preferences</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <Card>
            <CardContent className="p-0">
              <nav className="flex flex-col py-2">
                <button
                  className={`flex items-center px-4 py-2 text-sm ${activeTab === 'account' ? 'bg-primary/10 text-primary font-medium' : 'text-gray-700 hover:bg-gray-100'}`}
                  onClick={() => setActiveTab('account')}
                >
                  <User className="mr-3 h-5 w-5" />
                  Account
                </button>
                <button
                  className={`flex items-center px-4 py-2 text-sm ${activeTab === 'notifications' ? 'bg-primary/10 text-primary font-medium' : 'text-gray-700 hover:bg-gray-100'}`}
                  onClick={() => setActiveTab('notifications')}
                >
                  <Bell className="mr-3 h-5 w-5" />
                  Notifications
                </button>
                <button
                  className={`flex items-center px-4 py-2 text-sm ${activeTab === 'appearance' ? 'bg-primary/10 text-primary font-medium' : 'text-gray-700 hover:bg-gray-100'}`}
                  onClick={() => setActiveTab('appearance')}
                >
                  <Toggle className="mr-3 h-5 w-5" />
                  Appearance
                </button>
                <button
                  className={`flex items-center px-4 py-2 text-sm ${activeTab === 'privacy' ? 'bg-primary/10 text-primary font-medium' : 'text-gray-700 hover:bg-gray-100'}`}
                  onClick={() => setActiveTab('privacy')}
                >
                  <Shield className="mr-3 h-5 w-5" />
                  Privacy
                </button>
                <button
                  className={`flex items-center px-4 py-2 text-sm ${activeTab === 'billing' ? 'bg-primary/10 text-primary font-medium' : 'text-gray-700 hover:bg-gray-100'}`}
                  onClick={() => setActiveTab('billing')}
                >
                  <CreditCard className="mr-3 h-5 w-5" />
                  Billing
                </button>
                <Separator className="my-2" />
                <button
                  className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                  onClick={() => signOut({ callbackUrl: '/' })}
                >
                  <LogOut className="mr-3 h-5 w-5" />
                  Sign out
                </button>
              </nav>
            </CardContent>
          </Card>
        </div>
        
        <div className="md:col-span-3">
          {/* Account Settings */}
          {activeTab === 'account' && (
            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>Manage your personal information and password</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <Avatar className="h-20 w-20 bg-primary text-primary-foreground">
                    <AvatarFallback className="text-xl">{getInitials(formData.name)}</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h3 className="text-lg font-medium">{formData.name}</h3>
                    <p className="text-sm text-muted-foreground">{formData.email}</p>
                    <div className="flex pt-2">
                      <Button size="sm">Change Avatar</Button>
                      <Button size="sm" variant="outline" className="ml-2">Remove</Button>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      value={formData.email} 
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio">Short Bio</Label>
                    <Input 
                      id="bio" 
                      name="bio" 
                      value={formData.bio} 
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Change Password</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="currentPassword">Current Password</Label>
                      <Input id="currentPassword" type="password" />
                    </div>
                    <div></div> {/* Empty div for layout */}
                    <div className="space-y-2">
                      <Label htmlFor="newPassword">New Password</Label>
                      <Input id="newPassword" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm New Password</Label>
                      <Input id="confirmPassword" type="password" />
                    </div>
                  </div>
                  <Button className="mt-4" variant="outline">
                    <Key className="mr-2 h-4 w-4" />
                    Update Password
                  </Button>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Danger Zone</h3>
                  <div className="p-4 border border-red-200 rounded-md bg-red-50">
                    <h4 className="text-sm font-medium text-red-800 mb-1">Delete Account</h4>
                    <p className="text-sm text-red-600 mb-4">
                      Once you delete your account, there is no going back. Please be certain.
                    </p>
                    <Button variant="destructive" size="sm">
                      <X className="mr-2 h-4 w-4" />
                      Delete Account
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button 
                  onClick={handleSaveChanges}
                  disabled={isSaving}
                >
                  {isSaving ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Saving...
                    </>
                  ) : savedSuccessfully ? (
                    <>
                      <CheckCircle2 className="mr-2 h-4 w-4" />
                      Saved!
                    </>
                  ) : (
                    <>
                      <Save className="mr-2 h-4 w-4" />
                      Save Changes
                    </>
                  )}
                </Button>
              </CardFooter>
            </Card>
          )}

          {/* Notifications Settings */}
          {activeTab === 'notifications' && (
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>Manage how you receive notifications and alerts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium flex items-center mb-4">
                    <Mail className="h-5 w-5 mr-2 text-primary" />
                    Email Notifications
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium">Job Alerts</h4>
                        <p className="text-sm text-muted-foreground">Receive emails about new job postings that match your profile</p>
                      </div>
                      <Switch 
                        checked={formData.notifications.email.jobAlerts}
                        onCheckedChange={(checked) => handleNotificationChange('jobAlerts', 'email', checked)}
                      />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium">Application Updates</h4>
                        <p className="text-sm text-muted-foreground">Receive emails when there's an update to your job applications</p>
                      </div>
                      <Switch 
                        checked={formData.notifications.email.applicationUpdates}
                        onCheckedChange={(checked) => handleNotificationChange('applicationUpdates', 'email', checked)}
                      />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium">Account Updates</h4>
                        <p className="text-sm text-muted-foreground">Receive emails about your account security and important changes</p>
                      </div>
                      <Switch 
                        checked={formData.notifications.email.accountUpdates}
                        onCheckedChange={(checked) => handleNotificationChange('accountUpdates', 'email', checked)}
                      />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium">Marketing Emails</h4>
                        <p className="text-sm text-muted-foreground">Receive promotional emails, tips, and product updates</p>
                      </div>
                      <Switch 
                        checked={formData.notifications.email.marketingEmails}
                        onCheckedChange={(checked) => handleNotificationChange('marketingEmails', 'email', checked)}
                      />
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-lg font-medium flex items-center mb-4">
                    <Smartphone className="h-5 w-5 mr-2 text-primary" />
                    Push Notifications
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium">Job Alerts</h4>
                        <p className="text-sm text-muted-foreground">Receive push notifications about new job postings</p>
                      </div>
                      <Switch 
                        checked={formData.notifications.push.jobAlerts}
                        onCheckedChange={(checked) => handleNotificationChange('jobAlerts', 'push', checked)}
                      />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium">Application Updates</h4>
                        <p className="text-sm text-muted-foreground">Receive push notifications for job application updates</p>
                      </div>
                      <Switch 
                        checked={formData.notifications.push.applicationUpdates}
                        onCheckedChange={(checked) => handleNotificationChange('applicationUpdates', 'push', checked)}
                      />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium">Account Updates</h4>
                        <p className="text-sm text-muted-foreground">Receive push notifications for account security updates</p>
                      </div>
                      <Switch 
                        checked={formData.notifications.push.accountUpdates}
                        onCheckedChange={(checked) => handleNotificationChange('accountUpdates', 'push', checked)}
                      />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium">Marketing Notifications</h4>
                        <p className="text-sm text-muted-foreground">Receive promotional push notifications</p>
                      </div>
                      <Switch 
                        checked={formData.notifications.push.marketingEmails}
                        onCheckedChange={(checked) => handleNotificationChange('marketingEmails', 'push', checked)}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button 
                  onClick={handleSaveChanges}
                  disabled={isSaving}
                >
                  {isSaving ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Saving...
                    </>
                  ) : savedSuccessfully ? (
                    <>
                      <CheckCircle2 className="mr-2 h-4 w-4" />
                      Saved!
                    </>
                  ) : (
                    <>
                      <Save className="mr-2 h-4 w-4" />
                      Save Changes
                    </>
                  )}
                </Button>
              </CardFooter>
            </Card>
          )}

          {/* Appearance Settings */}
          {activeTab === 'appearance' && (
            <Card>
              <CardHeader>
                <CardTitle>Appearance Settings</CardTitle>
                <CardDescription>Customize how the application looks and feels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium mb-2">Theme</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div 
                      className={`flex items-center justify-center flex-col p-4 rounded-lg border cursor-pointer ${formData.appearance.theme === 'light' ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-gray-300'}`}
                      onClick={() => handleAppearanceChange('theme', 'light')}
                    >
                      <div className="w-full h-24 rounded-md bg-white border border-gray-200 mb-2"></div>
                      <span className="text-sm">Light</span>
                    </div>
                    <div 
                      className={`flex items-center justify-center flex-col p-4 rounded-lg border cursor-pointer ${formData.appearance.theme === 'dark' ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-gray-300'}`}
                      onClick={() => handleAppearanceChange('theme', 'dark')}
                    >
                      <div className="w-full h-24 rounded-md bg-gray-900 border border-gray-700 mb-2"></div>
                      <span className="text-sm">Dark</span>
                    </div>
                    <div 
                      className={`flex items-center justify-center flex-col p-4 rounded-lg border cursor-pointer ${formData.appearance.theme === 'system' ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-gray-300'}`}
                      onClick={() => handleAppearanceChange('theme', 'system')}
                    >
                      <div className="w-full h-24 rounded-md bg-gradient-to-r from-white to-gray-900 mb-2"></div>
                      <span className="text-sm">System</span>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-sm font-medium mb-2">Density</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div 
                      className={`flex items-center justify-center flex-col p-4 rounded-lg border cursor-pointer ${formData.appearance.density === 'compact' ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-gray-300'}`}
                      onClick={() => handleAppearanceChange('density', 'compact')}
                    >
                      <div className="w-full space-y-1 mb-2">
                        <div className="w-full h-3 bg-gray-200 rounded"></div>
                        <div className="w-full h-3 bg-gray-200 rounded"></div>
                        <div className="w-full h-3 bg-gray-200 rounded"></div>
                        <div className="w-full h-3 bg-gray-200 rounded"></div>
                      </div>
                      <span className="text-sm">Compact</span>
                    </div>
                    <div 
                      className={`flex items-center justify-center flex-col p-4 rounded-lg border cursor-pointer ${formData.appearance.density === 'comfortable' ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-gray-300'}`}
                      onClick={() => handleAppearanceChange('density', 'comfortable')}
                    >
                      <div className="w-full space-y-2 mb-2">
                        <div className="w-full h-4 bg-gray-200 rounded"></div>
                        <div className="w-full h-4 bg-gray-200 rounded"></div>
                        <div className="w-full h-4 bg-gray-200 rounded"></div>
                      </div>
                      <span className="text-sm">Comfortable</span>
                    </div>
                    <div 
                      className={`flex items-center justify-center flex-col p-4 rounded-lg border cursor-pointer ${formData.appearance.density === 'spacious' ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-gray-300'}`}
                      onClick={() => handleAppearanceChange('density', 'spacious')}
                    >
                      <div className="w-full space-y-3 mb-2">
                        <div className="w-full h-5 bg-gray-200 rounded"></div>
                        <div className="w-full h-5 bg-gray-200 rounded"></div>
                      </div>
                      <span className="text-sm">Spacious</span>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-sm font-medium mb-2">Font Size</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div 
                      className={`flex items-center justify-center flex-col p-4 rounded-lg border cursor-pointer ${formData.appearance.fontSize === 'small' ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-gray-300'}`}
                      onClick={() => handleAppearanceChange('fontSize', 'small')}
                    >
                      <span className="text-xs mb-2">Small Text</span>
                      <span className="text-sm">Small</span>
                    </div>
                    <div 
                      className={`flex items-center justify-center flex-col p-4 rounded-lg border cursor-pointer ${formData.appearance.fontSize === 'medium' ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-gray-300'}`}
                      onClick={() => handleAppearanceChange('fontSize', 'medium')}
                    >
                      <span className="text-sm mb-2">Medium Text</span>
                      <span className="text-sm">Medium</span>
                    </div>
                    <div 
                      className={`flex items-center justify-center flex-col p-4 rounded-lg border cursor-pointer ${formData.appearance.fontSize === 'large' ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-gray-300'}`}
                      onClick={() => handleAppearanceChange('fontSize', 'large')}
                    >
                      <span className="text-base mb-2">Large Text</span>
                      <span className="text-sm">Large</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Reset to Defaults</Button>
                <Button 
                  onClick={handleSaveChanges}
                  disabled={isSaving}
                >
                  {isSaving ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Saving...
                    </>
                  ) : savedSuccessfully ? (
                    <>
                      <CheckCircle2 className="mr-2 h-4 w-4" />
                      Saved!
                    </>
                  ) : (
                    <>
                      <Save className="mr-2 h-4 w-4" />
                      Save Changes
                    </>
                  )}
                </Button>
              </CardFooter>
            </Card>
          )}

          {/* Privacy Settings */}
          {activeTab === 'privacy' && (
            <Card>
              <CardHeader>
                <CardTitle>Privacy Settings</CardTitle>
                <CardDescription>Manage your privacy preferences and data usage</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                <h3 className="text-sm font-medium mb-3">Profile Visibility</h3>
                  <div className="space-y-4">
                    <div 
                      className={`p-4 rounded-lg border ${formData.privacy.profileVisibility === 'public' ? 'border-primary bg-primary/5' : 'border-gray-200'} cursor-pointer`}
                      onClick={() => handlePrivacyChange('profileVisibility', 'public')}
                    >
                      <div className="flex items-center">
                        <div className={`w-4 h-4 rounded-full border mr-2 flex items-center justify-center ${formData.privacy.profileVisibility === 'public' ? 'border-primary' : 'border-gray-300'}`}>
                          {formData.privacy.profileVisibility === 'public' && (
                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                          )}
                        </div>
                        <h4 className="text-sm font-medium">Public</h4>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2 ml-6">
                        Your profile is visible to all recruiters and companies.
                      </p>
                    </div>
                    
                    <div 
                      className={`p-4 rounded-lg border ${formData.privacy.profileVisibility === 'limited' ? 'border-primary bg-primary/5' : 'border-gray-200'} cursor-pointer`}
                      onClick={() => handlePrivacyChange('profileVisibility', 'limited')}
                    >
                      <div className="flex items-center">
                        <div className={`w-4 h-4 rounded-full border mr-2 flex items-center justify-center ${formData.privacy.profileVisibility === 'limited' ? 'border-primary' : 'border-gray-300'}`}>
                          {formData.privacy.profileVisibility === 'limited' && (
                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                          )}
                        </div>
                        <h4 className="text-sm font-medium">Limited</h4>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2 ml-6">
                        Your profile is only visible to companies you've applied to.
                      </p>
                    </div>
                    
                    <div 
                      className={`p-4 rounded-lg border ${formData.privacy.profileVisibility === 'private' ? 'border-primary bg-primary/5' : 'border-gray-200'} cursor-pointer`}
                      onClick={() => handlePrivacyChange('profileVisibility', 'private')}
                    >
                      <div className="flex items-center">
                        <div className={`w-4 h-4 rounded-full border mr-2 flex items-center justify-center ${formData.privacy.profileVisibility === 'private' ? 'border-primary' : 'border-gray-300'}`}>
                          {formData.privacy.profileVisibility === 'private' && (
                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                          )}
                        </div>
                        <h4 className="text-sm font-medium">Private</h4>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2 ml-6">
                        Your profile is not visible to recruiters. You can still apply to jobs.
                      </p>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-sm font-medium mb-3">Data Usage & Tracking</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium">Activity Tracking</h4>
                        <p className="text-sm text-muted-foreground">
                          Allow us to track your activity to improve job recommendations
                        </p>
                      </div>
                      <Switch 
                        checked={formData.privacy.activityTracking}
                        onCheckedChange={(checked) => handlePrivacyChange('activityTracking', checked)}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium">Data Usage for AI</h4>
                        <p className="text-sm text-muted-foreground">
                          Allow us to use your data to train our AI for better matching
                        </p>
                      </div>
                      <Switch 
                        checked={formData.privacy.dataUsage}
                        onCheckedChange={(checked) => handlePrivacyChange('dataUsage', checked)}
                      />
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-sm font-medium mb-3">Data Export & Deletion</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    You can export all your data or request deletion of your account and associated data.
                  </p>
                  <div className="flex space-x-3">
                    <Button variant="outline" size="sm">
                      Export My Data
                    </Button>
                    <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700">
                      Request Data Deletion
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button 
                  onClick={handleSaveChanges}
                  disabled={isSaving}
                >
                  {isSaving ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Saving...
                    </>
                  ) : savedSuccessfully ? (
                    <>
                      <CheckCircle2 className="mr-2 h-4 w-4" />
                      Saved!
                    </>
                  ) : (
                    <>
                      <Save className="mr-2 h-4 w-4" />
                      Save Changes
                    </>
                  )}
                </Button>
              </CardFooter>
            </Card>
          )}

          {/* Billing Settings */}
          {activeTab === 'billing' && (
            <Card>
              <CardHeader>
                <CardTitle>Billing & Subscription</CardTitle>
                <CardDescription>Manage your subscription plan and payment methods</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Current Plan: <span className="text-primary">Pro</span></h3>
                    <p className="text-sm text-muted-foreground">Your subscription renews on March 15, 2025</p>
                  </div>
                  <Badge className="bg-primary">Active</Badge>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Plan Details</h3>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium mb-1">Credits Balance</h4>
                        <div className="text-2xl font-bold text-primary">{formData.billing.creditBalance}</div>
                        <p className="text-xs text-muted-foreground mt-1">Available credits</p>
                        <Button variant="outline" size="sm" className="mt-3 w-full">
                          Get More Credits
                        </Button>
                      </div>
                      
                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium mb-1">Resume Checks</h4>
                        <div className="text-2xl font-bold">Unlimited</div>
                        <p className="text-xs text-muted-foreground mt-1">Resume analyses per month</p>
                      </div>
                      
                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium mb-1">Resume Builder</h4>
                        <div className="text-2xl font-bold">Premium</div>
                        <p className="text-xs text-muted-foreground mt-1">All templates unlocked</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium">Plan Features</h4>
                        <ul className="space-y-1">
                          <li className="text-sm flex items-start">
                            <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5" />
                            <span>AI resume optimization</span>
                          </li>
                          <li className="text-sm flex items-start">
                            <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5" />
                            <span>Personalized job recommendations</span>
                          </li>
                          <li className="text-sm flex items-start">
                            <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5" />
                            <span>Unlimited resume versions</span>
                          </li>
                          <li className="text-sm flex items-start">
                            <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5" />
                            <span>Priority customer support</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="space-y-4">
                        <h4 className="text-sm font-medium">Current Plan Cost</h4>
                        <div className="flex items-center justify-between">
                          <span>Monthly subscription</span>
                          <span className="font-medium">₹499/month</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Credits bundle (50 credits)</span>
                          <span className="font-medium">₹899</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between">
                          <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700 hover:bg-red-50">
                            Cancel Subscription
                          </Button>
                          <Button size="sm">
                            Upgrade Plan
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Payment Methods</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border p-4 rounded-lg">
                      <div className="flex items-center">
                        <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700 mr-3">
                          <CreditCard className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-medium">•••• •••• •••• 4242</p>
                          <p className="text-xs text-muted-foreground">Expires 09/26</p>
                        </div>
                      </div>
                      <Badge>Default</Badge>
                    </div>
                    
                    <Button variant="outline" className="mt-2">
                      <CreditCard className="mr-2 h-4 w-4" />
                      Add Payment Method
                    </Button>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Billing History</h3>
                  <div className="border rounded-lg">
                    <div className="p-4 border-b flex justify-between">
                      <div>
                        <p className="font-medium">Pro Plan Subscription</p>
                        <p className="text-xs text-muted-foreground">Feb 15, 2025</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">₹499</p>
                        <p className="text-xs text-green-600">Paid</p>
                      </div>
                    </div>
                    <div className="p-4 border-b flex justify-between">
                      <div>
                        <p className="font-medium">Credit Purchase (50 credits)</p>
                        <p className="text-xs text-muted-foreground">Jan 28, 2025</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">₹899</p>
                        <p className="text-xs text-green-600">Paid</p>
                      </div>
                    </div>
                    <div className="p-4 flex justify-between">
                      <div>
                        <p className="font-medium">Pro Plan Subscription</p>
                        <p className="text-xs text-muted-foreground">Jan 15, 2025</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">₹499</p>
                        <p className="text-xs text-green-600">Paid</p>
                      </div>
                    </div>
                  </div>
                  <Button variant="link" className="mt-2 p-0 h-auto">
                    View All Transactions
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}