exports.isPostPage = function isPostPage(path) {
    return /posts\/\d{4}/.test(path);
};
