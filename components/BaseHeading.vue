<template>
    <h2 class="text-lg text-center text-5xl mb-10">
        <slot />
    </h2>
</template>

<script>
export default {
    props: {
        name: 'BaseHeading',
    }
}
</script>