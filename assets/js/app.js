/**
 * omercangumus.com — Interactive App Features
 * Pure Vanilla JavaScript — zero runtime dependencies.
 */

import { getLanguage } from "./i18n.js";

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function setupHeader() {
    const header = document.querySelector("[data-header]");
    if (!header) return;

    const updateHeader = () => header.classList.toggle("is-scrolled", window.scrollY > 12);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
}

function setupReveal() {
    const elements = [...document.querySelectorAll(".reveal")];
    if (!elements.length || reducedMotion.matches || !("IntersectionObserver" in window)) {
        return;
    }

    document.documentElement.classList.add("motion-ok");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-revealing");
            observer.unobserve(entry.target);
        });
    }, {
        rootMargin: "0px 0px -8%",
        threshold: 0.08,
    });

    elements.forEach((element) => {
        if (element.getBoundingClientRect().top < window.innerHeight * 0.94) {
            element.classList.add("is-revealing");
        } else {
            observer.observe(element);
        }
    });
}

function setupMobileMenu() {
    const button = document.querySelector("[data-menu-toggle]");
    const menu = document.querySelector("[data-mobile-menu]");
    if (!button || !menu) return;

    let previousFocus = null;

    const menuItems = () => [...menu.querySelectorAll("a[href], button:not([disabled])")];
    const focusable = () => [button, ...menuItems()];

    const updateButtonLabel = (open) => {
        const label = button.querySelector(".sr-only");
        if (!label) return;
        const english = getLanguage() === "en";
        label.textContent = open
            ? (english ? "Close menu" : "Menüyü kapat")
            : (english ? "Open menu" : "Menüyü aç");
    };

    const closeMenu = ({ restoreFocus = true } = {}) => {
        if (button.getAttribute("aria-expanded") !== "true") return;
        button.setAttribute("aria-expanded", "false");
        menu.hidden = true;
        document.body.classList.remove("menu-open");
        updateButtonLabel(false);
        if (restoreFocus && previousFocus instanceof HTMLElement) previousFocus.focus();
    };

    const openMenu = () => {
        previousFocus = document.activeElement;
        menu.hidden = false;
        button.setAttribute("aria-expanded", "true");
        document.body.classList.add("menu-open");
        updateButtonLabel(true);
        requestAnimationFrame(() => menuItems()[0]?.focus());
    };

    button.addEventListener("click", () => {
        if (button.getAttribute("aria-expanded") === "true") closeMenu();
        else openMenu();
    });

    menu.addEventListener("click", (event) => {
        if (event.target.closest("[data-mobile-link]")) closeMenu({ restoreFocus: false });
    });

    document.addEventListener("keydown", (event) => {
        const open = button.getAttribute("aria-expanded") === "true";
        if (!open) return;

        if (event.key === "Escape") {
            event.preventDefault();
            closeMenu();
            return;
        }

        if (event.key !== "Tab") return;
        const items = focusable();
        const first = items[0];
        const last = items.at(-1);
        if (!first || !last) return;

        if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 960) closeMenu({ restoreFocus: false });
    }, { passive: true });

    document.addEventListener("portfolio:languagechange", () => {
        updateButtonLabel(button.getAttribute("aria-expanded") === "true");
    });
}

function setupSectionNavigation() {
    const links = [...document.querySelectorAll("[data-nav-link]")];
    if (!links.length || !("IntersectionObserver" in window)) return;

    const sections = links
        .map((link) => document.querySelector(link.getAttribute("href")))
        .filter(Boolean);

    const observer = new IntersectionObserver((entries) => {
        const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        links.forEach((link) => {
            const active = link.getAttribute("href") === `#${visible.target.id}`;
            link.classList.toggle("is-active", active);
            if (active) link.setAttribute("aria-current", "true");
            else link.removeAttribute("aria-current");
        });
    }, {
        rootMargin: "-25% 0px -55%",
        threshold: [0, 0.15, 0.45],
    });

    sections.forEach((section) => observer.observe(section));
}

function setupVisibilityPause() {
    const update = () => document.documentElement.classList.toggle("page-hidden", document.hidden);
    update();
    document.addEventListener("visibilitychange", update);
}

setupHeader();
setupReveal();
setupMobileMenu();
setupSectionNavigation();
setupVisibilityPause();
