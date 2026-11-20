(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  document.querySelectorAll('[data-px-diagram]').forEach(figure => {
    const svg = figure.querySelector('svg');
    const replay = figure.querySelector('button');
    if (typeof svg.setCurrentTime !== 'function') return;
    const mountain = figure.classList.contains('px-serra');
    const section = figure.closest('section');
    const words = mountain ? [...section.querySelectorAll('.px-ascent-phrase strong')] : [];
    let observer;
    let hasPlayed = false;

    function play(force = false) {
      if (reduced.matches || (!force && hasPlayed && svg.getCurrentTime() < 4.9)) return;
      hasPlayed = true;
      svg.setCurrentTime(0);
      svg.unpauseAnimations();
      words.forEach((word, i) => {
        word.getAnimations().forEach(animation => animation.cancel());
        const start = [300, 1500, 2600][i];
        const end = [1500, 2600, 4000][i];
        const frames = [[0, .55], [start, .55], [start + 500, 1], [end, 1],
          [end + 500, .55], [4900, .55], [5400, 1]];
        word.animate(frames.map(([ms, opacity]) => ({offset: ms / 5400, opacity})), 5400);
      });
    }

    function initialize() {
      observer?.disconnect();
      words.forEach(word => word.getAnimations().forEach(animation => animation.cancel()));
      svg.pauseAnimations();
      svg.setCurrentTime(reduced.matches || mountain ? 6 : 0);
      hasPlayed = false;
      replay.hidden = reduced.matches;
      if (reduced.matches) return;
      if (!('IntersectionObserver' in window)) { play(); return; }
      observer = new IntersectionObserver(entries => {
        if (entries.some(entry => entry.isIntersecting)) {
          play();
          observer.disconnect();
        }
      }, {threshold: mountain ? .4 : .35});
      observer.observe(svg);
    }

    replay.addEventListener('click', () => play(true));
    if (mountain) figure.addEventListener('mouseenter', () => play());
    else {
      const links = figure.parentElement.querySelectorAll('.px-axis-links a');
      function highlight() {
        const focus = [...links].find(a => a.matches(':focus-visible')) ||
          [...links].find(a => a.matches(':hover'));
        svg.dataset.highlight = focus ? focus.textContent.trim().toLowerCase() : '';
      }
      links.forEach(a => ['mouseenter', 'mouseleave', 'focus', 'blur'].forEach(event =>
        a.addEventListener(event, highlight)));
    }
    reduced.addEventListener('change', initialize);
    initialize();
  });
})();
