import { ref, watchEffect } from 'vue';

export default function useDarkMode() {
  const darkMode = ref(false);

  const prefiereDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
  prefiereDarkMode.addEventListener('change', () => {
    darkMode.value = prefiereDarkMode.matches;
  });
  watchEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode.value);
  });

  function toggleDarkMode() {
    darkMode.value = !darkMode.value;
  }

  return {
    darkMode,
    toggleDarkMode,
  }
}