<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4">
        <NuxtLink class="link text-3xl font-bold" to="/products">products page</NuxtLink>
      </nav>
    </header>

    <!-- Output page content -->
    <div class="container mx-auto p-4">
      <slot />
    </div>

    <footer class="container mx-auto p-4 flex justify-between border-t-2">
        <ul>
              <NuxtLink class="link text-3xl font-bold" to="/">Home</NuxtLink>
      
          <li>
            <NuxtLink class="link text-3xl font-bold" to="/about">About</NuxtLink>
          </li>
          <li>
            <NuxtLink class="link text-3xl font-bold" to="/products">Products</NuxtLink>
          </li>
        </ul>
    </footer>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
