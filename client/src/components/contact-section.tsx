import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, Clock, Send } from "lucide-react";
import { insertContactSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import type { InsertContact } from "@shared/schema";

export default function ContactSection() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest("POST", "/api/contacts", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Thank you for your message!",
        description: "We will get back to you soon.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contacts"] });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    contactMutation.mutate(data);
  };

  const contactInfo = [
    { icon: Phone, label: "Call Us", value: "(555) 123-4567" },
    { icon: Mail, label: "Email Us", value: "contact@dsxedge.com" },
    { icon: Clock, label: "Available", value: "24/7 Support" },
  ];

  return (
    <section id="contact" className="py-24 section-dark relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
      </div>
      <div className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-blue-400/30 bg-blue-500/10 text-blue-200 text-sm font-semibold mb-4 tracking-wide uppercase">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">
            Let DSX map your first <span className="accent-serif text-orange-300">automation workflow.</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Tell us how your business receives calls. We'll show you exactly what can be automated —
            no pitch, no platform demo. A diagnostic conversation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="card-glass rounded-2xl p-8">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-2">Send us a message</h3>
                <div className="flex items-center gap-2 text-sm text-emerald-300">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  <span>Typically respond within 2 hours</span>
                </div>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-200 font-medium">First Name</FormLabel>
                          <FormControl>
                            <Input data-testid="input-first-name" {...field} className="rounded-xl bg-white/5 border-white/10 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-blue-400/20 h-11" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-200 font-medium">Last Name</FormLabel>
                          <FormControl>
                            <Input data-testid="input-last-name" {...field} className="rounded-xl bg-white/5 border-white/10 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-blue-400/20 h-11" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-200 font-medium">Email</FormLabel>
                        <FormControl>
                          <Input data-testid="input-email" type="email" {...field} className="rounded-xl bg-white/5 border-white/10 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-blue-400/20 h-11" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-200 font-medium">Company</FormLabel>
                        <FormControl>
                          <Input data-testid="input-company" {...field} className="rounded-xl bg-white/5 border-white/10 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-blue-400/20 h-11" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-200 font-medium">Message</FormLabel>
                        <FormControl>
                          <Textarea
                            data-testid="input-message"
                            {...field}
                            rows={4}
                            className="rounded-xl bg-white/5 border-white/10 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-blue-400/20 resize-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    data-testid="button-submit-contact"
                    type="submit"
                    disabled={contactMutation.isPending}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 rounded-xl h-12 text-base font-semibold group"
                  >
                    {contactMutation.isPending ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Send Message
                        <Send className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </span>
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Get in touch</h3>
              <p className="text-slate-300 leading-relaxed">
                Our team of experts is here to help you find the perfect solution for your business.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl card-glass hover:border-blue-400/40 hover:bg-white/[0.07] transition-all duration-200">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center flex-shrink-0">
                    <info.icon className="text-white h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 font-medium">{info.label}</div>
                    <div className="text-white font-semibold">{info.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-orange-500 rounded-2xl p-6 text-white">
              <h4 className="font-bold text-lg mb-2">Innovation Starts Here</h4>
              <p className="text-white/80 text-sm leading-relaxed">
                Join 500+ businesses with intelligent communications powered by DSX. 12 years of innovation, one conversation away.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      </div>
    </section>
  );
}
