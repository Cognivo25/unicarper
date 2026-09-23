'use client';
import { useEffect } from 'react';

// The theme's jQuery/GSAP plugins, in the order the original template loaded them.
// three.js + webgl.js dropped: only used by the portfolio showcase slider, not on this page.
const scripts = [
  'vendor/jquery', 'bootstrap-bundle', 'gsap', 'gsap-scroll-to-plugin', 'gsap-scroll-smoother',
  'gsap-scroll-trigger', 'gsap-split-text', 'chroma.min', 'tween-max', 'scroll-magic',
  'range-slider', 'swiper-bundle', 'slick', 'magnific-popup', 'nice-select', 'purecounter',
  'beforeafter', 'isotope-pkgd', 'imagesloaded-pkgd', 'main', 'tp-cursor',
];

export default function TemplateScripts() {
  useEffect(() => {
    if (window.__templateLoaded) return; // strict-mode double effect
    window.__templateLoaded = true;
    // async=false: all download in parallel but execute in insertion order.
    scripts.forEach((name, i) => {
      const s = document.createElement('script');
      s.src = `/assets/js/${name}.js`;
      s.async = false;
      // main.js hides the preloader etc. on window "load", which already fired before hydration.
      if (i === scripts.length - 1) s.onload = () => window.dispatchEvent(new Event('load'));
      document.body.appendChild(s);
    });
  }, []);
  return null;
}
