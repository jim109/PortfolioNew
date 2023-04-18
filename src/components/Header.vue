<template>
    <header class="header inicio">
        <div class="contenedor contenido-header">
            <div class="barra">
                <a href="/">
                  <img class="logo" src="/assets/logo.jpg" alt="logo" >  
                </a>
                <div class="mobile-menu">
                    <img class="pointer" src="/assets/barras.svg" @click="navegacionResponsive" alt="icono menu responsive">
                </div>
                <div class="derecha">
                    <img src="/assets/dark-mode.svg" class="dark-mode-boton" alt="boton darkmode" @click="toggleDarkMode">
                    <nav class="navegacion">
                        <a href="#me">Sobre mi</a>
                        <a href="#habilidades">Habilidades</a>
                        <a href="#proyectos">Proyectos</a>
                        <a href="#estudios">Estudios</a>
                        <a href="#contacto">Contacto</a>
                    </nav>
                </div>  
            </div>
            <div class="contenedor seccion">
                <h2 class="animate__animated animate__fadeIn">Hola👋! Soy</h2>
                <h1 class="animate__animated animate__fadeIn">Jimmy Steve Osma</h1>
                <p class="animate__animated animate__fadeIn">Frontend Developer</p>
                <div class="contenedor contenedor-boton">
                    <a class="boton boton-amarillo animate__animated animate__fadeIn" href="https://1drv.ms/b/s!AjfAQ0H3dxiX2aMffOf1rTGSnJzHBw?e=I9oqDV" target="_blank" rel="noopener noreferrer">Descargar CV</a>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import useDarkMode from '../composable/DarkMode'
import useEventListener from '../composable/MenuMobile'

export default {
    setup() {
    const { toggleDarkMode } = useDarkMode()
    const { navegacionResponsive } = useEventListener()

    return {
        toggleDarkMode,
        navegacionResponsive
    }
},
}

</script>