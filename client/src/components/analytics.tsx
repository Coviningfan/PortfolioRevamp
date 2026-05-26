import { useEffect } from "react";
import { useLocation } from "wouter";
import { onCLS, onFCP, onINP, onLCP, onTTFB, type Metric } from "web-vitals";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const GA_ID = import.meta.env.VITE_GA_ID as string | undefined;
const GTM_ID = import.meta.env.VITE_GTM_ID as string | undefined;

let injected = false;
let vitalsBound = false;

function injectScripts() {
  if (injected || typeof document === "undefined") return;
  injected = true;

  if (GTM_ID) {
    const s = document.createElement("script");
    s.async = true;
    s.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`;
    document.head.appendChild(s);
  }

  if (GA_ID) {
    const tag = document.createElement("script");
    tag.async = true;
    tag.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(tag);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer!.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", GA_ID, { send_page_view: false });
  }
}

function reportVital(metric: Metric) {
  const payload = {
    metric_name: metric.name,
    metric_value: Math.round(metric.name === "CLS" ? metric.value * 1000 : metric.value),
    metric_id: metric.id,
    metric_rating: metric.rating,
    page_path: window.location.pathname,
  };
  if (GA_ID && window.gtag) {
    window.gtag("event", "web_vitals", payload);
  }
  if (GTM_ID && window.dataLayer) {
    window.dataLayer.push({ event: "web_vitals", ...payload });
  }
}

function bindVitals() {
  if (vitalsBound) return;
  vitalsBound = true;
  try {
    onCLS(reportVital);
    onFCP(reportVital);
    onINP(reportVital);
    onLCP(reportVital);
    onTTFB(reportVital);
  } catch {
    // ignore
  }
}

export default function Analytics() {
  const [location] = useLocation();

  useEffect(() => {
    injectScripts();
    bindVitals();
  }, []);

  useEffect(() => {
    if (GA_ID && window.gtag) {
      window.gtag("event", "page_view", {
        page_path: location,
        page_location: window.location.href,
        page_title: document.title,
      });
    }
    if (GTM_ID && window.dataLayer) {
      window.dataLayer.push({
        event: "pageview",
        page: location,
      });
    }
  }, [location]);

  return null;
}

export const trackEvent = (name: string, params: Record<string, unknown> = {}) => {
  if (typeof window === "undefined") return;
  if (window.gtag) window.gtag("event", name, params);
  if (window.dataLayer) window.dataLayer.push({ event: name, ...params });
};
