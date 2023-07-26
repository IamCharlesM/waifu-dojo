<template>
    <div>
        <h1 class="text-4xl">Product</h1>

        <p class="text-2xl">
            {Product details for {{ id }}}
        </p>

        <p class="text-2xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id distinctio accusantium, quod quae quos illum expedita exercitationem? Officia, sapiente atque minus obcaecati eum similique maiores hic tempore repudiandae beatae. Commodi!
        </p>

    </div>
</template>

<script setup lang="ts">
const { id } = useRoute().params
</script>

<style scoped>

</style>