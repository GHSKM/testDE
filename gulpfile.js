const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var jpegtran = require('imagemin-jpegtran');
var browserSync = require('browser-sync');
var shell = require('gulp-shell');
var runSequence = require('run-sequence');
var minifyCss = require('gulp-clean-css');
var postcss = require('gulp-postcss');
var uncss=require('postcss-uncss');
var uglify = require('gulp-uglify');
// For joining multiple files into one
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var gifsicle = require('imagemin-gifsicle');
 


var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

gulp.task('optimize-Img',function () { return gulp.src(['images/**/*.jpg', 'images/**/*.jpeg', 'images/**/*.gif', 'images/**/*.png'])
.pipe(imagemin({
    progressive: false,
    svgoPlugins: [{removeViewBox: false}],
    use: [pngquant(), jpegtran(), gifsicle()]
}))
.pipe(gulp.dest('images/'));
});


gulp.task('optimize-css', function() {
    var plugins = [
        uncss({
            html: ['_site/**/*.html']
        }),
    ];
    return gulp.src('/css/main.css')
        .pipe(autoprefixer())
        .pipe(postcss(plugins))
        .pipe(minifyCss({keepBreaks: false}))
        .pipe(gulp.dest('/css/'));
 });


gulp.task('jekyll-build', function() {
    browserSync.notify(messages.jekyllBuild);
    return gulp.src('index.html', { read: false })
        .pipe(shell([
            'jekyll build'
        ]));
});

gulp.task('deploy', function(callback) {
    runSequence(
   //     'fetch-newest-analytics',
    //    'jekyll',
       'optimize-Img',
       'optimize-css',
       callback
   );
});



gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});


gulp.task('browser-sync', ['jekyll-build'], function() {
    browserSync({
        server: {
            baseDir: '_site'
        }
    });
});

gulp.task('watch', function () {
    gulp.watch(['css/main.css']);
    //gulp.watch(['_jadeFiles/*.jade'],['jade']);
    gulp.watch(['index.html','*.md', '_layouts/*.html','_includes/*.html','_posts/*','css/main.css'], ['jekyll-rebuild']);
});

gulp.task('default', ['browser-sync', 'watch']);