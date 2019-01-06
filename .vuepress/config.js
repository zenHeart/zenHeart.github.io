const {createSidebar}  = require('./utils.js');

module.exports = {
    title: 'ZenHeart 编码即是修行',
    description: 'vue blog',
    markdown: {
        config: md => {
            md.use(require('markdown-it-task-lists'))
        }
    },
    themeConfig: {
        docsDir: 'posts',
        sidebar: createSidebar()
    }
}


