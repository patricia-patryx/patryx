import Image from "next/image";
import { Divisor } from "@/components/divisor";
import { Header } from "@/components/header";
import { Revelar } from "@/components/revelar";
import { AREA_CLIENTE_URL, CHECK_URL } from "@/lib/links";
import type { ComponentType, ReactNode, SVGProps } from "react";
import {
  IconAlvo,
  IconBroto,
  IconBussola,
  IconCabeca,
  IconCalendario,
  IconCheck,
  IconCiclo,
  IconCoracao,
  IconCrescimento,
  IconDocumento,
  IconEmail,
  IconEngrenagem,
  IconEscudo,
  IconGrafico,
  IconInfo,
  IconLiderTravado,
  IconLupa,
  IconPessoa,
  IconPessoas,
  IconSeta,
  IconTempestade,
  IconWhatsapp,
} from "@/components/icons";

type Icone = ComponentType<SVGProps<SVGSVGElement>>;

const EMAIL = "contato@patryx.com.br";
const TELEFONE = "+55 19 99537-0331";
const WHATSAPP = `https://wa.me/5519995370331?text=${encodeURIComponent(
  "Olá! Quero falar com a PATRYX.",
)}`;

const destaques: { Icon: Icone; texto: string }[] = [
  { Icon: IconDocumento, texto: "Laudo NR-1 assinado por psicóloga com CRP" },
  { Icon: IconCabeca, texto: "Método C.P.P. de transformação de liderança" },
  { Icon: IconCrescimento, texto: "Plataforma própria com evolução documentada" },
];

const problemas: { Icon: Icone; texto: string }[] = [
  { Icon: IconPessoas, texto: "Turnover que não cai." },
  { Icon: IconTempestade, texto: "Clima que pesa." },
  {
    Icon: IconLiderTravado,
    texto: "Líderes tecnicamente bons que travam equipes sem perceber.",
  },
];

const pilares: { Icon: Icone; titulo: string; texto: ReactNode }[] = [
  {
    Icon: IconPessoa,
    titulo: "Diagnóstico profundo",
    texto: (
      <>
        Chegamos onde o problema realmente mora:{" "}
        <strong className="font-semibold text-azul">
          na estrutura emocional do líder
        </strong>
        .
      </>
    ),
  },
  {
    Icon: IconGrafico,
    titulo: "Resultados comprovados",
    texto: (
      <>
        Entregamos o que o RH precisa apresentar ao board:{" "}
        <strong className="font-semibold text-azul">
          resultado mensurável, documentado e rastreável
        </strong>{" "}
        ao longo de todo o processo, na plataforma PATRYX.
      </>
    ),
  },
  {
    Icon: IconBroto,
    titulo: "Além do treinamento",
    texto: (
      <>
        <strong className="font-semibold text-azul">Não é treinamento.</strong>{" "}
        É o que acontece quando um líder para de performar e começa a liderar
        de verdade.
      </>
    ),
  },
];

const perfil: { Icon: Icone; texto: string }[] = [
  {
    Icon: IconPessoa,
    texto: "Enfrentam turnover elevado e não conseguem identificar a causa real.",
  },
  {
    Icon: IconAlvo,
    texto: "Precisam responder à NR-1 com profundidade, não com checklist.",
  },
  {
    Icon: IconPessoas,
    texto: "Já rodaram treinamentos convencionais e sabem que o problema continua.",
  },
  {
    Icon: IconCrescimento,
    texto:
      "Querem transformação documentável, não mais uma iniciativa que não deixa rastro.",
  },
];

const entregas: {
  Icon: Icone;
  titulo: string;
  cor: string;
  itens: { Icon: Icone; texto: string }[];
}[] = [
  {
    Icon: IconPessoas,
    titulo: "Para o RH",
    cor: "bg-azul text-offwhite",
    itens: [
      { Icon: IconDocumento, texto: "Laudo técnico NR-1 assinado por psicóloga com CRP" },
      { Icon: IconGrafico, texto: "Dashboard de antes e depois com indicadores rastreáveis" },
      { Icon: IconDocumento, texto: "Relatório executivo para board e auditoria" },
      { Icon: IconCalendario, texto: "Plano de ação de 6 meses a 1 ano" },
    ],
  },
  {
    Icon: IconPessoa,
    titulo: "Para os líderes",
    cor: "bg-salvia text-offwhite",
    itens: [
      { Icon: IconCabeca, texto: "Clareza mental e decisões mais rápidas" },
      { Icon: IconPessoas, texto: "Menos reatividade, mais presença nas relações de equipe" },
      { Icon: IconBroto, texto: "Liderança autêntica no lugar da performance forçada" },
    ],
  },
  {
    Icon: IconAlvo,
    titulo: "Para a organização",
    cor: "bg-cobre text-offwhite",
    itens: [
      { Icon: IconGrafico, texto: "Redução mensurável de turnover e absenteísmo" },
      { Icon: IconPessoas, texto: "Cultura onde as pessoas ficam por escolha" },
      { Icon: IconEscudo, texto: "NR-1 respondida com substância e evidência" },
      { Icon: IconCoracao, texto: "Saúde mental nas organizações" },
    ],
  },
];

const etapas: {
  Icon: Icone;
  fase: string;
  titulo: [string, string?];
  segundaLinhaNormal?: boolean;
  texto: string;
}[] = [
  {
    Icon: IconLupa,
    fase: "Fase 0",
    titulo: ["Diagnóstico", "de NR-1"],
    segundaLinhaNormal: true,
    texto:
      "Avaliação dos riscos psicossociais e da organização do trabalho. É a base para definir prioridades, plano de ação e próximos passos.",
  },
  {
    Icon: IconCabeca,
    fase: "Ato I",
    titulo: ["Pensar", "Clareza"],
    texto:
      "Leitura estratégica do contexto, das prioridades e dos pontos críticos que emergem no diagnóstico.",
  },
  {
    Icon: IconCoracao,
    fase: "Ato II",
    titulo: ["Sentir", "Presença"],
    texto:
      "Fortalecimento da consciência relacional, da presença e da qualidade das interações.",
  },
  {
    Icon: IconBroto,
    fase: "Ato III",
    titulo: ["Agir", "Potência"],
    texto:
      "Execução do plano com responsabilidades, rituais de acompanhamento e intervenções necessárias.",
  },
  {
    Icon: IconCrescimento,
    fase: "Contínuo",
    titulo: ["Monitoramento", "contínuo"],
    segundaLinhaNormal: true,
    texto:
      "Acompanhamento, indicadores e remedição para comparar o antes e o depois, sustentando a evolução.",
  },
];

const ciclo: { Icon: Icone; titulo: string }[] = [
  { Icon: IconLupa, titulo: "Diagnóstico de NR-1" },
  { Icon: IconCheck, titulo: "Plano de ação" },
  { Icon: IconEngrenagem, titulo: "Execução & intervenções" },
  { Icon: IconCrescimento, titulo: "Resultados & remedição" },
];

const intervencoes = [
  "Workshops",
  "Vivências",
  "Treinamento de liderança",
  "Palestras",
  "Atendimentos",
];

const marcadores: { Icon: Icone; texto: string }[] = [
  { Icon: IconBussola, texto: "Clareza & Direção" },
  { Icon: IconPessoas, texto: "Autonomia & Delegação" },
  { Icon: IconEscudo, texto: "Segurança & Conflito" },
  { Icon: IconGrafico, texto: "Sustentabilidade & Carga" },
];

const eixos = [
  { nome: "Pensar", chave: "Clareza", texto: "Racional, precisa, estratégica." },
  { nome: "Sentir", chave: "Presença", texto: "Humana, consciente, relacional." },
  { nome: "Agir", chave: "Potência", texto: "Executável, prática, sustentável." },
];

const recursos: { Icon: Icone; cor: string; texto: string }[] = [
  { Icon: IconGrafico, cor: "bg-azul text-offwhite", texto: "O diagnóstico NR-1 por setor, em tempo real" },
  { Icon: IconDocumento, cor: "bg-salvia text-offwhite", texto: "Os relatórios técnicos assinados, disponíveis para auditoria" },
  { Icon: IconPessoas, cor: "bg-cobre text-offwhite", texto: "O radar de liderança de cada líder" },
  { Icon: IconCheck, cor: "bg-offwhite text-cobre ring-1 ring-cobre/40", texto: "Os planos de ação e check-ins de acompanhamento" },
  { Icon: IconCrescimento, cor: "bg-azul-escuro text-offwhite", texto: "O Dashboard de Evolução com antes e depois documentado" },
];

const passos: { Icon: Icone; texto: string }[] = [
  { Icon: IconDocumento, texto: "Check gratuito" },
  { Icon: IconPessoas, texto: "Conversa de 1h" },
  { Icon: IconLupa, texto: "Diagnóstico de NR-1" },
  { Icon: IconAlvo, texto: "Plano de ação" },
  { Icon: IconGrafico, texto: "Acompanhar" },
];

function BotaoCheck({ className = "" }: { className?: string }) {
  return (
    <a
      href={CHECK_URL}
      className={`inline-flex items-center justify-center rounded-full bg-cobre px-7 py-3.5 text-sm font-medium text-offwhite shadow-[0_10px_30px_-10px_rgba(155,96,72,0.8)] transition-all hover:-translate-y-0.5 hover:bg-cobre-profundo focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-offwhite ${className}`}
    >
      Começar pelo check gratuito
    </a>
  );
}

function Titulo({
  children,
  italico,
  quebra = false,
  claro = false,
  centro = false,
  className = "",
}: {
  children: ReactNode;
  italico?: ReactNode;
  quebra?: boolean;
  claro?: boolean;
  centro?: boolean;
  className?: string;
}) {
  return (
    <div className={`${centro ? "text-center" : ""} ${className}`}>
      <h2
        className={`font-serif text-[2rem] leading-[1.12] sm:text-[2.6rem] lg:text-[3.1rem] ${
          claro ? "text-offwhite" : "text-tinta"
        }`}
      >
        {children}
        {italico && (
          <>
            {quebra ? <br /> : " "}
            <em className={claro ? "" : "text-cobre"}>{italico}</em>
          </>
        )}
      </h2>
      <Divisor centro={centro} className="mt-6" />
    </div>
  );
}

function Rotulo({ children, claro = false }: { children: ReactNode; claro?: boolean }) {
  return (
    <p
      className={`text-xs font-medium uppercase tracking-[0.28em] ${
        claro ? "text-cobre" : "text-cobre-profundo"
      }`}
    >
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <Revelar />

      <main className="flex-1">
        {/* Hero */}
        <section className="textura-escura relative overflow-hidden bg-azul-escuro pt-28 text-offwhite lg:min-h-[46rem] lg:pt-0">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-40 top-10 size-[42rem] rounded-full bg-[radial-gradient(circle,rgba(46,74,94,0.55),transparent_65%)]"
          />
          <div className="relative z-20 mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 sm:px-8 lg:grid-cols-[1.15fr_1fr] lg:pb-0 lg:pt-40">
            <div className="max-w-2xl lg:pb-32">
              <Rotulo claro>Cultura · Mensuração · Impacto</Rotulo>
              <h1 className="mt-7 font-serif text-[2.6rem] leading-[1.08] sm:text-6xl lg:text-[3.2rem] xl:text-[3.45rem]">
                Cultura você sente.
                <br />
                Liderança você mede.
                <br />
                <em className="text-[#e9c3a8]">E é por ela que tudo começa.</em>
              </h1>
              <p className="mt-7 max-w-md text-lg leading-8 text-offwhite/80">
                Diagnóstico, desenvolvimento de liderança e tecnologia própria
                para acompanhar a evolução da sua empresa.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
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

        </section>

        {/* Faixa de destaques */}
        <div className="border-y border-offwhite/10 bg-[#0b2636] px-5 text-offwhite sm:px-8">
          <ul className="mx-auto grid max-w-6xl divide-offwhite/10 sm:grid-cols-3 sm:divide-x">
            {destaques.map(({ Icon, texto }) => (
              <li key={texto} className="flex items-center gap-4 py-6 sm:justify-center sm:px-6">
                <Icon className="size-8 shrink-0 text-cobre" />
                <span className="text-sm leading-5 text-offwhite/85">{texto}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* O problema */}
        <section className="bg-offwhite-claro px-5 py-20 sm:px-8 sm:py-28">
          <div data-revelar className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Titulo quebra italico="PATRYX resolve">
                Os problemas que a
              </Titulo>
              <ul className="mt-10 space-y-6">
                {problemas.map(({ Icon, texto }) => (
                  <li key={texto} className="flex items-center gap-5 text-lg">
                    <span className="grid size-16 shrink-0 place-items-center rounded-full bg-offwhite shadow-[0_8px_24px_-12px_rgba(27,42,51,0.35)] ring-1 ring-cobre/30">
                      <Icon className="size-9 text-cobre" />
                    </span>
                    <span>{texto}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 space-y-4 text-base leading-7 text-tinta/80">
                <p>
                  Você já tentou treinamento. O comportamento muda por algumas
                  semanas. Depois volta.
                </p>
                <p>
                  Porque o problema não está na superfície. Está na estrutura
                  emocional e biográfica de como cada líder opera, no piloto
                  automático que nenhum treinamento convencional alcança.
                </p>
              </div>
            </div>

            <div className="textura-escura relative overflow-hidden rounded-3xl bg-azul-escuro p-8 text-offwhite shadow-[0_30px_60px_-20px_rgba(7,31,46,0.55)] sm:p-12">
              <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 size-80 rounded-full bg-[radial-gradient(circle,rgba(155,96,72,0.35),transparent_65%)]" />
              <Image
                src="/images/folhas.webp"
                alt=""
                width={900}
                height={610}
                className="pointer-events-none absolute -bottom-16 -right-24 w-72 rotate-[150deg] opacity-30"
              />
              <span className="block h-px w-16 bg-cobre" />
              <p className="relative mt-8 font-serif text-3xl leading-tight sm:text-4xl">
                E o resultado disso
                <br />
                <em>tem nome e número:</em>
              </p>
              <p className="relative mt-6 text-base leading-7 text-offwhite/75">
                uma empresa com 100 funcionários e liderança disfuncional pode
                gastar entre
              </p>
              <p className="relative mt-4 font-serif text-5xl font-semibold leading-[1.05] text-[#d9926f] sm:text-6xl">
                R$ 300.000 e<br />
                R$ 900.000
              </p>
              <p className="relative mt-4 font-serif text-2xl italic text-offwhite">
                por ano só em turnover.
              </p>
              <span className="mt-8 block h-px w-16 bg-cobre" />
              <p className="relative mt-4 text-xs tracking-wider text-offwhite/50">
                Fontes: SHRM, 2026 · Robert Half, 2025
              </p>
            </div>
          </div>
        </section>

        {/* Quem somos */}
        <section
          id="a-patryx"
          className="relative overflow-hidden bg-offwhite px-5 py-20 sm:px-8 sm:py-28"
        >
          <Image
            src="/images/simbolo-cor.webp"
            alt=""
            width={512}
            height={486}
            className="pointer-events-none absolute -bottom-24 -left-24 w-[26rem] opacity-[0.07]"
          />
          <div data-revelar className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
            <div>
              <Titulo italico="somos">Quem</Titulo>
              <p className="mt-8 font-serif text-2xl leading-snug text-tinta sm:text-[2rem]">
                A PATRYX é uma consultoria de transformação de liderança
                sustentada por tecnologia própria.
              </p>
            </div>
            <ul className="space-y-4">
              {pilares.map(({ Icon, titulo, texto }) => (
                <li key={titulo} className="flex gap-6 rounded-2xl bg-offwhite-claro/80 p-6 shadow-[0_12px_30px_-18px_rgba(27,42,51,0.35)] ring-1 ring-tinta/5 transition-transform hover:-translate-y-1">
                  <span className="grid size-16 shrink-0 place-items-center rounded-full bg-offwhite ring-1 ring-salvia/30">
                    <Icon className="size-10 text-salvia" />
                  </span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.25em] text-tinta/60">
                      {titulo}
                    </p>
                    <p className="mt-2 border-l border-cobre/60 pl-4 text-lg leading-7 text-tinta/85">
                      {texto}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Para quem servimos */}
        <section className="textura-escura relative overflow-hidden bg-azul-escuro px-5 py-20 text-offwhite sm:px-8 sm:py-28">
          <div data-revelar className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-0">
            <div className="lg:pr-14">
              <Titulo claro italico="servimos">
                Para quem
              </Titulo>
              <p className="mt-8 font-serif text-xl leading-relaxed">
                Atendemos empresas com 80 a 300 funcionários dos setores de
                tecnologia e serviços que:
              </p>
              <ul className="mt-8 space-y-6">
                {perfil.map(({ Icon, texto }) => (
                  <li key={texto} className="flex items-start gap-5">
                    <span className="grid size-14 shrink-0 place-items-center rounded-full bg-offwhite/5 ring-1 ring-cobre/50">
                      <Icon className="size-8 text-cobre" />
                    </span>
                    <span className="pt-3 leading-7 text-offwhite/85">
                      {texto}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-center rounded-3xl bg-gradient-to-br from-offwhite/[0.07] to-transparent p-8 ring-1 ring-offwhite/10 sm:p-10 lg:ml-6">
              <IconPessoa className="size-16 text-cobre" />
              <span className="mt-4 block h-px w-14 bg-cobre" />
              <p className="mt-6 font-serif text-3xl leading-tight sm:text-4xl">
                Quem decide é o <em>Diretor(a) ou Gerente de RH</em>
              </p>
              <p className="mt-6 font-serif text-xl leading-relaxed text-offwhite/85">
                que já sabe distinguir profundidade de superficialidade e
                precisa de uma parceira estratégica, não de mais um fornecedor.
              </p>
            </div>
          </div>
        </section>

        {/* O que entregamos */}
        <section className="bg-offwhite-claro px-5 py-20 sm:px-8 sm:py-28">
          <div data-revelar className="mx-auto max-w-6xl">
            <Titulo italico="entregamos">O que</Titulo>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-tinta/80">
              Um ciclo completo de transformação de liderança, do diagnóstico
              ao monitoramento contínuo, conduzido por metodologia própria e
              registrado na plataforma PATRYX do início ao fim.
            </p>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {entregas.map(({ Icon, titulo, cor, itens }) => (
                <div key={titulo} className="rounded-3xl bg-offwhite p-7 shadow-[0_20px_40px_-24px_rgba(27,42,51,0.35)] ring-1 ring-tinta/5 transition-transform hover:-translate-y-1 sm:p-8">
                  <div className="flex items-center gap-4">
                    <span className={`grid size-16 shrink-0 place-items-center rounded-full ${cor}`}>
                      <Icon className="size-10" />
                    </span>
                    <h3 className="font-serif text-2xl text-tinta">{titulo}</h3>
                  </div>
                  <ul className="mt-8 space-y-5">
                    {itens.map(({ Icon: I, texto }) => (
                      <li key={texto} className="flex items-start gap-4">
                        <span className="grid size-10 shrink-0 place-items-center rounded-full bg-offwhite-claro">
                          <I className="size-6 text-cobre" />
                        </span>
                        <span className="pt-2 leading-6 text-tinta/85">{texto}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Método C.P.P. */}
        <section
          id="metodo"
          className="textura-escura bg-verde-escuro px-5 py-20 text-offwhite sm:px-8 sm:py-28"
        >
          <div data-revelar className="mx-auto max-w-6xl">
            <Titulo claro centro quebra italico="As chaves da liderança">
              O Método C.P.P.
            </Titulo>
            <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-offwhite/85">
              Cada etapa do processo vive na plataforma PATRYX, visível para o
              RH, rastreável para o board e acessível para os líderes a
              qualquer momento.
            </p>
            <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
              {etapas.map(({ Icon, fase, titulo, segundaLinhaNormal, texto }, i) => (
                <li key={fase} className="relative flex flex-col items-center text-center">
                  {i > 0 && (
                    <span
                      aria-hidden
                      className="absolute right-[calc(50%+2.75rem)] top-10 hidden h-px w-[calc(100%-5.5rem+1.5rem)] bg-cobre/60 lg:block"
                    />
                  )}
                  <span className="relative z-10 grid size-20 place-items-center rounded-full bg-gradient-to-b from-[#3d5243] to-verde-escuro shadow-[0_0_0_6px_rgba(42,59,46,1),0_0_30px_rgba(155,96,72,0.35)] ring-1 ring-cobre">
                    <Icon className="size-9 text-offwhite/90" />
                  </span>
                  <p className="mt-5 text-xs font-medium uppercase tracking-[0.22em] text-cobre">
                    {fase}
                  </p>
                  <span className="mt-3 block h-px w-8 bg-cobre/70" />
                  <p className="mt-3 font-serif text-xl leading-snug">
                    {titulo[0]}
                    {titulo[1] && (
                      <>
                        <br />
                        {segundaLinhaNormal ? titulo[1] : <em>{titulo[1]}</em>}
                      </>
                    )}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-offwhite/75">{texto}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Ciclo vivo */}
        <section className="textura-escura bg-azul-escuro px-5 py-20 text-offwhite sm:px-8 sm:py-28">
          <div data-revelar className="mx-auto max-w-6xl">
            <Titulo claro quebra italico="à evolução contínua.">
              Do diagnóstico de NR-1
            </Titulo>
            <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1fr_auto]">
              <div>
                {/* Ciclo circular (tablet e computador) */}
                <div className="relative mx-auto hidden aspect-square w-full max-w-[40rem] sm:block">
                  <svg viewBox="0 0 400 400" aria-hidden className="absolute inset-0 size-full">
                    <defs>
                      <marker id="seta-ciclo" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                        <path d="M0 0 10 5 0 10Z" fill="#9b6048" />
                      </marker>
                    </defs>
                    <circle cx="200" cy="200" r="140" fill="none" stroke="rgba(244,240,232,0.12)" strokeWidth="1" strokeDasharray="2 6" />
                    {[0, 90, 180, 270].map((inicio) => {
                      const r = 140;
                      const a1 = ((inicio - 90 + 24) * Math.PI) / 180;
                      const a2 = ((inicio - 90 + 66) * Math.PI) / 180;
                      const x1 = 200 + r * Math.cos(a1);
                      const y1 = 200 + r * Math.sin(a1);
                      const x2 = 200 + r * Math.cos(a2);
                      const y2 = 200 + r * Math.sin(a2);
                      return (
                        <path
                          key={inicio}
                          d={`M${x1.toFixed(1)} ${y1.toFixed(1)} A${r} ${r} 0 0 1 ${x2.toFixed(1)} ${y2.toFixed(1)}`}
                          fill="none"
                          stroke="#9b6048"
                          strokeWidth="1.6"
                          markerEnd="url(#seta-ciclo)"
                        />
                      );
                    })}
                  </svg>

                  {ciclo.map(({ Icon, titulo }, i) => {
                    const pos = [
                      "left-1/2 top-[15%]",
                      "left-[85%] top-1/2",
                      "left-1/2 top-[85%]",
                      "left-[15%] top-1/2",
                    ][i];
                    return (
                      <div
                        key={titulo}
                        className={`absolute ${pos} flex w-40 -translate-x-1/2 -translate-y-7 flex-col items-center gap-3 text-center`}
                      >
                        <span
                          className={`grid size-14 place-items-center rounded-full bg-azul-escuro shadow-[0_0_24px_rgba(155,96,72,0.3)] ring-1 ${
                            i === 0 ? "ring-cobre" : "ring-offwhite/40"
                          }`}
                        >
                          <Icon className="size-7" />
                        </span>
                        <span className="text-xs font-medium uppercase leading-snug tracking-[0.12em]">
                          <span className="text-cobre">{i + 1}.</span> {titulo}
                        </span>
                      </div>
                    );
                  })}

                  <div className="absolute left-1/2 top-1/2 grid size-36 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[radial-gradient(circle,rgba(155,96,72,0.25),transparent_70%)] text-center ring-1 ring-cobre/60">
                    <div>
                      <IconCiclo className="mx-auto mb-1 size-7 text-cobre" />
                      <p className="text-base font-semibold tracking-[0.2em]">CICLO</p>
                      <p className="font-serif text-xl italic text-cobre">vivo</p>
                      <p className="mt-1 text-xs text-offwhite/75">3 meses a 1 ano</p>
                    </div>
                  </div>
                </div>

                {/* Ciclo em sequência (celular) */}
                <ol className="mx-auto max-w-sm sm:hidden">
                  {ciclo.map(({ Icon, titulo }, i) => (
                    <li key={titulo} className="flex flex-col items-center">
                      <div className="flex w-full items-center gap-4 rounded-full bg-offwhite/[0.04] px-5 py-3 ring-1 ring-offwhite/20">
                        <span className="grid size-11 shrink-0 place-items-center rounded-full bg-azul-escuro ring-1 ring-cobre/70">
                          <Icon className="size-6" />
                        </span>
                        <span className="text-xs font-medium uppercase tracking-[0.12em]">
                          <span className="text-cobre">{i + 1}.</span> {titulo}
                        </span>
                      </div>
                      <span aria-hidden className="my-1 text-cobre">↓</span>
                    </li>
                  ))}
                  <li className="flex items-center justify-center gap-3 rounded-full px-5 py-3 text-center ring-1 ring-cobre/60">
                    <IconCiclo className="size-6 text-cobre" />
                    <span className="text-sm">
                      <span className="font-semibold tracking-[0.15em]">CICLO</span>{" "}
                      <em className="font-serif text-cobre">vivo</em> · volta ao diagnóstico ·
                      3 meses a 1 ano
                    </span>
                  </li>
                </ol>
              </div>
              <div className="rounded-2xl bg-offwhite/[0.04] p-6 ring-1 ring-offwhite/15 lg:w-64">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-cobre">
                  Execução & intervenções
                </p>
                <ul className="mt-4 space-y-2 text-offwhite/85">
                  {intervencoes.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="size-1.5 rounded-full bg-cobre" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Marcadores e eixos */}
        <section className="textura-clara bg-offwhite-claro px-5 py-20 sm:px-8 sm:py-28">
          <div data-revelar className="mx-auto max-w-6xl">
            <Titulo quebra italico="Três eixos desenvolvidos.">
              Quatro marcadores medidos.
            </Titulo>
            <div className="mt-12 grid gap-5 lg:grid-cols-[1fr_1fr_1.15fr]">
              <div className="grid gap-5 sm:grid-cols-2 lg:col-span-2">
                {marcadores.map(({ Icon, texto }) => (
                  <div
                    key={texto}
                    className="rounded-3xl bg-offwhite p-7 shadow-[0_20px_40px_-24px_rgba(27,42,51,0.35)] ring-1 ring-tinta/5 transition-transform hover:-translate-y-1"
                  >
                    <span className="grid size-16 place-items-center rounded-full bg-offwhite-claro">
                      <Icon className="size-10 text-verde-escuro" />
                    </span>
                    <p className="mt-6 font-serif text-2xl text-tinta">{texto}</p>
                    <span className="mt-4 block h-0.5 w-12 bg-cobre" />
                  </div>
                ))}
              </div>
              <div className="textura-escura relative overflow-hidden rounded-3xl bg-verde-escuro p-8 text-offwhite shadow-[0_30px_60px_-24px_rgba(42,59,46,0.7)] sm:p-10">
                <Image
                  src="/images/folhas.webp"
                  alt=""
                  width={900}
                  height={610}
                  className="pointer-events-none absolute -bottom-16 -right-24 w-80 rotate-[110deg] opacity-15"
                />
                <ul className="relative divide-y divide-cobre/50">
                  {eixos.map(({ nome, chave, texto }) => (
                    <li key={nome} className="py-6 first:pt-0 last:pb-0">
                      <p className="font-serif text-3xl">
                        <span className="uppercase text-cobre">{nome}</span>{" "}
                        <span className="text-offwhite/80">—</span> {chave}
                      </p>
                      <p className="mt-2 text-offwhite/80">{texto}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Plataforma */}
        <section
          id="plataforma"
          className="relative overflow-hidden bg-offwhite px-5 py-20 sm:px-8 sm:py-28"
        >
          <div aria-hidden className="pointer-events-none absolute -right-40 top-1/4 size-[40rem] rounded-full bg-[radial-gradient(circle,rgba(107,127,111,0.22),transparent_65%)]" />
          <div data-revelar className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <Titulo italico="PATRYX">A plataforma</Titulo>
              <p className="mt-8 text-lg leading-8 text-tinta/85">
                A plataforma PATRYX é o que torna o processo rastreável do
                primeiro diagnóstico ao último check-in.
              </p>
              <p className="mt-6 text-tinta/70">
                O cliente acessa com login próprio e acompanha:
              </p>
              <ul className="mt-5 space-y-4">
                {recursos.map(({ Icon, cor, texto }) => (
                  <li key={texto} className="flex items-center gap-4">
                    <span className={`grid size-11 shrink-0 place-items-center rounded-full shadow-[0_8px_20px_-10px_rgba(27,42,51,0.5)] ${cor}`}>
                      <Icon className="size-6" />
                    </span>
                    <span className="border-l border-cobre/50 pl-4 leading-6 text-tinta/85">
                      {texto}
                    </span>
                  </li>
                ))}
              </ul>
              <span className="mt-8 block h-px w-16 bg-cobre" />
              <p className="mt-6 leading-7 text-tinta/75">
                Não é software de terceiros. É uma plataforma própria da
                PATRYX, desenvolvida para que o RH tenha evidência real de tudo
                o que acontece dentro do processo e possa apresentar ao board
                com clareza e segurança.
              </p>
              <a
                href={AREA_CLIENTE_URL}
                className="group mt-8 inline-flex items-center gap-3 font-medium text-cobre"
              >
                <span className="border-b border-cobre pb-1">
                  Acessar a área do cliente
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
                className="h-auto w-full drop-shadow-[0_30px_40px_rgba(27,42,51,0.18)]"
              />
              <figcaption className="-mt-4 text-right font-serif text-sm italic text-tinta/70">
                Imagem ilustrativa
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Quem conduz */}
        <section
          id="quem-conduz"
          className="textura-clara bg-offwhite-claro px-5 py-20 sm:px-8 sm:py-28"
        >
          <div data-revelar className="mx-auto max-w-6xl">
            <Titulo italico="o processo">Quem conduz</Titulo>
            <div className="mt-12 grid items-center gap-10 md:grid-cols-[minmax(0,24rem)_1fr] md:gap-16">
              <div className="relative mx-auto w-full max-w-sm">
                <span aria-hidden className="absolute -bottom-4 -right-4 h-full w-full rounded-3xl ring-1 ring-cobre" />
                <span aria-hidden className="absolute -left-5 -top-5 size-24 rounded-full bg-salvia/25" />
              <Image
                src="/images/patricia-hirayama.webp"
                alt="Patricia Figueiredo, psicóloga e fundadora da PATRYX"
                width={900}
                height={1125}
                sizes="(min-width: 768px) 24rem, 100vw"
                className="relative aspect-[4/5] w-full rounded-3xl object-cover shadow-[0_30px_60px_-24px_rgba(27,42,51,0.5)]"
              />
              </div>
              <div>
                <h3 className="font-serif text-4xl leading-tight text-tinta sm:text-5xl">
                  Patricia <em>Figueiredo</em>
                </h3>
                <span className="mt-5 block h-px w-14 bg-cobre" />
                <p className="mt-6 text-lg leading-8 text-tinta/85">
                  Psicóloga (CRP 06/96792), especialista em psicotraumatologia.
                  Fundadora da PATRYX e criadora do Método C.P.P.
                </p>
                <p className="mt-5 leading-7 text-tinta/75">
                  Construiu a metodologia a partir de uma busca pessoal real,
                  não de teoria importada. Sabe o preço que o piloto automático
                  cobra nas pessoas e escolheu construir uma forma diferente de
                  trabalhar com liderança: com profundidade clínica, linguagem
                  executiva e capacidade de adaptar a condução em tempo real.
                </p>
              </div>
            </div>
            <blockquote className="mx-auto mt-16 max-w-4xl text-center font-serif text-xl leading-relaxed sm:text-2xl">
              <Image
                src="/images/separador-simbolo.webp"
                alt=""
                width={1417}
                height={164}
                className="mx-auto mb-8 h-auto w-full max-w-xl"
              />
              <p className="italic text-tinta">
                A experiência clínica que sustenta a transformação da PATRYX.
              </p>
              <p className="italic text-cobre">
                Profundidade, escuta real e liderança com presença.
              </p>
            </blockquote>
          </div>
        </section>

        {/* Faixa com o padrão principal da marca */}
        <div aria-hidden className="faixa-padrao h-28 sm:h-36" />

        {/* Próximo passo */}
        <section
          id="contato"
          className="textura-escura relative overflow-hidden bg-azul-escuro px-5 py-20 text-offwhite sm:px-8 sm:py-28"
        >
          <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 size-[50rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(155,96,72,0.22),transparent_60%)]" />
          <Image
            src="/images/folhas.webp"
            alt=""
            width={900}
            height={610}
            className="pointer-events-none absolute -bottom-6 -left-20 w-64 rotate-[20deg] opacity-90"
          />
          <div data-revelar className="relative mx-auto max-w-5xl text-center">
            <Rotulo claro>Próximo passo</Rotulo>
            <Divisor centro className="mt-4" />
            <h2 className="mt-6 font-serif text-[2.2rem] leading-tight sm:text-5xl lg:text-[3.4rem]">
              Do primeiro clique ao <em>plano em execução</em>
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-offwhite/80">
              Começamos com escuta e diagnóstico. A partir do diagnóstico de
              NR-1, definimos prioridades, estruturamos o plano de ação e
              acompanhamos a evolução com clareza.
            </p>

            <ol className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
              {passos.map(({ Icon, texto }, i) => (
                <li key={texto} className="relative flex flex-col items-center gap-4">
                  {i > 0 && (
                    <span
                      aria-hidden
                      className="absolute right-[calc(50%+2.5rem)] top-8 hidden h-px w-[calc(100%-5rem+1rem)] bg-cobre/60 lg:block"
                    />
                  )}
                  <span className="relative grid size-16 place-items-center rounded-full bg-gradient-to-b from-[#3d5243] to-verde-escuro ring-1 ring-cobre/70">
                    <Icon className="size-8" />
                    <span className="absolute -right-1 -top-1 grid size-6 place-items-center rounded-full bg-cobre text-[0.7rem] font-semibold">
                      {i + 1}
                    </span>
                  </span>
                  <span className="text-sm font-medium">{texto}</span>
                </li>
              ))}
            </ol>

            <div className="mx-auto mt-12 flex max-w-4xl items-start gap-5 rounded-2xl bg-offwhite/[0.04] p-6 text-left ring-1 ring-offwhite/15">
              <IconInfo className="size-8 shrink-0 text-cobre" />
              <p className="border-l border-offwhite/20 pl-5 text-sm leading-6 text-offwhite/80">
                Quando indicado pelo diagnóstico de NR-1, o plano de ação pode
                incluir Diagnóstico de Liderança 360º e outras intervenções
                para a liderança e/ou a empresa toda.
              </p>
            </div>

            <BotaoCheck className="mt-12 px-10" />

            <div className="mt-10 flex flex-col items-center justify-center gap-4 text-sm sm:flex-row sm:gap-8">
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 hover:text-cobre">
                <IconEmail className="size-6 text-cobre" />
                {EMAIL}
              </a>
              <span aria-hidden className="hidden h-6 w-px bg-cobre/60 sm:block" />
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-cobre"
              >
                <IconWhatsapp className="size-6 text-cobre" />
                {TELEFONE}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-azul-escuro px-5 pb-10 text-offwhite sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-4 border-t border-offwhite/10 pt-8 sm:flex-row sm:gap-8">
          <Image
            src="/images/logo-offwhite.svg"
            alt="PATRYX"
            width={1985}
            height={470}
            unoptimized
            className="h-9 w-auto"
          />
          <span aria-hidden className="hidden h-8 w-px bg-offwhite/30 sm:block" />
          <nav className="flex items-center gap-6 text-sm text-offwhite/80">
            <a href={CHECK_URL} className="hover:text-cobre">
              Check gratuito
            </a>
            <a href={AREA_CLIENTE_URL} className="hover:text-cobre">
              Área do cliente
            </a>
          </nav>
        </div>
      </footer>
    </>
  );
}
