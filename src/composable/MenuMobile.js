import { onMounted, ref, watchEffect } from 'vue';

export default function useEventListener() {
  const mobileMenu = ref(null);
 
  mobileMenu.value = document.querySelector('.mobile-menu');


  watchEffect(() => {
    if (mobileMenu.value) {
      mobileMenu.value.addEventListener('click', navegacionResponsive);
      
    }
  });

  function navegacionResponsive() {
    const navegacion = document.querySelector('.navegacion');
    // toggle si tiene la clase la agrega sino la quita
    navegacion.classList.toggle('mostrar');
  }

  return {
    navegacionResponsive,
  };
}
