<template>
  <div>
    <!-- DYNAMIC PAGES! -->
    <ProductDetails :product="product" />
  </div>
</template>

<script setup>
const { id } = useRoute().params;
const uri = `https://fakestoreapi.com/products/${id}`;

// Fetch product from API
const { data: product } = await useFetch(uri);

if (!product.value) {
  throw createError({
    statusCode: 404,
    message: "Product not found",
    fatal: true,
  });
}

definePageMeta({
  layout: "products",
});

useSeoMeta({
  title: product?.value.title,
  description: product?.value.description,
  ogImage: product?.value.image,
  ogDescription: product?.value.description,
  url: "https://charlesisa.dev",
});
</script>

<style scoped></style>
