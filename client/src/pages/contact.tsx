import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ContactSection from "@/components/contact-section";
import Seo from "@/components/seo";

export default function ContactPage() {
  return (
    <div className="min-h-screen page-canvas">
      <Seo
        title="Talk to DSX — Get a Workflow Audit"
        description="Talk to DSX about bringing AI into your phone system. Free workflow audit, no pressure. 3CX Platinum Partner with 12+ years of deployments."
        path="/contact"
      />
      <Navigation />
      <div className="pt-20">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}
