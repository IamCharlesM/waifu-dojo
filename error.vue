<template>
    <div class="mt-7 max-w-sm mx-auto text-center card">
        <h2 class="text-4xl my-7">{{ error.statusCode }}</h2>
        <p class="mt-7 text-6xl font-bold">Ooops.</p>
        <p class="mt-7 text-2xl font-bold">{{ error.message }}</p>
        <button to="/" class="btn my-7" @click="handleClearError">Go Home...</button>
    </div>
</template>

<script setup lang="ts">
defineProps({
    error: {
        type: Object,
        required: true
    }
})

const handleClearError = () => clearError({ redirect : '/'})
</script>

<style lang="scss" scoped>

</style>