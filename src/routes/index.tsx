import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/portrait.jpg";
import doglibrary from "@/assets/project-doglibrary.jpg";
import kidzenith from "@/assets/project-kidzenith.jpg";
import terpafy from "@/assets/project-terpafy.jpg";
import exp1 from "@/assets/experiment-1.jpg";
import exp2 from "@/assets/experiment-2.jpg";
import exp3 from "@/assets/experiment-3.jpg";
import { Atmosphere } from "@/components/Atmosphere";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Isabela Amaral — UI Designer | Interfaces leves e humanas" },
      {
        name: "description",
        content:
          "Portfólio de Isabela Amaral, UI Designer que transforma interfaces em experiências mais leves, intuitivas e humanas.",
      },
      { property: "og:title", content: "Isabela Amaral — UI Designer" },
      {
        property: "og:description",
        content:
          "Transformando interfaces em experiências mais leves, intuitivas e humanas.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div id="top" className="relative min-h-screen text-[color:var(--ink)]">
      <Atmosphere />
      <Nav />
      <main>
        <Hero />
        <About />
        <Work />
        <Capabilities />
        <Lab />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section className="relative min-h-[100svh] px-6 pt-36 pb-12 md:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-12 gap-6">
        {/* Left column — eyebrow + word marks */}
        <div className="col-span-12 lg:col-span-7 flex flex-col justify-center">
          <Reveal delay={50}>
            <div className="inline-flex items-center gap-2 glass rounded-full pl-2 pr-4 py-1.5 w-fit text-[12px] text-[color:var(--ink-soft)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--lime)] shadow-[0_0_10px_var(--lime)]" />
              Disponível para projetos selecionados · 2026
            </div>
          </Reveal>

          <Reveal delay={150}>
            <p className="mt-10 font-display italic text-[color:var(--ink-soft)] text-lg md:text-xl">
              Hello, me chamo Isabela —
            </p>
          </Reveal>

          <Reveal delay={250}>
            <h1 className="mt-4 font-display font-medium text-balance leading-[0.86] tracking-[-0.055em] text-[clamp(4.5rem,15vw,14rem)]">
              Isa<span className="italic font-light text-[color:var(--coral)]">b</span>ela
            </h1>
          </Reveal>

          <Reveal delay={400}>
            <p className="mt-8 max-w-xl text-[17px] md:text-[19px] leading-[1.55] text-[color:var(--ink-soft)] text-balance">
              Transformando interfaces em experiências{" "}
              <span className="text-[color:var(--ink)]">mais leves, intuitivas</span>{" "}
              e humanas.
            </p>
          </Reveal>

          <Reveal delay={550}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="group inline-flex items-center gap-3 rounded-full bg-[color:var(--ink)] text-[color:var(--paper)] pl-6 pr-2 py-2 text-sm transition-transform duration-500 hover:-translate-y-0.5"
              >
                Projetos selecionados
                <span className="grid h-9 w-9 place-items-center rounded-full bg-[color:var(--paper)] text-[color:var(--ink)] transition-transform duration-500 group-hover:rotate-45">
                  ↗
                </span>
              </a>
              <a
                href="#contact"
                className="text-sm text-[color:var(--ink-soft)] underline-offset-8 hover:text-[color:var(--ink)] hover:underline transition-colors"
              >
                Entrar em contato
              </a>
            </div>
          </Reveal>
        </div>

        {/* Right column — portrait + floating glass */}
        <div className="col-span-12 lg:col-span-5 relative min-h-[28rem]">
          <Reveal delay={300} className="block h-full">
            <div className="relative h-full w-full">
              {/* Portrait card */}
              <div className="relative ml-auto mt-4 w-[88%] max-w-md aspect-[4/5] overflow-hidden rounded-[2rem] glass float-slow">
                <img
                  src={portrait}
                  alt="Portrait of Isabela Amaral, UI Designer"
                  width={1024}
                  height={1280}
                  className="h-full w-full object-cover grayscale contrast-[1.05]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-white/5" />
              </div>

              {/* Floating meta card */}
              <div className="absolute -left-2 lg:-left-10 bottom-6 glass rounded-2xl p-4 w-56 float-slow" style={{ animationDelay: "-3s" }}>
                <p className="text-[10.5px] uppercase tracking-[0.18em] text-[color:var(--ink-muted)]">
                  Atualmente
                </p>
                <p className="mt-1.5 text-[13px] leading-snug">
                  Criando sistemas calmos para produtos que valorizam os pequenos detalhes.
                </p>
              </div>

              {/* Floating chip */}
              <div
                className="absolute -top-2 left-2 lg:-left-6 glass rounded-full px-4 py-2 text-[11px] tracking-wide text-[color:var(--ink-soft)] float-slow"
                style={{ animationDelay: "-6s" }}
              >
                <span className="text-[color:var(--purple)]">●</span> UI · Sistemas · Motion
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Marquee subtle */}
      <div className="mt-24 overflow-hidden border-y border-[color:var(--hairline)]/60 py-5">
        <div className="flex gap-12 whitespace-nowrap text-[color:var(--ink-muted)] text-sm font-display tracking-tight">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-12 animate-[shimmer_30s_linear_infinite]">
              {[
                "Tecnologia Calma",
                "Sistemas Editoriais",
                "Interfaces Emocionais",
                "Minimalismo Suave",
                "UI Centrada em Pessoas",
                "Glass Atmosférico",
              ].map((t) => (
                <span key={t} className="flex items-center gap-12">
                  <span>{t}</span>
                  <span className="text-[color:var(--coral)]">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- ABOUT ---------- */
function About() {
  return (
    <section id="about" className="relative px-6 md:px-10 py-20 md:py-24">
      <div className="mx-auto max-w-7xl grid grid-cols-12 gap-6">
        <Reveal as="div" className="col-span-12 lg:col-span-3">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--ink-muted)]">
            01 — Filosofia
          </p>
        </Reveal>
        <div className="col-span-12 lg:col-span-9">
          <Reveal delay={100}>
            <h2 className="font-display text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1.02] tracking-[-0.04em] text-balance">
              Crio{" "}
              <span className="italic font-light text-[color:var(--purple)]">interfaces que respiram</span>
              {" "}— sistemas silenciosos onde cada detalhe existe com intenção.
            </h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-12 gap-6">
            <Reveal delay={150} className="col-span-12 md:col-span-7">
              <p className="text-[17px] leading-[1.7] text-[color:var(--ink-soft)] max-w-xl">
                Acredito que a tecnologia deve parecer como a luz entrando em um ambiente — presente, útil e nunca invasiva. Minha prática une clareza editorial, sensibilidade emocional e pensamento sistêmico.
              </p>
              <p className="mt-6 text-[17px] leading-[1.7] text-[color:var(--ink-soft)] max-w-xl">
                O trabalho não é decoração. É tradução: transformar complexidade em gestos simples o suficiente para parecerem intuitivos e importantes o bastante para parecerem humanos.
              </p>
            </Reveal>

            <Reveal delay={250} className="col-span-12 md:col-span-5">
              <div className="glass rounded-3xl p-7">
                <p className="font-display italic text-[color:var(--ink)] text-2xl leading-snug">
                  "Beleza é o resultado do cuidado obsessivo com os pequenos detalhes."
                </p>
                <div className="mt-6 flex items-center gap-3 text-[12px] text-[color:var(--ink-muted)]">
                  <span className="h-px w-8 bg-[color:var(--ink-muted)]" />
                  Princípio de trabalho nº 4
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- WORK ---------- */
function Work() {
  return (
    <section id="work" className="relative px-6 md:px-10 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-12 gap-6 mb-12">
          <Reveal className="col-span-12 lg:col-span-3">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--ink-muted)]">
              02 — Projetos
            </p>
          </Reveal>
          <Reveal delay={100} className="col-span-12 lg:col-span-9">
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] tracking-[-0.04em] text-balance max-w-3xl">
              Projetos construídos com intenção, clareza e atenção aos detalhes.
            </h2>
          </Reveal>
        </div>

        {/* Destaque */}
        <Reveal>
          <article className="group relative glass rounded-[2rem] overflow-hidden p-3 md:p-4">
            <div className="grid grid-cols-12 gap-3 md:gap-6">
              <div className="col-span-12 md:col-span-7 relative overflow-hidden rounded-[1.6rem] aspect-[5/4] md:aspect-auto md:min-h-[28rem]">
                <img
                  src={doglibrary}
                  alt="DogLibrary — plataforma guiada de compatibilidade de raças"
                  loading="lazy"
                  width={1280}
                  height={1024}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                />
              </div>
              <div className="col-span-12 md:col-span-5 p-4 md:p-8 flex flex-col justify-between gap-8">
                <div>
                  <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-[color:var(--ink-muted)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--coral)]" />
                    Destaque · 2025
                  </div>
                  <h3 className="mt-5 font-display text-[clamp(2rem,3.5vw,3rem)] tracking-[-0.04em] leading-[0.95]">
                    DogLibrary
                  </h3>
                  <p className="mt-5 text-[15px] leading-[1.7] text-[color:var(--ink-soft)]">
                    Uma plataforma que ajuda futuros tutores a descobrirem raças compatíveis com seu estilo de vida por meio de uma experiência guiada, intuitiva e informativa.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Design de Produto", "Design System", "Onboarding"].map((t) => (
                    <span
                      key={t}
                      className="rounded-full px-3 py-1 text-[11px] glass-soft text-[color:var(--ink-soft)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </Reveal>

        {/* Other projects — asymmetric */}
        <div className="mt-10 grid grid-cols-12 gap-6">
          <Reveal delay={100} className="col-span-12 md:col-span-7">
            <ProjectCard
              title="Kidzenith"
              meta="Onboarding · 2025"
              tag="UX Writing · Motion"
              image={kidzenith}
              ratio="aspect-[5/4]"
              desc="Um fluxo de onboarding que acolhe famílias com uma experiência leve, calma e confiante."
            />
          </Reveal>
          <Reveal delay={200} className="col-span-12 md:col-span-5 md:mt-24">
            <ProjectCard
              title="Terpafy"
              meta="Identity · 2024"
              tag="Marca · Sistema"
              image={terpafy}
              ratio="aspect-[4/5]"
              desc="Uma identidade visual construída a partir da suavidade — cor como voz, tipografia como postura."
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  title, meta, tag, image, desc, ratio,
}: { title: string; meta: string; tag: string; image: string; desc: string; ratio: string }) {
  return (
    <article className="group relative">
      <div className={`relative overflow-hidden rounded-[1.6rem] glass p-2 ${ratio}`}>
        <img
          src={image}
          alt={`${title} — ${meta}`}
          loading="lazy"
          width={1024}
          height={1024}
          className="absolute inset-2 h-[calc(100%-1rem)] w-[calc(100%-1rem)] object-cover rounded-[1.4rem] transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
        />
      </div>
      <div className="mt-5 flex items-start justify-between gap-6 px-1">
        <div>
          <h3 className="font-display text-2xl tracking-[-0.03em]">{title}</h3>
          <p className="text-[12px] text-[color:var(--ink-muted)] mt-1.5">{meta}</p>
        </div>
        <p className="text-[11px] text-[color:var(--ink-soft)] uppercase tracking-[0.16em] text-right">{tag}</p>
      </div>
      <p className="mt-3 px-1 text-[14px] leading-[1.6] text-[color:var(--ink-soft)] max-w-md">
        {desc}
      </p>
    </article>
  );
}

/* ---------- CAPABILITIES ---------- */
function Capabilities() {
  const items = [
    { t: "Design de Interação", d: "Gestos coreografados para parecerem naturais.", c: "var(--pink)" },
    { t: "UI & Direção Visual", d: "Composição editorial para superfícies digitais.", c: "var(--purple)" },
    { t: "Design Systems", d: "Tokens, componentes e uma arquitetura visual silenciosa.", c: "var(--sky)" },
    { t: "Motion", d: "Sutil, lento e atmosférico — quase invisível.", c: "var(--coral)" },
    { t: "Pensamento Sistêmico", d: "Organização da complexidade em gestos simples e claros.", c: "var(--lime)" },
    { t: "Estratégia de Produto", d: "Alinhamento entre intenção humana, produto e interface.", c: "var(--yellow)" },
  ];
  return (
    <section id="capabilities" className="relative px-6 md:px-10 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-12 gap-6 mb-16">
          <Reveal className="col-span-12 lg:col-span-3">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--ink-muted)]">
              03 — Skills
            </p>
          </Reveal>
          <Reveal delay={100} className="col-span-12 lg:col-span-9">
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] tracking-[-0.04em] text-balance max-w-3xl">
              Áreas que moldam minha forma de construir experiências digitais.
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-12 gap-5">
          {items.map((it, i) => (
            <Reveal key={it.t} delay={i * 80} className="col-span-12 sm:col-span-6 lg:col-span-4">
              <div className="group relative glass rounded-3xl p-7 h-full overflow-hidden transition-transform duration-700 hover:-translate-y-1">
                <div
                  className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full blur-3xl opacity-50 transition-opacity duration-700 group-hover:opacity-80"
                  style={{ background: `radial-gradient(closest-side, ${it.c}, transparent 70%)` }}
                />
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--ink-muted)]">
                    0{i + 1}
                  </span>
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ background: it.c, boxShadow: `0 0 18px ${it.c}` }}
                  />
                </div>
                <h3 className="mt-12 font-display text-[26px] tracking-[-0.03em]">{it.t}</h3>
                <p className="mt-3 text-[14px] leading-[1.6] text-[color:var(--ink-soft)]">
                  {it.d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- LAB ---------- */
function Lab() {
  const items = [
    { img: exp1, t: "Liquid Glass", n: "exp_001" },
    { img: exp2, t: "Ambient Bloom", n: "exp_002" },
    { img: exp3, t: "Floating Surface", n: "exp_003" },
  ];
  return (
    <section id="lab" className="relative px-6 md:px-10 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-12 gap-6 mb-16">
          <Reveal className="col-span-12 lg:col-span-3">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--ink-muted)]">
              04 — Experimentos
            </p>
          </Reveal>
          <Reveal delay={100} className="col-span-12 lg:col-span-9">
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] tracking-[-0.04em] text-balance max-w-3xl">
              Explorações visuais entre motion, luz, profundidade e interfaces.
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-12 gap-5">
          {items.map((it, i) => (
            <Reveal
              key={it.n}
              delay={i * 120}
              className={`col-span-12 md:col-span-4 ${i === 1 ? "md:translate-y-12" : ""}`}
            >
              <figure className="group relative">
                <div className="relative overflow-hidden rounded-3xl glass p-2 aspect-[4/5]">
                  <img
                    src={it.img}
                    alt={it.t}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="absolute inset-2 h-[calc(100%-1rem)] w-[calc(100%-1rem)] object-cover rounded-[1.4rem] transition-transform duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                  />
                </div>
                <figcaption className="mt-4 flex items-baseline justify-between px-1">
                  <span className="font-display text-lg tracking-[-0.02em]">{it.t}</span>
                  <span className="text-[11px] text-[color:var(--ink-muted)] uppercase tracking-[0.18em]">
                    {it.n}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CONTACT ---------- */
function Contact() {
  return (
    <section id="contact" className="relative px-6 md:px-10 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-display italic text-[color:var(--ink-soft)] text-lg">
            Vamos criar algo leve, humano e memorável.
          </p>
        </Reveal>
        <Reveal delay={150}>
          <h2 className="mt-6 font-display text-[clamp(2.5rem,9vw,8rem)] leading-[0.92] tracking-[-0.05em] text-balance">
            Vamos <span className="italic font-light text-[color:var(--coral)]">conversar</span>.
          </h2>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-10 grid grid-cols-12 gap-6">
            <a
              href="mailto:isabela@amaral.design"
              className="col-span-12 md:col-span-7 group glass rounded-3xl p-7 flex items-center justify-between gap-6 transition-transform duration-700 hover:-translate-y-1"
            >
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--ink-muted)]">
                  Email
                </p>
                <p className="mt-2 font-display text-2xl md:text-3xl tracking-[-0.03em]">
                  isabela@amaral.design
                </p>
              </div>
              <span className="grid h-12 w-12 place-items-center rounded-full bg-[color:var(--ink)] text-[color:var(--paper)] transition-transform duration-500 group-hover:rotate-45">
                ↗
              </span>
            </a>
            <div className="col-span-12 md:col-span-5 grid gap-5">
              <Social label="LinkedIn" handle="/in/isabela-amaral" color="var(--purple)" />
              <Social label="Dribbble" handle="@isabela" color="var(--pink)" />
              <Social label="Read.cv" handle="isabela" color="var(--sky)" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Social({ label, handle, color }: { label: string; handle: string; color: string }) {
  return (
    <a
      href="#"
      className="group glass rounded-2xl px-5 py-4 flex items-center justify-between transition-transform duration-500 hover:-translate-y-0.5"
    >
      <div>
        <p className="text-[10.5px] uppercase tracking-[0.2em] text-[color:var(--ink-muted)]">
          {label}
        </p>
        <p className="mt-1 text-[15px]">{handle}</p>
      </div>
      <span
        className="h-2 w-2 rounded-full"
        style={{ background: color, boxShadow: `0 0 14px ${color}` }}
      />
    </a>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="relative px-6 md:px-10 py-10 border-t border-[color:var(--hairline)]/60">
      <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between gap-4 text-[12px] text-[color:var(--ink-muted)]">
        <p>© {new Date().getFullYear()} Isabela Amaral · UI Designer · Brasil / Remoto</p>
        <p className="font-display italic">Criado com calma e atenção aos detalhes.</p>
      </div>
    </footer>
  );
}
