(() => {
    gsap.registerPlugin(ScrollTrigger);

    const FALL_DISTANCE = 60;

    function animateNavbar() {
        const navbar = document.querySelector('header.topbar');
        if (!navbar) return;

        gsap.from(navbar, {
            opacity: 0,
            y: -60,
            duration: 0.8,
            ease: 'power3.out',
            delay: 0.2,
        });
    }

    function animateHero() {
        const hero = document.querySelector('.stacked-1');
        if (!hero) return;

        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        tl.from('.glass-panel', { opacity: 0, y: -FALL_DISTANCE, duration: 0.8 })
          .from('h1', { opacity: 0, y: -FALL_DISTANCE, duration: 1 }, '-=0.5')
          .from('.stacked-1 p', { opacity: 0, y: -FALL_DISTANCE, duration: 0.8 }, '-=0.6')
          .from('.stacked-1 .flex.gap-4', { opacity: 0, y: -FALL_DISTANCE, duration: 0.8 }, '-=0.5');
    }

    function animateScrollElements() {
        gsap.utils.toArray('[data-animate]').forEach((el) => {
            const delay = parseFloat(el.dataset.delay) || 0;
            const stagger = parseFloat(el.dataset.stagger) || 0;
            if (el.dataset.children) {
                const items = Array.from(el.children);
                gsap.set(items, { opacity: 0, y: -FALL_DISTANCE });

                ScrollTrigger.create({
                    trigger: el,
                    start: 'top 85%',
                    once: true,
                    onEnter: () => {
                        gsap.to(items, {
                            opacity: 1,
                            y: 0,
                            duration: 0.9,
                            ease: 'power3.out',
                            stagger: stagger || 0.15,
                            delay: delay,
                        });
                    },
                });
            } else {
                gsap.set(el, { opacity: 0, y: -FALL_DISTANCE });

                ScrollTrigger.create({
                    trigger: el,
                    start: 'top 85%',
                    once: true,
                    onEnter: () => {
                        gsap.to(el, {
                            opacity: 1,
                            y: 0,
                            duration: 0.9,
                            ease: 'power3.out',
                            delay: delay,
                        });
                    },
                });
            }
        });
    }

    window.addEventListener('DOMContentLoaded', () => {
        animateNavbar();
        animateHero();
        animateScrollElements();
    });
})();
