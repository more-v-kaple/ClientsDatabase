const path = require('path');

const root = '../src/';

const aliases = {
    Components: path.resolve(__dirname, `${root}components/`),
    Constants: path.resolve(__dirname, `${root}constants/`),
    Styles: path.resolve(__dirname, `${root}assets/styles`),
    Redux: path.resolve(__dirname, `${root}redux/`),
    Utils: path.resolve(__dirname, `${root}utils/`)
};

module.exports = aliases;
