const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const MODES = {
    DEV: 'development',
    PROD: 'production'
};

const isProductionMode = process.env.NODE_ENV === MODES.PROD
const isDevelopmentMode = process.env.NODE_ENV === MODES.DEV

const pathes = {
    nodeModules: resolveApp('node_modules'),
    build: resolveApp('build'),
    entry: resolveApp('src/index.tsx'),
    html: resolveApp('public/index.html'),
    fonts: resolveApp('public/fonts'),
    fonts: resolveApp('public/images'),
    src: resolveApp('src'),
    pages: resolveApp('src/pages'),
    widgets: resolveApp('src/widgets'),
    shared: resolveApp('src/shared'),
    layers: resolveApp('src/layers'),
    public: resolveApp('public'),
    resolveModules: [resolveApp('src'), 'node_modules'],
};

module.exports = {
    pathes,
    isProductionMode,
    isDevelopmentMode,
    MODES,
};
