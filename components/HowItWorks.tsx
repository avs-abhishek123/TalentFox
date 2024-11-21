import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export default function HowItWorks() {
  return (
    <div id="how-it-works" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">How It Works</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Simple and effective process
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Choose your path and see how our platform works for you
          </p>
        </div>

        <div className="mt-16">
          <Tabs defaultValue="placement-officers" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-[400px] mx-auto">
              <TabsTrigger value="placement-officers">Placement Officers</TabsTrigger>
              <TabsTrigger value="students">Students</TabsTrigger>
            </TabsList>
            
            <TabsContent value="placement-officers" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-6">For Placement Officers</h3>
                  <div className="space-y-4">
                    {[
                      "Create your institution profile",
                      "Upload student database or invite students",
                      "Set placement criteria and requirements",
                      "Access AI-powered candidate matching",
                      "Track placement progress with analytics",
                      "Connect with corporate recruiters"
                    ].map((step, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="mt-8">Get Started</Button>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/5 rounded-2xl -rotate-6"></div>
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Placement Officer Dashboard"
                    className="relative rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="students" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-6">For Students</h3>
                  <div className="space-y-4">
                    {[
                      "Create your student profile",
                      "Upload your existing resume",
                      "Get AI-powered resume enhancement",
                      "Access skill gap analysis",
                      "Apply to matching opportunities",
                      "Track application status"
                    ].map((step, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="mt-8">Create Profile</Button>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/5 rounded-2xl rotate-6"></div>
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Student Dashboard"
                    className="relative rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}