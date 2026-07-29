
const header = document.querySelector('.site-header');
const onScroll = () => header && header.classList.toggle('scrolled', window.scrollY > 8);
onScroll(); window.addEventListener('scroll', onScroll, {passive:true});

const menu = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
if(menu && links){
  menu.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
  });
}

document.querySelectorAll('.genre-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.closest('.genre');
    const open = item.classList.toggle('open');
    button.setAttribute('aria-expanded', String(open));
  });
});
document.querySelectorAll('.concept-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.closest('.concept');
    const open = item.classList.toggle('open');
    button.setAttribute('aria-expanded', String(open));
  });
});

// RC1: enable motion only after CSS is available, then settle once—no snap-back.
document.body.classList.add('motion-ready');
requestAnimationFrame(() => requestAnimationFrame(() => document.body.classList.add('is-loaded')));
