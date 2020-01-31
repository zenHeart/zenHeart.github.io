'use strict';

const removeMd = require('remove-markdown');
const { join } = require('path');
const fs = require('fs');

const { isPostPage } = require('./utils.js');

module.exports = (options = {}, context) => ({
    name: 'vuepress-plugin-blog-info',
    extendPageData($page) {
        const {
            _filePath, // file's absolute path
            _content, // file's raw content string
            _strippedContent, // file's content string without frontmatter
            frontmatter // page's frontmatter object
        } = $page;
        // 非 blog 直接返回
        if (!isPostPage(_filePath)) {
            return;
        }

        if (!frontmatter.summary) {
            frontmatter.summary = extractSummary(_strippedContent, options);
        }
        // 存储创建时间
        if (!frontmatter.create) {
            frontmatter.create = extractFileInfo(_filePath);
        }
        // 打开导航
        if (!frontmatter.sidebar) {
            frontmatter.sidebar = 'auto';
        }
    },
    enhanceAppFiles: join(__dirname, './enhanceApp.js')
});

/**
 *
 * @param {String}} content  文章内容
 * @param {Object} options 配置对象
 */
const SUMMARY_DEFAULT_LENGTH = 200;

function extractSummary(
    strippedContent,
    { summaryLength = SUMMARY_DEFAULT_LENGTH } = {}
) {
    // 若内容为空或非字符串则直接返回空
    if (typeof strippedContent !== 'string' || !strippedContent) {
        return '';
    }
    return (
        removeMd(
            strippedContent
                .trim()
                .replace(/^#+\s+(.*)/gm, '')
                .slice(0, summaryLength)
        ) + ' ...'
    );
}

/**
 * TODO: 改为异步是否可以
 * @param {*} path
 */
function extractFileInfo(filePath) {
    let dateStr = /\d{4}(-\d{2}){2}/.exec(filePath);
    if (dateStr) {
        return new Date(dateStr[0]).getTime();
    }
    // return filePath;
    /*   const pageStat = fs.statSync(filePath);
    return pageStat; */
}
