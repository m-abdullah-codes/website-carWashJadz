export const ANIM_READY_EVENT = "jadz:anim-ready";

export function markAnimReady() {
  if (typeof document === "undefined") return;
  document.documentElement.classList.add("anim-ready");
  window.dispatchEvent(new Event(ANIM_READY_EVENT));
}

export function isAnimReady() {
  if (typeof document === "undefined") return false;
  return document.documentElement.classList.contains("anim-ready");
}

export function whenAnimReady(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (isAnimReady()) return Promise.resolve();
  return new Promise((resolve) => {
    window.addEventListener(ANIM_READY_EVENT, () => resolve(), { once: true });
  });
}
