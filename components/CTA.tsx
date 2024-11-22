import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const AnimatedButton = () => {
  return (
    <Button
      size="lg"
      className="group relative bg-white border border-black hover:bg-white/90 transition-all duration-300 overflow-hidden"
    >
      <span className="flex items-center gap-2 text-primary transition-all duration-300 group-hover:-translate-x-[150%]">
        Get Started <ArrowRight className="h-4 w-4" />
      </span>
      <span className="absolute flex items-center inset-0 justify-center translate-x-[150%] group-hover:translate-x-0 transition-transform duration-300">
        <ArrowRight className="h-5 w-5 animate-[wiggle_1s_ease-in-out_infinite] text-black" />
      </span>
      {/* Diagonal green shimmer effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute h-[300%] w-[1px] bg-gradient-to-b from-transparent via-green-100 to-transparent -skew-x-12 opacity-20 animate-[shimmer_2s_infinite_linear]"
          style={{
            left: '50%',
            top: '-100%',
          }}
        />
      </div>
    </Button>
  );
};


export default function CTA() {
  return (
    <div className="relative isolate overflow-hidden bg-primary py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to transform your placement process?
            </h2>
            <p className="mt-4 text-lg leading-8 text-white/90">
              Join thousands of institutions and students already benefiting from our AI-powered platform. Get started today and see the difference.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
            <AnimatedButton />

              <Button variant="outline" size="lg" className="border-black text-primary hover:text-primary">
                Contact Sales
              </Button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
            <div className="flex flex-col">
              <dt className="text-base leading-7 text-white/95">Success Rate</dt>
              <dd className="text-3xl font-bold leading-9 tracking-tight text-white">90%</dd>
              <dd className="mt-3 text-sm leading-6 text-white/95">Of students find relevant opportunities</dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-base leading-7 text-white/95">Time Saved</dt>
              <dd className="text-3xl font-bold leading-9 tracking-tight text-white">60%</dd>
              <dd className="mt-3 text-sm leading-6 text-white/95">Reduction in placement process time</dd>
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