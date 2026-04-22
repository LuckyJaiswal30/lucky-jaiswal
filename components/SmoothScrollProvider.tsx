"use client";

import Lenis from "lenis";
import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useRef,
} from "react";

type SmoothScrollProviderProps = {
  children: ReactNode;
};

type SmoothScrollContextValue = {
  scrollTo: (target: string | HTMLElement) => void;
};

const SmoothScrollContext = createContext<SmoothScrollContextValue>({
  scrollTo: () => {},
});

export function useSmoothScroll() {
  return useContext(SmoothScrollContext);
}

export default function SmoothScrollProvider({
  children,
}: SmoothScrollProviderProps) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      syncTouch: false,
    });
    lenisRef.current = lenis;

    let frame = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      frame = window.requestAnimationFrame(raf);
    };

    frame = window.requestAnimationFrame(raf);

    return () => {
      window.cancelAnimationFrame(frame);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const scrollTo = (target: string | HTMLElement) => {
    const lenis = lenisRef.current;
    const element =
      typeof target === "string"
        ? document.querySelector(target)
        : target;

    if (!(element instanceof HTMLElement)) {
      return;
    }

    if (lenis) {
      lenis.scrollTo(element, {
        offset: -96,
        duration: 1.2,
      });
      return;
    }

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <SmoothScrollContext.Provider value={{ scrollTo }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
