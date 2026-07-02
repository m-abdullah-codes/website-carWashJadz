import Image from "next/image";
import Link from "next/link";

const navLinks = ["Home", "About us", "Services", "Results"];

const BOOKING_URL = "https://wa.me/14096559293";

export default function Header() {
  return (
    <header className="anim-header relative z-50 flex items-center justify-between gap-3 bg-hero px-4 py-4 sm:px-8 sm:py-6 lg:px-16">
      <Link href="/" className="flex items-center gap-3">
        <Image
          src="/images/logo.png"
          alt="Jadz logo"
          width={40}
          height={40}
          className="h-6 w-6 object-contain sm:h-10 sm:w-10"
          priority
        />
        <span className="text-2xl leading-none font-semibold tracking-tight text-black sm:text-xl sm:font-bold sm:tracking-wide">
          JADZ
        </span>
      </Link>

      <nav className="hidden items-center gap-10 md:flex">
        {navLinks.map((link) => (
          <Link
            key={link}
            href="#"
            className="text-sm font-medium text-black transition-opacity hover:opacity-70"
          >
            {link}
          </Link>
        ))}
      </nav>

      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex shrink-0 rounded-full border border-primary px-4 py-2 text-xs font-medium text-primary transition-colors hover:bg-primary hover:text-white sm:px-6 sm:py-2.5 sm:text-sm"
      >
        Book Now
      </a>
    </header>
  );
}
