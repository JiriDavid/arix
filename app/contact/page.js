import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import SectionTitle from "@/components/SectionTitle";

export const metadata = {
  title: "Contact",
  description:
    "Start a conversation with Arix Innovations. Share your goals and let's craft the roadmap together.",
};

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/david-jiri-6ab349222/",
    handle: "David Jiri",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/arixinnovations?igsh=MXF1Zmk1N25pNGdrdA==&utm_source=ig_contact_invite",
    handle: "arixinnovations",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/9556307048",
    handle: "+91 955 630 7048",
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-24">
      <SectionTitle
        eyebrow="Get started"
        title="Tell us about your business and what you need online"
        description="Share a few details about your goals, timeline, and business type. We’ll review them and get back to you within one business day."
      />

      <div className="mt-16 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-8">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="mt-1 h-5 w-5 text-electric" />
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                    Email
                  </p>
                  <a
                    href="mailto:jiridavidpromise@gmail.com"
                    className="mt-2 inline-block text-sm text-white/80 hover:text-electric"
                  >
                    jiridavidpromise@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="mt-1 h-5 w-5 text-electric" />
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                    Phone
                  </p>
                  <p className="mt-2 text-sm text-white/80">
                    +91 955 630 7048 / +263 788 775 774
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 text-electric" />
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                    Global studio
                  </p>
                  <p className="mt-2 text-sm text-white/80">
                    Remote-first from Odisha, India, and Zimbabwe.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-black/30 p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-electric/80">
              Social
            </p>
            <div className="mt-6 space-y-4 text-sm">
              {socials.map((social) => (
                <div
                  key={social.label}
                  className="flex items-center justify-between"
                >
                  <span className="text-white/70">{social.label}</span>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-electric hover:text-electric/80"
                  >
                    {social.handle}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
