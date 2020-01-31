<template>
    <div class="blogs-page">
        <BlogList :showTags="true" :blogs="$blog.posts"></BlogList>
    </div>
</template>

<script>
import BlogList from './BlogList';

export default {
    name: 'BlogsPage',

    components: {
        BlogList
    }
};
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.blogs-page
  @extend $wrapper
  margin-top 3.6rem
</style>
