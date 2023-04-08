<template>
  
</template>

<script >
import { ref, watchEffect } from 'vue';

export default {
  setup() {
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
    
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.addEventListener('click', () => {
      const navegacion = document.querySelector('.navegacion');
      navegacion.classList.toggle('mostrar');
    });
    
    const metodoContacto = document.querySelectorAll('input[name="contacto[contacto]"]');
    metodoContacto.forEach(input => input.addEventListener('click', mostrarMetodosContacto));
    
    return {
      toggleDarkMode,
    };
  },
};


</script>

<style>

</style>