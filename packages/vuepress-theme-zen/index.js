const path = require('path');
const fs = require('fs');
const dayjs = require('dayjs');
const { logger, chalk } = require('@vuepress/shared-utils');
const { yellow } = chalk;

// Theme API.
module.exports = (options, ctx) => {
    const { themeConfig, siteConfig } = ctx;

    // resolve algolia
    const isAlgoliaSearch =
        themeConfig.algolia ||
        Object.keys((siteConfig.locales && themeConfig.locales) || {}).some(
            base => themeConfig.locales[base].algolia
        );

    const enableSmoothScroll = themeConfig.smoothScroll === true;

    return {
        alias() {
            return {
                '@AlgoliaSearchBox': isAlgoliaSearch
                    ? path.resolve(__dirname, 'components/AlgoliaSearchBox.vue')
                    : path.resolve(__dirname, 'noopModule.js')
            };
        },

        plugins: [
            ['@vuepress/active-header-links', options.activeHeaderLinks],
            '@vuepress/search',
            '@vuepress/back-to-top',
            '@vuepress/plugin-nprogress',
            [
                'container',
                {
                    type: 'tip',
                    defaultTitle: {
                        '/': 'TIP',
                        '/zh/': '提示'
                    }
                }
            ],
            [
                'container',
                {
                    type: 'warning',
                    defaultTitle: {
                        '/': 'WARNING',
                        '/zh/': '注意'
                    }
                }
            ],
            [
                'container',
                {
                    type: 'danger',
                    defaultTitle: {
                        '/': 'WARNING',
                        '/zh/': '警告'
                    }
                }
            ],
            [
                'container',
                {
                    type: 'details',
                    before: info =>
                        `<details class="custom-block details">${
                            info ? `<summary>${info}</summary>` : ''
                        }\n`,
                    after: () => '</details>\n'
                }
            ],
            ['blog-info', {}],
            [('smooth-scroll', enableSmoothScroll)]
        ],

        // TODO: 此处 blog 和 tag 配置需要解耦
        additionalPages: [
            {
                path: '/tags/',
                frontmatter: {
                    layout: 'TagsLayout'
                }
            },
            {
                path: '/posts/',
                frontmatter: {
                    layout: 'BlogsLayout'
                }
            }
        ],

        extendCli(cli) {
            cli.command('blog <dir> [file]', '')
                .allowUnknownOptions()
                .option('-t,--tags [tags]', 'add blog tags')
                .action((dir = 'docs', file = 'test', options) => {
                    createBlog(dir, file, options.tags);
                });
        }
    };
};

function createBlog(dir, name, tags = []) {
    name = `${dayjs().format('YYYY-MM-DD')}-${name}.md`;
    let filePath = path.resolve(dir, 'posts', name);
    tags = Array.isArray(tags) ? tags : tags.split(' ');
    const fileTemplate = `---
tags:
${tags.reduce((sum, ele) => (sum += `\t- ${ele}\n`), '')}---
`;
    fs.writeFileSync(filePath, fileTemplate);
    logger.success(`create ${yellow(filePath)} success!`);
}
