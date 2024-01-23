"use client";

export default function Navbar() {
  return (
    <nav className={`fixed top-0 inset-x-0 nav-z border-b bg-white/90 backdrop-blur-2xl`}>
      <div className="max-app-width mx-auto  px-12 py-4 text-lg  flex items-center justify-between ">
        <Logo />
      </div>
    </nav>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-0.5 font-bold text-2xl font-mono">
      <span>Blog</span>
      <span className="text-primary">by</span>
      <span>Evandro</span>
    </div>
  );
}
