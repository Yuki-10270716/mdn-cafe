<template>
    <layout-wrapper>
        <layout-visual
            title="blog"
            :height="40"
        />

        <div class="w-full md:max-w-3xl mx-auto pt-20 px-6 md:px-0">
            <h2 class="text-xl pb-5 border-b border-gray-500 border-solid font-bold">
                {{ item.title }}
            </h2>
            <div class="pt-4 mb-4">
                <time class="text-base">
                    {{ item.date | formatDate }}
                </time>
            </div>
            <!-- eslint-disable-next-line vue/no-v-html-->
            <div class="mb-20" v-html="item.body"></div>
            <base-button name="to blog top page" link="/blog/" />
        </div>
    </layout-wrapper>
</template>

<script>
import axios from 'axios'
export default {
    async asyncData({ $config, params, error }) {
        try {
            const { data } = await axios.get(
                `${$config.apiUrl}/blog/${params.id}`,
                {
                    headers: { 'X-API-KEY': $config.apiKey },
                }
            )
            return {
                item: data,
            }
        } catch (err) {
            error({
                errorCode: 404,
            })
        }
    },
    head() {
        return {
            title: this.item.title,
        }
    },
}
</script>
