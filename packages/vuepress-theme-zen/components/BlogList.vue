<template>
    <ol class="blog-list">
        <li v-for="(item, index) in blogs" :key="item.key || index">
            <p class="blog-info">
                <time>{{
                    item.frontmatter.create | formatDate('YYYY-MM-DD')
                }}</time>
                <Tags v-if="showTags" :tags="item.frontmatter.tags"></Tags>
            </p>
            <h3>
                <a :href="item.regularPath"> {{ item.title }}</a>
            </h3>
            <p>{{ item.frontmatter.summary }}</p>
        </li>
    </ol>
</template>

<script>
import Tags from './Tags';

export default {
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
.blog-list
    list-style none

    li
        border-left 8px solid #f7df1e
        padding  0 0 40px 20px
        position relative
        .blog-info
            position: relative;
            top: -3px;
            margin: 0;
            time
                color #999
        &:before
            background-color #fff
            border: 3px solid red;
            border-radius: 50%;
            content: "";
            display: block;
            height: 12px;
            left: -13px;
            position: absolute;
            width: 12px;
</style>
