<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class=" container mx-auto p-4 flex justify-between">
        <NuxtLink class="link text-3xl font-bold" to="/">Waifu Dojo</NuxtLink>
        <ul class="flex gap-4">
            <li>
                <NuxtLink class="link text-3xl font-bold" to="/">Home</NuxtLink>
            </li>
          <li>
            <NuxtLink class="link text-3xl font-bold" to="/about">About</NuxtLink>
          </li>
          <li>
            <NuxtLink class="link text-3xl font-bold btn" to="/products">Products</NuxtLink>
          </li>
          <li>
            <NuxtLink class="link text-3xl font-bold btn" to="/products/abc">Products abc</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>

    <!-- Output page content -->
    <div class="container mx-auto p-4">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.router-link-active {
  color: #ff00ff;
}
</style>
