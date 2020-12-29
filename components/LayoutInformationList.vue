<template>
    <div
        class="mb-5 text-white border-b-2"
    >
        <a :href="'/blog/' + id + '/'" class="block px-4 py-3">
            <time class="text-base mb-1 block md:w-1/6">
                {{ date | formatDate }}
            </time>
            <div class="md:w-10/12">
                {{ title }}
            </div>
        </a>
    </div>
</template>

<script>
export default {
    name: 'LayoutInformationList',
    props: {
        title: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
        id: {
            type: String,
            required: true,
        },
    },
}
</script>