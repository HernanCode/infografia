(() => {
    const header = document.querySelector('header.topbar');
    const sections = Array.from(document.querySelectorAll('main section'));

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
})();
