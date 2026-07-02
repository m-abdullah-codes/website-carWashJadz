import Image from "next/image";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";

const BOOKING_URL = "https://wa.me/14096559293";

const stats = [
  {
    value: <CountUp value={500} suffix="+" />,
    label: "Headlights Restored",
  },
  {
    value: <CountUp value={30} suffix="min" />,
    label: "Average Service Time",
  },
  {
    value: <CountUp value={5} decimals={1} suffix="★" />,
    label: "Customer Rating",
  },
];

const avatars = [
  { src: "/images/avatar-3.jpg", alt: "Customer avatar 1" },
  { src: "/images/avatar-4.jpg", alt: "Customer avatar 2" },
  { src: "/images/avatar-5.jpg", alt: "Customer avatar 3" },
];

export default function BestCarWashExperienceSection() {
  return (
    <section className="bg-white px-4 pb-10 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[1120px]">
        <Reveal as="header" className="text-center">
          <h2 className="section-heading text-[#101010]">
            Best <span className="text-primary">Headlight Care</span> Experience
          </h2>
          <p className="mx-auto mt-3 max-w-[860px] text-sm font-medium leading-relaxed tracking-[-0.01em] text-[#8d8d8d] sm:text-base">
            One flat price, one quick visit &mdash; clearer lenses, safer
            nights, and a car that looks years younger
          </p>
        </Reveal>

        <div className="mt-9 grid gap-4 lg:grid-cols-[1.08fr_1fr]">
          <Reveal
            as="article"
            variant="left"
            delay={100}
            className="relative overflow-hidden rounded-2xl"
          >
            <Image
              src="/images/car-interior-bestCarWashSection.png"
              alt="Professional car detailing service"
              width={1200}
              height={760}
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.64)_74%,rgba(0,0,0,0.78)_100%)]" />

            <div className="absolute inset-x-6 bottom-6 sm:inset-x-8 sm:bottom-7">
              <h3 className="sub-heading text-white">
                Why Drivers Choose Jadz
              </h3>
              <p className="mt-1 max-w-[470px] text-[11px] font-semibold uppercase tracking-[0.01em] text-white/95 sm:text-[13px]">
                New headlight assemblies can run hundreds per side. We restore
                yours to near-original clarity for a flat $50 per car
              </p>

              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-sheen hover-lift mt-5 inline-block rounded-full bg-primary px-7 py-2.5 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(199,54,29,0.4)]"
              >
                Book Now
              </a>
            </div>
          </Reveal>

          <div className="grid gap-4">
            <Reveal
              as="article"
              variant="right"
              delay={180}
              className="relative overflow-hidden rounded-2xl"
            >
              <Image
                src="/images/car-cleaning-bestCarWashSection.png"
                alt="Headlight cleaning in progress"
                width={1000}
                height={580}
                className="h-full min-h-[230px] w-full object-cover"
              />

              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book a headlight restoration"
                className="hover-lift absolute bottom-5 right-5 flex h-14 w-14 items-center justify-center rounded-full bg-white text-primary shadow-[0_8px_24px_rgba(0,0,0,0.18)]"
              >
                <span className="text-3xl leading-none">↗</span>
              </a>
            </Reveal>

            <Reveal
              as="article"
              variant="right"
              delay={280}
              className="rounded-2xl bg-primary px-6 py-5 text-white sm:px-7 sm:py-6"
            >
              <div className="flex items-center">
                {avatars.map((avatar, index) => (
                  <div
                    key={avatar.src}
                    className={`relative h-11 w-11 overflow-hidden rounded-full border-2 border-[#eb7b62] ${
                      index === 0 ? "" : "-ml-3"
                    }`}
                  >
                    <Image
                      src={avatar.src}
                      alt={avatar.alt}
                      width={80}
                      height={80}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>

              <div className="mt-5 grid grid-cols-3 gap-5 sm:gap-7">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-[clamp(1.7rem,4vw,2.4rem)] font-semibold leading-none tracking-[-0.03em]">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-xs font-medium leading-snug text-white/90 sm:text-[13px]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
