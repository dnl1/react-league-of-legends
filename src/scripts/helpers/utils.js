const utils = {
    capitalize: function (str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    },
    disableScroll: function () {
        document.querySelector('html').classList.add('no-scroll');
    },
    enableScroll: function () {
        document.querySelector('html').classList.remove('no-scroll');
    }
}

export default utils;