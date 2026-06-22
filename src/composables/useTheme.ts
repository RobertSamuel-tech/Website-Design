import { ref, watch, onMounted, computed } from 'vue';

type Theme = 'light' | 'dark';

const STORAGE_KEY = 'ymm-theme';
const theme = ref<Theme>('light');

const applyTheme = (t: Theme) => {
  const html = document.documentElement;
  html.classList.add('theme-transitioning');

  if (t === 'dark') {
    html.classList.add('dark');
  } else {
    html.classList.remove('dark');
  }

  setTimeout(() => {
    html.classList.remove('theme-transitioning');
  }, 600);
};

const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light';
};

const initTheme = () => {
  const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
  if (stored === 'dark' || stored === 'light') {
    theme.value = stored;
  }
  // Apply immediately without transition on init
  const html = document.documentElement;
  if (theme.value === 'dark') {
    html.classList.add('dark');
  } else {
    html.classList.remove('dark');
  }
};

watch(theme, (newTheme) => {
  localStorage.setItem(STORAGE_KEY, newTheme);
  applyTheme(newTheme);
});

export function useTheme() {
  onMounted(() => {
    initTheme();
  });

  const isDark = computed(() => theme.value === 'dark');

  return {
    theme,
    isDark,
    toggleTheme,
  };
}
