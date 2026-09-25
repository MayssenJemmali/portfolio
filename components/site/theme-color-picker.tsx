"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Palette, RotateCcw, X } from "lucide-react";
import { localeCopy, type Locale } from "@/data/locale-copy";

const PRESET_COLORS = [
  { name: "Original Orange", color: "#ff5a1f" },
  { name: "Electric Blue", color: "#2563eb" },
  { name: "Neon Emerald", color: "#10b981" },
  { name: "Crimson Red", color: "#e11d48" },
  { name: "Cyber Violet", color: "#8b5cf6" },
  { name: "Solar Amber", color: "#f59e0b" },
  { name: "Mint Teal", color: "#0d9488" },
  { name: "Monochrome Ink", color: "#18181b" },
];

// Shared color logic as a hook
function useThemeColor() {
  const [currentColor, setCurrentColor] = useState("#ff5a1f");

  const applyColor = (color: string) => {
    setCurrentColor(color);
    try {
      localStorage.setItem("portfolio_theme_accent", color);
      document.documentElement.style.setProperty("--accent", color);
      document.documentElement.style.setProperty("--primary", color);
      document.documentElement.style.setProperty("--ring", color);
    } catch {
      // Ignore if localStorage is restricted
    }
  };

  useEffect(() => {
    try {
      const saved = localStorage.getItem("portfolio_theme_accent");
      if (saved) applyColor(saved);
    } catch {
      // Ignore
    }
  }, []);

  return { currentColor, applyColor };
}

// Shared picker UI (used both in desktop popover and drawer)
function PickerContent({
  currentColor,
  applyColor,
  onClose,
  showClose,
  locale = "en",
}: {
  currentColor: string;
  applyColor: (c: string) => void;
  onClose?: () => void;
  showClose?: boolean;
  locale?: Locale;
}) {
  const copy = localeCopy[locale].theme;
  const presetNames = locale === "fr"
    ? ["Orange d’origine", "Bleu électrique", "Vert émeraude", "Rouge cramoisi", "Violet néon", "Ambre solaire", "Turquoise menthe", "Encre monochrome"]
    : PRESET_COLORS.map(({ name }) => name);
  return (
    <>
      <div className="flex items-center justify-between pb-3 mb-3 border-b-2 border-[var(--ink)]">
        <div>
          <p className="font-mono text-xs font-extrabold uppercase tracking-wider text-[var(--ink)]">
            {copy.accentTheme}
          </p>
          <p className="text-[11px] text-muted-foreground">{copy.testColors}</p>
        </div>
        {showClose && onClose && (
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded hover:bg-[var(--surface)] text-[var(--ink)] cursor-pointer"
            aria-label={copy.close}
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      <div className="space-y-3">
        <div>
          <p className="text-[11px] font-mono font-bold text-muted-foreground mb-2 uppercase">{copy.presets}</p>
          <div className="grid grid-cols-4 gap-2">
            {PRESET_COLORS.map((preset, index) => {
              const isSelected = currentColor.toLowerCase() === preset.color.toLowerCase();
              return (
                <button
                  key={preset.color}
                  type="button"
                  onClick={() => applyColor(preset.color)}
                  title={presetNames[index]}
                  className="flex flex-col items-center gap-1 p-1.5 rounded border border-[var(--ink)] bg-white hover:bg-[var(--surface)] transition-all cursor-pointer shadow-[1.5px_1.5px_0_var(--ink)] active:translate-x-0.5 active:translate-y-0.5"
                >
                  <span
                    className="w-5 h-5 rounded-full border border-[var(--ink)] flex items-center justify-center"
                    style={{ backgroundColor: preset.color }}
                  >
                    {isSelected && (
                      <Check className="w-3 h-3 text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]" />
                    )}
                  </span>
                  <span className="text-[9px] font-mono truncate max-w-full text-center">
                    {presetNames[index].split(" ")[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="pt-2 border-t border-[var(--ink)]/20">
          <p className="text-[11px] font-mono font-bold text-muted-foreground mb-1.5 uppercase">{copy.custom}</p>
          <div className="flex items-center gap-2">
            <input
              type="color"
              value={currentColor}
              onChange={(e) => applyColor(e.target.value)}
              className="w-8 h-8 rounded border-2 border-[var(--ink)] cursor-pointer bg-transparent p-0"
              aria-label={copy.chooseCustom}
            />
            <span className="font-mono text-xs font-bold uppercase bg-[var(--surface)] px-2.5 py-1.5 rounded border border-[var(--ink)] flex-1 text-center">
              {currentColor}
            </span>
            <button
              type="button"
              onClick={() => applyColor("#ff5a1f")}
              title={copy.resetTo}
              className="p-1.5 rounded border border-[var(--ink)] hover:bg-[var(--surface)] font-mono text-xs flex items-center gap-1 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="text-[10px]">{copy.reset}</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

// Desktop floating button + popover version
export function ThemeColorPicker({ drawerMode, locale = "en" }: { drawerMode?: boolean; locale?: Locale }) {
  const { currentColor, applyColor } = useThemeColor();
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // Drawer mode: render the picker UI inline, no button/popover
  if (drawerMode) {
    return (
      <div className="w-full">
        <PickerContent
          currentColor={currentColor}
          applyColor={applyColor}
          showClose={false}
          locale={locale}
        />
      </div>
    );
  }

  // Desktop mode: floating button + dropdown popover
  return (
    <div className="relative inline-block" ref={popoverRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="theme-picker-button flex items-center gap-2 px-3 py-1.5 rounded-full border-2 border-[var(--ink)] bg-[#fffaf0] font-mono text-xs font-bold text-[var(--ink)] shadow-[2px_2px_0_var(--ink)] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_var(--ink)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none cursor-pointer"
        aria-label={localeCopy[locale].theme.picker}
        title={localeCopy[locale].theme.pickerTitle}
      >
        <span
          className="w-3.5 h-3.5 rounded-full border border-[var(--ink)] shrink-0 transition-colors"
          style={{ backgroundColor: currentColor }}
          aria-hidden="true"
        />
        <Palette className="w-3.5 h-3.5" aria-hidden="true" />
        <span>{locale === "fr" ? "Thème" : "Theme"}</span>
      </button>

      {isOpen && (
        <div
          className="absolute right-0 top-full mt-2 w-72 rounded-lg border-2 border-[var(--ink)] bg-[#fffaf0] p-4 shadow-[5px_5px_0_var(--ink)] z-50 animate-in fade-in zoom-in-95 duration-150"
          role="dialog"
          aria-label={localeCopy[locale].theme.dialog}
        >
          <PickerContent
            currentColor={currentColor}
            applyColor={applyColor}
            onClose={() => setIsOpen(false)}
            showClose
            locale={locale}
          />
        </div>
      )}
    </div>
  );
}
