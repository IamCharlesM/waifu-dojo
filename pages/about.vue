<template>
    <div>
        <h1>About</h1>

        <p>
            If this JSON renders then the API is working with the ENV variables.
        </p>
        <div>{{data}}</div>
    </div>
</template>

<script setup>
const {data} = await useFetch('/api/currency/USD');

// useSeoMeta for about page
useSeoMeta({
    title: 'About',
    description: 'About page description',
    ogImage: 'https://charlesisa.dev',
    ogDescription: 'About page description',
    url: 'https://charlesisa.dev'
})
</script>

<style scoped>

</style>