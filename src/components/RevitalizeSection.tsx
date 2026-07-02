import Image from "next/image";
import Reveal from "@/components/Reveal";

const processSteps = [
  "DEEP DECONTAMINATION & DIRT REMOVAL",
  "PROTECTIVE MASKING OF SURROUNDING AREAS",
  "WAX & RESIDUE REMOVAL",
  "RESTORATION TO NEAR-ORIGINAL CLARITY",
  "LONG-LASTING PROTECTIVE LAYER (1–2 YEARS)",
  "ANTI-YELLOWING FORMULA",
];

export default function RevitalizeSection() {
  return (
    <section className="bg-white px-5 pb-20 pt-7 sm:px-8 lg:px-10 lg:pb-28 lg:pt-14">
      <div className="mx-auto max-w-[1120px]">
        <div className="grid gap-10 lg:grid-cols-[0.98fr_1.2fr] lg:items-center lg:gap-10">
          <Reveal variant="left">
            <div className="mb-6 h-[4px] w-[78px] rounded-full bg-primary" />
            <h2 className="section-heading text-[#101010]">
              <span className="text-primary">Restore</span> Your Vision
            </h2>
            <p className="mt-5 max-w-[470px] text-[clamp(1.1rem,5.8vw,2.2rem)] leading-normal tracking-[-0.01em] text-[#4f5051]">
              Foggy, yellowed lenses scatter your light and shrink what you can
              see at night. In just 30 minutes, we bring your headlights back to
              near-original clarity &mdash; restoring your car&apos;s looks and
              your safety on every drive.
            </p>
          </Reveal>

          <Reveal
            variant="right"
            delay={120}
            className="overflow-hidden rounded-[14px]"
          >
            <Image
              src="/images/yellow-car.png"
              alt="Car receiving professional detailing care"
              width={1600}
              height={960}
              className="h-auto w-full object-cover"
            />
          </Reveal>
        </div>

        <div className="mt-7 grid gap-8 lg:mt-14 lg:grid-cols-[1.2fr_0.98fr] lg:items-center lg:gap-10">
          <Reveal
            variant="left"
            delay={120}
            className="overflow-hidden rounded-[14px]"
          >
            <Image
              src="/images/black-car-with-man.png"
              alt="Technician working on a black car"
              width={1600}
              height={960}
              className="h-auto w-full object-cover"
            />
          </Reveal>

          <div>
            <Reveal variant="right">
              <div className="mb-6 h-[4px] w-[78px] rounded-full bg-primary" />
              <h2 className="section-heading text-[#101010]">
                <span className="text-primary">Six-Step</span> Treatment
              </h2>
              <p className="mt-5 max-w-[470px] text-[clamp(1.1rem,5.8vw,1.6rem)] leading-normal tracking-[-0.01em] text-[#4f5051]">
                Every $50 restoration includes the complete Jadz treatment
                &mdash; no shortcuts, no upsells, all done in 30 minutes.
              </p>
            </Reveal>

            <ul className="mt-8 space-y-4">
              {processSteps.map((item, index) => (
                <Reveal
                  as="li"
                  key={item}
                  variant="right"
                  delay={index * 90}
                  className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.01em] text-[#5b5c5d] sm:gap-4 sm:text-base lg:text-[18px]"
                >
                  <span className="text-[22px] leading-none text-primary">✓</span>
                  <span>{item}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
