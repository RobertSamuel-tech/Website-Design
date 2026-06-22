import gsap from 'gsap';
import MotionPathHelper from 'gsap/MotionPathPlugin';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Ref } from 'vue';
import { lenis } from '@/main';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathHelper);

const displayNone = (id: string) => {
  gsap.set(id, { display: 'none' });
  lenis.start();
};

const animateSplitText = (
  id: string | string[],
  textId: string,
  duration: number = 0.8,
  stagger: number = 0.005,
  delay: number = 0,
  onStartFn: () => void = () => {},
) => {
  gsap.to(id, {
    onStart: () => {
      fadeIn(textId, 100, 2);
      onStartFn();
    },
    scrollTrigger: {
      trigger: id,
      toggleActions: 'play none none reverse',
      start: 'top bottom',
    },
    delay: delay,
    duration: duration,
    y: 0,
    autoAlpha: 1,
    stagger: stagger,
    ease: 'power4.inOut',
  });
};

const navbarScale = (selector: string, trigger: string) => {
  gsap.to(selector, {
    scrollTrigger: {
      trigger: trigger,
      start: 'bottom center',
      toggleActions: 'play none none reverse',
    },
    duration: 0.6,
    scale: 1,
    ease: 'power1',
  });
};

const yToZero = (id: string) => {
  gsap.to(id, {
    y: 0,
    duration: 0.4,
    ease: 'power1.inOut',
    stagger: 0.1,
  });
};

const xToZero = (id: string) => {
  gsap.to(id, {
    x: 0,
    duration: 0.4,
    ease: 'power1.inOut',
    stagger: 0.1,
    scrollTrigger: {
      trigger: id,
      toggleActions: 'play none none reverse',
    },
  });
};

const yReset = (id: string) => {
  gsap.set(id, { y: '100%' });
};

const fadeIn = (id: string, opacity: number = 1, duration: number = 0.5) => {
  gsap.to(id, {
    opacity: opacity,
    duration: duration,
    ease: 'power4.inOut',
    scrollTrigger: {
      trigger: id,
      toggleActions: 'play none none reverse',
    },
    stagger: 0.1,
  });
};

const resetOpacity = (id: string, opacity: number = 0) => {
  gsap.set(id, { opacity: opacity });
};

const activateMagneto = (
  event: MouseEvent,
  magneto: Ref<HTMLElement>,
  magnetoText: Ref<HTMLElement>,
  magnetoStrengthVal: number,
  magnetoTextStrengthVal: number,
) => {
  const xDivTo = gsap.quickTo(magneto.value, 'x', {
    duration: 1,
    ease: 'elastic.out(1, 0.3)',
  });
  const xTextTo = gsap.quickTo(magnetoText.value, 'x', {
    duration: 1,
    ease: 'elastic.out(1, 0.3)',
  });
  const yTextTo = gsap.quickTo(magnetoText.value, 'y', {
    duration: 1,
    ease: 'elastic.out(1, 0.3)',
  });
  const yDivTo = gsap.quickTo(magneto.value, 'y', {
    duration: 1,
    ease: 'elastic.out(1, 0.3)',
  });

  const { clientX, clientY } = event;
  const { width, height, left, top } = magneto.value.getBoundingClientRect();

  const magnetoStrength = magnetoStrengthVal;
  const magnetoTextStrength = magnetoTextStrengthVal;
  const newX = ((clientX - left) / width - 0.5) * magnetoStrength;
  const newY = ((clientY - top) / height - 0.5) * magnetoTextStrength;

  xDivTo(newX);
  yDivTo(newY);
  xTextTo(newX);
  yTextTo(newY);
};

const resetMagneto = (
  magneto: Ref<HTMLElement>,
  magnetoText: Ref<HTMLElement>,
) => {
  const xDivTo = gsap.quickTo(magneto.value, 'x', {
    duration: 1,
    ease: 'elastic.out(1, 0.3)',
  });
  const xTextTo = gsap.quickTo(magnetoText.value, 'x', {
    duration: 1,
    ease: 'elastic.out(1, 0.3)',
  });
  const yTextTo = gsap.quickTo(magnetoText.value, 'y', {
    duration: 1,
    ease: 'elastic.out(1, 0.3)',
  });
  const yDivTo = gsap.quickTo(magneto.value, 'y', {
    duration: 1,
    ease: 'elastic.out(1, 0.3)',
  });

  xDivTo(0);
  yDivTo(0);
  xTextTo(0);
  yTextTo(0);
};

const navbarEnter = (id: string) => {
  gsap.to(id, {
    x: '0%',
    opacity: 1,
    duration: 0.7,
  });
};

const navbarLeave = (id: string) => {
  gsap.to(id, {
    opacity: 0,
    onComplete: () => {
      gsap.set(id, { x: '100%' });
    },
  });
};

const animateNavbarEnter = (
  navbarSelector: string,
  navbarLinksSelector: string,
  contactSelector: string,
) => {
  navbarEnter(navbarSelector);
  yToZero(navbarLinksSelector);
  fadeIn(contactSelector);
};

const animateNavbarLeave = (
  navbarSelector: string,
  navbarLinksSelector: string,
  contactSelector: string,
) => {
  navbarLeave(navbarSelector);
  yReset(navbarLinksSelector);
  resetOpacity(contactSelector);
};

const animateLoadingPath = (
  path: Ref<SVGPathElement>,
  targetPath: string,
) => {
  const tl = gsap.timeline({});
  tl.to('#loading-screen', {
    delay: 3,
    bottom: '100%',
    duration: 1,
    ease: 'power2.inOut',
    onStart: () => {
      setTimeout(() => {
        animateHeroNav();
        document.body.classList.remove('stop-scrolling');
        window.scrollTo(0, 0);
      }, 120);
    },
  });

  tl.to(
    path.value,
    {
      duration: 1,
      attr: { d: targetPath },
      ease: 'power2.inOut',
      onComplete: () => {
        gsap.set('#loading-screen', { display: 'none' });
      },
    },
    '<20%',
  );
};

const animateLoadingTextContainer = () => {
  gsap.fromTo(
    '#text',
    1,
    { yoyo: true, opacity: 0 },
    { opacity: 1, ease: 'circ.inOut' },
  );
};

const animateLoadingText = (id: string) => {
  gsap.to(id, {
    y: 0,
    duration: 1,
    ease: 'power2.inOut',
    delay: 0.5,
    stagger: 0.1,
    onComplete: () => {
      gsap.to(id, {
        delay: 1.2,
        opacity: 0,
        duration: 1,
        ease: 'power2.inOut',
        onComplete: () => {
          gsap.set(id, { y: '100%', opacity: 100 });
        },
      });
    },
  });
};

const animateHeroNav = () => {
  gsap.to('header', {
    y: 0,
    duration: 1.5,
    ease: 'power4.inOut',
  });

  gsap.to('#hero-title .letters', {
    y: 0,
    delay: 0.2,
    duration: 1.5,
    ease: 'power4.inOut',
    stagger: 0.01,
  });

  gsap.to('#star', {
    opacity: 1,
    scale: 1,
    delay: 0.3,
    duration: 1.2,
    ease: 'power4.inOut',
  });

  gsap.to('.overlay', {
    y: '100%',
    delay: 0.2,
    duration: 1.5,
    ease: 'power4.inOut',
    onComplete: () => {
      gsap.set('.overlay', { display: 'none' });
    },
  });

  gsap.to('#hero-tagline', {
    y: 0,
    delay: 0.35,
    duration: 1.3,
    ease: 'power4.inOut',
  });

  gsap.to(['#down-arrow', '#hero-cta', '#hero-bottom-tag'], {
    x: 0,
    y: 0,
    delay: 0.4,
    duration: 1.5,
    ease: 'power4.inOut',
  });

  animateSplitText('#whoAmI .letters', '#whoAmI .letters', 1.5, 0.005, 0.4);

  gsap.to('#hero-content', {
    scrollTrigger: {
      trigger: '#hero-wrapper',
      start: 'top top',
      end: 'bottom top',
      scrub: 0.6,
    },
    scale: 0.92,
    opacity: 0,
    y: -60,
    filter: 'blur(8px)',
    ease: 'none',
  });
};

const animateSectionLeave = (id: string) => {
  gsap.to(id, {
    yPercent: -10,
    scale: 0.95,
    ease: 'power1',
    scrollTrigger: {
      trigger: id,
      start: '75% bottom',
      scrub: 1,
    },
  });
};

const counterAnimation = (
  selector: string,
  endValue: number,
  duration: number = 2,
  suffix: string = '',
) => {
  const obj = { val: 0 };
  gsap.to(obj, {
    val: endValue,
    duration: duration,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: selector,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
    onUpdate: () => {
      const el = document.querySelector(selector);
      if (el) el.textContent = Math.floor(obj.val) + suffix;
    },
  });
};

export {
  displayNone,
  xToZero,
  navbarScale,
  activateMagneto,
  resetMagneto,
  animateNavbarEnter,
  animateNavbarLeave,
  animateLoadingPath,
  animateLoadingText,
  animateLoadingTextContainer,
  animateHeroNav,
  animateSplitText,
  animateSectionLeave,
  fadeIn,
  counterAnimation,
};
