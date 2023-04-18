<template>
    <article v-for="proyecto in proyectosUser" :key="proyecto.nombre" class="card card-proyectos animate__animated animate__fadeIn">
        <a :href="proyecto.link" target="_blank"><img :src="`/assets/${proyecto.nombreImg}.png`" alt="imagen proyecto" ></a>
        <h2>{{ proyecto.nombre }}</h2>
        <p>{{ proyecto.resumen }}</p>
        <div class="enlaces">
            <a class="boton" :href="proyecto.github" target="_blank">Github</a>
            <a class="boton" :href="proyecto.web" target="_blank">Sitio Web</a>
        </div>
    </article>
</template>

<script>
import { ref } from 'vue';
import { proyectos } from '../js/datosUser'

export default {
    setup() { 
        const proyectosUser = ref([...proyectos])

        return {
            proyectosUser
        }
    } 
}
</script>

<style>

</style>