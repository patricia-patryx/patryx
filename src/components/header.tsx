"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { IconPessoa } from "@/components/icons";
import { AREA_CLIENTE_URL, CHECK_URL } from "@/lib/links";

const nav = [
  { id: "a-patryx", label: "A PATRYX" },
  { id: "metodo", label: "Método" },
  { id: "plataforma", label: "Plataforma" },
  { id: "quem-conduz", label: "Quem conduz" },
  { id: "contato", label: "Contato" },
];

export function Header() {
  const [rolou, setRolou] = useState(false);
  const [aberto, setAberto] = useState(false);
  const [ativo, setAtivo] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setRolou(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const secoes = nav
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entradas) => {
        for (const e of entradas) if (e.isIntersecting) setAtivo(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    secoes.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!aberto) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setAberto(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [aberto]);

  const solido = rolou || aberto;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
        solido
          ? "bg-azul-escuro border-b border-offwhite/10"
          : "bg-transparent"
      }`}
    >
      <div
        className={`mx-auto flex max-w-[80rem] items-center justify-between gap-6 px-5 transition-[padding] duration-300 sm:px-10 lg:px-20 ${
          solido ? "py-3.5" : "py-5"
        }`}
      >
        <a href="#" aria-label="PATRYX, início" className="shrink-0">
          <Image
            src="/images/logo-offwhite.svg"
            alt="PATRYX"
            width={1985}
            height={470}
            unoptimized
            className={`w-auto transition-[height] duration-300 ${
              solido ? "h-7 sm:h-8" : "h-8 sm:h-9"
            }`}
            loading="eager"
          />
        </a>

        <nav aria-label="Seções" className="hidden lg:block">
          <ul className="flex items-center gap-4">
            {nav.map(({ id, label }) => {
              const atual = ativo === id;
              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    aria-current={atual ? "true" : undefined}
                    className={`block px-1 py-2 text-sm transition-colors ${
                      atual ? "text-offwhite" : "text-offwhite/70 hover:text-offwhite"
                    }`}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-5">
          <a
            href={AREA_CLIENTE_URL}
            className="hidden text-sm text-offwhite/90 transition-colors hover:text-offwhite sm:block"
          >
            Área do cliente
          </a>
          <a
            href={CHECK_URL}
            className="hidden rounded-full bg-offwhite px-5 py-2.5 text-sm font-medium text-azul-escuro transition-colors hover:bg-white sm:block"
          >
            Check gratuito
          </a>
          <button
            type="button"
            onClick={() => setAberto((v) => !v)}
            aria-expanded={aberto}
            aria-controls="menu-movel"
            aria-label={aberto ? "Fechar menu" : "Abrir menu"}
            className="grid size-10 place-items-center rounded-full text-offwhite ring-1 ring-offwhite/30 lg:hidden"
          >
            <span className="relative block h-3 w-5" aria-hidden>
              <span
                className={`absolute left-0 h-px w-5 bg-current transition-transform duration-300 ${
                  aberto ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-px w-5 bg-current transition-opacity ${
                  aberto ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 h-px w-5 bg-current transition-transform duration-300 ${
                  aberto ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Menu no celular */}
      <div
        id="menu-movel"
        hidden={!aberto}
        className="border-t border-offwhite/10 bg-azul-escuro px-5 pb-8 pt-2 sm:px-8 lg:hidden"
      >
        <ul className="divide-y divide-offwhite/10">
          {nav.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setAberto(false)}
                className="flex items-center justify-between py-4 font-serif text-xl text-offwhite"
              >
                {label}
                <span aria-hidden className="h-px w-6 bg-cobre" />
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <a
            href={CHECK_URL}
            className="rounded-full bg-cobre px-5 py-3 text-center text-sm font-medium text-offwhite"
          >
            Check gratuito
          </a>
          <a
            href={AREA_CLIENTE_URL}
            className="flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm text-offwhite ring-1 ring-offwhite/30"
          >
            <IconPessoa className="size-4 text-cobre" />
            Área do cliente
          </a>
        </div>
      </div>
    </header>
  );
}
