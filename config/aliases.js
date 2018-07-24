const path = require('path');

const root = '../src/';

const aliases = {
    Components: path.resolve(__dirname, `${root}components/`),
    Redux: path.resolve(__dirname, `${root}redux/`),
    Utils: path.resolve(__dirname, `${root}utils/`)
};

module.exports = aliases;
