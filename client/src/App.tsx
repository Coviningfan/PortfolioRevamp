
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/scroll-to-top";
import Home from "@/pages/home";
import DSXVoicePage from "@/pages/dsx-voice";
import DSXDataPage from "@/pages/dsx-data";
import DSXLivePage from "@/pages/dsx-live";
import AboutPage from "@/pages/about";
import DataCenterPage from "@/pages/data-center";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/dsx-voice" component={DSXVoicePage} />
        <Route path="/dsx-data" component={DSXDataPage} />
        <Route path="/dsx-live" component={DSXLivePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/data-center" component={DataCenterPage} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
