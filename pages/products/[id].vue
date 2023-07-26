<template>
    <div>
        <h1>{{ product.title }}</h1>
        <p>{{ product.description }}</p>
        <p>{{ product.price }}</p>
        <img :src="product.image" alt="product image">

    </div>
</template>

<script setup>
const { id } = useRoute().params
const uri = `https://fakestoreapi.com/products/${id}`

// Fetch product from API
const { data: product } = await useFetch(uri)




definePageMeta({
    layout: 'products',
    title: 'Product title',
    description: 'Product description',
    image: 'https://nuxtjs.org/nuxt-card.png',
    url: 'https://nuxtjs.org'
})


</script>

<style scoped>

</style>