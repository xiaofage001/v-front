const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const yaml = require('js-yaml');
const fs = require('fs');
const config = yaml.safeLoad(fs.readFileSync('./config/config.yml', 'utf8'));

// set proxy to express server
// browser-sync is a node tool for multi browser test.
gulp.task('browser-sync', () => {
  browserSync.init({
    proxy: `127.0.0.1:${config.port || '3000'}`,
    files: ['src/client/index.html', 'src/client/main.js'],
    port: 3001,
  });
});
