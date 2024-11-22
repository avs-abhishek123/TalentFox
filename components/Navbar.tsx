"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, BrainCircuit } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <BrainCircuit className="h-8 w-8 text-primary" />
            <span className="ml-2 text-xl font-bold text-primary">Talent Fox</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-600 hover:text-primary">Features</Link>
            <Link href="#how-it-works" className="text-gray-600 hover:text-primary">How it Works</Link>
            <Link href="#testimonials" className="text-gray-600 hover:text-primary">Testimonials</Link>
            <Button variant="outline" className="mr-2">Sign In</Button>
            <Button>Get Started</Button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <Link href="#features" 
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary">
                Features
              </Link>
              <Link href="#how-it-works"
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary">
                How it Works
              </Link>
              <Link href="#testimonials"
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary">
                Testimonials
              </Link>
              <div className="px-3 py-2 space-y-2">
                <Button variant="outline" className="w-full">Sign In</Button>
                <Button className="w-full">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}