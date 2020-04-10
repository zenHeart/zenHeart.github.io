const fs = require('fs');
const path = require('path');

exports.createPostsSidebar = function createPostsSidebar() {
    let postsGroupByYear = _groupPostsByYear();
    let postsYear = Object.keys(postsGroupByYear).reverse();

    let sidebar = [];
    postsYear.forEach((postYear, index) => {
        let postGroup = {
            title: postYear,
            collapsable: index === 0 ? false : true,
            children: postsGroupByYear[postYear].map(filename => {
                return path.join('/posts', filename); //返回文件目录
            }),
            get postsNums() {
                return this.children.length;
            }
        };
        sidebar.push(postGroup);
    });
    return sidebar;
};

function _groupPostsByYear() {
    const READ_PATH = path.join(__dirname, '../posts');
    const postFilesName = fs.readdirSync(READ_PATH).reverse();

    let postFilesInfo = {};
    postFilesName.forEach((postName, index) => {
        if (postName === 'img' || postName === 'README.md') {
            return;
        }

        let [postBirthYear, postBirthMonth, postBirthDay] = postName.split('-');
        // 命名不合法则直接过滤
        if (!postFilesInfo[postBirthYear]) {
            postFilesInfo[postBirthYear] = [];
        }
        postFilesInfo[postBirthYear].push(postName);
    });
    return postFilesInfo;
}
