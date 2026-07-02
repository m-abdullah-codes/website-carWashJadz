import Image from "next/image";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";

const BOOKING_URL = "https://wa.me/14096559293";

const highlights = [
  {
    value: <CountUp value={50} prefix="$" />,
    label: "Flat rate",
    detail: "Per car, both headlights",
  },
  {
    value: <CountUp value={30} suffix="min" />,
    label: "In & out",
    detail: "All done while you wait",
  },
  {
    value: "1–2yrs",
    label: "Protected",
    detail: "Anti-yellowing sealant",
  },
];

function ArrowBadge() {
  return (
    <div
      className="pulse-ring pointer-events-none absolute left-1/2 top-1/2 z-10 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-white shadow-[0_10px_30px_rgba(199,54,29,0.45)] ring-4 ring-background sm:h-16 sm:w-16"
      aria-hidden="true"
    >
      <span className="rotate-90 text-2xl leading-none sm:rotate-0 sm:text-3xl">
        &rarr;
      </span>
    </div>
  );
}

export default function BeforeAfterSection() {
  return (
    <section className="bg-background px-4 pb-20 pt-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[1120px]">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <Reveal as="h2" className="section-heading max-w-[560px] text-[#101010]">
            See The <span className="text-primary">Jadz</span> Difference
          </Reveal>
          <Reveal
            as="p"
            delay={120}
            className="max-w-[340px] text-sm font-medium leading-relaxed text-[#8d8d8d] sm:text-right sm:text-base"
          >
            Same truck. Same headlights. Thirty minutes apart. No filters, no
            tricks &mdash; just the Jadz six-step restoration.
          </Reveal>
        </div>

        <div className="relative mt-10 grid gap-5 sm:grid-cols-2 sm:gap-6">
          <Reveal
            as="figure"
            variant="left"
            className="group relative overflow-hidden rounded-[22px]"
          >
            <Image
              src="/images/before.jpeg"
              alt="Yellowed, oxidized truck headlight before Jadz restoration"
              width={811}
              height={1440}
              className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] sm:aspect-[3/4]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.18)_0%,rgba(0,0,0,0)_35%,rgba(0,0,0,0)_55%,rgba(0,0,0,0.72)_100%)]" />

            <span className="absolute left-5 top-5 rounded-full bg-[#101010]/85 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
              Before
            </span>

            <figcaption className="absolute inset-x-5 bottom-5 sm:inset-x-7 sm:bottom-7">
              <p className="text-xl font-bold uppercase leading-tight tracking-[-0.02em] text-white sm:text-2xl">
                Foggy &amp; Yellowed
              </p>
              <p className="mt-1.5 max-w-[300px] text-[12px] font-medium leading-snug text-white/80 sm:text-[13px]">
                Years of UV damage and oxidation &mdash; dim output and unsafe
                night-time visibility.
              </p>
            </figcaption>
          </Reveal>

          <Reveal
            as="figure"
            variant="right"
            delay={140}
            className="shine group relative overflow-hidden rounded-[22px]"
          >
            <Image
              src="/images/after.jpeg"
              alt="Crystal clear truck headlight after Jadz restoration"
              width={811}
              height={1440}
              className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] sm:aspect-[3/4]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.18)_0%,rgba(0,0,0,0)_35%,rgba(0,0,0,0)_55%,rgba(0,0,0,0.72)_100%)]" />

            <span className="absolute left-5 top-5 rounded-full bg-primary px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-[0_6px_18px_rgba(199,54,29,0.5)]">
              After
            </span>

            <figcaption className="absolute inset-x-5 bottom-5 sm:inset-x-7 sm:bottom-7">
              <p className="text-xl font-bold uppercase leading-tight tracking-[-0.02em] text-white sm:text-2xl">
                Near-Original Clarity
              </p>
              <p className="mt-1.5 max-w-[300px] text-[12px] font-medium leading-snug text-white/80 sm:text-[13px]">
                Fully decontaminated, polished and sealed with an anti-yellowing
                layer that lasts 1&ndash;2 years.
              </p>
            </figcaption>
          </Reveal>

          <ArrowBadge />
        </div>

        <Reveal
          delay={100}
          className="mt-8 grid gap-6 rounded-[22px] bg-white px-6 py-8 sm:mt-10 sm:grid-cols-2 sm:px-10 lg:grid-cols-4 lg:items-center"
        >
          {highlights.map((item) => (
            <div key={item.label}>
              <p className="text-4xl font-bold tracking-tight text-primary sm:text-[2.6rem]">
                {item.value}
              </p>
              <p className="mt-1 text-sm font-semibold uppercase tracking-[0.06em] text-[#101010]">
                {item.label}
              </p>
              <p className="mt-0.5 text-[13px] font-medium text-[#8d8d8d]">
                {item.detail}
              </p>
            </div>
          ))}

          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-sheen hover-lift inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-center text-sm font-semibold text-white shadow-[0_10px_25px_rgba(199,54,29,0.4)]"
          >
            Book on WhatsApp &rarr;
          </a>
        </Reveal>
      </div>
    </section>
  );
}
