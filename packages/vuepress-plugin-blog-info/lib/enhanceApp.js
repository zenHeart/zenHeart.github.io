import { isPostPage } from './utils.js';

export default ({ Vue }) => {
    const computed = {
        $blog() {
            return getBlogs(this.$site.pages);
        }
    };
    Vue.mixin({
        computed
    });
};

// TODO: 此处提取 tags 默认为 posts 目录后续需配置
function getBlogs(sitePages) {
    let tags = {};
    let posts = [];

    posts = sitePages.filter(page => {
        return isPostPage(page.path);
    });
    posts.sort(
        (
            { frontmatter: { create: preCreate } },
            { frontmatter: { create: nextCreate } }
        ) => nextCreate - preCreate
    );
    posts.forEach(ele => {
        let { tags: blogTags = [] } = ele.frontmatter;
        if (!Array.isArray(blogTags)) {
            console.log('no tag ', ele);
            return false;
        }
        blogTags.forEach(tag => {
            if (tags[tag]) {
                tags[tag].push(ele);
            } else {
                tags[tag] = [ele];
            }
        });
    });
    return {
        tags,
        posts
    };
}
