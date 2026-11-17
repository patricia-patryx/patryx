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

export function IconPessoas(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <circle cx="24" cy="15" r="5" />
      <circle cx="11" cy="19" r="4" />
      <circle cx="37" cy="19" r="4" />
      <path d="M14 38v-3a10 10 0 0 1 20 0v3M4 36v-2a7 7 0 0 1 9-6.7M44 36v-2a7 7 0 0 0-9-6.7" />
    </svg>
  );
}

export function IconPessoa(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <circle cx="24" cy="15" r="7" />
      <path d="M10 41a14 14 0 0 1 28 0" />
    </svg>
  );
}

export function IconLiderTravado(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <circle cx="20" cy="15" r="7" />
      <path d="M6 41a14 14 0 0 1 22-11.5" />
      <circle cx="35" cy="35" r="7" />
      <path d="m31 31 8 8M39 31l-8 8" />
    </svg>
  );
}

export function IconTempestade(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M14 30h21a8 8 0 0 0 0-16 11 11 0 0 0-21 2 7 7 0 0 0 0 14Z" />
      <path d="m25 25-4 7h6l-4 8" />
    </svg>
  );
}

export function IconBroto(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M24 42V22" />
      <path d="M24 26C24 16 18 10 8 10c0 10 6 16 16 16ZM24 22c0-9 5-14 15-14 0 9-5 14-15 14Z" />
    </svg>
  );
}

export function IconLupa(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <circle cx="21" cy="21" r="12" />
      <path d="m30 30 11 11" />
    </svg>
  );
}

export function IconCabeca(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M17 42v-7c-5-3-8-8-8-14A15 15 0 0 1 39 20l3 7h-4v6a4 4 0 0 1-4 4h-4v5" />
      <path d="M25 26v-6M25 22c0-4 3-6 7-6 0 4-3 6-7 6ZM25 24c0-3-2-5-6-5 0 3 2 5 6 5Z" />
    </svg>
  );
}

export function IconCoracao(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M24 40S7 30 7 18a9 9 0 0 1 17-4 9 9 0 0 1 17 4c0 12-17 22-17 22Z" />
    </svg>
  );
}

export function IconCrescimento(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M8 41h32" />
      <rect x="11" y="31" width="5" height="10" />
      <rect x="21" y="26" width="5" height="15" />
      <rect x="31" y="21" width="5" height="20" />
      <path d="M9 24 22 14l6 4 12-10M33 8h7v7" />
    </svg>
  );
}

export function IconDocumento(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M12 6h17l9 9v27H12Z" />
      <path d="M29 6v9h9M18 24h12M18 30h12M18 36h8" />
    </svg>
  );
}

export function IconCalendario(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <rect x="7" y="10" width="34" height="31" rx="3" />
      <path d="M7 19h34M16 6v8M32 6v8" />
    </svg>
  );
}

export function IconEscudo(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M24 5 39 11v11c0 10-6 17-15 21C15 39 9 32 9 22V11Z" />
      <path d="m18 24 4 4 8-8" />
    </svg>
  );
}

export function IconAlvo(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <circle cx="22" cy="26" r="15" />
      <circle cx="22" cy="26" r="9" />
      <circle cx="22" cy="26" r="3" />
      <path d="m22 26 16-16M33 8l5 2 2 5" />
    </svg>
  );
}

export function IconEngrenagem(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <circle cx="24" cy="24" r="6" />
      <path d="M24 6v6M24 36v6M6 24h6M36 24h6M11.3 11.3l4.2 4.2M32.5 32.5l4.2 4.2M11.3 36.7l4.2-4.2M32.5 15.5l4.2-4.2" />
    </svg>
  );
}

export function IconInfo(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <circle cx="24" cy="24" r="17" />
      <path d="M24 22v11M24 15v1" />
    </svg>
  );
}

export function IconEmail(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <rect x="6" y="11" width="36" height="26" rx="2" />
      <path d="m7 13 17 13 17-13" />
    </svg>
  );
}

export function IconWhatsapp(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <path d="M8 40l2.5-8.5A16 16 0 1 1 17 37.6Z" />
      <path d="M18 17c0 7 6 13 13 13l2-3-4-2-2 2c-2-1-4-3-5-5l2-2-2-4Z" />
    </svg>
  );
}

export function IconCheck(p: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...p}>
      <rect x="8" y="8" width="32" height="32" rx="3" />
      <path d="m16 24 6 6 11-12" />
    </svg>
  );
}
