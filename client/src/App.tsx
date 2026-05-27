
import { Switch, Route } from "wouter";
import { HelmetProvider } from "react-helmet-async";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/scroll-to-top";
import Analytics from "@/components/analytics";
import Home from "@/pages/home";
import DSXVoicePage from "@/pages/dsx-voice";
import DSXDataPage from "@/pages/dsx-data";
import DSXLivePage from "@/pages/dsx-live";
import AboutPage from "@/pages/about";
import DataCenterPage from "@/pages/data-center";
import ContactPage from "@/pages/contact";
import BlogIndexPage from "@/pages/blog";
import BlogPostPage from "@/pages/blog-post";
import BlogTagPage from "@/pages/blog-tag";
import FaqPage from "@/pages/faq";
import AiPage from "@/pages/ai";
import ResourcesPage from "@/pages/resources";
import CaseStudiesIndexPage from "@/pages/case-studies";
import CaseStudyPage from "@/pages/case-study";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <>
      <ScrollToTop />
      <Analytics />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/dsx-voice" component={DSXVoicePage} />
        <Route path="/dsx-data" component={DSXDataPage} />
        <Route path="/dsx-live" component={DSXLivePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/data-center" component={DataCenterPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/blog" component={BlogIndexPage} />
        <Route path="/blog/tag/:tag" component={BlogTagPage} />
        <Route path="/blog/:slug" component={BlogPostPage} />
        <Route path="/faq" component={FaqPage} />
        <Route path="/ai" component={AiPage} />
        <Route path="/resources" component={ResourcesPage} />
        <Route path="/case-studies" component={CaseStudiesIndexPage} />
        <Route path="/case-studies/:slug" component={CaseStudyPage} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
