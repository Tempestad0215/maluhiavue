<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

// PAra almacenar la ruta
const url = ref('')


// Ruta
onMounted(()=>{
    // Asignar a la variable
    url.value = useRoute().path;
})


</script>

<template>
  <header v-if=" url === '/login' ">
    Hola mudno
  </header>
  <RouterView />
</template>

