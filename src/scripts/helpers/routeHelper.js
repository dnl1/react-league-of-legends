export default {
    resolvePath: (path) => {
        var baseUrl = window.location.pathname.split('/')[1];
        return `${baseUrl}/${path}`;
    }
}