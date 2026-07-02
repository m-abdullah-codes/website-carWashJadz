import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function TestimonialSection() {
  return (
    <section className="bg-background px-4 pb-20 pt-4 sm:px-6 lg:px-8 lg:pb-24">
      <div className="mx-auto max-w-[1120px]">
        <Reveal variant="scale" className="overflow-hidden rounded-[20px] bg-white">
          <div className="grid items-end gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
            <div className="px-5 py-7 sm:px-12 sm:py-10 lg:px-14 lg:py-12">
              <h2 className="section-heading text-[#101010]">
                Our <span className="text-primary">Testimonial</span>
              </h2>

              <p className="mt-5 max-w-[560px] text-[18px] leading-[1.6] text-[#7f7f7f] sm:text-[19px]">
                &quot;My headlights were so yellowed I was quoted hundreds for
                replacements. Jadz had them looking factory-new in half an hour
                &mdash; night driving feels safe again. Highly recommended!&quot;
              </p>

              <p className="mt-8 text-[clamp(1.8rem,8vw,2.625rem)] font-bold uppercase leading-none tracking-[-0.015em] text-[#111111]">
                Marcus Reed
              </p>
              <p className="mt-2 text-[15px] uppercase tracking-wider text-[#9f9f9f]">
                - F-150 Owner
              </p>
            </div>

            <div className="flex items-end justify-end self-end">
              <Image
                src="/images/testimonial.png"
                alt="Happy testimonial customer"
                width={1200}
                height={1000}
                className="block h-auto w-full object-contain object-bottom"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={200} className="mt-8 flex items-center justify-center gap-5">
          <button
            type="button"
            aria-label="Previous testimonial"
            className="flex h-[58px] w-[58px] items-center justify-center rounded-full bg-primary text-white shadow-[0_8px_18px_rgba(199,54,29,0.35)] transition-transform hover:scale-[1.02]"
          >
            <span className="text-[22px] leading-none">←</span>
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            className="flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#5c5c5c] text-white shadow-[0_8px_18px_rgba(0,0,0,0.22)] transition-transform hover:scale-[1.02]"
          >
            <span className="text-[22px] leading-none">→</span>
          </button>
        </Reveal>
      </div>
    </section>
  );
}
