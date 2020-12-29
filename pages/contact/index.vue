<template>
    <layout-wrapper>
        <layout-visual title="contact" :height="40" />
        <div class="w-full md:max-w-3xl mx-auto pt-20 px-6 md:px-0">
            <div class="clearfix p-4 mb-10 text-1xl text-center">
                <p>
                    お問い合わせは、以下のメールアドレスからご連絡ください。
                </p>
                <p class="mt-20">
                    <a href="mailto:quinks0716@gmail.com" class="section__mail-link">quinks0716@gmail.com</a>
                </p>
            </div>
        </div>
    </layout-wrapper>
</template>

<script>
export default {
    head() {
        return {
            title: 'contact',
        }
    },
}
</script>