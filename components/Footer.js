import Link from "next/link";
import { Linkedin, Instagram, MessageCircle } from "lucide-react";

const socials = [
  {
    href: "https://www.linkedin.com/in/david-jiri-6ab349222/",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "https://www.instagram.com/arixinnovations?igsh=MXF1Zmk1N25pNGdrdA==&utm_source=ig_contact_invite",
    label: "Instagram",
    icon: Instagram,
  },
  {
    href: "https://wa.me/9556307048",
    label: "WhatsApp",
    icon: MessageCircle,
  },
];

const quickLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy/90">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12 md:flex-row md:justify-between">
        <div className="space-y-4">
          <p className="text-lg font-semibold tracking-tight">
            <span className="text-electric">Arix</span> Innovations
          </p>
          <p className="max-w-sm text-sm text-white/60">
            We design and build practical websites and digital systems that help
            small and medium businesses attract customers, build trust, and grow
            sustainably.
          </p>
        </div>
        <div className="flex flex-col gap-8 md:flex-row md:gap-14">
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/60">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-electric">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/60">
              Connect
            </h4>
            <div className="mt-4 flex items-center gap-4">
              {socials.map(({ href, label, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition hover:border-electric hover:text-electric"
                >
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 bg-black/20 py-4 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Arix Innovations. All rights reserved.
      </div>
    </footer>
  );
}
