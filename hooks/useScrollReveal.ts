import { useEffect, useRef, useState, RefObject } from 'react';

interface ScrollRevealOptions {
  /** Extra delay before revealing, for staggering cards within a grid. */
  delay?: number;
  rootMargin?: string;
}

const prefersReducedMotion = (): boolean =>
  typeof window !== 'undefined' &&
  typeof window.matchMedia === 'function' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Reveals an element once it scrolls into view.
 *
 * The threshold is deliberately fixed at 0. A ratio-based threshold is measured
 * against the element's own height, so a card taller than the viewport (or a
 * whole section) can need more of itself on screen than can ever fit, and stays
 * invisible while sitting in plain sight. The negative bottom rootMargin is what
 * holds the reveal back until the element is properly on screen.
 */
const useScrollReveal = <T extends HTMLElement = HTMLDivElement>(
  options: ScrollRevealOptions = {}
): [RefObject<T | null>, boolean] => {
  const { delay = 0, rootMargin = '0px 0px -80px 0px' } = options;
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Never strand content: if the browser cannot observe, or the reader asked
    // for less motion, show it immediately instead of animating it in.
    if (typeof IntersectionObserver === 'undefined' || prefersReducedMotion()) {
      setIsVisible(true);
      return;
    }

    let timer: ReturnType<typeof setTimeout>;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(element);
        timer = setTimeout(() => setIsVisible(true), delay);
      },
      { threshold: 0, rootMargin }
    );

    observer.observe(element);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [delay, rootMargin]);

  return [ref, isVisible];
};

export default useScrollReveal;
