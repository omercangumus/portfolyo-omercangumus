const finePointer = window.matchMedia("(any-hover: hover) and (any-pointer: fine)");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const forcedColors = window.matchMedia("(forced-colors: active)");

const root = document.documentElement;
const interactiveSelector = "a, button, [role='button'], summary, label[for]";
const mediaQueries = [finePointer, reducedMotion, forcedColors];

let removeEffect = null;

function canRunEffect() {
    return finePointer.matches && !reducedMotion.matches && !forcedColors.matches;
}

function mountEffect() {
    const layer = document.createElement("div");
    layer.className = "cursor-signal";
    layer.setAttribute("aria-hidden", "true");

    const anchor = document.createElement("span");
    anchor.className = "cursor-signal__anchor";

    const ring = document.createElement("span");
    ring.className = "cursor-signal__ring";

    const pulse = document.createElement("span");
    pulse.className = "cursor-signal__pulse";

    anchor.append(ring, pulse);
    layer.append(anchor);

    const trail = Array.from({ length: 3 }, (_, index) => {
        const node = document.createElement("span");
        node.className = "cursor-signal__trail-node";
        node.style.setProperty("--cursor-signal-trail-opacity", String(0.2 - index * 0.065));
        node.style.setProperty("--cursor-signal-trail-scale", String(1 - index * 0.18));
        layer.append(node);
        return {
            element: node,
            x: -120,
            y: -120,
        };
    });

    document.body.append(layer);

    let targetX = -120;
    let targetY = -120;
    let initialized = false;
    let visible = false;
    let animationFrame = 0;
    let movementTimer = 0;
    let pulseAnimation = null;

    const setInteractiveState = (target) => {
        const interactive = target instanceof Element && Boolean(target.closest(interactiveSelector));
        root.classList.toggle("cursor-signal-interactive", interactive);
    };

    const drawTrail = () => {
        animationFrame = 0;
        let leaderX = targetX;
        let leaderY = targetY;
        let largestDelta = 0;

        trail.forEach((point, index) => {
            const follow = 0.48 - index * 0.06;
            const deltaX = leaderX - point.x;
            const deltaY = leaderY - point.y;
            point.x += deltaX * follow;
            point.y += deltaY * follow;
            largestDelta = Math.max(largestDelta, Math.abs(deltaX), Math.abs(deltaY));
            point.element.style.transform = `translate3d(${point.x}px, ${point.y}px, 0) translate(-50%, -50%) scale(var(--cursor-signal-trail-scale))`;
            leaderX = point.x;
            leaderY = point.y;
        });

        if (visible && largestDelta > 0.08) {
            animationFrame = requestAnimationFrame(drawTrail);
        }
    };

    const scheduleTrail = () => {
        if (!animationFrame) animationFrame = requestAnimationFrame(drawTrail);
    };

    const syncTrail = (x, y) => {
        trail.forEach((point) => {
            point.x = x;
            point.y = y;
            point.element.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(var(--cursor-signal-trail-scale))`;
        });
    };

    const stopMovement = () => {
        window.clearTimeout(movementTimer);
        movementTimer = 0;
        root.classList.remove("cursor-signal-moving");
        if (animationFrame) cancelAnimationFrame(animationFrame);
        animationFrame = 0;
        initialized = false;
    };

    const hideEffect = () => {
        visible = false;
        stopMovement();
        pulseAnimation?.cancel();
        pulseAnimation = null;
        root.classList.remove("cursor-signal-visible", "cursor-signal-interactive", "cursor-signal-pressed");
    };

    const onPointerMove = (event) => {
        if (event.pointerType && event.pointerType !== "mouse") {
            hideEffect();
            return;
        }

        targetX = event.clientX;
        targetY = event.clientY;
        anchor.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
        setInteractiveState(event.target);

        if (!initialized || event.buttons !== 0) {
            initialized = true;
            syncTrail(targetX, targetY);
        }

        visible = true;
        root.classList.add("cursor-signal-visible");

        if (event.buttons !== 0) {
            stopMovement();
            return;
        }

        root.classList.add("cursor-signal-moving");
        window.clearTimeout(movementTimer);
        movementTimer = window.setTimeout(stopMovement, 90);
        scheduleTrail();
    };

    const onPointerOver = (event) => {
        if (event.pointerType && event.pointerType !== "mouse") {
            hideEffect();
            return;
        }
        setInteractiveState(event.target);
    };

    const onPointerDown = (event) => {
        if (event.pointerType && event.pointerType !== "mouse") {
            hideEffect();
            return;
        }

        if (event.button !== 0) return;

        targetX = event.clientX;
        targetY = event.clientY;
        anchor.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
        visible = true;
        root.classList.add("cursor-signal-visible");
        root.classList.add("cursor-signal-pressed");
        stopMovement();
        pulseAnimation?.cancel();
        pulseAnimation = typeof pulse.animate === "function"
            ? pulse.animate(
                [
                    { opacity: 0.42, transform: "translate(-50%, -50%) scale(0.68)" },
                    { opacity: 0, transform: "translate(-50%, -50%) scale(1.7)" },
                ],
                { duration: 260, easing: "cubic-bezier(0.2, 0.8, 0.2, 1)" },
            )
            : null;
    };

    const onPointerUp = (event) => {
        if (event.pointerType && event.pointerType !== "mouse") {
            hideEffect();
            return;
        }
        root.classList.remove("cursor-signal-pressed");
        setInteractiveState(event.target);
    };

    const onPointerOut = (event) => {
        if (!event.relatedTarget) hideEffect();
    };

    const onVisibilityChange = () => {
        if (document.hidden) hideEffect();
    };

    document.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerover", onPointerOver, { passive: true });
    document.addEventListener("pointerdown", onPointerDown, { passive: true });
    document.addEventListener("pointerup", onPointerUp, { passive: true });
    document.addEventListener("pointercancel", hideEffect, { passive: true });
    document.addEventListener("pointerout", onPointerOut, { passive: true });
    document.addEventListener("visibilitychange", onVisibilityChange);
    window.addEventListener("blur", hideEffect);

    return () => {
        hideEffect();
        document.removeEventListener("pointermove", onPointerMove);
        document.removeEventListener("pointerover", onPointerOver);
        document.removeEventListener("pointerdown", onPointerDown);
        document.removeEventListener("pointerup", onPointerUp);
        document.removeEventListener("pointercancel", hideEffect);
        document.removeEventListener("pointerout", onPointerOut);
        document.removeEventListener("visibilitychange", onVisibilityChange);
        window.removeEventListener("blur", hideEffect);
        layer.remove();
    };
}

function syncEffect() {
    removeEffect?.();
    removeEffect = canRunEffect() ? mountEffect() : null;
}

mediaQueries.forEach((query) => query.addEventListener("change", syncEffect));
syncEffect();
