'use client';

import { useState } from 'react';
import { 
  CreditCard, 
  CheckCircle2, 
  Shield, 
  Star,
  Zap,
  ArrowRight,
  Calendar,
  Clock,
  Gift
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export default function BuyCreditPage() {
  const [selectedPlan, setSelectedPlan] = useState('standard');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  
  // Pricing plans
  const plans = [
    {
      id: 'basic',
      name: 'Basic',
      credits: 20,
      price: 499,
      discountedPrice: 499,
      features: [
        'Resume analysis',
        'Skill matching',
        'Improvement suggestions',
        'Valid for 30 days'
      ],
      popular: false
    },
    {
      id: 'standard',
      name: 'Standard',
      credits: 50,
      price: 999,
      discountedPrice: 899,
      features: [
        'All Basic features',
        'Resume builder access',
        'AI resume enhancement',
        'Valid for 60 days',
        '10% discount on renewal'
      ],
      popular: true
    },
    {
      id: 'premium',
      name: 'Premium',
      credits: 100,
      price: 1799,
      discountedPrice: 1499,
      features: [
        'All Standard features',
        'Unlimited resume builder access',
        'Priority support',
        'Valid for 90 days',
        '20% discount on renewal'
      ],
      popular: false
    }
  ];
  
  // Get selected plan details
  const currentPlan = plans.find(plan => plan.id === selectedPlan) || plans[0];
  
  const handleApplyCoupon = () => {
    if (couponCode.toUpperCase() === 'TALENTFOX10') {
      setCouponApplied(true);
    }
  };
  
  return (
    <div className="p-1 sm:p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Get More Creditss</h1>
        <p className="text-muted-foreground">Purchase credits to analyze your resumes against job descriptions</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column - Current Usage */}
        <div className="md:col-span-1 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Current Plan</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Basic Plan</h3>
                  <p className="text-sm text-muted-foreground">Valid till May 15, 2025</p>
                </div>
                <Badge variant="outline" className="bg-primary/10 text-primary">
                  Active
                </Badge>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Credits Remaining</span>
                  <span className="text-sm font-medium">12 / 20</span>
                </div>
                <Progress value={60} className="h-2" />
                <p className="text-xs text-muted-foreground mt-1">
                  8 credits used out of 20
                </p>
              </div>
              
              <Separator />
              
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Recent Activity</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 text-muted-foreground mr-2" />
                      <span>Frontend Developer JD</span>
                    </div>
                    <span className="text-muted-foreground">-1 credit</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 text-muted-foreground mr-2" />
                      <span>AI Resume Enhancement</span>
                    </div>
                    <span className="text-muted-foreground">-2 credits</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 text-muted-foreground mr-2" />
                      <span>Software Engineer JD</span>
                    </div>
                    <span className="text-muted-foreground">-1 credit</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Need Help?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Have questions about our plans or need assistance? Our support team is here to help!
              </p>
              <Button variant="outline" className="w-full">
                Contact Support
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Gift className="h-5 w-5 text-primary mr-2" />
                Referral Program
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Refer a friend and both of you get 10 free credits when they sign up!
              </p>
              <Button variant="outline" className="w-full">
                <ArrowRight className="mr-2 h-4 w-4" />
                Go to Referral Page
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Plans and Checkout */}
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Choose a Plan</CardTitle>
              <CardDescription>
                Select the best plan for your needs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {plans.map((plan) => (
                  <div 
                    key={plan.id}
                    className={`border rounded-lg p-4 cursor-pointer relative transition-all ${
                      selectedPlan === plan.id 
                        ? 'border-primary bg-primary/5 shadow-sm' 
                        : 'hover:border-primary/50'
                    }`}
                    onClick={() => setSelectedPlan(plan.id)}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 right-4">
                        <Badge className="bg-primary">Popular</Badge>
                      </div>
                    )}
                    <div className="flex items-center mb-1">
                      <div className={`w-4 h-4 rounded-full border mr-2 flex items-center justify-center ${
                        selectedPlan === plan.id ? 'border-primary' : 'border-muted'
                      }`}>
                        {selectedPlan === plan.id && (
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        )}
                      </div>
                      <h3 className="font-medium">{plan.name}</h3>
                    </div>
                    
                    <div className="mt-3 mb-2">
                      <div className="text-2xl font-bold">₹{plan.discountedPrice}</div>
                      {plan.price !== plan.discountedPrice && (
                        <div className="text-sm text-muted-foreground line-through">₹{plan.price}</div>
                      )}
                    </div>
                    
                    <div className="text-sm font-medium flex items-center mb-3">
                      <Zap className="h-4 w-4 text-primary mr-1" />
                      {plan.credits} Credits
                    </div>
                    
                    <ul className="space-y-1">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="text-sm flex items-start">
                          <CheckCircle2 className="h-3 w-3 text-primary mr-2 mt-1" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="card">
            <Card>
              <CardHeader>
                <CardTitle>Payment Method</CardTitle>
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="card" onClick={() => setPaymentMethod('card')}>
                    <CreditCard className="h-4 w-4 mr-2" />
                    Credit Card
                  </TabsTrigger>
                  <TabsTrigger value="upi" onClick={() => setPaymentMethod('upi')}>
                    <Zap className="h-4 w-4 mr-2" />
                    UPI
                  </TabsTrigger>
                  <TabsTrigger value="netbanking" onClick={() => setPaymentMethod('netbanking')}>
                    <Building className="h-4 w-4 mr-2" />
                    Net Banking
                  </TabsTrigger>
                </TabsList>
              </CardHeader>
              <CardContent>
                <TabsContent value="card" className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input id="cardNumber" placeholder="1234 5678 9012 3456" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="expiryDate">Expiry Date</Label>
                      <Input id="expiryDate" placeholder="MM/YY" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="cvv">CVV</Label>
                      <Input id="cvv" placeholder="123" className="mt-1" />
                    </div>
                    <div className="col-span-2">
                      <Label htmlFor="cardName">Cardholder Name</Label>
                      <Input id="cardName" placeholder="John Doe" className="mt-1" />
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="upi" className="space-y-4">
                  <div>
                    <Label htmlFor="upiId">UPI ID</Label>
                    <Input id="upiId" placeholder="yourname@upi" className="mt-1" />
                    <p className="text-xs text-muted-foreground mt-2">Enter your UPI ID to complete the payment</p>
                  </div>
                </TabsContent>
                <TabsContent value="netbanking" className="space-y-4">
                  <div>
                    <Label htmlFor="bank">Select Bank</Label>
                    <Select>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select Bank" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sbi">State Bank of India</SelectItem>
                        <SelectItem value="hdfc">HDFC Bank</SelectItem>
                        <SelectItem value="icici">ICICI Bank</SelectItem>
                        <SelectItem value="axis">Axis Bank</SelectItem>
                        <SelectItem value="kotak">Kotak Mahindra Bank</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </TabsContent>

                <div className="mt-6 border-t pt-4">
                  <div className="flex items-center justify-between mb-4">
                    <Label htmlFor="couponCode">Have a coupon code?</Label>
                    <div className="flex">
                      <Input 
                        id="couponCode"
                        placeholder="Enter code"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        className="w-auto mr-2"
                        disabled={couponApplied}
                      />
                      <Button 
                        variant="outline" 
                        onClick={handleApplyCoupon}
                        disabled={!couponCode || couponApplied}
                      >
                        {couponApplied ? "Applied" : "Apply"}
                      </Button>
                    </div>
                  </div>
                  
                  {couponApplied && (
                    <div className="mb-4 p-2 bg-green-50 border border-green-200 rounded-md flex items-center">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                      <p className="text-sm text-green-700">Coupon "TALENTFOX10" applied - 10% off!</p>
                    </div>
                  )}
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Plan Price</span>
                      <span>₹{currentPlan.discountedPrice}</span>
                    </div>
                    {couponApplied && (
                      <div className="flex justify-between text-green-600">
                        <span>Coupon Discount</span>
                        <span>-₹{Math.round(currentPlan.discountedPrice * 0.1)}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span>GST (18%)</span>
                      <span>₹{Math.round(currentPlan.discountedPrice * (couponApplied ? 0.9 : 1) * 0.18)}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-bold">
                      <span>Total Amount</span>
                      <span>₹{Math.round(currentPlan.discountedPrice * (couponApplied ? 0.9 : 1) * 1.18)}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col">
                <Button className="w-full mb-4">
                  Complete Purchase
                </Button>
                <div className="flex items-center justify-center text-xs text-muted-foreground">
                  <Shield className="h-3 w-3 mr-1" />
                  <span>Secure payment processed by Razorpay</span>
                </div>
              </CardFooter>
            </Card>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

function Building(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  );
}