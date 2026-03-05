import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, ArrowRight, CheckCircle2 } from "lucide-react";
import { useSubmitContact } from "@/hooks/use-contact";
import { useToast } from "@/hooks/use-toast";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const { toast } = useToast();
  const submitContact = useSubmitContact();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      dealership: "",
      oemBrands: "",
      email: "",
      phone: "",
    },
  });

  function onSubmit(data: InsertContact) {
    submitContact.mutate(data, {
      onSuccess: () => {
        setIsSubmitted(true);
        toast({
          title: "Request Received!",
          description: "We'll be in touch shortly to schedule your call.",
        });
        form.reset();
      },
      onError: (error) => {
        toast({
          variant: "destructive",
          title: "Submission Failed",
          description: error.message,
        });
      },
    });
  }

  if (isSubmitted) {
    return (
      <div className="bg-card/50 backdrop-blur-xl border border-border rounded-3xl p-8 md:p-12 text-center shadow-2xl flex flex-col items-center justify-center min-h-[400px]">
        <div className="w-20 h-20 bg-primary/20 text-primary rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(245,158,11,0.3)]">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-3xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
          You're All Set!
        </h3>
        <p className="text-muted-foreground text-lg max-w-md mx-auto">
          Thanks for reaching out. A warranty reimbursement specialist will contact you shortly to review your potential.
        </p>
        <Button 
          variant="outline" 
          onClick={() => setIsSubmitted(false)}
          className="mt-8 border-border hover:bg-muted text-foreground"
        >
          Submit another request
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-card/50 backdrop-blur-xl border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="mb-8 text-center sm:text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-8">
        <div>
          <h3 className="text-2xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
            Want us to build your submission package?
          </h3>
          <p className="text-muted-foreground mt-2">
            Get an exact estimate on your potential reimbursement bump.
          </p>
        </div>
        <Button 
          variant="secondary" 
          className="shrink-0 bg-blue-600/20 text-blue-400 hover:bg-blue-600/30 hover:text-blue-300 border border-blue-500/30 rounded-full px-6 py-6"
        >
          Book a 15-minute call
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-muted-foreground">Full Name</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="John Doe" 
                      className="bg-background/50 border-white/10 focus:border-primary/50 focus:ring-primary/20 h-12 rounded-xl text-base"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="dealership"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-muted-foreground">Dealership Name</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="ABC Motors" 
                      className="bg-background/50 border-white/10 focus:border-primary/50 focus:ring-primary/20 h-12 rounded-xl text-base"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-muted-foreground">Work Email</FormLabel>
                  <FormControl>
                    <Input 
                      type="email" 
                      placeholder="john@abcmotors.com" 
                      className="bg-background/50 border-white/10 focus:border-primary/50 focus:ring-primary/20 h-12 rounded-xl text-base"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-muted-foreground">Direct Phone</FormLabel>
                  <FormControl>
                    <Input 
                      type="tel" 
                      placeholder="(555) 123-4567" 
                      className="bg-background/50 border-white/10 focus:border-primary/50 focus:ring-primary/20 h-12 rounded-xl text-base"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="oemBrands"
              render={({ field }) => (
                <FormItem className="md:col-span-2">
                  <FormLabel className="text-muted-foreground">OEM Brands (If known)</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Ford, Toyota, Honda..." 
                      className="bg-background/50 border-white/10 focus:border-primary/50 focus:ring-primary/20 h-12 rounded-xl text-base"
                      {...field} 
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button 
            type="submit" 
            disabled={submitContact.isPending}
            className="w-full h-14 text-lg font-bold rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black shadow-[0_0_20px_rgba(245,158,11,0.25)] hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] transition-all duration-300"
          >
            {submitContact.isPending ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Submitting Request...
              </>
            ) : (
              <>
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
