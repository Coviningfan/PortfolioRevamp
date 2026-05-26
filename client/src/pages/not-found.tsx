import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Seo from "@/components/seo";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Page Not Found"
        description="The page you're looking for doesn't exist or has been moved."
        path="/404"
        noIndex
      />
      <Navigation />
      <section className="pt-32 pb-24 flex items-center justify-center">
        <div className="max-w-lg mx-auto px-4 text-center">
          <div className="text-8xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent mb-6">
            404
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-4" data-testid="text-404-title">
            Page Not Found
          </h1>
          <p className="text-lg text-slate-500 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link href="/">
            <Button
              data-testid="button-back-home-404"
              className="bg-gradient-to-r from-blue-600 to-orange-500 text-white hover:shadow-lg transition-all duration-200 rounded-xl px-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
