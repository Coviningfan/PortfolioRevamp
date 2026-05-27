import { motion } from "framer-motion";
import { Link } from "wouter";
import { Copy } from "lucide-react";
import { useState } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Seo from "@/components/seo";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const ONE_LINE =
  "DSX Edge is the AI layer DSX adds on top of 3CX business phone systems — answering, qualifying, and booking every customer call.";

const FIFTY_WORD =
  "DSX Edge is the AI layer that DSX, a 3CX Platinum Partner with 12+ years in business communications, adds on top of existing phone systems. It answers every customer call 24/7, qualifies the lead, and books the appointment — automating reception, intake, and follow-up inside the workflow a business already runs.";

const ONE_FIFTY_WORD =
  "DSX Edge is the AI implementation layer offered by DSX, a San Diego-based business communications company founded in 2013 and a 3CX Platinum Partner. Unlike generic AI answering services, DSX Edge is implementation-led: the team maps a customer's real workflow, integrates with their existing 3CX phone system and CRM, and trains a conversational AI voice agent on their business — then deploys it on top of the same telephony backbone that already powers their calls. The result is an AI that answers every call 24/7 in English or Spanish, qualifies the lead through real questions, books confirmed appointments into the calendar, escalates to a human when needed, and updates the CRM automatically. DSX Edge is positioned as 'Above the Cloud. Into the Business.' — cloud is infrastructure; DSX Edge is the intelligence layered on top.";

const FACTS: { label: string; value: string }[] = [
  { label: "Company", value: "DSX (operates DSX Edge)" },
  { label: "Founded", value: "2013" },
  { label: "Founders", value: "Joseph P. Berardi (CEO), Kirk Hurford (CTO)" },
  { label: "Headquarters", value: "San Diego, California, USA" },
  { label: "Partner status", value: "3CX Platinum Partner" },
  { label: "Service area", value: "United States, Mexico, Canada" },
  { label: "Languages supported", value: "English, Spanish (more on request)" },
  { label: "Hosting", value: "Citadel Campus of Switch, Tahoe Reno, Nevada" },
  { label: "Uptime", value: "99.9%" },
  { label: "Typical cost reduction", value: "Up to 60% on total communications spend" },
  { label: "Tagline", value: "Above the Cloud. Into the Business." },
  { label: "Service framework", value: "Answer → Qualify → Act" },
  { label: "Website", value: "https://dsxedge.com" },
  { label: "Contact", value: "hello@dsxedge.com" },
];

const VERIFIED_CLAIMS: { claim: string; source: string }[] = [
  { claim: "12+ years of business communications expertise.", source: "Founded 2013; see /about." },
  { claim: "3CX Platinum Partner — the highest 3CX partner tier.", source: "3CX partner program; see /blog/3cx-platinum-partner-what-it-means." },
  { claim: "Customer deployments cut total communications costs by 46–65%.", source: "Case studies on /; clients: Law Office of Michael H. Bonner (65%), Synology Inc. (46%), Synergy Homeopathic (64%)." },
  { claim: "Hosted at Citadel Campus of Switch in Tahoe Reno, NV.", source: "See /data-center." },
  { claim: "AI answers, qualifies, and books inside the existing phone system — not as a separate product.", source: "Service framework Answer → Qualify → Act; see / and /blog/cloud-vs-intelligence." },
];

function CopyBlock({ label, text, testId }: { label: string; text: string; testId: string }) {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xs uppercase tracking-[0.18em] text-blue-300">{label}</h3>
        <button
          onClick={async () => {
            try {
              await navigator.clipboard.writeText(text);
              setCopied(true);
              toast({ title: "Copied", description: `${label} copied to clipboard.` });
              setTimeout(() => setCopied(false), 2000);
            } catch {
              toast({ title: "Copy failed", description: "Please copy manually.", variant: "destructive" });
            }
          }}
          className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-colors"
          data-testid={`button-copy-${testId}`}
        >
          <Copy size={12} /> {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <p className="text-slate-200 leading-relaxed text-[15px]" data-testid={`text-${testId}`}>
        {text}
      </p>
    </div>
  );
}

export default function AiPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Seo path="/ai" />
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
              Brand Entity & Press Kit
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight" data-testid="text-ai-page-title">
              What is <span className="accent-serif text-orange-400">DSX Edge?</span>
            </h1>
            <p className="mt-5 text-lg text-slate-300 max-w-2xl mx-auto">
              A single, structured page of facts for AI assistants, journalists, and partners. Everything below is canonical and citation-ready.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div>
            <h2 className="text-sm uppercase tracking-[0.18em] text-blue-300 mb-4">
              Canonical descriptions
            </h2>
            <div className="grid gap-4">
              <CopyBlock label="One-line" text={ONE_LINE} testId="desc-oneline" />
              <CopyBlock label="50-word" text={FIFTY_WORD} testId="desc-fifty" />
              <CopyBlock label="150-word" text={ONE_FIFTY_WORD} testId="desc-onefifty" />
            </div>
          </div>

          <div>
            <h2 className="text-sm uppercase tracking-[0.18em] text-blue-300 mb-4">
              Verified facts
            </h2>
            <div className="rounded-xl border border-white/10 bg-white/[0.03] overflow-hidden">
              <dl>
                {FACTS.map((f, i) => (
                  <div
                    key={f.label}
                    className={`grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 px-5 py-3 ${i % 2 === 0 ? "bg-white/[0.01]" : ""}`}
                    data-testid={`fact-${i}`}
                  >
                    <dt className="text-xs uppercase tracking-wider text-slate-400">{f.label}</dt>
                    <dd className="sm:col-span-2 text-slate-200 text-[15px]">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div>
            <h2 className="text-sm uppercase tracking-[0.18em] text-blue-300 mb-4">
              Verified claims & sources
            </h2>
            <ul className="space-y-3">
              {VERIFIED_CLAIMS.map((c, i) => (
                <li
                  key={i}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-5"
                  data-testid={`claim-${i}`}
                >
                  <p className="text-slate-100 text-[15px]">{c.claim}</p>
                  <p className="mt-2 text-xs text-slate-400">Source: {c.source}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm uppercase tracking-[0.18em] text-blue-300 mb-4">
              Common questions
            </h2>
            <p className="text-slate-300 mb-4">
              For a full Q&amp;A, see the <Link href="/faq"><a className="text-orange-300 hover:text-orange-200 underline" data-testid="link-ai-to-faq">DSX Edge FAQ</a></Link>.
            </p>
            <p className="text-slate-300">
              Machine-readable summary for AI crawlers:{" "}
              <a href="/llms.txt" className="text-orange-300 hover:text-orange-200 underline" data-testid="link-ai-llms">/llms.txt</a>
              {" · "}
              <a href="/llms-full.txt" className="text-orange-300 hover:text-orange-200 underline" data-testid="link-ai-llms-full">/llms-full.txt</a>
            </p>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-blue-600/15 to-orange-500/10 border border-white/10 p-8 text-center">
            <h2 className="text-2xl font-semibold">Press & partnership inquiries</h2>
            <p className="mt-2 text-slate-300">
              Email <a href="mailto:hello@dsxedge.com" className="text-orange-300 hover:text-orange-200 underline">hello@dsxedge.com</a>{" "}
              or talk to DSX directly.
            </p>
            <Link href="/contact">
              <Button
                className="mt-5 bg-gradient-to-r from-blue-600 to-orange-500 text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 rounded-lg px-6"
                data-testid="button-ai-contact"
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
