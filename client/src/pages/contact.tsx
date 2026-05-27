import { Link } from "wouter";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ContactSection from "@/components/contact-section";
import Seo from "@/components/seo";
import Breadcrumbs from "@/components/breadcrumbs";

export default function ContactPage() {
  return (
    <div className="min-h-screen page-canvas">
      <Seo path="/contact" />
      <Navigation />
      <div className="pt-28">
        <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-2">
          <Breadcrumbs items={[{ name: "Contact", href: "/contact" }]} className="mb-6" />
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full text-[11px] tracking-widest uppercase bg-white/5 border border-white/10 text-blue-300 mb-4">
              Talk to DSX
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Talk to DSX — get a free <span className="accent-serif text-orange-300">workflow audit</span>.
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              Tell us how customers reach you today. We'll map where leads go cold, where AI pays off, and what your{" "}
              <Link href="/#services" className="text-blue-300 hover:text-blue-200 underline underline-offset-2">Answer → Qualify → Act</Link>{" "}
              workflow could look like. Background on our{" "}
              <Link href="/about" className="text-blue-300 hover:text-blue-200 underline underline-offset-2">12-year communications story</Link>{" "}
              and the{" "}
              <Link href="/data-center" className="text-blue-300 hover:text-blue-200 underline underline-offset-2">data center behind every deployment</Link>.
            </p>
          </div>
        </header>
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}
