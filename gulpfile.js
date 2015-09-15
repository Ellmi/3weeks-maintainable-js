var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    del = require('del'),
    minifyCss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    rev = require('gulp-rev');
    KarmaServer = require('karma').Server;

gulp.task('test', function(done){
    new KarmaServer({
        configFile: __dirname + '/karma.conf.js'
    }, done).start();
});

gulp.task('js', function() {
    return gulp.src(['src/*.js', 'spec/*.js'])
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('browserify', function() {
    return browserify('src/js/app.js')
        .bundle()
        .on('error', function(err){
            console.log(err.message);
            this.emit('end');
        })
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('build/js'));
});

gulp.task('clean', function() {
   return del(['publish', 'build']);
});

gulp.task('publishCSS', function() {
    return gulp.src('src/css/*.css')
        .pipe(minifyCss())
        .pipe(concat('search.css'))
        .pipe(rev())
        .pipe(gulp.dest('publish/css'))
        .pipe(rev.manifest('publish/rev-manifest.json'), {base:'publish', merge:'true'})
        .pipe(gulp.dest(''));
});

gulp.task('publishJS',['browserify'], function() {
   return gulp.src('build/js/*.js')
        .pipe(rev())
        .pipe(gulp.dest('publish/js'))
        .pipe(rev.manifest('publish/rev-manifest.json'), {base:'publish',merge:'true'})
        .pipe(gulp.dest(''));
});

gulp.task('default', ['js', 'test']);

gulp.task('watch', function() {
    gulp.watch('src/js/**/*', ['browserify']);
});
