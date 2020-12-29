<template>
    <div :class="itemClass">
        <div :class="blockClass">
            <img v-if="image" :src="imageUrl" :alt="name" :class="imageClass" />
            <img
                v-else
                src="~/assets/img/dummy.jpg"
                :alt="name"
                :class="imageClass"
            />
            <div :class="dataClass">
                <div class="font-bold text-xl mb-2">{{ name }}</div>
                <p v-if="flagBody" class="text-base mb-2">{{ body }}</p>
                <p class="text-base mb-4">{{ release }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LayoutMenuList',
    props: {
        itemClass: {
            type: String,
            default: 'w-full mb-10 shadow-lg',
        },
        blockClass: {
            type: String,
            default:
                'md:w-full flex flex-wrap justify-between items-center md:px-4 md:py-4 border-b-2',
        },
        imageClass: {
            type: String,
            default: 'md:w-2/5',
        },
        dataClass: {
            type: String,
            default: 'w-7/12 px-6 mb:px-0 mb:px-0',
        },
        flagBody: {
            type: Boolean,
            default: true,
        },
        image: {
            type: Object,
            required: true,
        },
        imageUrl: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        body: {
            type: String,
            required: true,
        },
        release: {
            type: Number,
            required: true,
        },
    },
}
</script>
