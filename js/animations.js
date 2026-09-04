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
          .from('.stacked-1 .flex.gap-4', { opacity: 0, y: -FALL_DISTANCE, duration: 0.8 }, '-=0.5')
          .from('#onda-left', {
              x: -400,
              y: 200,
              opacity: 0,
              rotation: '-=40',
              duration: 1.4,
              ease: 'power3.out'
          }, '-=0.6')
          .from('#onda-right', {
              x: 400,
              y: -200,
              opacity: 0,
              rotation: '+=40',
              duration: 1.4,
              ease: 'power3.out'
          }, '-=1.2');
    }

    let stackedTrigger = null;
    let stackedTrackListener = null;
    let stackedIsMobile = null;

    function teardownStacked(page2, page3, track) {
        if (stackedTrigger) {
            stackedTrigger.kill();
            stackedTrigger = null;
        }
        if (stackedTrackListener && track) {
            track.removeEventListener('scroll', stackedTrackListener);
            stackedTrackListener = null;
        }
        if (page2) gsap.set(page2, { opacity: 1, y: 0 });
        if (page3) gsap.set(page3, { opacity: 1, y: 0 });
    }

    function setupStacked() {
        const stage = document.getElementById('stacked-stage');
        if (!stage) return;

        const page2 = stage.querySelector('.stacked-2 .stacked-page');
        const page3 = stage.querySelector('.stacked-3 .stacked-page');
        const track = stage.querySelector('.stacked-track');
        if (!page2 || !page3) return;

        teardownStacked(page2, page3, track);
        gsap.set(stage.querySelectorAll('[data-animate]'), { opacity: 1, y: 0 });

        const dots = stage.querySelectorAll('.stacked-dot');
        const setSlide = (n) => {
            dots.forEach((dot, i) => {
                dot.classList.toggle('bg-primary-orange', i === n - 1);
                dot.classList.toggle('bg-[#928070]', i !== n - 1);
            });
        };
        setSlide(1);

        if (window.innerWidth < 768) {
            gsap.set(page3, { opacity: 1, y: 0 });

            if (track && dots.length) {
                stackedTrackListener = () => {
                    const index = Math.round(track.scrollLeft / track.clientWidth);
                    setSlide(index + 1);
                };
                track.addEventListener('scroll', stackedTrackListener, { passive: true });
            }
            return;
        }

        gsap.set(page3, { opacity: 0, y: 40 });

        const tl = gsap.timeline({ paused: true });
        tl.to(page2, { opacity: 0, y: -60, duration: 0.45, ease: 'power2.in' })
          .to(page3, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '+=0.3');

        stackedTrigger = ScrollTrigger.create({
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

    function handleStackedResize() {
        const mobile = window.innerWidth < 768;
        if (mobile === stackedIsMobile) return;
        stackedIsMobile = mobile;
        setupStacked();
        ScrollTrigger.refresh();
    }

    function animateStackedTransition() {
        stackedIsMobile = window.innerWidth < 768;
        setupStacked();
        window.addEventListener('resize', handleStackedResize);
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

    function animateTopoPattern() {
        const topo = document.querySelector('.topo-pattern');
        if (!topo) return;
        gsap.to(topo, {
            backgroundPosition: '40px 30px',
            duration: 10,
            ease: 'none',
            repeat: -1,
            yoyo: true,
        });
    }

    window.addEventListener('DOMContentLoaded', () => {
        animateNavbar();
        animateHero();
        animateStackedTransition();
        animateScrollElements();
        animateTopoPattern();
    });
})();
