<template>
    <div>
        <h1>{{ abc }}</h1>
    </div>
</template>

<script>
    export default {
        name: "sampleComponent",
        props: {
            abc: String,
        }
    }
</script>

<style scoped>
    h1 {
        color: blue;
    }
</style>