import React, { useEffect, useRef } from 'react';

/**
 * CustomCursor — premium dot + ring cursor.
 * Adds body class on hover over interactive elements for size change.
 * Hidden on touch devices automatically (cursor:none only applied on pointer:fine).
 */
const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only activate on non-touch devices
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let raf: number;
    let rx = 0, ry = 0; // ring smoothed position
    let mx = 0, my = 0; // actual mouse position

    const moveDot = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.left = `${mx}px`;
      dot.style.top = `${my}px`;
    };

    const smoothRing = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = `${rx}px`;
      ring.style.top = `${ry}px`;
      raf = requestAnimationFrame(smoothRing);
    };

    const onEnter = () => document.body.classList.add('cursor-hover');
    const onLeave = () => document.body.classList.remove('cursor-hover');

    // Apply cursor:none to body on pointer:fine devices
    document.body.style.cursor = 'none';

    window.addEventListener('mousemove', moveDot, { passive: true });
    raf = requestAnimationFrame(smoothRing);

    // Track hover on all interactive elements
    const interactives = 'a, button, [role="button"], input, textarea, select, label, [tabindex]';
    const attachHover = () => {
      document.querySelectorAll(interactives).forEach((el) => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };
    attachHover();

    // Re-attach when DOM changes
    const observer = new MutationObserver(attachHover);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', moveDot);
      cancelAnimationFrame(raf);
      observer.disconnect();
      document.body.style.cursor = '';
      document.body.classList.remove('cursor-hover');
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="custom-cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="custom-cursor-ring" aria-hidden="true" />
    </>
  );
};

export default CustomCursor;
