<template>
    <ol class="blog-recent">
        <li v-for="(item, index) in blogs" :key="item.key || index">
            <time>{{
                item.frontmatter.create | formatDate('YYYY-MM-DD')
            }}</time>
            <h3>
                <a :href="item.regularPath"> {{ item.title }}</a>
            </h3>
            <p>{{ item.frontmatter.summary }}</p>
            <Tags v-if="showTags" :tags="item.frontmatter.tags"></Tags>
        </li>
    </ol>
</template>

<script>
import Tags from './Tags';

export default {
    name: 'BlogRecent',

    components: {
        Tags
    },

    props: {
        blogs: {
            type: Array
        },
        showTags: {
            type: Boolean,
            default: true
        }
    }
};
</script>

<style lang="stylus">
.blog-recent
    list-style none
    li
        padding  10px 0 40px 20px
        position relative
        time
            color #999
        h3
            margin 5px 0
</style>
