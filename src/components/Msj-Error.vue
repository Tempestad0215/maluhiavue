<script setup lang="ts">

const props = defineProps({
    data: {
        type: Array,
        required: true
    }
});

</script>


<template>
    <div
        class=" text-center text-xs text-red-900"
        v-if="props.data.length > 0" >
        <span v-for="(item, index) in props.data" :key="index">
            {{ item }}
            <!-- Icono del error -->
            <i class=" ml-1 fa-solid fa-circle-exclamation"></i>
        </span>
    </div>
</template>