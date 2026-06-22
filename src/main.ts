import './style.css';
import App from './App.vue';
import { createApp } from 'vue';
import Lenis from 'lenis';

const lenis = new Lenis({
  duration: 0.8,
});
function raf(time: number) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

const app = createApp(App);
app.mount('#app');

export { raf, lenis };
