"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { content } from "@/lib/content";
import logo from "@/assets/images/logo.png";

const navItems = [
  { label: content.nav.home, href: "#hero" },
  { label: content.products.title, href: "#products" },
  { label: content.nav.about, href: "#about" },
  { label: content.nav.contacts, href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#hero" className="flex items-center gap-3">
          <span className="relative h-10 w-10 overflow-hidden rounded-xl bg-white shadow">
            <Image src={logo} alt={content.brand.name} fill className="object-contain" />
          </span>
          <div className="leading-tight">
            <p className="text-sm text-slate-500">Матрасы премиум класса</p>
            <p className="text-lg font-semibold text-slate-900">
              {content.brand.name}
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="#contact"
            className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-primary/90"
          >
            {content.nav.order}
          </a>
        </div>

        <button
          type="button"
          aria-label="Открыть меню"
          className="lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 pb-6 pt-2 shadow-lg lg:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-slate-700"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="mt-5">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-primary px-4 py-2 text-center text-sm font-semibold text-white"
            >
              {content.nav.order}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
