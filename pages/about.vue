<template>
    <div>
        <h1>About</h1>

        <p>
            This is the about page
        </p>
        <div>{{data}}</div>
    </div>
</template>

<script setup>
const {data} = await useFetch('/api/chest?name=box');
</script>

<style scoped>

</style>