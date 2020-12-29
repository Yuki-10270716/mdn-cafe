<template>
    <layout-wrapper>
        <layout-visual title="blog" :height="40" />
        <div class="w-full md:max-w-3xl mx-auto pt-20 px-6 md:px-0">
            <layout-information-list
                v-for="(item, index) in items"
                :id="item.id"
                :key="index"
                :date="item.date"
                :title="item.title"
            />
        </div>
    </layout-wrapper>
</template>

<script>
import axios from 'axios'
export default {
    async asyncData({ $config }) {
        const { data } = await axios.get(`${$config.apiUrl}/blog`, {
            headers: { 'X-API-KEY': $config.apiKey },
        })
        return {
            items: data.contents,
        }
    },
    head() {
        return {
            title: 'blog',
        }
    },
}
</script>
