<template>
  <div>
    <productDetails :product="product" />
  </div>
</template>

<script setup>
const { id } = useRoute().params;
const uri = `https://fakestoreapi.com/products/${id}`;

// Fetch product from API
const { data: product } = await useFetch(uri);

definePageMeta({
  layout: "products",
  title: product.title,
  description: product.description,
  image: product.image,
  url: "https://nuxtjs.org",
});
</script>

<style scoped></style>
