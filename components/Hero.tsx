import { Button } from "@/components/ui/button";
import { GraduationCap, Briefcase, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white pt-16">
      <div className="relative pt-16 pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24">
          <div className="relative z-10 mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="relative">
              <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                AI-Powered Career Matching for{" "}
                <span className="text-primary">Tomorrow's Talent</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Revolutionizing campus placements with AI. We help placement officers find the perfect candidates and empower students to create standout resumes that get noticed.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Button size="lg" className="gap-2">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
              <div className="mt-10 flex items-center gap-8">
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  <span className="text-sm text-gray-600">10,000+ Students Placed</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="h-6 w-6 text-primary" />
                  <span className="text-sm text-gray-600">500+ Partner Companies</span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mt-20 lg:mt-0">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-64 w-64 rounded-full bg-primary/10 blur-3xl"></div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Students collaborating"
              className="relative rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}