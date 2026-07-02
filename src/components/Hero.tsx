import Image from "next/image";
import BlurText from "./BlurText";
import SplitText from "@/components/SplitText";

type HeroControls = {
  frameMinHeight: string;
  frameTranslateY: string;
  textBlockGap: string;
  textBlockTopPadding: string;
  textBlockJustify: string;
  restoreTextSize: string;
  visionTextSize: string;
  carMaxWidth: string;
  carMarginTop: string;
  carTranslateY: string;
  carPaddingX: string;
  carPaddingY: string;
};

type HeroSectionControls = {
  outerPx: string;
  outerPt: string;
  outerPb: string;
  outerJustify: string;
  sectionMinHeight: string;
};

function joinControls(
  ...groups: Array<Partial<HeroControls & HeroSectionControls>>
) {
  return groups
    .flatMap((group) => Object.values(group))
    .filter(Boolean)
    .join(" ");
}

// ─── Breakpoint guide ───────────────────────────────────────────────────────
// MOBILE_HERO    → phones (< 768px) — no prefix needed
// XS_HERO        → iPhone SE only (≤ 389px) — prefix with max-[389px]:
// TABLET_HERO    → medium screens (768px – 1023px) — prefix with md:
// DESKTOP_HERO   → desktop (1024px+) — prefix with lg:
//
// IMPORTANT: write the full Tailwind class including its breakpoint prefix.
// e.g. tablet text size → "md:text-[clamp(5rem,11.5vw,9rem)]"

// Mobile hero controls: change these values only.
const MOBILE_HERO: HeroControls = {
  frameMinHeight: "min-h-[120px]",
  frameTranslateY: "-translate-y-6",
  textBlockGap: "gap-24",
  textBlockTopPadding: "pt-12",
  textBlockJustify: "justify-start",
  restoreTextSize: "text-[clamp(5.4rem,15.5vw,14.5rem)]",
  visionTextSize: "text-[clamp(3.5rem,9vw,10.5rem)]",
  carMaxWidth: "max-w-[900px]",
  carMarginTop: "mt-27",
  carTranslateY: "-translate-y-[29px]",
  carPaddingX: "px-1",
  carPaddingY: "py-2",
};

// Very small screens (iPhone SE): change these values only.
// Leave a property as "" to keep the mobile value on that screen size.
const XS_HERO: HeroControls = {
  frameMinHeight: "",
  frameTranslateY: "",
  textBlockGap: "",
  textBlockTopPadding: "",
  textBlockJustify: "",
  restoreTextSize: "text-[clamp(4.5rem,15.5vw,14.5rem)]",
  visionTextSize: "text-[clamp(3.4rem,9vw,10.5rem)]",
  carMaxWidth: "",
  carMarginTop: "",
  carTranslateY: "",
  carPaddingX: "",
  carPaddingY: "",
};

// Medium / tablet screens: change these values only.
const TABLET_HERO: HeroControls = {
  frameMinHeight: "md:min-h-[360px]",
  frameTranslateY: "md:translate-y-0",
  textBlockGap: "md:gap-[7.5lh]",
  textBlockTopPadding: "md:pt-0",
  textBlockJustify: "md:justify-center",
  restoreTextSize: "md:text-[clamp(10rem,11.5vw,9rem)]",
  visionTextSize: "md:text-[clamp(6.8rem,6.8vw,6.5rem)]",
  carMaxWidth: "md:max-w-[760px]",
  carMarginTop: "md:mt-0",
  carTranslateY: "md:translate-y-12",
  carPaddingX: "md:px-3",
  carPaddingY: "md:py-5",
};

// Desktop: change these values only.
const DESKTOP_HERO: HeroControls = {
  frameMinHeight: "lg:min-h-[400px]",
  frameTranslateY: "lg:translate-y-0",
  textBlockGap: "lg:gap-[10lh]",
  textBlockTopPadding: "lg:pt-0",
  textBlockJustify: "lg:justify-center",
  restoreTextSize: "lg:text-[clamp(6rem,17vw,14.5rem)]",
  visionTextSize: "lg:text-[clamp(3.2rem,10.7vw,10.5rem)]",
  carMaxWidth: "lg:max-w-[900px]",
  carMarginTop: "lg:mt-0",
  carTranslateY: "lg:translate-y-15",
  carPaddingX: "lg:px-4",
  carPaddingY: "lg:py-8",
};

const MOBILE_HERO_SECTION: HeroSectionControls = {
  outerPx: "px-3",
  outerPt: "pt-2",
  outerPb: "pb-0",
  outerJustify: "justify-start",
  sectionMinHeight: "",
};

const XS_HERO_SECTION: HeroSectionControls = {
  outerPx: "",
  outerPt: "",
  outerPb: "",
  outerJustify: "",
  sectionMinHeight: "",
};

const TABLET_HERO_SECTION: HeroSectionControls = {
  outerPx: "md:px-4",
  outerPt: "md:pt-4",
  outerPb: "md:pb-8",
  outerJustify: "md:justify-center",
  sectionMinHeight: "",
};

const DESKTOP_HERO_SECTION: HeroSectionControls = {
  outerPx: "",
  outerPt: "",
  outerPb: "",
  outerJustify: "",
  sectionMinHeight: "lg:min-h-[calc(100vh-88px)]",
};

function SparkleGearIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
    >
      <circle cx="14" cy="14" r="5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M14 3V6M14 22V25M3 14H6M22 14H25M6.05 6.05L8.17 8.17M19.83 19.83L21.95 21.95M6.05 21.95L8.17 19.83M19.83 8.17L21.95 6.05"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M20 4L21 7L24 8L21 9L20 12L19 9L16 8L19 7L20 4Z"
        fill="currentColor"
      />
    </svg>
  );
}

function HeadlightBadge({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-start justify-end gap-2 text-black ${className}`}>
      <SparkleGearIcon />
      <p className="text-[9px] font-semibold uppercase leading-[1.15] tracking-[0.03em]">
        <span className="block">Headlight</span>
        <span className="block">Restoration</span>
      </p>
    </div>
  );
}

function OfferTier({
  label,
  price,
  features,
  bordered,
}: {
  label: string;
  price: string;
  features: string[];
  bordered?: boolean;
}) {
  return (
    <div
      className={`border-t border-black/10 px-4 py-5 sm:flex sm:flex-1 sm:flex-row sm:items-center sm:gap-6 sm:border-t-0 sm:px-8 sm:py-6 lg:gap-10 lg:px-12 lg:py-8 ${
        bordered ? "md:border-l" : ""
      }`}
    >
      {/* Mobile: single horizontal row — label | price | features */}
      <div className="flex items-center justify-between gap-3 sm:hidden">
        <p className="shrink-0 text-[10px] font-semibold leading-tight tracking-[0.03em] text-black/70">
          {label.split(" ").map((word) => (
            <span key={word} className="block uppercase">
              {word}
            </span>
          ))}
        </p>
        <p className="shrink-0 text-[2.85rem] leading-none font-bold italic text-primary">
          {price}
        </p>
        <div className="grid shrink-0 grid-cols-2 gap-x-3 gap-y-0.5 text-[7.5px] font-medium uppercase tracking-[0.02em] text-black/35">
          {features.map((feature) => (
            <span key={feature} className="whitespace-nowrap">
              - {feature}
            </span>
          ))}
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden shrink-0 sm:block">
        <p className="text-[10px] font-semibold leading-tight tracking-[0.2em] text-black/70">
          {label.split(" ").map((word) => (
            <span key={word} className="block uppercase">
              {word}
            </span>
          ))}
        </p>
      </div>
      <p className="hidden text-5xl leading-none font-bold italic text-primary sm:block lg:text-6xl">
        {price}
      </p>
      <div className="hidden grid-cols-2 gap-x-6 gap-y-1 text-[9px] font-medium uppercase tracking-wider text-black/40 sm:grid">
        {features.map((feature) => (
          <span key={feature} className="flex items-center gap-1.5">
            <span className="text-black/30">•</span>
            {feature}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const restorationFeatures = [
    "Both headlights",
    "Deep decontamination",
    "Done in 30 mins",
    "No hidden fees",
  ];
  const protectionFeatures = [
    "UV protective layer",
    "Anti-yellowing formula",
    "Near-original clarity",
    "Lasts 1-2 years",
  ];

  const heroTextBlockClasses = joinControls(
    {
      textBlockGap: XS_HERO.textBlockGap,
      textBlockTopPadding: XS_HERO.textBlockTopPadding,
      textBlockJustify: XS_HERO.textBlockJustify,
    },
    {
      textBlockGap: MOBILE_HERO.textBlockGap,
      textBlockTopPadding: MOBILE_HERO.textBlockTopPadding,
      textBlockJustify: MOBILE_HERO.textBlockJustify,
    },
    {
      textBlockGap: TABLET_HERO.textBlockGap,
      textBlockTopPadding: TABLET_HERO.textBlockTopPadding,
      textBlockJustify: TABLET_HERO.textBlockJustify,
    },
    {
      textBlockGap: DESKTOP_HERO.textBlockGap,
      textBlockTopPadding: DESKTOP_HERO.textBlockTopPadding,
      textBlockJustify: DESKTOP_HERO.textBlockJustify,
    },
  );
  const heroSectionClasses = joinControls(
    XS_HERO_SECTION,
    MOBILE_HERO_SECTION,
    TABLET_HERO_SECTION,
    DESKTOP_HERO_SECTION,
  );

  return (
    <section
      className={`relative flex flex-col bg-hero ${XS_HERO_SECTION.sectionMinHeight} ${MOBILE_HERO_SECTION.sectionMinHeight} ${TABLET_HERO_SECTION.sectionMinHeight} ${DESKTOP_HERO_SECTION.sectionMinHeight}`}
    >
      <div
        className={`relative flex flex-col items-center overflow-x-hidden overflow-y-visible sm:flex-1 ${heroSectionClasses}`}
      >
        {/* Layered hero: typography behind, car on top */}
        <div
          className={`relative flex w-full max-w-[1200px] items-start justify-center ${joinControls(
            {
              frameMinHeight: XS_HERO.frameMinHeight,
              frameTranslateY: XS_HERO.frameTranslateY,
            },
            {
              frameMinHeight: MOBILE_HERO.frameMinHeight,
              frameTranslateY: MOBILE_HERO.frameTranslateY,
            },
            {
              frameMinHeight: TABLET_HERO.frameMinHeight,
              frameTranslateY: TABLET_HERO.frameTranslateY,
            },
            {
              frameMinHeight: DESKTOP_HERO.frameMinHeight,
              frameTranslateY: DESKTOP_HERO.frameTranslateY,
            },
          )}`}
        >
          {/* Background typography */}
          <div
            className={`pointer-events-none absolute inset-0 z-0 flex select-none flex-col items-center ${heroTextBlockClasses}`}
            aria-hidden="true"
          >
            <SplitText
              tag="h1"
              text="RESTORE"
              className={`w-full font-black italic leading-[1.02] tracking-tight text-primary ${MOBILE_HERO.restoreTextSize} ${XS_HERO.restoreTextSize} ${TABLET_HERO.restoreTextSize} ${DESKTOP_HERO.restoreTextSize}`}
              delay={80}
              duration={0.7}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 50 }}
              to={{ opacity: 1, y: 0 }}
              textAlign="center"
              animateOnMount
            />
            <BlurText
              as="h1"
              text="YOUR VISION"
              delay={150}
              animateBy="words"
              direction="top"
              className={`w-full justify-center text-center font-black italic leading-none tracking-tight text-muted ${MOBILE_HERO.visionTextSize} ${XS_HERO.visionTextSize} ${TABLET_HERO.visionTextSize} ${DESKTOP_HERO.visionTextSize}`}
            />
          </div>

          {/* Car image — rendered above the text */}
          <div
            className={`relative z-20 w-full ${joinControls(
              {
                carMaxWidth: XS_HERO.carMaxWidth,
                carMarginTop: XS_HERO.carMarginTop,
                carTranslateY: XS_HERO.carTranslateY,
                carPaddingX: XS_HERO.carPaddingX,
                carPaddingY: XS_HERO.carPaddingY,
              },
              {
                carMaxWidth: MOBILE_HERO.carMaxWidth,
                carMarginTop: MOBILE_HERO.carMarginTop,
                carTranslateY: MOBILE_HERO.carTranslateY,
                carPaddingX: MOBILE_HERO.carPaddingX,
                carPaddingY: MOBILE_HERO.carPaddingY,
              },
              {
                carMaxWidth: TABLET_HERO.carMaxWidth,
                carMarginTop: TABLET_HERO.carMarginTop,
                carTranslateY: TABLET_HERO.carTranslateY,
                carPaddingX: TABLET_HERO.carPaddingX,
                carPaddingY: TABLET_HERO.carPaddingY,
              },
              {
                carMaxWidth: DESKTOP_HERO.carMaxWidth,
                carMarginTop: DESKTOP_HERO.carMarginTop,
                carTranslateY: DESKTOP_HERO.carTranslateY,
                carPaddingX: DESKTOP_HERO.carPaddingX,
                carPaddingY: DESKTOP_HERO.carPaddingY,
              },
            )}`}
          >
            <Image
              src="/images/hero-img.png"
              alt="Luxury convertible car top view"
              width={1200}
              height={600}
              className="anim-hero-car h-auto w-full object-contain drop-shadow-[0_24px_48px_rgba(0,0,0,0.12)]"
              priority
            />
          </div>

          {/* Side annotations — desktop only */}
          <div className="anim-hero-detail pointer-events-none absolute inset-x-0 top-1/2 z-30 hidden -translate-y-1/2 lg:block">
            <div className="flex items-center justify-between">
              <div className="flex max-w-[150px] items-start gap-3 pl-2">
                <span className="mt-2 block h-px w-10 shrink-0 bg-black" />
                <p className="text-[9px] font-semibold uppercase leading-relaxed tracking-[0.15em] text-black">
                  Save yourself from costly brand new lights.
                </p>
              </div>

              <div className="flex max-w-[130px] items-start gap-3 pr-2 text-black">
                <SparkleGearIcon />
                <p className="text-[9px] font-semibold uppercase leading-relaxed tracking-[0.15em]">
                  Headlight restoration
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Below-hero: headlight badge + offer */}
      <div className="relative z-30 overflow-x-clip border-t border-black/10 bg-hero">
        <HeadlightBadge className="anim-hero-offer px-4 py-4 sm:hidden" />

        <div className="anim-hero-offer mx-auto flex max-w-[1400px] flex-col md:flex-row">
          <OfferTier
            label="Full Restoration"
            price="$50"
            features={restorationFeatures}
          />
          <OfferTier
            label="Sealed Protection"
            price="2yrs"
            features={protectionFeatures}
            bordered
          />
        </div>
      </div>
    </section>
  );
}
