"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ScaleLoader } from "react-spinners";
import { markAnimReady } from "@/lib/animReady";

const PRIMARY = "#c7361d";
const FADE_MS = 500;
const SETTLE_MS = 300;
const MAX_WAIT_MS = 12_000;

function whenImageReady(img: HTMLImageElement): Promise<void> {
  if (img.complete) return Promise.resolve();
  return new Promise((resolve) => {
    img.addEventListener("load", () => resolve(), { once: true });
    img.addEventListener("error", () => resolve(), { once: true });
  });
}

async function waitForImages(): Promise<void> {
  const pending = Array.from(document.images).filter((img) => !img.complete);
  await Promise.all(pending.map(whenImageReady));
}

async function waitForPageAssets(): Promise<void> {
  await document.fonts.ready;

  if (document.readyState !== "complete") {
    await new Promise<void>((resolve) => {
      window.addEventListener("load", () => resolve(), { once: true });
    });
  }

  await new Promise<void>((resolve) => {
    requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
  });

  return new Promise<void>((resolve) => {
    let settleTimer: ReturnType<typeof setTimeout>;

    const check = async () => {
      await waitForImages();
      clearTimeout(settleTimer);
      settleTimer = setTimeout(() => {
        observer.disconnect();
        resolve();
      }, SETTLE_MS);
    };

    const observer = new MutationObserver(() => {
      void check();
    });

    observer.observe(document.body, { childList: true, subtree: true });
    void check();
  });
}

export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      markAnimReady();
      setVisible(false);
      return;
    }

    let hideTimer: ReturnType<typeof setTimeout>;
    let cancelled = false;

    const finish = () => {
      if (cancelled) return;
      markAnimReady();
      setFadeOut(true);
      hideTimer = setTimeout(() => setVisible(false), FADE_MS);
    };

    const assetReady = waitForPageAssets();
    const timeout = new Promise<void>((resolve) => {
      setTimeout(resolve, MAX_WAIT_MS);
    });

    Promise.race([assetReady, timeout]).then(finish);

    return () => {
      cancelled = true;
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading Jadz"
      className={`fixed inset-0 z-9999 flex items-center justify-center bg-background transition-opacity duration-500 ease-out ${
        fadeOut ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-10">
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Jadz logo"
            width={48}
            height={48}
            className="h-12 w-12 object-contain"
            priority
          />
          <span className="text-3xl font-bold tracking-wide text-black">
            JADZ
          </span>
        </div>

        <ScaleLoader
          color={PRIMARY}
          loading
          height={35}
          width={4}
          radius={2}
          margin={2}
          barCount={5}
        />
      </div>
    </div>
  );
}
