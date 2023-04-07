<template>
    <header class="header inicio">
        <div class="contenedor contenido-header">
            <div class="barra">
                <a href="/">
                  <img class="logo" src="../assets/logo.jpg" alt="logo">  
                </a>
                <div class="mobile-menu">
                    <img src="../assets/barras.svg" alt="icono menu responsive">
                </div>
                <div class="derecha">
                    <img src="../assets/dark-mode.svg" class="dark-mode-boton" alt="boton darkmode">
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
                <h2>Hola👋! Soy</h2>
                <h1>Jimmy Steve Osma</h1>
                <p>Frontend Developer</p>
                <div class="contenedor contenedor-boton">
                    <a class="boton-amarillo" href="https://1drv.ms/b/s!AjfAQ0H3dxiX2aMffOf1rTGSnJzHBw?e=I9oqDV" target="_blank" rel="noopener noreferrer">Descargar CV</a>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>

</script>

<style lang="scss" >

.inicio {
    background-image: url(../assets/fondoMain.jpg);
}

.header {
    background-color: $grisOscuro;
    padding: 2rem 0 3rem 0;

    &.inicio {
        background-position: center center; /*alineamos la imagen centrada en ambos lados*/
        background-size: cover; /*toma todo el ancho disponible*/
        
        @include tablet{
            min-height: 70rem;/*damos una altura minima al background*/
        }

        .contenido-header {
            @include tablet{
                min-height: 70rem;
            }
        }
    }
}
.contenido-header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h1 {
        font-weight: $bold;
    }
    h1, h2 {
        margin: 0;
        text-align: center;
        color: $blanco;
        
    }
    p {
        color: $blanco;
        text-align: center;
        margin: 0 0 2rem 0;
    }
}
.logo {
    height: 8rem;
    width: auto;
    border-radius: 5rem;
}
.redes-sociales {
    @include grid(4, 0.2rem);
    max-width: 30rem;
    margin: 0 auto;
    .redes-sociales__iconos {
        width: 3rem;
        color: $blanco;

    }
}
.image-dev {
    width: 12rem;
    .foto-perfil {
        border-radius: 50%;
      }
}
.descarga-cv {
    a {
        margin-top: 1rem;
        border-radius: 10px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

        &:hover {
            background-color: darken($gris, 5);
            cursor: pointer;
        }
}
}

</style>