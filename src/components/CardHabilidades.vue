<template>
    <div v-for="habilidades in habilidadesUser" :key="habilidades.nombre">
        <img :src="`/assets/${habilidades.nombreRuta}.svg`" :alt="'logo ' + habilidades.nombre ">
        <p>{{ habilidades.nombre }}</p>
    </div>
</template>

<script>
import { ref } from 'vue'
import { habilidades } from '../js/datosUser'

export default {
    setup() {
         const habilidadesUser = ref([...habilidades])

        return {
            habilidadesUser
        }
    }
}
</script>