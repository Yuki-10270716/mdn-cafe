<template>
    <layout-wrapper>
        <layout-visual
            title="i am frontend engineer."
        />
        <div class="w-full md:max-w-3xl mx-auto px-6 md:px-0">
            <div class="pt-40 pb-40">
                <base-heading>about</base-heading>
                <p class="mb-20 text-1xl">
                    こんにちは。フロントエンドエンジニアのゆきです。<br>
                    このサイトは私が作った簡易的なポートフォリオサイトです。良かったら覗いていってみてください！
                </p>
                <base-button name="to about page" link="/about" />
            </div>

            <div class="pt-40 pb-40">
                <base-heading>works</base-heading>
                <div class="flex md:flex-wrap justify-between mb-20 md:mb-0">
                    <layout-menu-list
                        v-for="(item, index) in menuItems"
                        :key="index"
                        :image="item.image"
                        :image-url="item.image.url"
                        :name="item.name"
                        :body="item.body"
                        :release="item.release"
                        item-class="md:w-56 mb-20"
                        block-class="max-w"
                        image-class="w-full"
                        data-class="px-6 py-4"
                        :flag-body="false"
                    />
                </div>
                <base-button name="to works page" link="/works" />
            </div>

            <div class="pt-40 pb-40">
                <base-heading>blog</base-heading>
                <div class="mb-20">
                    <layout-information-list
                        v-for="(item, index) in infoItems"
                        :id="item.id"
                        :key="index"
                        :date="item.date"
                        :title="item.title"
                    />
                </div>
                <base-button name="to blog page" link="/blog" />
            </div>
        </div>
    </layout-wrapper>
</template>

<script>
import axios from 'axios'
export default {
    async asyncData({ $config }) {
        const works = await axios.get(
        `${$config.apiUrl}/works?limit=3&filters=flag[equals]true`,
        {
            headers: { 'X-API-KEY': $config.apiKey },
        })
        const info = await axios.get(`${$config.apiUrl}/blog?limit=3`, {
            headers: { 'X-API-KEY': $config.apiKey },
        })
        return {
            menuItems: works.data.contents,
            infoItems: info.data.contents,
        }
    },
}
</script>
