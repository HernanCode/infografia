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

    function animateStackedTransition() {
        const stage = document.getElementById('stacked-stage');
        if (!stage) return;

        const page2 = stage.querySelector('.stacked-2 .stacked-page');
        const page3 = stage.querySelector('.stacked-3 .stacked-page');
        if (!page2 || !page3) return;

        gsap.set(stage.querySelectorAll('[data-animate]'), { opacity: 1, y: 0 });
        gsap.set(page3, { opacity: 0, y: 40 });

        const dots = stage.querySelectorAll('.stacked-dot');
        const setSlide = (n) => {
            dots.forEach((dot, i) => {
                dot.classList.toggle('bg-primary-orange', i === n - 1);
                dot.classList.toggle('bg-[#928070]', i !== n - 1);
            });
        };

        const tl = gsap.timeline({ paused: true });
        tl.to(page2, { opacity: 0, y: -60, duration: 0.45, ease: 'power2.in' })
          .to(page3, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '+=0.3');

        ScrollTrigger.create({
            trigger: stage,
            start: 'top top',
            end: '+=150%',
            pin: true,
            anticipatePin: 1,
            onUpdate: (self) => {
                if (self.progress > 0.5) {
                    tl.play();
                    setSlide(2);
                } else {
                    tl.reverse();
                    setSlide(1);
                }
            },
        });
    }

    function animateScrollElements() {
        const stage = document.getElementById('stacked-stage');
        gsap.utils.toArray('[data-animate]').forEach((el) => {
            if (stage && stage.contains(el)) return;
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
        animateStackedTransition();
        animateScrollElements();
    });
})();
