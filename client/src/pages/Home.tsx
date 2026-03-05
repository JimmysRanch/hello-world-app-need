import { motion } from "framer-motion";
import { 
  CheckCircle2, ArrowRight, Calendar, 
  BarChart3, FileText, Database, Scale, Zap, ShieldCheck 
} from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground relative selection:bg-amber-500/30">
      {/* Global Background Glows */}
      <div className="fixed inset-0 glow-bg-blue opacity-50 pointer-events-none z-0" />
      <div className="fixed inset-0 glow-bg-gold opacity-30 pointer-events-none z-0 translate-y-1/2" />
      
      {/* Navigation Header */}
      <header className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-8 h-8 text-amber-500" />
            <span className="font-bold text-xl tracking-tight text-white" style={{ fontFamily: 'var(--font-display)' }}>
              WARRANTY <span className="text-amber-500">REIMBURSEMENT</span>
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">How it Works</a>
            <a href="#what-you-get" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">What You Get</a>
            <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">Pricing</a>
            <a href="#faq" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">FAQ</a>
          </nav>

          <Button 
            className="hidden sm:flex bg-white/10 text-white hover:bg-white/20 border border-white/10 rounded-full"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Started
          </Button>
        </div>
      </header>

      <main className="relative z-10 pt-20">
        
        {/* HERO SECTION */}
        <section className="min-h-[90vh] flex flex-col justify-center py-20 overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Left Content */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="lg:col-span-7 flex flex-col gap-6"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium w-fit">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  Maximize Fixed Ops Profitability
                </div>
                
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] text-white" style={{ fontFamily: 'var(--font-display)' }}>
                  Get Paid the Warranty Reimbursement <br />
                  <span className="text-gradient-gold">You've Already Earned</span>
                </h1>
                
                <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                  We help you file the submission the right way — fast, clean, and compliant — so you capture the reimbursement your state rules allow.
                </p>

                <div className="flex flex-col gap-3 mt-2">
                  {[
                    "No upfront costs - simple flat fee",
                    "Compliant with complex state laws",
                    "Requires minimal dealership staff time",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-amber-500" />
                      </div>
                      <span className="text-slate-300 font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <Button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="h-14 px-8 text-lg font-bold rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black shadow-[0_0_20px_rgba(245,158,11,0.25)] hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] transition-all duration-300"
                  >
                    Get Started (15-Min Call)
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="h-14 px-8 text-lg font-bold rounded-xl border-white/20 hover:bg-white/5 text-white backdrop-blur-sm"
                  >
                    Request a Quick Estimate
                  </Button>
                </div>

                <div className="flex flex-wrap items-center gap-4 sm:gap-8 mt-8 pt-8 border-t border-white/10">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Trusted By Top Brands</span>
                    <div className="flex items-center gap-6 text-slate-400 font-bold opacity-70">
                      <span>FORD</span>
                      <span>TOYOTA</span>
                      <span>HONDA</span>
                      <span>CHEVROLET</span>
                      <span>JEEP</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Graphic */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="lg:col-span-5 relative"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-blue-500/20 blur-3xl -z-10 rounded-[3rem]" />
                <div className="bg-card/40 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 shadow-2xl relative overflow-hidden group hover:border-amber-500/30 transition-colors duration-500">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-amber-500 to-transparent opacity-50" />
                  
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Potential Reimbursement</h3>
                    <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                      <BarChart3 className="w-5 h-5 text-green-400" />
                    </div>
                  </div>

                  <div className="text-6xl sm:text-7xl font-bold text-white tracking-tighter mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                    +$250k<span className="text-amber-500">+</span>
                  </div>
                  <p className="text-slate-400 font-medium mb-12">Average typical increase for franchised dealers.</p>

                  {/* Mock Chart */}
                  <div className="h-48 flex items-end gap-4 relative">
                    {/* Grid lines */}
                    <div className="absolute inset-0 flex flex-col justify-between opacity-20 pointer-events-none">
                      <div className="border-b border-dashed border-white w-full" />
                      <div className="border-b border-dashed border-white w-full" />
                      <div className="border-b border-dashed border-white w-full" />
                      <div className="border-b border-dashed border-white w-full" />
                    </div>

                    <div className="w-1/2 relative group h-24">
                      <div className="absolute -top-8 w-full text-center text-sm font-semibold text-slate-400">Baseline</div>
                      <div className="w-full h-full bg-slate-800 rounded-t-xl border border-white/5 border-b-0" />
                    </div>
                    
                    <div className="w-1/2 relative group h-full">
                      <div className="absolute -top-10 w-full text-center text-sm font-bold text-amber-400">Optimized</div>
                      <div className="absolute inset-0 bg-gradient-to-t from-amber-600 to-amber-400 rounded-t-xl opacity-90 shadow-[0_0_30px_rgba(245,158,11,0.3)]">
                        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] animate-[shimmer_3s_linear_infinite]" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex justify-between text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    <span>Current Rate</span>
                    <span>State Max Rate</span>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* WHY THIS MATTERS SECTION */}
        <section id="how-it-works" className="py-24 bg-black/40 border-y border-white/5 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                Warranty reimbursement is a hidden <span className="text-amber-500">profit lever</span>.
              </h2>
              <p className="text-lg text-muted-foreground">
                Many dealerships settle for default OEM reimbursement rates. State laws allow you to charge retail rates for warranty work. We bridge that gap without disrupting your service drive.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Database,
                  title: "Data-Driven Approach",
                  desc: "We extract RO data directly from your DMS to build an undeniable case file."
                },
                {
                  icon: Scale,
                  title: "Designed Around State Law",
                  desc: "Every state has different statutes. We tailor your submission perfectly to your local laws."
                },
                {
                  icon: Zap,
                  title: "Minimizes Manual Admin",
                  desc: "Your service managers are busy. We handle the paperwork, they keep writing tickets."
                }
              ].map((feature, i) => (
                <div key={i} className="bg-card/30 border border-white/10 rounded-2xl p-8 hover:bg-card/50 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT YOU GET SECTION */}
        <section id="what-you-get" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                  Exactly what you get for <span className="text-gradient-gold">$7,000</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  No hidden fees, no percentage of your uplift. Just a clean, flat fee for an expert, done-for-you submission package.
                </p>

                <div className="space-y-4">
                  {[
                    "Complete warranty reimbursement review",
                    "Repair Order (RO) sample analysis",
                    "Full submission package preparation",
                    "One complete formal submission to OEM",
                    "Follow-up support and guidance"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 bg-white/5 border border-white/5 rounded-xl p-4">
                      <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-amber-500" />
                      </div>
                      <span className="text-white font-medium text-lg">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-500 via-amber-500 to-transparent opacity-30" />
                
                <div className="space-y-12">
                  {[
                    { step: "Week 1", title: "Data Collection", icon: Database },
                    { step: "Week 2", title: "Analysis & Package Creation", icon: FileText },
                    { step: "Week 3", title: "Submission & Follow-up", icon: ArrowRight }
                  ].map((phase, i) => (
                    <div key={i} className="relative flex gap-6 pl-16">
                      <div className="absolute left-0 top-0 w-14 h-14 rounded-full bg-card border-2 border-white/20 flex items-center justify-center z-10 shadow-lg">
                        <phase.icon className="w-6 h-6 text-white/70" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-amber-500 uppercase tracking-wider mb-1">{phase.step}</div>
                        <h3 className="text-2xl font-bold text-white">{phase.title}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING CTA */}
        <section id="pricing" className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-slate-900 to-black border border-amber-500/30 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-[0_0_50px_rgba(245,158,11,0.1)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.15),transparent_50%)]" />
              
              <h2 className="text-2xl font-semibold text-muted-foreground uppercase tracking-widest mb-4">Flat Fee Pricing</h2>
              <div className="text-6xl sm:text-7xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                $7,000
              </div>
              <p className="text-xl text-slate-300 mb-8 max-w-lg mx-auto">
                One store = One full submission package. Start maximizing your revenue today.
              </p>
              
              <Button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="h-16 px-10 text-xl font-bold rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black shadow-[0_0_20px_rgba(245,158,11,0.25)] hover:shadow-[0_0_40px_rgba(245,158,11,0.5)] transition-all duration-300"
              >
                Start my submission
                <ArrowRight className="w-6 h-6 ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section id="faq" className="py-24 bg-black/40 border-t border-white/5">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                Frequently Asked Questions
              </h2>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {[
                {
                  q: "Is this legal / allowed by the OEM?",
                  a: "Yes. State franchise laws protect dealers and mandate that OEMs pay retail rates for warranty work, provided the proper submission process is followed."
                },
                {
                  q: "Does this take my team a ton of time?",
                  a: "No. Our process is designed to be turnkey. We pull the data, analyze it, and build the package. Your management team simply reviews and signs off."
                },
                {
                  q: "Parts or labor first?",
                  a: "We typically analyze both to see where your greatest uplift potential lies. The strategy depends on your specific dealership's mix and state statutes."
                },
                {
                  q: "How long until money shows up?",
                  a: "Once submitted, the OEM typically has 30 to 45 days to respond and approve the new rate depending on your state. You'll see the increased revenue on subsequent warranty claims."
                }
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="bg-card/50 border border-white/10 rounded-xl px-6 data-[state=open]:border-amber-500/30 transition-colors">
                  <AccordionTrigger className="text-lg font-semibold text-white hover:text-amber-400 hover:no-underline py-6">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* FOOTER / CONTACT SECTION */}
        <section id="contact" className="py-24 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ContactForm />
          </div>
        </section>

      </main>

      {/* Simple Footer */}
      <footer className="border-t border-white/5 py-8 text-center text-slate-500 text-sm">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-amber-600" />
            <span className="font-semibold text-white tracking-wider" style={{ fontFamily: 'var(--font-display)' }}>WARRANTY REIMBURSEMENT</span>
          </div>
          <p>© {new Date().getFullYear()} Warranty Reimbursement Solutions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
