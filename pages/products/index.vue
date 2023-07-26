<template>
    <div>

<div class="grid grid-cols-4 gap-5">
    <div v-for="product in products" :key="product.id">
        <NuxtLink :to="`/products/${product.id}`">
            <div class="bg-gray-100 p-5">
                <h2 class="text-2xl font-bold">{{ product.title }}</h2>
                <p class="text-xl">{{ product.price }}</p>
            </div>
        </NuxtLink>
</div>
</div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'products',
    title: 'Products',
    description: 'Products page description',
    image: 'https://nuxtjs.org/nuxt-card.png',
    url: 'https://nuxtjs.org'
})

// Fetch products from API
const {data: products } =  await useFetch('https://fakestoreapi.com/products')
</script>

<style scoped>

</style>