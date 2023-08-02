<template>
    <div>
<!-- This should work if th store API connects and loops -->
<div class="grid grid-cols-4 gap-5">
    <div v-for="product in products" :key="product.id">
        <NuxtLink :to="`/products/${product.id}`">
            <ProductCard :product="product" />
        </NuxtLink>
</div>
</div>
    </div>
</template>

<script setup>
useHead({
    title: 'Chest Box | Merch',
    meta: [
        {
            name: 'description',
            content: 'Chest Box Merch'
        }
    ],
    ogImage: 'https://charlesisa.dev/nuxt-card.png',
    ogDescription: 'Chest Box Merch',
})

// Fetch products from API
const {data: products } =  await useFetch('https://fakestoreapi.com/products')
</script>

<style scoped>

</style>