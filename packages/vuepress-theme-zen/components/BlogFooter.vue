<template>
    <footer class="blog-footer">
        <Tags v-if="frontmatter.tags" :tags="frontmatter.tags"></Tags>
        <p>
            <time v-if="frontmatter.create"
                >Create:
                {{ frontmatter.create | formatDate('YYYY-MM-DD') }}</time
            >
            <time v-if="lastUpdated"
                >Update:
                {{ lastUpdated | formatDate('YYYY-MM-DD hh:mm:ss') }}</time
            >
        </p>
    </footer>
</template>

<script>
import Tags from './Tags';

export default {
    name: 'BlogFooter',

    props: {
        frontmatter: {
            type: Object
        },
        lastUpdated: {
            type: [Number, String]
        }
    },

    components: {
        Tags
    }
};
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.blog-footer
  @extend $wrapper
  padding-top 1rem
  padding-bottom 1rem
  .tag
      margin 0 1rem 0 0
  time
      margin-right 3rem
      font-weight 400
      color #aaa
</style>
