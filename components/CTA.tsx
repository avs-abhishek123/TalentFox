import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <div className="relative isolate overflow-hidden bg-primary py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to transform your placement process?
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Join thousands of institutions and students already benefiting from our AI-powered platform. Get started today and see the difference.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <Button variant="secondary" size="lg" className="gap-2">
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="text-white hover:text-primary">
                Contact Sales
              </Button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
            <div className="flex flex-col">
              <dt className="text-base leading-7 text-gray-300">Success Rate</dt>
              <dd className="text-3xl font-bold leading-9 tracking-tight text-white">90%</dd>
              <dd className="mt-3 text-sm leading-6 text-gray-300">Of students find relevant opportunities</dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-base leading-7 text-gray-300">Time Saved</dt>
              <dd className="text-3xl font-bold leading-9 tracking-tight text-white">60%</dd>
              <dd className="mt-3 text-sm leading-6 text-gray-300">Reduction in placement process time</dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
        <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-primary to-primary/30 opacity-30"></div>
      </div>
    </div>
  );
}