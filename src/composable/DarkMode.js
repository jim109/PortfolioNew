import { ref, watchEffect } from 'vue';

export default function useDarkMode() {
  const darkMode = ref(false);
  
  const prefiereDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
  
  darkMode.value = prefiereDarkMode.matches; // detectar si el modo oscuro está activado en el navegador del usuario (true o false)
  prefiereDarkMode.addEventListener('change', () => {
    darkMode.value = prefiereDarkMode.matches;
  });
  
  watchEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode.value);
    if (darkMode.value) {
      localStorage.setItem('dark-mode', true); // almacenar la preferencia del usuario en localStorage
    } else {
      localStorage.removeItem('dark-mode');
    }
  });

  function toggleDarkMode() {
    darkMode.value = !darkMode.value; 
  }

  // detectar si el usuario ha establecido una preferencia manual para el modo oscuro
  const localDarkMode = localStorage.getItem('dark-mode');
  if (localDarkMode !== null) {
    darkMode.value = localDarkMode === 'true';
  }

  return {
    darkMode,
    toggleDarkMode,
  }
}
