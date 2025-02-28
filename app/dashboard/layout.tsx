// app/dashboard/layout.tsx
'use client';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  BrainCircuit,
  LayoutDashboard,
  Users,
  Building,
  FileText,
  Settings,
  LogOut,
  Menu,
  X,
  Bell,
  Search,
  User,
  BarChart,
  CreditCard,
  UserPlus,
  MessageSquare,
  PieChart,
  Calendar,
  FolderOpen,
  Video,
  ActivitySquare,
  Handshake
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { signOut } from 'next-auth/react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session } = useSession();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Navigation based on user role
  const navigation = session?.user?.role === 'placement_officer'
    ? [
        { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
        { name: 'Students', href: '/dashboard/students', icon: Users },
        { name: 'Companies', href: '/dashboard/companies', icon: Building },
        { name: 'Jobs', href: '/dashboard/jobs', icon: FileText },
        { name: 'AI Scoring of All Students', href: '/dashboard/ai-scoring-all-students', icon: BarChart },
        { name: 'Analytics & Reports', href: '/dashboard/analytics', icon: PieChart },
        { name: 'Events Calendar', href: '/dashboard/events', icon: Calendar },
        { name: 'Industry Partners', href: '/dashboard/partners', icon: Handshake },
        { name: 'Student Feedback', href: '/dashboard/feedback', icon: MessageSquare },
        { name: 'Resource Hub', href: '/dashboard/resources', icon: FolderOpen },
        { name: 'Placement Team', href: '/dashboard/team', icon: UserPlus },
        { name: 'Notifications', href: '/dashboard/notifications', icon: Bell },
        { name: 'Alumni Network', href: '/dashboard/alumni', icon: Users },
        { name: 'Mock Interviews', href: '/dashboard/mock-interviews', icon: Video },
        { name: 'Skill Gap Analysis', href: '/dashboard/skill-gap', icon: ActivitySquare },
        { name: 'Preferences & Settings', href: '/dashboard/settings', icon: Settings },
      ]
    : [
        { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
        { name: 'AI Score Analysis', href: '/dashboard/ai-scoring', icon: BarChart },
        { name: 'Resume Builder', href: '/dashboard/resume-builder', icon: FileText },
        { name: 'Get More Credits', href: '/dashboard/buy-credit', icon: CreditCard },
        { name: 'Refer & Earn', href: '/dashboard/refer', icon: UserPlus },
        { name: 'Help Center', href: '/dashboard/contact', icon: MessageSquare },
        { name: 'My Account', href: '/dashboard/profile', icon: User },
        { name: 'My Applications', href: '/dashboard/applications', icon: FileText },
        { name: 'Preferences & Settings', href: '/dashboard/settings', icon: Settings },
      ];

  const getInitials = (name: string = '') => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile sidebar */}
      <div className="lg:hidden">
        {sidebarOpen ? (
          <div className="fixed inset-0 z-40 flex">
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)}></div>
            <div className="relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4">
              <div className="absolute top-0 right-0 -mr-12 pt-2">
                <button
                  type="button"
                  className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  onClick={() => setSidebarOpen(false)}
                >
                  <X className="h-6 w-6 text-white" />
                </button>
              </div>
              <div className="flex flex-shrink-0 items-center px-4">
                <BrainCircuit className="h-8 w-8 text-primary" />
                <span className="ml-2 text-xl font-bold text-primary">Talent Fox</span>
              </div>
              <div className="mt-5 flex flex-1 flex-col">
                <nav className="flex-1 space-y-1 px-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`
                        group flex items-center px-2 py-2 text-sm font-medium rounded-md 
                        ${pathname === item.href 
                          ? 'bg-primary text-white' 
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}
                      `}
                      onClick={() => setSidebarOpen(false)}
                    >
                      <item.icon 
                        className={`mr-3 h-5 w-5 flex-shrink-0 ${
                          pathname === item.href ? 'text-white' : 'text-gray-400 group-hover:text-gray-500'
                        }`} 
                      />
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
              <div className="flex flex-shrink-0 border-t border-gray-200 p-4">
                <Button 
                  variant="ghost" 
                  className="flex w-full items-center text-red-600 hover:bg-red-50 hover:text-red-700"
                  onClick={() => signOut({ callbackUrl: '/' })}
                >
                  <LogOut className="mr-3 h-5 w-5" />
                  Sign out
                </Button>
              </div>
            </div>
          </div>
        ) : null}
        
        <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow">
          <button
            type="button"
            className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
          <div className="flex flex-1 justify-between px-4">
            <div className="flex flex-1">
              <div className="flex w-full md:ml-0">
                <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Search className="h-5 w-5" />
                  </div>
                  <input
                    id="search-field"
                    className="block h-full w-full border-transparent py-2 pl-10 pr-3 text-gray-900 placeholder-gray-500 focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm"
                    placeholder="Search"
                    type="search"
                    name="search"
                  />
                </div>
              </div>
            </div>
            <div className="ml-4 flex items-center md:ml-6">
              <button
                type="button"
                className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <Bell className="h-6 w-6" />
              </button>
              <div className="relative ml-3">
                <div className="flex items-center">
                  <Avatar className="h-8 w-8 rounded-full bg-primary text-white">
                    <AvatarFallback>{getInitials(session?.user?.name)}</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white">
          <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
            <div className="flex flex-shrink-0 items-center px-4">
              <BrainCircuit className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold text-primary">Talent Fox</span>
            </div>
            <nav className="mt-5 flex-1 space-y-1 bg-white px-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    group flex items-center px-2 py-2 text-sm font-medium rounded-md 
                    ${pathname === item.href 
                      ? 'bg-primary text-white' 
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}
                  `}
                >
                  <item.icon 
                    className={`mr-3 h-5 w-5 flex-shrink-0 ${
                      pathname === item.href ? 'text-white' : 'text-gray-400 group-hover:text-gray-500'
                    }`} 
                  />
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex flex-shrink-0 border-t border-gray-200 p-4">
            <div className="flex items-center">
              <div>
                <Avatar className="h-9 w-9 rounded-full bg-primary text-white">
                  <AvatarFallback>{getInitials(session?.user?.name)}</AvatarFallback>
                </Avatar>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-700">{session?.user?.name}</p>
                <p className="text-xs font-medium text-gray-500">
                  {session?.user?.role === 'placement_officer' ? 'Placement Officer' : 'Student'}
                </p>
              </div>
            </div>
            <div className="ml-auto">
              <Button 
                variant="ghost" 
                size="sm"
                className="text-red-600 hover:bg-red-50 hover:text-red-700"
                onClick={() => signOut({ callbackUrl: '/' })}
              >
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow lg:hidden">
          <button
            type="button"
            className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
          <div className="flex flex-1 justify-between px-4">
            <div className="flex flex-1">
              <div className="flex w-full md:ml-0">
                <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Search className="h-5 w-5" />
                  </div>
                  <input
                    id="search-field-mobile"
                    className="block h-full w-full border-transparent py-2 pl-10 pr-3 text-gray-900 placeholder-gray-500 focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm"
                    placeholder="Search"
                    type="search"
                    name="search"
                  />
                </div>
              </div>
            </div>
            <div className="ml-4 flex items-center md:ml-6">
              <button
                type="button"
                className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <Bell className="h-6 w-6" />
              </button>
              <div className="relative ml-3">
                <div className="flex items-center">
                  <Avatar className="h-8 w-8 rounded-full bg-primary text-white">
                    <AvatarFallback>{getInitials(session?.user?.name)}</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>
          </div>
        </div>

        <main className="flex-1">
          <div className="py-6">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}