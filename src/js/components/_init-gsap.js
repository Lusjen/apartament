import { TimelineMax } from 'gsap';

var tl = new TimelineMax;

tl
  .fromTo('.js-menu-btn', 1, { x: 200, opacity: 0}, { x: 0, opacity: 1})
  .staggerFromTo('.js-icon', 1.5, {y:-200,opacity:0},{y:0,opacity:1},0.1,0);
