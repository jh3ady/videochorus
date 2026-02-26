"use client";

import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";
import { useEffect, useRef } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useConsent } from "@/lib/consent";

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  const { consent, isReady } = useConsent();
  const initializedRef = useRef(false);

  useEffect(() => {
    if (!isReady) return;

    if (consent?.analytics) {
      if (!initializedRef.current) {
        posthog.init("phc_s2SnEQKa3XFU16TPY8FQS3ejLJ2mFBmNNyDdl69yCNA", {
          api_host: "https://eu.i.posthog.com",
          person_profiles: "identified_only",
          capture_pageview: false,
          capture_pageleave: true,
        });
        initializedRef.current = true;
      } else {
        posthog.opt_in_capturing();
      }
    } else if (initializedRef.current) {
      posthog.opt_out_capturing();
    }
  }, [consent?.analytics, isReady]);

  return <PHProvider client={posthog}>{children}</PHProvider>;
}

export function ConditionalAnalytics() {
  const { consent } = useConsent();

  if (!consent?.analytics) return null;

  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
