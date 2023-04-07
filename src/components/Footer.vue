<template>
        <footer id="contacto" class="footer seccion">
        <div class="contenedor contenedor-footer">
            <p class="copyright">Contactame</p>
            <ul class="social-icons">
                <li><a href="https://api.whatsapp.com/send?phone=573022301506"><i class="fab fa-whatsapp"></i></a></li>
                <li><a href="mailto:me@jimmyosma.co" target="_blank"><i class="far fa-envelope"></i></a></li>
                <li><a href="https://github.com/jim109" target="_blank"><i class="fab fa-github"></i></a></li>
                <li><a href="https://www.linkedin.com/in/jimmyosma/" target="_blank"><i class="fab fa-linkedin"></i></a></li>
                <li><a href="https://twitter.com/jimwy109" target="_blank"><i class="fab fa-twitter"></i></a></li>
            </ul>
        </div>
        <p class="copyright">© Jimmy Osma - All right reserved 2023 </p>
    </footer>
</template>
<script>
export default {

}
</script>

<style lang="scss" >
.footer {
    padding: calc($separacion/2);
    background-color: $grisOscuro;
    margin-bottom: 0;

    .contenedor-footer {
        padding-top: calc($separacion/2);
        text-align: center;
    }

    .navegacion {
        visibility: visible;
        opacity: 1;
        height: auto;
    }

    .copyright {
        color: $blanco;
        text-align: center;
    }
}

</style>