<template>
    <layout-wrapper>
        <layout-visual title="about" :height="40" />
        <p class="w-full md:max-w-3xl mx-auto pt-20 px-6 md:px-0 text-1xl p-4 mb-10">
            1995年、千葉県生まれ。<br>
            学生時代にWebサイトの表現に魅了され、Webデザイナーを目指すことを決意。 新卒でWebデザイナーになるが、もっとコードが書きたいという思いからエンジニアに。<br>
            クリエイティブなコーディングが好きです。
        </p>
    </layout-wrapper>
</template>

<script>
export default {
    head() {
        return {
            title: 'about',
        }
    },
}
</script>