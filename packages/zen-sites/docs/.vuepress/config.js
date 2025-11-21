const { createPostsSidebar } = require('./utils');
const path = require('path');
const fs = require('fs');



module.exports = {
    theme: 'zen',
    chainWebpack: (config, isServer) => {
        config.resolveLoader.modules.add(
            path.resolve(__dirname, './node_modules')
        );
    },
    title: '编码即是修行',
    description: 'vue blog',
    markdown: {
        config: md => {
            md.use(require('markdown-it-task-lists'));
        }
    },
    themeConfig: {
        lastUpdated: true,
        nav: [
            { text: '主页', link: '/' },
            { text: '博客', link: '/posts/' },
            { text: '标签', link: '/tags/' },
            { text: '项目', link: '/projects/' }
            // { text: '简历', link: '/resume' }
        ],
    }
};
