export function Nav() {
  const links = [
    { href: "#about", label: "Sobre" },
    { href: "#work", label: "Projetos" },
    { href: "#capabilities", label: "Skills" },
    { href: "#lab", label: "Experimentos" },
    { href: "#contact", label: "Contato" },
  ];
  return (
    <header className="fixed top-5 left-1/2 z-50 -translate-x-1/2 px-4 w-full max-w-5xl">
      <nav className="glass rounded-full flex items-center justify-between gap-6 px-5 py-2.5">
        <a href="#top" className="font-display text-sm tracking-[-0.02em] font-medium">
          Isabela<span className="text-[color:var(--coral)]">.</span>
        </a>
        <ul className="hidden md:flex items-center gap-7 text-[12.5px] text-[color:var(--ink-soft)]">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="transition-colors duration-300 hover:text-[color:var(--ink)]"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="text-[12.5px] rounded-full bg-[color:var(--ink)] text-[color:var(--paper)] px-4 py-1.5 transition-transform duration-300 hover:-translate-y-0.5"
        >
          Vamos conversar
        </a>
      </nav>
    </header>
  );
}
