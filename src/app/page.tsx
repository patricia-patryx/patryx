import Image from "next/image";
import type { ReactNode } from "react";
import { Header } from "@/components/header";
import { AREA_CLIENTE_URL, CHECK_URL } from "@/lib/links";

const EMAIL = "contato@patryx.com.br";
const TELEFONE = "+55 19 99537-0331";
const WHATSAPP = `https://wa.me/5519995370331?text=${encodeURIComponent(
  "Olá! Quero falar com a PATRYX.",
)}`;

const linha = "border-tinta/15";

/** Cada bloco ocupa a altura da tela (menos o menu) e centraliza o conteúdo. */
function Secao({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`flex min-h-[calc(100svh-4rem)] items-center px-5 py-16 sm:px-10 lg:px-20 lg:py-12 ${className}`}
    >
      <div className="mx-auto w-full max-w-[75rem]">{children}</div>
    </section>
  );
}

function Rotulo({ children, claro = false }: { children: ReactNode; claro?: boolean }) {
  return (
    <p
      className={`text-xs font-medium uppercase tracking-[0.22em] ${
        claro ? "text-cobre-claro" : "text-cobre-profundo"
      }`}
    >
      {children}
    </p>
  );
}

function Titulo({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={`font-serif text-[2rem] leading-[1.1] tracking-[-0.01em] sm:text-[2.5rem] xl:text-[2.85rem] ${className}`}
    >
      {children}
    </h2>
  );
}

function BotaoCheck() {
  return (
    <a
      href={CHECK_URL}
      className="inline-block rounded-full bg-cobre px-7 py-4 text-[0.95rem] font-medium text-offwhite transition-colors hover:bg-cobre-profundo"
    >
      Começar pelo check gratuito
    </a>
  );
}

const problemas = [
  "Turnover que não cai.",
  "Clima que pesa.",
  "Líderes tecnicamente bons que travam equipes sem perceber.",
];

const pilares = [
  {
    titulo: "Diagnóstico profundo",
    texto: "Chegamos onde o problema realmente mora: na estrutura emocional do líder.",
  },
  {
    titulo: "Resultados comprovados",
    texto:
      "Entregamos o que o RH precisa apresentar ao board: resultado mensurável, documentado e rastreável, na plataforma PATRYX.",
  },
  {
    titulo: "Além do treinamento",
    texto:
      "Não é treinamento. É o que acontece quando um líder para de performar e começa a liderar de verdade.",
  },
];

const perfil = [
  "Enfrentam turnover elevado e não conseguem identificar a causa real.",
  "Precisam responder à NR-1 com profundidade, não com checklist.",
  "Já rodaram treinamentos convencionais e sabem que o problema continua.",
  "Querem transformação documentável, não mais uma iniciativa que não deixa rastro.",
];

const entregas = [
  {
    titulo: "Para o RH",
    cor: "border-azul",
    itens: [
      "Laudo técnico NR-1 assinado por psicóloga com CRP",
      "Dashboard de antes e depois com indicadores rastreáveis",
      "Relatório executivo para board e auditoria",
      "Plano de ação de 6 meses a 1 ano",
    ],
  },
  {
    titulo: "Para os líderes",
    cor: "border-salvia",
    itens: [
      "Clareza mental e decisões mais rápidas",
      "Menos reatividade, mais presença nas relações de equipe",
      "Liderança autêntica no lugar da performance forçada",
    ],
  },
  {
    titulo: "Para a organização",
    cor: "border-cobre",
    itens: [
      "Redução mensurável de turnover e absenteísmo",
      "Cultura onde as pessoas ficam por escolha",
      "NR-1 respondida com substância e evidência",
      "Saúde mental nas organizações",
    ],
  },
];

const etapas: { fase: string; titulo: ReactNode; texto: string }[] = [
  {
    fase: "Fase 0",
    titulo: (
      <>
        Diagnóstico
        <br />
        de NR-1
      </>
    ),
    texto:
      "Avaliação dos riscos psicossociais e da organização do trabalho. A base para definir prioridades e o plano de ação.",
  },
  {
    fase: "Ato I",
    titulo: (
      <>
        Pensar
        <br />
        <em>Clareza</em>
      </>
    ),
    texto:
      "Leitura estratégica do contexto, das prioridades e dos pontos críticos que emergem no diagnóstico.",
  },
  {
    fase: "Ato II",
    titulo: (
      <>
        Sentir
        <br />
        <em>Presença</em>
      </>
    ),
    texto:
      "Fortalecimento da consciência relacional, da presença e da qualidade das interações.",
  },
  {
    fase: "Ato III",
    titulo: (
      <>
        Agir
        <br />
        <em>Potência</em>
      </>
    ),
    texto:
      "Execução do plano com responsabilidades, rituais de acompanhamento e intervenções necessárias.",
  },
  {
    fase: "Contínuo",
    titulo: (
      <>
        Monitoramento
        <br />
        contínuo
      </>
    ),
    texto:
      "Indicadores e remedição para comparar o antes e o depois, sustentando a evolução.",
  },
];

const ciclo = [
  { pos: "left-1/2 top-[12.5%]", texto: "1 · Diagnóstico de NR-1" },
  { pos: "left-[87.5%] top-1/2", texto: "2 · Plano de ação" },
  { pos: "left-1/2 top-[87.5%]", texto: "3 · Execução & intervenções" },
  { pos: "left-[12.5%] top-1/2 max-w-[9.5rem]", texto: "4 · Resultados & remedição" },
];

const marcadores = [
  "Clareza & Direção",
  "Autonomia & Delegação",
  "Segurança & Conflito",
  "Sustentabilidade & Carga",
];

const eixos = [
  { nome: "Pensar", chave: "Clareza", texto: "Racional, precisa, estratégica." },
  { nome: "Sentir", chave: "Presença", texto: "Humana, consciente, relacional." },
  { nome: "Agir", chave: "Potência", texto: "Executável, prática, sustentável." },
];

const recursos = [
  "O diagnóstico NR-1 por setor, em tempo real",
  "Os relatórios técnicos assinados, disponíveis para auditoria",
  "O radar de liderança de cada líder",
  "Os planos de ação e check-ins de acompanhamento",
  "O Dashboard de Evolução com antes e depois documentado",
];

const passos = [
  "Check gratuito",
  "Conversa de 1h",
  "Diagnóstico de NR-1",
  "Plano de ação",
  "Acompanhar",
];

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex-1">
        {/* Abertura */}
        <section className="flex min-h-svh items-center bg-azul-escuro px-5 pb-16 pt-28 text-offwhite sm:px-10 lg:px-20 lg:pb-12 lg:pt-24">
          <div className="mx-auto grid w-full max-w-[80rem] items-center gap-12 lg:grid-cols-[1.12fr_0.88fr]">
            <div className="flex flex-col gap-[clamp(1rem,3svh,1.75rem)]">
              <Rotulo claro>Cultura · Mensuração · Impacto</Rotulo>
              <h1 className="font-serif text-[2.6rem] leading-[1.05] tracking-[-0.015em] sm:text-6xl lg:text-[clamp(2.75rem,min(4.6vw,8.2svh),4.25rem)]">
                Cultura você sente.
                <br />
                Liderança você mede.
                <br />
                <em className="text-[#e2b79a]">E é por ela que tudo começa.</em>
              </h1>
              <p className="max-w-md text-lg leading-8 text-offwhite/75">
                Diagnóstico, desenvolvimento de liderança e tecnologia própria
                para acompanhar a evolução da sua empresa.
              </p>
              <div className="flex flex-wrap items-center gap-x-7 gap-y-4 pt-2">
                <BotaoCheck />
                <a
                  href="#metodo"
                  className="border-b border-cobre pb-1 text-[0.95rem] text-offwhite hover:text-cobre-claro"
                >
                  Conheça o método
                </a>
              </div>
            </div>
            <div className="hero-photo -mr-5 sm:-mr-10 lg:mr-0">
              <Image
                src="/images/paisagem-hero.webp"
                alt="Montanhas ao amanhecer sobre a mata coberta de névoa"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                fetchPriority="high"
                loading="eager"
              />
            </div>
          </div>
        </section>

        {/* 01 O problema */}
        <Secao>
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div className="flex flex-col gap-6">
              <Rotulo>01 — O problema</Rotulo>
              <Titulo>
                Os problemas que a
                <br />
                <em className="text-cobre">PATRYX resolve</em>
              </Titulo>
              <ol className={`border-t ${linha}`}>
                {problemas.map((p) => (
                  <li key={p} className={`border-b ${linha} py-4 text-lg`}>
                    {p}
                  </li>
                ))}
              </ol>
              <p className="leading-7 text-tinta/70">
                Você já tentou treinamento. O comportamento muda por algumas
                semanas. Depois volta. Porque o problema não está na superfície:
                está na estrutura emocional e biográfica de como cada líder
                opera, no piloto automático que nenhum treinamento convencional
                alcança.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/foto-turnover.webp"
                alt="Profissionais caminhando em direção à saída de um corredor iluminado"
                width={560}
                height={1360}
                sizes="(min-width: 1024px) 30vw, 100vw"
                className="h-[min(62svh,34rem)] w-full rounded-sm object-cover"
              />
              <div className="relative -mt-24 ml-6 border-t-2 border-cobre bg-papel p-6 sm:ml-12 lg:-ml-16">
                <p className="font-serif text-xl leading-snug">
                  E o resultado disso <em>tem nome e número:</em>
                </p>
                <p className="mt-2 text-sm text-tinta/70">
                  uma empresa com 100 funcionários e liderança disfuncional pode
                  gastar entre
                </p>
                <p className="mt-2 font-serif text-4xl leading-tight tracking-[-0.02em] text-cobre-profundo">
                  R$ 300 mil a R$ 900 mil
                </p>
                <p className="mt-1 font-serif italic">por ano, só em turnover.</p>
                <p className="mt-3 text-xs tracking-wide text-tinta/55">
                  Fontes: SHRM, 2026 · Robert Half, 2025
                </p>
              </div>
            </div>
          </div>
        </Secao>

        {/* 02 Quem somos */}
        <Secao id="a-patryx" className="bg-areia">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-5">
                <Rotulo>02 — Quem somos</Rotulo>
                <p className="font-serif text-[1.75rem] leading-[1.25] sm:text-[2.1rem]">
                  A PATRYX é uma consultoria de transformação de liderança{" "}
                  <em className="text-cobre">sustentada por tecnologia própria.</em>
                </p>
              </div>
              <ul className="flex flex-col">
                {pilares.map(({ titulo, texto }) => (
                  <li key={titulo} className={`border-t ${linha} py-4`}>
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-azul">
                      {titulo}
                    </p>
                    <p className="mt-1.5 leading-7">{texto}</p>
                  </li>
                ))}
              </ul>
            </div>
            <Image
              src="/images/ambiente-patryx.webp"
              alt="Recepção corporativa com a marca PATRYX na parede"
              width={1448}
              height={688}
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="h-[min(60svh,32rem)] w-full rounded-sm object-cover"
            />
          </div>
        </Secao>

        {/* 03 Para quem servimos */}
        <Secao>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col gap-6">
              <Rotulo>03 — Para quem servimos</Rotulo>
              <Titulo>
                Empresas de 80 a 300 pessoas,
                <br />
                <em className="text-cobre">de tecnologia e serviços.</em>
              </Titulo>
              <div className="mt-4 border-t-2 border-azul pt-6">
                <p className="font-serif text-[1.35rem] leading-snug">
                  Quem decide é o <em>Diretor(a) ou Gerente de RH</em>, que já
                  sabe distinguir profundidade de superficialidade e precisa de
                  uma parceira estratégica, não de mais um fornecedor.
                </p>
              </div>
            </div>
            <ol className={`border-b ${linha}`}>
              {perfil.map((p, i) => (
                <li key={p} className={`flex gap-6 border-t ${linha} py-5`}>
                  <span className="min-w-6 font-serif text-xl text-cobre">{i + 1}</span>
                  <span className="text-[1.05rem] leading-7">{p}</span>
                </li>
              ))}
            </ol>
          </div>
        </Secao>

        {/* 04 O que entregamos */}
        <Secao className="bg-areia">
          <div className="flex flex-col gap-12">
            <div className="flex max-w-3xl flex-col gap-5">
              <Rotulo>04 — O que entregamos</Rotulo>
              <Titulo>
                Um ciclo completo,{" "}
                <em className="text-cobre">do diagnóstico ao monitoramento contínuo.</em>
              </Titulo>
              <p className="leading-7 text-tinta/70">
                Conduzido por metodologia própria e registrado na plataforma
                PATRYX do início ao fim.
              </p>
            </div>
            <div className="grid gap-10 md:grid-cols-3 md:gap-12">
              {entregas.map(({ titulo, cor, itens }) => (
                <div key={titulo} className="flex flex-col gap-3.5">
                  <p className={`border-b-2 ${cor} pb-3 font-serif text-2xl`}>{titulo}</p>
                  {itens.map((i) => (
                    <p key={i} className="leading-6">
                      {i}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Secao>

        {/* 05 Método C.P.P. */}
        <Secao id="metodo" className="bg-verde-escuro text-offwhite">
          <div className="flex flex-col gap-12">
            <div className="flex max-w-3xl flex-col gap-5">
              <Rotulo claro>05 — O método</Rotulo>
              <Titulo>
                O Método C.P.P.
                <br />
                <em>As chaves da liderança</em>
              </Titulo>
              <p className="leading-7 text-offwhite/75">
                Cada etapa vive na plataforma PATRYX: visível para o RH,
                rastreável para o board e acessível para os líderes a qualquer
                momento.
              </p>
            </div>
            <ol className="grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
              {etapas.map(({ fase, titulo, texto }) => (
                <li key={fase} className="flex flex-col gap-3 border-t border-offwhite/30 pt-6">
                  <span className="text-xs font-medium uppercase tracking-[0.22em] text-cobre-claro">
                    {fase}
                  </span>
                  <span className="font-serif text-2xl leading-tight">{titulo}</span>
                  <span className="text-[0.95rem] leading-6 text-offwhite/70">{texto}</span>
                </li>
              ))}
            </ol>
          </div>
        </Secao>

        {/* 06 Ciclo vivo */}
        <Secao>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col gap-6">
              <Rotulo>06 — Ciclo vivo</Rotulo>
              <Titulo>
                Do diagnóstico de NR-1
                <br />
                <em className="text-cobre">à evolução contínua.</em>
              </Titulo>
              <p className="text-lg leading-8 text-tinta/70">
                Um ciclo de 3 meses a 1 ano que recomeça a cada remedição. A
                execução pode incluir workshops, vivências, treinamento de
                liderança, palestras e atendimentos.
              </p>
            </div>
            <div className="relative mx-auto aspect-square w-full max-w-[min(30rem,62svh)]">
              <svg viewBox="0 0 400 400" aria-hidden className="absolute inset-0 size-full">
                <circle cx="200" cy="200" r="150" fill="none" stroke="#9b6048" strokeWidth="1" />
                <path d="M283 69 l6 12 l-13 -1" fill="none" stroke="#9b6048" strokeWidth="1.5" />
                <path d="M331 283 l-12 6 l1 -13" fill="none" stroke="#9b6048" strokeWidth="1.5" />
                <path d="M117 331 l-6 -12 l13 1" fill="none" stroke="#9b6048" strokeWidth="1.5" />
                <path d="M69 117 l12 -6 l-1 13" fill="none" stroke="#9b6048" strokeWidth="1.5" />
              </svg>
              {ciclo.map(({ pos, texto }) => (
                <p
                  key={texto}
                  className={`absolute ${pos} w-max -translate-x-1/2 -translate-y-1/2 bg-papel px-2.5 py-1.5 text-center text-[0.7rem] font-medium uppercase tracking-[0.08em] sm:text-xs`}
                >
                  {texto}
                </p>
              ))}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <p className="font-serif text-3xl leading-none sm:text-4xl">
                  Ciclo <em className="text-cobre">vivo</em>
                </p>
                <p className="mt-2.5 text-sm text-tinta/65">3 meses a 1 ano</p>
              </div>
            </div>
          </div>
        </Secao>

        {/* 07 O que medimos */}
        <Secao className="bg-areia">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-5">
                <Rotulo>07 — O que medimos</Rotulo>
                <Titulo>
                  Quatro marcadores medidos.
                  <br />
                  <em className="text-cobre">Três eixos desenvolvidos.</em>
                </Titulo>
              </div>
              <div className="grid grid-cols-2 gap-x-8">
                {marcadores.map((m) => (
                  <p key={m} className={`border-t ${linha} py-3.5 font-serif text-lg sm:text-xl`}>
                    {m}
                  </p>
                ))}
              </div>
              <div className="grid gap-5 rounded-sm bg-verde-escuro p-6 text-offwhite sm:grid-cols-3">
                {eixos.map(({ nome, chave, texto }) => (
                  <div key={nome}>
                    <p className="font-serif text-lg whitespace-nowrap">
                      <span className="text-cobre-claro">{nome}</span> — {chave}
                    </p>
                    <p className="mt-1.5 text-sm leading-6 text-offwhite/75">{texto}</p>
                  </div>
                ))}
              </div>
            </div>
            <figure>
              <Image
                src="/images/plataforma-indice.webp"
                alt="Plataforma PATRYX no celular e no notebook, com o Índice de Liderança Consciente"
                width={1400}
                height={687}
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="h-auto w-full rounded-sm"
              />
              <figcaption className="mt-2 text-right text-xs text-tinta/55">
                Imagem ilustrativa
              </figcaption>
            </figure>
          </div>
        </Secao>

        {/* 08 Plataforma */}
        <Secao id="plataforma">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <div className="flex flex-col gap-5">
              <Rotulo>08 — Plataforma</Rotulo>
              <Titulo>
                A plataforma <em className="text-cobre">PATRYX</em>
              </Titulo>
              <p className="leading-7 text-tinta/70">
                O que torna o processo rastreável do primeiro diagnóstico ao
                último check-in. O cliente acessa com login próprio e acompanha:
              </p>
              <ul className={`border-t ${linha}`}>
                {recursos.map((r) => (
                  <li key={r} className={`border-b ${linha} py-2.5 text-[0.98rem]`}>
                    {r}
                  </li>
                ))}
              </ul>
              <p className="text-[0.95rem] leading-6 text-tinta/65">
                Não é software de terceiros: é uma plataforma própria, para que
                o RH tenha evidência real do processo e possa apresentar ao
                board com clareza e segurança.
              </p>
              <a href={AREA_CLIENTE_URL} className="self-start font-medium text-cobre-profundo hover:text-tinta">
                Acessar a área do cliente →
              </a>
            </div>
            <figure>
              <Image
                src="/images/plataforma-dispositivos.webp"
                alt="Painel da plataforma PATRYX no notebook e no celular, com diagnóstico NR-1 por setor e radar de liderança"
                width={1600}
                height={1076}
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="h-auto max-h-[70svh] w-full rounded-sm object-contain"
              />
              <figcaption className="mt-2 text-right text-xs text-tinta/55">
                Imagem ilustrativa
              </figcaption>
            </figure>
          </div>
        </Secao>

        {/* 09 Quem conduz */}
        <Secao id="quem-conduz" className="bg-areia">
          <div className="grid items-center gap-12 md:grid-cols-[minmax(0,0.8fr)_1.2fr] lg:gap-16">
            <Image
              src="/images/patricia-figueiredo.webp"
              alt="Patricia Figueiredo, psicóloga e fundadora da PATRYX"
              width={900}
              height={1125}
              sizes="(min-width: 768px) 35vw, 100vw"
              className="mx-auto aspect-[4/5] max-h-[72svh] w-full max-w-md rounded-sm object-cover"
            />
            <div className="flex flex-col gap-5">
              <Rotulo>09 — Quem conduz o processo</Rotulo>
              <Titulo>
                Patricia <em className="text-cobre">Figueiredo</em>
              </Titulo>
              <p className="text-lg leading-8">
                Psicóloga (CRP 06/96792), especialista em psicotraumatologia.
                Fundadora da PATRYX e criadora do Método C.P.P.
              </p>
              <p className="leading-7 text-tinta/70">
                Construiu a metodologia a partir de uma busca pessoal real, não
                de teoria importada. Sabe o preço que o piloto automático cobra
                nas pessoas e escolheu trabalhar com liderança de outro jeito:
                com profundidade clínica, linguagem executiva e capacidade de
                adaptar a condução em tempo real.
              </p>
              <Image
                src="/images/separador-simbolo.webp"
                alt=""
                width={1417}
                height={164}
                className="mt-2 h-auto w-full max-w-xs"
              />
              <p className="font-serif text-xl italic leading-snug">
                Profundidade, escuta real e liderança com presença.
              </p>
            </div>
          </div>
        </Secao>

        {/* Faixa com o padrão principal da marca (único uso do padrão) */}
        <div
          aria-hidden
          className="h-20 bg-[#fbf7ef] bg-[url('/images/padrao-colorido.webp')] bg-[length:362px_272px] bg-center"
        />

        {/* 10 Próximo passo */}
        <section
          id="contato"
          className="flex min-h-[calc(100svh-4rem)] flex-col justify-between bg-azul-escuro px-5 pt-16 text-offwhite sm:px-10 lg:px-20 lg:pt-12"
        >
          <div className="mx-auto my-auto flex w-full max-w-[75rem] flex-col gap-10">
            <div className="flex max-w-3xl flex-col gap-5">
              <Rotulo claro>Próximo passo</Rotulo>
              <Titulo className="xl:text-[3.25rem]">
                Do primeiro clique ao <em className="text-[#e2b79a]">plano em execução.</em>
              </Titulo>
              <p className="leading-7 text-offwhite/75">
                Começamos com escuta e diagnóstico. A partir do diagnóstico de
                NR-1, definimos prioridades, estruturamos o plano de ação e
                acompanhamos a evolução com clareza.
              </p>
            </div>
            <ol className="grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3 lg:grid-cols-5">
              {passos.map((p, i) => (
                <li key={p} className="border-t border-offwhite/30 pt-4">
                  <span className="block font-serif text-3xl text-cobre-claro">{i + 1}</span>
                  <span className="mt-1.5 block">{p}</span>
                </li>
              ))}
            </ol>
            <p className="max-w-3xl text-sm leading-6 text-offwhite/60">
              Quando indicado pelo diagnóstico de NR-1, o plano de ação pode
              incluir Diagnóstico de Liderança 360º e outras intervenções para a
              liderança e/ou a empresa toda.
            </p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              <BotaoCheck />
              <a href={`mailto:${EMAIL}`} className="text-offwhite hover:text-cobre-claro">
                {EMAIL}
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="text-offwhite hover:text-cobre-claro"
              >
                {TELEFONE}
              </a>
            </div>
          </div>

          <footer className="mx-auto mt-14 flex w-full max-w-[75rem] flex-wrap items-center justify-between gap-5 border-t border-offwhite/10 py-7 text-sm">
            <Image
              src="/images/logo-offwhite.svg"
              alt="PATRYX"
              width={1985}
              height={470}
              unoptimized
              className="h-6 w-auto"
            />
            <nav aria-label="Rodapé" className="flex gap-6 text-offwhite/70">
              <a href={CHECK_URL} className="hover:text-offwhite">
                Check gratuito
              </a>
              <a href={AREA_CLIENTE_URL} className="hover:text-offwhite">
                Área do cliente
              </a>
            </nav>
          </footer>
        </section>
      </main>
    </>
  );
}
