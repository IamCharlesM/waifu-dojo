<template>
    <div class="card text-center">
        <img :src="product.image" class="thumb" :alt="`product image for ${product.title}`">
        <h3 class="font-bold text-grey-500 m4 truncate">{{ product.title }}</h3>
        <p >{{ product.price }}</p>
        <NuxtLink :to="`/products/${product.id}`" class="btn my-4">View Details</NuxtLink>
    </div>
</template>

<script setup lang="ts">
const {product} = defineProps({
    product: {
        type: Object,
        required: true
    }
})
</script>

<style scoped>
.thumb {
    width: 120px;
    height: 70%;
    margin: 0 auto;
}

</style>