<template>
    <main class="home">
        <section>
            <h2>最近的 blog</h2>
            <BlogRecent :blogs="recentBlogs"></BlogRecent>
        </section>
    </main>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue';
import BlogRecent from './BlogRecent';

export default {
    name: 'Home',

    components: { NavLink, BlogRecent },

    computed: {
        data() {
            return this.$page.frontmatter;
        },

        actionLink() {
            return {
                link: this.data.actionLink,
                text: this.data.actionText
            };
        },

        recentBlogs() {
            return this.$blog.posts.slice(0, 3);
        }
    }
};
</script>

<style lang="stylus">
.home
  padding $navbarHeight 2rem 0
  max-width $homePageWidth
  margin 0px auto
  display block
  section
  text-align left
    h2

      color #343832
      border-bottom none
</style>
