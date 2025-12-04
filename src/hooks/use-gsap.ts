"use client";

import { useLayoutEffect, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useGsap() {
  // Use useLayoutEffect for synchronous updates to avoid flashes of unstyled content
  // Fallback to useEffect for server-side rendering compatibility
  const useIsomorphicLayoutEffect =
    typeof window !== "undefined" ? useLayoutEffect : useEffect;

  return { gsap, ScrollTrigger, useIsomorphicLayoutEffect };
}
