<template>
    <main class="tags-page">
        <TagList :tagName="tagName"></TagList>
        <BlogList v-if="tagName" :showTags="false" :blogs="blogs"></BlogList>
    </main>
</template>

<script>
import TagList from './TagList';
import BlogList from './BlogList';

export default {
    name: 'TagsPage',

    components: {
        TagList,
        BlogList
    },

    computed: {
        tagName() {
            let { tag } = this.$route.query;
            return tag;
        },
        blogs() {
            return this.$blog.tags[this.tagName];
        }
    }
};
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.tags-page
  @extend $wrapper
  margin-top 3.6rem
</style>
