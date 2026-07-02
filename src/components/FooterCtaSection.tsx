import Image from "next/image";
import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";

const BOOKING_URL = "https://wa.me/14096559293";
const PHONE_DISPLAY = "+1 409 655 9293";
const PHONE_TEL = "tel:+14096559293";

function SocialIcon({ children, label }: { children: ReactNode; label: string }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="inline-flex h-7 w-7 items-center justify-center text-[#c8351f] transition-opacity hover:opacity-75"
    >
      {children}
    </a>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden className="shrink-0">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      className={`shrink-0 ${className}`}
      aria-hidden
    >
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

export default function FooterCtaSection() {
  return (
    <section className="relative bg-white">
      {/* CTA overlap zone — card straddles white + dark strip like inspiration */}
      <div className="relative -mt-[0px] px-4 pb-2 sm:-mt-0 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-x-0 top-[85%] h-[188px] -translate-y-1/2 bg-[#1f2436] sm:h-[160px]" />

        <div className="relative z-10 mx-auto w-full max-w-[1120px]">
          <Reveal
            variant="scale"
            className="shine relative overflow-hidden rounded-[20px] px-6 py-10 text-center shadow-[0_16px_36px_rgba(0,0,0,0.24)] sm:px-14 sm:py-12"
            style={{
              backgroundColor: "#c8351f",
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='52' viewBox='0 0 60 52' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.07'%3E%3Cpath d='M30 0l30 52H0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "60px 52px",
            }}
          >
            <div className="pointer-events-none absolute -left-16 -top-20 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-10 h-64 w-64 rounded-full bg-black/10 blur-2xl" />

            <h2 className="relative mx-auto max-w-[680px] text-[clamp(1.4rem,3.4vw,2.35rem)] font-bold uppercase leading-[1.2] tracking-[-0.02em] text-white">
              Don&apos;t buy costly new lights. Restore yours for $50 and drive safer tonight.
            </h2>

            <div className="relative mt-7 flex flex-wrap items-center justify-center gap-3 sm:mt-8 sm:gap-4">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-sheen hover-lift inline-flex min-w-[190px] items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[#c8351f] shadow-[0_6px_16px_rgba(0,0,0,0.18)]"
              >
                <WhatsAppIcon />
                Book on WhatsApp
              </a>
              <a
                href={PHONE_TEL}
                className="inline-flex min-w-[190px] items-center justify-center gap-2 rounded-full border border-white/70 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/15"
              >
                <PhoneIcon />
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Main footer */}
      <footer className="bg-white px-4 pb-6 pt-16 sm:px-6 sm:pt-[4.5rem] lg:px-8">
        <div className="mx-auto w-full max-w-[1120px]">
          <div className="flex flex-col gap-10 border-b border-[#d8d8d8] pb-10 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex items-center gap-2.5">
                <Image
                  src="/images/logo.png"
                  alt="Jadz logo"
                  width={32}
                  height={32}
                  className="h-8 w-8 object-contain"
                />
                <span className="text-[1.75rem] font-bold uppercase leading-none tracking-tight text-[#2a2a2a]">
                  Jadz
                </span>
              </div>
              <p className="mt-4 max-w-[260px] text-[1.4rem] font-medium leading-[1.28] tracking-[-0.01em] text-[#2c4f8f]">
                Restore Your Vision
              </p>
              <div className="mt-5 flex items-center gap-3.5">
                <SocialIcon label="LinkedIn">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </SocialIcon>
                <SocialIcon label="Messenger">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M12 0C5.373 0 0 4.975 0 11.111c0 3.497 1.745 6.616 4.472 8.652V24l4.086-2.242c1.09.301 2.246.464 3.442.464 6.627 0 12-4.974 12-11.111C24 4.975 18.627 0 12 0zm1.193 14.963l-3.056-3.259-5.966 3.259L10.733 8.3l3.13 3.259 5.878-3.259-5.548 6.663z" />
                  </svg>
                </SocialIcon>
                <SocialIcon label="Twitter">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </SocialIcon>
              </div>
            </div>

            <div className="sm:text-right">
              <h3 className="text-[1.4rem] font-semibold leading-tight tracking-[-0.02em] text-[#2c4f8f]">
                Contact Us
              </h3>
              <div className="mt-4 space-y-3">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-[1.0625rem] leading-snug text-[#2f4671] transition-opacity hover:opacity-70 sm:justify-end"
                >
                  <WhatsAppIcon />
                  WhatsApp {PHONE_DISPLAY}
                </a>
                <a
                  href={PHONE_TEL}
                  className="flex items-center gap-2.5 text-[1.0625rem] leading-snug text-[#2f4671] transition-opacity hover:opacity-70 sm:justify-end"
                >
                  <PhoneIcon className="text-[#2c4f8f]" />
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>

          <p className="pt-5 text-center text-sm text-[#90a4c4] sm:text-[15px]">
            Copyright @ 2026 Jadz. All Rights Reserved.
          </p>
        </div>
      </footer>
    </section>
  );
}
