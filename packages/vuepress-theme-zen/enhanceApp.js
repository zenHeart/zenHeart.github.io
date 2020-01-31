// TODO: 此处模块路径无效需查明原因
import dayjs from './node_modules/dayjs';

function formatDate(val, format) {
    return dayjs(val).format(format);
}

export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData // site metadata
}) => {
    let filters = {
        formatDate
    };
    Vue.mixin({ filters });
};
