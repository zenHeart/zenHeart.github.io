<template>
    <ul class="tag-list">
        <li v-for="(val, key) in showTags" :key="key">
            <a :href="`/tags/?tag=${key}`">
                <span
                    >{{ key }}
                    <strong class="nums">({{ val.length }})</strong></span
                >
            </a>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'TagList',

    props: {
        tagName: String
    },
    computed: {
        showTags() {
            if (this.tagName) {
                return {
                    [this.tagName]: this.$blog.tags[this.tagName]
                };
            } else {
                return this.$blog.tags;
            }
        }
    }
};
</script>

<style lang="stylus">
.tag-list
    display flex
    flex-wrap wrap
    justify-content flex-start
    list-style-type none
    &>li
        border 1px solid #cfd4db
        padding 0.5rem 1rem
        border-radius 3px
        margin 0.5rem 1rem 1rem 0
        .nums
            color #697581
</style>
