const menu = document.querySelector('.menu');
const nav = document.getElementById('navegacao');
function abrirMenu(aberto) {
  menu.setAttribute('aria-expanded', String(aberto));
  nav.classList.toggle('open', aberto);
}
menu.addEventListener('click', () => abrirMenu(menu.getAttribute('aria-expanded') === 'false'));
nav.addEventListener('click', evento => {
  if (evento.target.closest('a')) abrirMenu(false);
});
document.addEventListener('keydown', evento => {
  if (evento.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
    abrirMenu(false);
    menu.focus();
  }
});
