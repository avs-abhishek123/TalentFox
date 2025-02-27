"use client";

import { Button } from "@/components/ui/button";
import { GraduationCap, Briefcase, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

interface GlassyObjectProps {
  className: string;
  animate: {
    x: number[];
    y: number[];
    scale: number[];
  };
  transition: {
    duration: number;
    repeat: number;
    ease: string;
    delay?: number;
  };
}

const GlassyObject = ({ className, animate, transition }: GlassyObjectProps) => (
  <motion.div
    className={`absolute rounded-full bg-[#03c006] mix-blend-multiply filter blur-3xl opacity-20 ${className}`}
    animate={animate}
    initial={{ x: animate.x[0], y: animate.y[0], scale: animate.scale[0] }}
    transition={{
      ...transition,
      repeatType: "reverse",
    }}
  />
);

const AnimatedButton = () => {
  return (
    <Button
      size="lg"
      className="group relative bg-[#03c006] hover:bg-[#03c006]/90 transition-all duration-300 overflow-hidden"
    >
      <span className="flex items-center gap-2 transition-all duration-300 group-hover:-translate-x-[150%]">
        Get Started <ArrowRight className="h-4 w-4" />
      </span>
      <span className="absolute flex items-center inset-0 justify-center translate-x-[150%] group-hover:translate-x-0 transition-transform duration-300">
        <ArrowRight className="h-5 w-5 animate-[wiggle_1s_ease-in-out_infinite]" />
      </span>
      {/* Diagonal shimmer effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute h-[300%] w-[1px] bg-gradient-to-b from-transparent via-white to-transparent -skew-x-12 opacity-10 animate-[shimmer_2s_infinite_linear]"
          style={{
            left: '50%',
            top: '-100%',
          }}
        />
      </div>
    </Button>
  );
};

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white pt-16">
      {/* Animated Glassy Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large floating orb */}
        <GlassyObject
          className="w-[400px] h-[400px] -left-24 -top-24"  // Increased size
          animate={{
            x: [0, 30, 0],
            y: [0, 40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Medium floating orb */}
        <GlassyObject
          className="w-[400px] h-[400px] right-1/4 top-1/4"  // Increased size
          animate={{
            x: [0, -20, 0],
            y: [0, 30, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        
        {/* Small floating orb */}
        <GlassyObject
          className="w-[300px] h-[300px] right-20 bottom-32"  // Increased size
          animate={{
            x: [0, 25, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        
        {/* Extra small floating orb */}
        <GlassyObject
          className="w-[200px] h-[200px] left-1/3 bottom-20"  // Increased size
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative pt-24 pb-32">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24">  {/* Increased max-width */}
          <div className="relative z-10 mx-auto max-w-3xl lg:mx-0 lg:max-w-none">  {/* Increased max-width */}
            <div className="relative">
              <motion.h1 
                className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                AI-Powered Career Matching for{" "}
                <span className="text-[#03c006]">Tomorrow's Talent</span>
              </motion.h1>
              <motion.p 
                className="mt-6 text-lg leading-8 text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Revolutionizing campus placements with AI. We help placement officers find the perfect candidates and empower students to create standout resumes that get noticed.
              </motion.p>
              <motion.div 
                className="mt-10 flex items-center gap-x-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Link href="/auth/signup">
                  <AnimatedButton />
                </Link>
                <Link href="#features">
                  <Button variant="outline" size="lg">Learn More</Button>
                </Link>
              </motion.div>
              <motion.div 
                className="mt-10 flex items-center gap-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-6 w-6 text-[#03c006]" />
                  <span className="text-sm text-gray-600">10,000+ Students Placed</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="h-6 w-6 text-[#03c006]" />
                  <span className="text-sm text-gray-600">50+ Partner Universities</span>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="relative mt-20 lg:mt-0">
            <motion.div 
              className="relative z-10"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative">
                <div className="absolute -inset-4">
                  <div className="w-full h-full mx-auto rotate-2 bg-gradient-to-r from-[#03c006]/20 to-[#03c006]/10 blur-2xl rounded-2xl">
                  </div>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"  // Changed to placeholder image
                  alt="Students collaborating"
                  className="relative rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}