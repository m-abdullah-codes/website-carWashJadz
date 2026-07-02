import Image from "next/image";
import Reveal from "@/components/Reveal";

const BOOKING_URL = "https://wa.me/14096559293";

export default function BestWashPromo() {
  return (
    <section className="bg-[#e4e4e4] px-5 pb-0 pt-4 sm:px-6 lg:bg-background lg:px-8 lg:pb-12 lg:pt-6">
      <div className="mx-auto w-full max-w-[1260px] overflow-visible bg-[#e4e4e4] lg:overflow-hidden lg:bg-background">
        <div className="relative bg-[#e4e4e4] lg:min-h-[500px] lg:bg-background lg:px-12 lg:pt-10">
          <div className="pointer-events-none absolute inset-0 opacity-35">
            <div className="absolute -left-24 top-24 h-[280px] w-[420px] rotate-6 bg-[linear-gradient(120deg,rgba(0,0,0,0.03)_0%,rgba(0,0,0,0)_65%)]" />
            <div className="absolute -right-10 bottom-8 h-[250px] w-[470px] -rotate-6 bg-[linear-gradient(120deg,rgba(0,0,0,0.03)_0%,rgba(0,0,0,0)_65%)]" />
          </div>

          {/* Mobile layout */}
          <div className="relative z-10 lg:hidden">
            <div className="flex items-start justify-between gap-3">
              <Reveal variant="left" className="shrink-0">
                <h2 className="text-[clamp(4.5rem,13vw,3.4rem)] font-bold italic leading-[0.84] tracking-[-0.045em] uppercase text-primary">
                  LIKE
                </h2>
                <h2 className="-mt-1 text-[clamp(4.5rem,13vw,3.4rem)] font-bold italic leading-[0.84] tracking-[-0.045em] uppercase text-[#090909]">
                  NEW
                </h2>
              </Reveal>

              <Reveal
                variant="right"
                delay={100}
                className="flex min-w-0 flex-1 flex-col items-end gap-3 pt-0.5"
              >
                <p className="max-w-[168px] text-right text-[11px] leading-[1.38] tracking-[-0.01em] text-[#9a9a9a]">
                  Yellowed headlights make even a great car look tired &mdash;
                  and cut your night vision
                </p>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-sheen shrink-0 rounded-full bg-primary px-6 py-2 text-[13px] font-medium tracking-[-0.01em] text-white"
                >
                  Book Now
                </a>
              </Reveal>
            </div>

            <Reveal
              as="p"
              delay={160}
              className="mt-6 text-[clamp(1.05rem,4.9vw,1.2rem)] leading-[1.28] tracking-[-0.02em] text-[#6b6b6b]"
            >
              Make your car look like brand new. Our 30-minute restoration
              strips away years of oxidation and haze, then seals each lens with
              a protective anti-yellowing layer that keeps them clear for 1 to 2
              years.
            </Reveal>

            <div className="relative -mx-5 mt-5 h-[clamp(210px,56vw,250px)] overflow-visible sm:-mx-6">
              <Reveal variant="right" delay={150} className="absolute inset-0">
                <Image
                  src="/images/grey-car.png"
                  alt="Grey luxury car side profile"
                  width={1240}
                  height={560}
                  className="absolute bottom-[-10%] left-0 h-auto w-[165%] max-w-none object-contain object-left-bottom"
                  priority
                />
              </Reveal>
            </div>
          </div>

          {/* Desktop layout */}
          <div className="relative z-10 hidden lg:grid lg:grid-cols-[1.02fr_0.98fr] lg:gap-4">
            <Reveal variant="left">
              <h2 className="text-[clamp(2.2rem,9vw,7.2rem)] font-black italic leading-[0.84] tracking-[-0.045em] uppercase text-primary">
                LIKE
              </h2>
              <h2 className="-mt-1 text-[clamp(2.2rem,9vw,7.2rem)] font-black italic leading-[0.84] tracking-[-0.045em] uppercase text-[#090909]">
                NEW
              </h2>

              <p className="mt-5 max-w-[530px] text-[31px] leading-[1.18] tracking-[-0.02em] text-[#111111]">
                Make your car look like brand new &mdash; without paying for
                brand new lights.
              </p>

              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-sheen hover-lift mt-8 inline-block rounded-full bg-primary px-9 py-3 text-[21px] font-medium tracking-[-0.01em] text-white"
              >
                Book Now
              </a>
            </Reveal>

            <Reveal delay={180} className="pt-3">
              <p className="max-w-[410px] text-[31px] leading-[1.25] tracking-[-0.02em] text-[#111111]">
                Replacement headlight assemblies can cost hundreds per side. A
                Jadz restoration brings back near-original clarity in 30
                minutes, for a flat $50 per car &mdash; sealed and protected for
                1 to 2 years.
              </p>
            </Reveal>
          </div>

          <div className="relative z-10 hidden lg:absolute lg:bottom-0 lg:right-0 lg:block lg:w-[57%]">
            <Reveal variant="right" delay={220}>
              <Image
                src="/images/grey-car.png"
                alt="Grey luxury car side profile"
                width={1240}
                height={560}
                className="h-auto w-[106%] max-w-none object-contain"
                priority
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
