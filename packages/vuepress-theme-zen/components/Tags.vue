<template>
    <span class="tags">
        <a
            class="tag"
            v-for="(item, index) in formatTags"
            :href="`/tags/?tag=${item}`"
            :key="index"
        >
            {{ item }}
        </a>
    </span>
</template>

<script>
export default {
    name: 'Tags',

    props: {
        tags: {
            type: [Array, String],
            default: () => []
        }
    },
    computed: {
        formatTags() {
            if (Array.isArray(this.tags)) {
                return this.tags;
            } else {
                return [...this.tags.split(' ')];
            }
        }
    }
};
</script>

<style lang="stylus">
.tags
    .tag
        display inline-block
        position relative
        margin 0 1rem 0.5rem 0
        background #e8e8e8
        padding 0.2rem 1rem 0.2rem 0.5rem;
        line-height 1.014rem
        &:before
            content ''
            width: 1rem;
            height: 1rem;
            position absolute
            top: 50%;
            right: 0
            background inherit
            transform: translateY(-50%) translateX(50%) rotate(-45deg);
        &:after
            position absolute
            right 0
            top: 50%
            margin-top: -.2rem;
            content ''
            width 0.4rem
            height 0.4rem
            border-radius 50%
            background white
</style>
