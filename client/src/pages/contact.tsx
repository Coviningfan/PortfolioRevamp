import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ContactSection from "@/components/contact-section";
import Seo from "@/components/seo";

export default function ContactPage() {
  return (
    <div className="min-h-screen page-canvas">
      <Seo path="/contact" />
      <Navigation />
      <div className="pt-20">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}
