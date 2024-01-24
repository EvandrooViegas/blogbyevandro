"use client";

import Image from "next/image";
import Link from "next/link";

const links = 
[  
  { name: "Recentes", link: "/#new" },
  { name: "Blogs", link: "/#blog" },
  { name: "Categorias", link: "/#categories" },
]

export default function Navbar() {
  return (
    <nav className={`fixed top-0 inset-x-0 nav-z border-b bg-white/90 backdrop-blur-2xl h-20`}>
      <div className="max-app-width mx-auto  px-12 py-4 text-lg  flex items-center justify-between ">
        <Logo />
      <ul className="flex items-center gap-4 ">
        {links.map(link => (
          <li key={link.name} className="hover:underline">
            <Link href={link.link}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      </div>
    </nav>
  );
}

function Logo() {
  return (
<Link href="/">
<Image src="/icon.jpg" width={40} height={50} alt="Logo" />
</Link>
    );
}
