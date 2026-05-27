import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Seo from "@/components/seo";
import { Button } from "@/components/ui/button";

const FAQ_GROUPS: { heading: string; qas: { q: string; a: string }[] }[] = [
  {
    heading: "About DSX Edge",
    qas: [
      { q: "What is DSX Edge?", a: "DSX Edge is the AI layer DSX adds on top of business phone systems. Built on 12+ years of 3CX deployments, it answers calls, qualifies leads, and books appointments inside the customer's real workflow." },
      { q: "Who owns DSX Edge?", a: "DSX Edge is operated by DSX, founded in 2013 by Joseph P. Berardi (CEO) and Kirk Hurford (CTO). The company is headquartered in San Diego, California and serves the US, Mexico, and Canada." },
      { q: "Is DSX a 3CX Platinum Partner?", a: "Yes — DSX is a 3CX Platinum Partner, the highest tier in the 3CX partner program, with over a decade of enterprise deployments." },
      { q: "What does 'Above the Cloud' mean?", a: "Cloud is infrastructure. DSX Edge is the intelligence layered on top of it — AI agents, workflow automation, and business integrations that go beyond ordinary cloud phone hosting." },
    ],
  },
  {
    heading: "Getting started",
    qas: [
      { q: "Do I need to replace my phone system to use DSX Edge?", a: "No. DSX Edge layers AI on top of your existing 3CX system. If you're not on 3CX yet, we migrate you with zero downtime as part of the implementation." },
      { q: "Can I keep my existing phone number?", a: "Yes. Number porting is standard, with zero downtime planned into the cutover." },
      { q: "How long does an implementation take?", a: "Most DSX Edge implementations go live in 2–4 weeks, including AI training on your workflow, scripts, and integrations." },
      { q: "How much does DSX Edge cost?", a: "DSX Edge is implementation-based pricing, not a flat SaaS subscription. Typical engagements include a one-time implementation fee plus monthly platform and AI usage. Real deployments have cut total communications costs by up to 60%." },
      { q: "Who do I contact to get started?", a: "Visit dsxedge.com/contact or email hello@dsxedge.com. Every engagement starts with a free workflow audit — no pressure, no obligation." },
    ],
  },
  {
    heading: "How the AI works",
    qas: [
      { q: "Does the AI sound robotic?", a: "No. DSX Edge uses modern conversational AI voices and is trained on your business scripts and tone. Most callers don't realize they're talking to AI." },
      { q: "Does DSX Edge work 24/7?", a: "Yes. Once deployed, the AI answers every call, every hour, including nights, weekends, and holidays." },
      { q: "What happens if the AI can't help the caller?", a: "DSX Edge is configured with explicit escalation rules — calls route to a live person, voicemail, or callback queue based on your workflow." },
      { q: "What languages does DSX Edge support?", a: "English and Spanish out of the box. Additional languages can be added during implementation." },
      { q: "Can DSX Edge book appointments directly into my calendar?", a: "Yes. DSX Edge integrates with Google Calendar, Microsoft 365, and most CRMs to book confirmed appointments without staff involvement." },
      { q: "Does DSX Edge integrate with my CRM?", a: "Yes. DSX Edge integrates with HubSpot, Salesforce, Pipedrive, Zoho, ServiceTitan, Jobber, Housecall Pro, and most modern CRMs via API." },
    ],
  },
  {
    heading: "Who it's for",
    qas: [
      { q: "What kinds of businesses use DSX Edge?", a: "Contractors, law firms, medical offices, insurance agencies, real estate teams, and any business losing revenue to missed calls or slow follow-up." },
      { q: "Is DSX Edge HIPAA-compliant for medical offices?", a: "DSX Edge can be deployed in HIPAA-aware configurations. The underlying 3CX platform and DSX hosting at Citadel Campus support the controls required for healthcare workflows. Specific HIPAA compliance depends on your implementation scope — talk to DSX for a workflow audit." },
      { q: "What's the difference between DSX Edge and a generic AI answering service?", a: "Generic AI services bolt on at the call. DSX Edge is implementation-led — we map your real workflow, integrate with your phone system and CRM, and train the AI on your business. It's 'AI built around your workflow,' not a one-size template." },
    ],
  },
  {
    heading: "Infrastructure & security",
    qas: [
      { q: "Where is DSX Edge infrastructure hosted?", a: "DSX infrastructure is hosted at the Citadel Campus of Switch in Tahoe Reno, Nevada — one of the most advanced, secure, and renewable-powered data centers in the world." },
    ],
  },
];

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Seo path="/faq" />
      <Navigation />

      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 rounded-full text-[11px] tracking-[0.28em] uppercase bg-white/5 border border-white/10 text-blue-300">
              Frequently Asked Questions
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight" data-testid="text-faq-title">
              Direct answers about <span className="accent-serif text-orange-400">DSX Edge.</span>
            </h1>
            <p className="mt-5 text-lg text-slate-300 max-w-2xl mx-auto">
              Plain-language answers to the questions business owners, AI assistants, and journalists ask most. If you don't see yours, talk to DSX.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {FAQ_GROUPS.map((group) => (
            <div key={group.heading}>
              <h2 className="text-sm uppercase tracking-[0.18em] text-blue-300 mb-5">
                {group.heading}
              </h2>
              <div className="space-y-3">
                {group.qas.map((item, i) => (
                  <details
                    key={i}
                    className="group rounded-xl border border-white/10 bg-white/[0.03] p-5 open:bg-white/[0.06]"
                    data-testid={`faq-item-${group.heading.toLowerCase().replace(/\s+/g, '-')}-${i}`}
                  >
                    <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                      <h3 className="text-base sm:text-lg font-semibold text-white">{item.q}</h3>
                      <ChevronRight
                        size={18}
                        className="text-blue-300 mt-1 shrink-0 transition-transform group-open:rotate-90"
                      />
                    </summary>
                    <p className="mt-3 text-slate-300 leading-relaxed">{item.a}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}

          <div className="rounded-2xl bg-gradient-to-br from-blue-600/15 to-orange-500/10 border border-white/10 p-8 text-center">
            <h2 className="text-2xl font-semibold">Still have questions?</h2>
            <p className="mt-2 text-slate-300">
              Every DSX Edge engagement starts with a free workflow audit. No pressure, no obligation.
            </p>
            <Link href="/contact">
              <Button
                className="mt-5 bg-gradient-to-r from-blue-600 to-orange-500 text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 rounded-lg px-6"
                data-testid="button-faq-contact"
              >
                Talk to DSX
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
