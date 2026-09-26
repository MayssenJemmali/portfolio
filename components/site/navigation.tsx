"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeColorPicker } from "./theme-color-picker";
import { LanguageSwitcher } from "./language-switcher";
import { localeCopy } from "@/data/locale-copy";
import { useLocale } from "@/components/site/locale-provider";

export function Navigation({ resumeUrl = "/resume-en.pdf" }: { resumeUrl?: string }) {
  const { locale } = useLocale();
  const copy = localeCopy[locale];
  const navigationItems = [
    { id: "about", label: copy.navigation.about },
    { id: "projects", label: copy.navigation.projects },
    { id: "experience", label: copy.navigation.experience },
    { id: "community", label: copy.navigation.community },
    { id: "contact", label: copy.navigation.contact },
  ];
  const [active, setActive] = useState("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState<{
    left: number;
    width: number;
    opacity: number;
  }>({ left: 0, width: 0, opacity: 0 });

  const navRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});
  const pendingNavTarget = useRef<string | null>(null);
  const navScrollTimer = useRef<number | null>(null);

  const handleSectionNavigation = (id: string) => {
    pendingNavTarget.current = id;
    setActive(id);
    if (navScrollTimer.current !== null) window.clearTimeout(navScrollTimer.current);
    // Fallback for browsers that do not dispatch scrollend.
    navScrollTimer.current = window.setTimeout(() => {
      pendingNavTarget.current = null;
      navScrollTimer.current = null;
    }, 1800);
  };

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const sections = navigationItems
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));
    let frame = 0;
    const finishNavigation = () => {
      const target = pendingNavTarget.current;
      if (!target) return;
      pendingNavTarget.current = null;
      if (navScrollTimer.current !== null) window.clearTimeout(navScrollTimer.current);
      navScrollTimer.current = null;
      setActive(target);
    };
    const updateActive = () => {
      frame = 0;
      if (pendingNavTarget.current) {
        setActive(pendingNavTarget.current);
        return;
      }
      const marker = Math.min(window.innerHeight * 0.3, 240);
      const current = sections.reduce((found, section) =>
        section.getBoundingClientRect().top <= marker ? section.id : found,
      sections[0]?.id ?? "about");
      setActive(current);
    };
    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateActive);
    };

    updateActive();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    document.addEventListener("scrollend", finishNavigation);
    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      document.removeEventListener("scrollend", finishNavigation);
      if (navScrollTimer.current !== null) window.clearTimeout(navScrollTimer.current);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useLayoutEffect(() => {
    const updatePosition = () => {
      const activeEl = itemRefs.current[active];
      const navEl = navRef.current;
      if (activeEl && navEl) {
        setIndicatorStyle({
          left: activeEl.offsetLeft,
          width: activeEl.offsetWidth,
          opacity: 1,
        });
      } else {
        setIndicatorStyle((prev) => ({ ...prev, opacity: 0 }));
      }
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, [active, locale]);

  return (
    <>
      <header className="site-header">
        {/* Left spacer (desktop only) */}
        <div className="header-left" aria-hidden="true" />

        {/* Desktop floating pill dock — hidden on mobile */}
        <nav
          ref={navRef}
          aria-label={copy.navigation.label}
          className="nav-pill-container relative"
        >
          <span
            className="nav-sliding-indicator pointer-events-none absolute"
            style={{
              transform: `translateX(${indicatorStyle.left}px)`,
              width: `${indicatorStyle.width}px`,
              opacity: indicatorStyle.opacity,
            }}
            aria-hidden="true"
          />
          {navigationItems.map((item) => {
            const isActive = active === item.id;
            return (
              <a
                key={item.id}
                ref={(el) => { itemRefs.current[item.id] = el; }}
                href={`#${item.id}`}
                onClick={() => handleSectionNavigation(item.id)}
                className={cn("nav-pill-item", isActive && "is-active")}
                aria-current={isActive ? "location" : undefined}
              >
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Desktop right: Theme Picker — hidden on mobile */}
        <div className="header-right desktop-only-right">
          <LanguageSwitcher />
          <ThemeColorPicker locale={locale} />
        </div>

        {/* Mobile right: Hamburger only — shown on mobile */}
        <div className="mobile-nav-trigger">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="flex items-center justify-center w-10 h-10 rounded-lg border-2 border-[var(--ink)] bg-[var(--card)] shadow-[2.5px_2.5px_0_var(--ink)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none cursor-pointer"
            aria-label={copy.navigation.openMenu}
            aria-expanded={mobileMenuOpen}
          >
            <Menu className="w-5 h-5 text-[var(--ink)]" />
          </button>
        </div>
      </header>

      {/* Backdrop */}
      <div
        className={cn(
          "mobile-drawer-backdrop fixed inset-0 z-50 bg-black/40 transition-opacity duration-300",
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Slide-out sidebar drawer */}
      <aside
        className={cn(
          "mobile-sidebar fixed top-0 right-0 z-50 h-full w-[18rem] max-w-[85vw]",
          "border-l-2 border-[var(--ink)] bg-[var(--card)] shadow-[-6px_0_0_var(--ink)]",
          "flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
            aria-label={copy.navigation.mobileLinks}
        aria-hidden={!mobileMenuOpen}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b-2 border-[var(--ink)]">
          <span className="font-mono text-xs font-black uppercase tracking-widest text-[var(--ink)]">
            {copy.navigation.menu}
          </span>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center w-8 h-8 rounded-md border-2 border-[var(--ink)] bg-[var(--card)] shadow-[2px_2px_0_var(--ink)] hover:bg-[var(--surface)] active:translate-x-0.5 active:translate-y-0.5 cursor-pointer"
            aria-label={copy.navigation.closeMenu}
          >
            <X className="w-4 h-4 text-[var(--ink)]" />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto px-5 py-5 flex flex-col gap-5">
          {/* Nav Links */}
          <nav className="flex flex-col gap-2" aria-label={copy.navigation.mobileLinks}>
            {navigationItems.map((item) => {
              const isActive = active === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => {
                    handleSectionNavigation(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={cn(
                    "flex items-center justify-between px-4 py-3 rounded-lg border-2 border-[var(--ink)]",
                    "font-sans font-extrabold text-base transition-all",
                    isActive
                      ? "bg-[var(--ink)] text-[var(--on-ink)] shadow-[3px_3px_0_var(--accent)]"
                      : "bg-[var(--card)] text-[var(--ink)] shadow-[3px_3px_0_var(--ink)] hover:bg-[var(--surface)]"
                  )}
                  aria-current={isActive ? "location" : undefined}
                >
                  <span>{item.label}</span>
                  <span className={cn("text-xs font-mono", isActive ? "text-[var(--accent)]" : "text-muted-foreground")}>
                    #{item.id}
                  </span>
                </a>
              );
            })}
          </nav>

          {/* Divider */}
          <div className="border-t-2 border-[var(--ink)]" />

          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] font-black uppercase tracking-widest text-[var(--ink)]">
              {copy.switcher.label}
            </span>
            <LanguageSwitcher />
          </div>

          {/* Theme Color Picker — inside drawer on mobile */}
          <div>
            <p className="font-mono text-[11px] font-black uppercase tracking-widest text-[var(--ink)] mb-3">
              {copy.navigation.themeColor}
            </p>
            <ThemeColorPicker drawerMode locale={locale} />
          </div>
        </div>

        {/* Drawer Footer */}
        <div className="px-5 py-4 border-t-2 border-[var(--ink)]">
          <a
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-lg border-2 border-[var(--ink)] bg-[var(--surface)] font-bold text-sm text-[var(--ink)] shadow-[3px_3px_0_var(--ink)] hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)] transition-colors"
          >
            <span>{copy.navigation.viewResume}</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </aside>
    </>
  );
}
