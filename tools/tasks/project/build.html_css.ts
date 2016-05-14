// import * as autoprefixer from 'autoprefixer';
import * as cssnano from 'cssnano';
import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import * as merge from 'merge-stream';
import { join } from 'path';

import { APP_DEST, APP_SRC, BROWSER_LIST, CSS_DEST, CSS_PROD_BUNDLE, DEPENDENCIES, ENV, TMP_DIR } from '../../config';

const plugins = <any>gulpLoadPlugins();
let cleanCss = require('gulp-clean-css');

const isProd = ENV === 'prod';

// const processors = [];
// if (isProd) {
//   processors.push(
//     cssnano({
//       discardComments: {removeAll: true}
//     })
//   );
// }

function prepareTemplates() {
  return gulp.src(join(APP_SRC, '**', '*.html'))
    .pipe(gulp.dest(TMP_DIR));
}

function processComponentScss() {
  return gulp.src([
      join(APP_SRC, '**', '*.scss'),
      '!' + join(APP_SRC, 'assets', '**', '*.scss')
    ])
    .pipe(isProd ? plugins.cached('process-component-scss') : plugins.util.noop())
    .pipe(isProd ? plugins.progeny() : plugins.util.noop())
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.sass({includePaths: ['./node_modules/']}).on('error', plugins.sass.logError))
    .pipe(plugins.autoprefixer())
    // .pipe(plugins.postcss([])
    .pipe(plugins.sourcemaps.write(isProd ? '.' : ''))
    .pipe(gulp.dest(isProd ? TMP_DIR: APP_DEST));
}

function processExternalScss() {
  return gulp.src(getExternalScss().map(r => r.src))
    .pipe(isProd ? plugins.cached('process-external-scss') : plugins.util.noop())
    .pipe(isProd ? plugins.progeny() : plugins.util.noop())
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.sass({includePaths: ['./node_modules/']}).on('error', plugins.sass.logError))
    .pipe(plugins.autoprefixer())
    // .pipe(plugins.postcss([]))
    .pipe(plugins.sourcemaps.write(isProd ? '.' : ''))
    .pipe(gulp.dest(CSS_DEST));
}

function getExternalScss() {
  return DEPENDENCIES.filter(d => /\.css$/.test(d.src));
}
export = () => merge(processComponentScss(), prepareTemplates(), processExternalScss());
