import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    content: "Talent Fox has transformed our placement process entirely. The AI-driven insights and tools have helped us achieve a 40% increase in successful placements. It’s a game-changer for our students and recruiters alike.",
    author: "Dr. Neha B. Upadhayay",
    role: "Deputy Head of Placements, IIIT Lucknow",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    content: "The AI-powered resume builder is simply incredible! It helped me craft a standout resume that not only caught recruiters' attention but also secured me multiple interviews. I can't thank Talent Fox enough!",
    author: "Abhishek Ranjan",
    role: "Computer Science Graduate, NIT Rourkela",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    content: "Talent Fox has been a game-changer for our campus placements. Our students are now securing offers from top companies, and the AI-powered tools have simplified the entire process for our placement team.",
    author: "Dr. Ramesh Iyer",
    role: "Dean of Placements, Bright Horizons Institute, Delhi",
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
              <CardContent className="pt-12 pb-8 px-10">
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