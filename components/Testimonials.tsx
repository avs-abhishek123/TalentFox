import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    content: "This platform has revolutionized our placement process. We've seen a 40% increase in successful placements since implementing Talent Fox.",
    author: "Dr. Sarah Chen",
    role: "Head of Placements, Tech University",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    content: "The AI-powered resume enhancement tool helped me create a professional resume that got me multiple interviews. Highly recommended!",
    author: "James Wilson",
    role: "Computer Science Graduate",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    content: "As a recruiter, finding the right candidates has never been easier. The matching algorithm saves us countless hours in the screening process.",
    author: "Lisa Thompson",
    role: "HR Director, TechCorp",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  }
];

export default function Testimonials() {
  return (
    <div id="testimonials" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by leading institutions
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            See what our users have to say about their experience with Talent Fox AI
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative bg-white w-[400px]">
              <CardContent className="pt-10 pb-8 px-10">
                <Quote className="absolute top-3 left-3 h-8 w-8 text-primary/20" />
                <p className="text-gray-700 mb-6">{testimonial.content}</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}