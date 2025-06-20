import { Route, Switch } from "wouter";
import Home from "./pages/home";
import About from "./pages/about";
import DSXVoice from "./pages/dsx-voice";
import DSXData from "./pages/dsx-data";
import DSXLive from "./pages/dsx-live";
import DataCenter from "./pages/data-center";
import NotFound from "./pages/not-found";
import ScrollToTop from "./components/scroll-to-top";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/dsx-voice" component={DSXVoice} />
        <Route path="/dsx-data" component={DSXData} />
        <Route path="/dsx-live" component={DSXLive} />
        <Route path="/data-center" component={DataCenter} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;