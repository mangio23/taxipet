import {CLIOptions, build, Configuration} from 'aurelia-cli';
import gulp from 'gulp';
import project from '../aurelia.json';
import htmlmin from 'gulp-htmlmin';
import gulpIf from 'gulp-if';
import plumber from 'gulp-plumber';
const buildOptions = new Configuration(project.build.options);
const minify = buildOptions.isApplicable('minify');

export default function processMarkup() {
  return gulp.src(project.markupProcessor.source, {sourcemaps: true, since: gulp.lastRun(processMarkup)})
    .pipe(gulpIf(CLIOptions.hasFlag('watch'), plumber()))
    .pipe(gulpIf(minify, htmlmin({
        // collapseInlineTagWhitespace: true,
        // collapseBooleanAttributes: true,
        // removeAttributeQuotes: true,
        // removeScriptTypeAttributes: true,
        // removeStyleLinkTypeAttributes: true,
        removeComments: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
        ignoreCustomFragments: [/\${.*?}/g] // ignore interpolation expressions
    })))
    .pipe(build.bundle());
}

