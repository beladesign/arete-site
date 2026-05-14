export function Atmosphere() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 aurora opacity-80" />
      {/* Floating colored clouds */}
      <div
        className="absolute -top-32 -left-24 h-[42rem] w-[42rem] rounded-full blur-3xl opacity-60 drift"
        style={{ background: "radial-gradient(closest-side, var(--pink), transparent 70%)" }}
      />
      <div
        className="absolute top-1/3 -right-32 h-[40rem] w-[40rem] rounded-full blur-3xl opacity-50 drift"
        style={{
          animationDelay: "-6s",
          background: "radial-gradient(closest-side, var(--purple), transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-1/4 h-[36rem] w-[36rem] rounded-full blur-3xl opacity-50 drift"
        style={{
          animationDelay: "-12s",
          background: "radial-gradient(closest-side, var(--sky), transparent 70%)",
        }}
      />
      {/* paper grain */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
        }}
      />
    </div>
  );
}
