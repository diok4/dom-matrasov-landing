import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { content } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-12 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <h3 className="text-2xl font-semibold">{content.footer.title}</h3>
          <p className="mt-2 text-sm text-white/70">{content.footer.subtitle}</p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={content.brand.telegram}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/20 p-3 transition hover:border-white/60"
          >
            <FaTelegramPlane />
          </a>
          <a
            href={content.brand.instagram}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/20 p-3 transition hover:border-white/60"
          >
            <FaInstagram />
          </a>
        </div>

        <div className="text-sm text-white/60">
          © {new Date().getFullYear()} {content.footer.rights}
        </div>
      </div>
    </footer>
  );
}
