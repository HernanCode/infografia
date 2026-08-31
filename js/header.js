(() => {
    const header = document.querySelector('header.topbar');
    const sections = Array.from(document.querySelectorAll('main section, section#contact, footer'));

    function isDark(rgb) {
        const m = rgb.match(/[\d.]+/g);
        if (!m || m.length < 3) return false;
        if (m.length > 3 && Number(m[3]) === 0) return false;
        return (Number(m[0]) + Number(m[1]) + Number(m[2])) / 3 < 128;
    }

    function update() {
        let active = null;
        for (let i = sections.length - 1; i >= 0; i--) {
            const r = sections[i].getBoundingClientRect();
            if (r.top <= 0) {
                active = sections[i];
                break;
            }
        }
        const dark = active ? isDark(getComputedStyle(active).backgroundColor) : false;
        header.classList.toggle('topbar--transparent', dark);
    }

    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();

    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (menuBtn && mobileMenu) {
        const icon = menuBtn.querySelector('.material-symbols-outlined');
        function setOpen(open) {
            mobileMenu.classList.toggle('hidden', !open);
            menuBtn.setAttribute('aria-expanded', String(open));
            if (icon) icon.textContent = open ? 'close' : 'menu';
        }
        menuBtn.addEventListener('click', () => {
            const open = mobileMenu.classList.contains('hidden');
            setOpen(open);
        });
        mobileMenu.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => setOpen(false));
        });
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768) setOpen(false);
        });
    }
})();
