import type { SVGProps } from "react";

const base: SVGProps<SVGSVGElement> = {
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export function IconCiclo(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M38 18a15 15 0 0 0-26.5-4M10 30a15 15 0 0 0 26.5 4" />
      <path d="M11 6v8h8M37 42v-8h-8" />
    </svg>
  );
}

export function IconNuvem(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M14 30h21a8 8 0 0 0 0-16 11 11 0 0 0-21 2 7 7 0 0 0 0 14Z" />
      <path d="M17 36l-2 5M24 36l-2 5M31 36l-2 5" />
    </svg>
  );
}

export function IconCamadas(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M24 8 42 17 24 26 6 17Z" />
      <path d="M6 24l18 9 18-9M6 31l18 9 18-9" />
    </svg>
  );
}

export function IconPrancheta(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <rect x="10" y="9" width="28" height="33" rx="2" />
      <path d="M18 6h12v6H18z" />
      <path d="m15 21 2 2 4-4M15 30l2 2 4-4M25 22h8M25 31h8" />
    </svg>
  );
}

export function IconBussola(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <circle cx="24" cy="24" r="17" />
      <path d="m31 17-4 10-10 4 4-10Z" />
    </svg>
  );
}

export function IconLotus(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M24 38c-5-4-7-9-7-14s3-10 7-13c4 3 7 8 7 13s-2 10-7 14Z" />
      <path d="M17 26c-4-3-8-4-12-3 0 8 7 15 19 15M31 26c4-3 8-4 12-3 0 8-7 15-19 15" />
    </svg>
  );
}

export function IconMontanha(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M4 41 18 21l6 8 6-10 14 22Z" />
      <path d="M30 19V6l8 3-8 3" />
    </svg>
  );
}

export function IconGrafico(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M8 41h32" />
      <rect x="11" y="29" width="6" height="12" />
      <rect x="21" y="21" width="6" height="20" />
      <rect x="31" y="11" width="6" height="30" />
    </svg>
  );
}

export function IconSeta(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} viewBox="0 0 24 24" strokeWidth={1.8} {...p}>
      <path d="M4 12h16M14 6l6 6-6 6" />
    </svg>
  );
}
