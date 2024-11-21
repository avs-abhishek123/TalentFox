import { 
  Search, 
  FileText, 
  Zap, 
  Target, 
  BarChart, 
  UserCheck 
} from "lucide-react";

const features = [
  {
    name: "Smart Candidate Matching",
    description: "AI-powered matching algorithm connects the right students with the right opportunities based on skills, interests, and company requirements.",
    icon: Target,
  },
  {
    name: "Resume Enhancement",
    description: "Advanced AI tools help students create professional resumes that highlight their strengths and stand out to recruiters.",
    icon: FileText,
  },
  {
    name: "Instant Skills Analysis",
    description: "Real-time assessment of student profiles against job requirements to identify perfect matches and skill gaps.",
    icon: Zap,
  },
  {
    name: "Smart Search",
    description: "Powerful search capabilities help placement officers quickly find candidates based on multiple criteria.",
    icon: Search,
  },
  {
    name: "Analytics Dashboard",
    description: "Comprehensive analytics and insights for placement officers to track placement progress and success rates.",
    icon: BarChart,
  },
  {
    name: "Profile Optimization",
    description: "AI-driven suggestions to help students optimize their profiles for better visibility to recruiters.",
    icon: UserCheck,
  },
];

export default function Features() {
  return (
    <div id="features" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Features</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need for successful placements
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our AI-powered platform streamlines the placement process for both placement officers and students.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}