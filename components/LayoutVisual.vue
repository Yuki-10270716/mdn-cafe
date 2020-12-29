<template>
    <div
        class="relative pt-16 pb-32 flex content-center items-center justify-center z-10"
        :style="`min-height: ${height}vh;`"
    >
        <div :class="`absolute top-0 w-full h-full bg-center bg-cover`">
        <span
            id="blackOverlay"
            class="w-full h-full absolute opacity-75"
        ></span>
        </div>
        <div class="container relative mx-auto">
        <div class="items-center flex flex-wrap">
            <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <div>
                <h1 class="text-6xl">
                {{ title }}
                </h1>
            </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LayoutVisual',
    props: {
        title: {
            type: String,
            default: '',
        },
        visual: {
            type: String,
            default: 'visual-home',
        },
        height: {
            type: Number,
            default: 75,
        },
    },
}
</script>
