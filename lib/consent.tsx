"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";

export interface ConsentState {
  analytics: boolean;
}

interface ConsentContextValue {
  consent: ConsentState | null;
  hasInteracted: boolean;
  isReady: boolean;
  showBanner: boolean;
  setShowBanner: (show: boolean) => void;
  acceptAll: () => void;
  refuseAll: () => void;
  updateConsent: (consent: ConsentState) => void;
}

const STORAGE_KEY = "videochorus_consent";
const STORAGE_DATE_KEY = "videochorus_consent_date";
const EXPIRATION_MONTHS = 13;

const ConsentContext = createContext<ConsentContextValue | null>(null);

function isExpired(dateStr: string): boolean {
  const date = new Date(dateStr);
  const expiry = new Date(date);
  expiry.setMonth(expiry.getMonth() + EXPIRATION_MONTHS);
  return new Date() > expiry;
}

export function ConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<ConsentState | null>(null);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      const storedDate = localStorage.getItem(STORAGE_DATE_KEY);

      if (stored && storedDate) {
        if (isExpired(storedDate)) {
          localStorage.removeItem(STORAGE_KEY);
          localStorage.removeItem(STORAGE_DATE_KEY);
          setShowBanner(true);
        } else {
          setConsent(JSON.parse(stored));
          setHasInteracted(true);
        }
      } else {
        setShowBanner(true);
      }
    } catch {
      setShowBanner(true);
    }
    setIsReady(true);
  }, []);

  const persist = useCallback((state: ConsentState) => {
    setConsent(state);
    setHasInteracted(true);
    setShowBanner(false);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      localStorage.setItem(STORAGE_DATE_KEY, new Date().toISOString());
    } catch {
      // localStorage indisponible
    }
  }, []);

  const acceptAll = useCallback(() => {
    persist({ analytics: true });
  }, [persist]);

  const refuseAll = useCallback(() => {
    persist({ analytics: false });
  }, [persist]);

  const updateConsent = useCallback(
    (state: ConsentState) => {
      persist(state);
    },
    [persist]
  );

  return (
    <ConsentContext.Provider
      value={{
        consent,
        hasInteracted,
        isReady,
        showBanner,
        setShowBanner,
        acceptAll,
        refuseAll,
        updateConsent,
      }}
    >
      {children}
    </ConsentContext.Provider>
  );
}

export function useConsent() {
  const ctx = useContext(ConsentContext);
  if (!ctx) {
    throw new Error("useConsent must be used within a ConsentProvider");
  }
  return ctx;
}
