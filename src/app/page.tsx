import Image from "next/image";
import {
  IconBussola,
  IconCamadas,
  IconCiclo,
  IconGrafico,
  IconLotus,
  IconMontanha,
  IconNuvem,
  IconPrancheta,
  IconSeta,
} from "@/components/icons";

const EMAIL = "contato@patryx.com.br";
const CHECK_URL = `mailto:${EMAIL}?subject=${encodeURIComponent(
  "Quero fazer o check gratuito",
)}`;

const nav = [
  { href: "#a-patryx", label: "A PATRYX" },
  { href: "#metodo", label: "Método" },
  { href: "#plataforma", label: "Plataforma" },
  { href: "#quem-conduz", label: "Quem conduz" },
];

const problemas = [
  { Icon: IconCiclo, texto: "Turnover que não cai" },
  { Icon: IconNuvem, texto: "Clima que pesa" },
  { Icon: IconCamadas, texto: "Mudanças que não se sustentam" },
];

const etapas = [
  { Icon: IconPrancheta, texto: "Diagnóstico de NR-1" },
  { Icon: IconBussola, texto: "Pensar · Clareza" },
  { Icon: IconLotus, texto: "Sentir · Presença" },
  { Icon: IconMontanha, texto: "Agir · Potência" },
  { Icon: IconGrafico, texto: "Monitoramento" },
];

function BotaoCheck({ className = "" }: { className?: string }) {
  return (
    <a
      href={CHECK_URL}
      className={`inline-flex items-center justify-center rounded-md bg-cobre px-6 py-3 text-sm font-medium text-offwhite shadow-sm transition-colors hover:bg-cobre-profundo focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-offwhite ${className}`}
    >
      Começar pelo check gratuito
    </a>
  );
}

export default function Home() {
  return (
    <>
      {/* Cabeçalho */}
      <header className="absolute inset-x-0 top-0 z-30">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 border-b border-offwhite/15 px-5 py-4 sm:px-8">
          <a href="#" aria-label="PATRYX, início" className="shrink-0">
            <Image
              src="/images/logo-claro.webp"
              alt="PATRYX"
              width={900}
              height={289}
              className="h-9 w-auto sm:h-11"
              loading="eager"
            />
          </a>
          <nav className="hidden items-center gap-9 text-sm text-offwhite/90 lg:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-offwhite"
              >
                {item.label}
              </a>
            ))}
            <span aria-hidden className="h-px w-8 bg-cobre" />
          </nav>
          <a
            href={CHECK_URL}
            className="rounded-md bg-cobre px-4 py-2 text-sm font-medium text-offwhite transition-colors hover:bg-cobre-profundo"
          >
            Check gratuito
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section
          id="a-patryx"
          className="relative overflow-hidden bg-azul-escuro pt-28 text-offwhite lg:min-h-[40rem] lg:pt-0"
        >
          <div className="relative z-20 mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 sm:px-8 lg:grid-cols-[1.15fr_1fr] lg:pb-0 lg:pt-32">
            <div className="max-w-2xl lg:pb-24">
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-cobre">
                Cultura · Mensuração · Impacto
              </p>
              <h1 className="mt-6 font-serif text-4xl leading-[1.12] sm:text-5xl lg:text-[3.1rem] xl:text-[3.3rem]">
                Cultura você sente.
                <br />
                Liderança você mede.
                <br />
                <em>E é por ela que tudo começa.</em>
              </h1>
              <p className="mt-6 max-w-md text-base leading-7 text-offwhite/85">
                Diagnóstico, desenvolvimento de liderança e tecnologia própria
                para acompanhar a evolução da sua empresa.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-5">
                <BotaoCheck />
                <a
                  href="#metodo"
                  className="border-b border-cobre pb-1 text-sm text-offwhite transition-colors hover:text-cobre"
                >
                  Conheça o método
                </a>
              </div>
            </div>
          </div>

          {/* Foto com recorte em folha */}
          <div className="relative z-0 -mr-5 sm:-mr-8 lg:absolute lg:inset-y-0 lg:right-0 lg:mr-0 lg:flex lg:w-[56%] lg:items-center">
            <div className="hero-photo w-full">
              <Image
                src="/images/paisagem-hero.webp"
                alt="Montanhas ao amanhecer sobre a mata coberta de névoa"
                fill
                sizes="(min-width: 1024px) 56vw, 100vw"
                className="object-cover"
                fetchPriority="high"
                loading="eager"
              />
            </div>
          </div>

          <Image
            src="/images/folhas.webp"
            alt=""
            width={900}
            height={610}
            className="pointer-events-none absolute -bottom-10 -right-16 z-10 hidden w-72 rotate-[160deg] lg:block"
          />
        </section>

        {/* Problemas */}
        <section className="bg-offwhite-claro px-5 py-16 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="font-serif text-3xl leading-tight text-tinta sm:text-4xl lg:text-[2.15rem]">
              Quando os mesmos problemas continuam, é hora de olhar mais fundo.
            </h2>
            <span className="divisor mt-6" />
            <ul className="mt-12 grid gap-8 md:grid-cols-3 md:gap-0">
              {problemas.map(({ Icon, texto }, i) => (
                <li
                  key={texto}
                  className={`flex items-center justify-center gap-5 px-6 text-left text-lg ${
                    i > 0 ? "md:border-l md:border-cobre/50" : ""
                  }`}
                >
                  <Icon className="size-12 shrink-0 text-cobre" />
                  <span className="max-w-[12rem]">{texto}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Método */}
        <section
          id="metodo"
          className="scroll-mt-4 bg-verde-escuro px-5 py-16 text-offwhite sm:px-8 sm:py-20"
        >
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="font-serif text-3xl leading-tight sm:text-4xl">
              Da escuta à ação. Da ação à evolução.
            </h2>
            <span className="divisor mt-6" />
            <ol className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 md:flex md:items-start md:justify-between md:gap-0">
              {etapas.map(({ Icon, texto }, i) => (
                <li key={texto} className="contents">
                  {i > 0 && (
                    <span
                      aria-hidden
                      className="mt-7 hidden h-px flex-1 bg-cobre/70 md:block md:mx-4"
                    />
                  )}
                  <div className="flex flex-col items-center gap-4 md:w-36">
                    <Icon className="size-14 text-cobre" />
                    <span className="text-base leading-snug">{texto}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Plataforma */}
        <section
          id="plataforma"
          className="relative scroll-mt-4 overflow-hidden bg-offwhite-claro px-5 py-16 sm:px-8 sm:py-20"
        >
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="font-serif text-4xl leading-tight text-tinta sm:text-5xl">
                Profundidade humana.
                <br />
                Evolução visível.
              </h2>
              <p className="mt-6 max-w-md text-lg leading-8 text-tinta/85">
                Uma plataforma própria para conectar diagnósticos, planos de
                ação e acompanhamento.
              </p>
              <a
                href={CHECK_URL}
                className="group mt-8 inline-flex items-center gap-3 font-medium text-cobre"
              >
                <span className="border-b border-cobre pb-1">
                  Conheça a plataforma
                </span>
                <IconSeta className="size-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
            <figure>
              <Image
                src="/images/plataforma.webp"
                alt="Tela da plataforma PATRYX com evolução da liderança e planos de ação"
                width={1400}
                height={930}
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="h-auto w-full"
              />
              <figcaption className="-mt-4 text-right font-serif text-sm italic text-tinta/70">
                Interface ilustrativa
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Quem conduz */}
        <section
          id="quem-conduz"
          className="scroll-mt-4 bg-offwhite-claro px-5 pb-16 sm:px-8 sm:pb-24"
        >
          <div className="mx-auto max-w-6xl border-t border-cobre/40 pt-12 sm:pt-16">
            <div className="grid items-center gap-10 md:grid-cols-[minmax(0,22rem)_1fr] md:gap-16">
              <Image
                src="/images/patricia-hirayama.webp"
                alt="Patricia Hirayama, psicóloga e fundadora da PATRYX"
                width={900}
                height={1125}
                sizes="(min-width: 768px) 22rem, 100vw"
                className="mx-auto aspect-[4/5] w-full max-w-sm object-cover md:aspect-[5/4] md:max-w-none"
              />
              <div className="md:border-l md:border-cobre/50 md:pl-12">
                <p className="text-xs font-medium uppercase tracking-[0.28em] text-cobre-profundo">
                  Quem conduz o processo
                </p>
                <h2 className="mt-4 font-serif text-4xl text-tinta sm:text-5xl">
                  Patricia Hirayama
                </h2>
                <p className="mt-5 max-w-lg text-lg leading-8 text-tinta/85">
                  Psicóloga e fundadora da PATRYX. Profundidade, escuta real e
                  liderança com presença.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Chamada final */}
        <section className="relative overflow-hidden bg-azul-escuro px-5 py-16 text-center text-offwhite sm:px-8">
          <Image
            src="/images/folhas.webp"
            alt=""
            width={900}
            height={610}
            className="pointer-events-none absolute -bottom-6 -left-20 w-64 rotate-[20deg] opacity-90"
          />
          <svg
            aria-hidden
            viewBox="0 0 400 200"
            className="pointer-events-none absolute -right-10 -top-6 w-96 text-cobre-profundo"
          >
            <path d="M10 190C120 170 250 120 390 10" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          <div className="relative">
            <h2 className="font-serif text-3xl leading-tight sm:text-4xl">
              Toda transformação começa com uma boa conversa.
            </h2>
            <BotaoCheck className="mt-8 px-10" />
          </div>
        </section>
      </main>

      <footer className="bg-azul-escuro px-5 pb-10 text-offwhite sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-4 border-t border-offwhite/10 pt-8 sm:flex-row sm:gap-8">
          <Image
            src="/images/logo-claro.webp"
            alt="PATRYX"
            width={900}
            height={289}
            className="h-9 w-auto"
          />
          <span aria-hidden className="hidden h-8 w-px bg-offwhite/30 sm:block" />
          <a href={`mailto:${EMAIL}`} className="text-sm hover:text-cobre">
            {EMAIL}
          </a>
        </div>
      </footer>
    </>
  );
}
