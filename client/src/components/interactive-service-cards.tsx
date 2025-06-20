
import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Database, Headphones, ChevronRight, Check } from "lucide-react";
import { useLocation } from "wouter";

const services = [
  {
    id: "voice",
    title: "DSX Voice",
    subtitle: "Advanced VoIP Solutions",
    icon: Phone,
    description: "Transform your business communication with our cutting-edge VoIP technology",
    benefits: ["Up to 60% cost savings", "Crystal clear call quality", "Advanced call routing"],
    href: "/dsx-voice",
    color: "from-blue-500 to-blue-600"
  },
  {
    id: "data", 
    title: "DSX Data",
    subtitle: "Smart Data Management",
    icon: Database,
    description: "Streamline your data operations with our intelligent management platform",
    benefits: ["Real-time analytics", "Secure cloud storage", "Automated workflows"],
    href: "/dsx-data",
    color: "from-orange-500 to-red-500"
  },
  {
    id: "live",
    title: "DSX Live", 
    subtitle: "AI-Powered Contact Center",
    icon: Headphones,
    description: "Elevate customer engagement with our hybrid AI-human solution",
    benefits: ["24/7 availability", "AI-assisted responses", "Seamless escalation"],
    href: "/dsx-live",
    color: "from-purple-500 to-pink-500"
  }
];

export default function InteractiveServiceCards() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [, setLocation] = useLocation();

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {services.map((service, index) => {
        const IconComponent = service.icon;
        return (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            onHoverStart={() => setHoveredCard(service.id)}
            onHoverEnd={() => setHoveredCard(null)}
            className="group"
          >
            <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white overflow-hidden">
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-sm font-medium text-slate-600">
                  {service.subtitle}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-slate-700 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <motion.div 
                  className="space-y-2"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: hoveredCard === service.id ? "auto" : 0,
                    opacity: hoveredCard === service.id ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center text-sm text-slate-600">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </motion.div>

                <Button
                  onClick={() => setLocation(service.href)}
                  variant="ghost"
                  className="w-full justify-between group-hover:bg-blue-50 group-hover:text-blue-600 transition-all duration-300 mt-4"
                >
                  <span>Learn More</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}
