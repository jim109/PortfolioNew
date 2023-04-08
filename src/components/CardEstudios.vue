<template>
    <article v-for="estudio in estudiosUser" :key="estudio.titulo" class="card card-estudio">
        <div >
            <a :href="estudio.link" target="_blank">
                <img class="img-estudios"  :src="`/assets/${estudio.nombreLogo}.jpeg`" alt="logo estudios">
            </a>
        </div>
        <div>
            <h5>{{ estudio.titulo }}</h5>
            <p>{{ estudio.universidad }}</p>
            <p>{{ estudio.fecha }}</p> 
        </div>
    </article> 
</template>

<script>
import { ref } from 'vue'
import { estudios } from '../js/datosUser'

export default {
    setup() {
        const estudiosUser = ref([...estudios])
        
        return {
            estudiosUser
        }
    }
}
</script>
