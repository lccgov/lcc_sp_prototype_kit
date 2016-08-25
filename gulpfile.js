var gulp = require('gulp');
var syncy = require('syncy');
var sass = require('gulp-sass');
var notify = require('gulp-notify');

gulp.task('sass', function () {
    return gulp.src('app/assets/sass/*.scss')
      .pipe(sass({includePaths: [
            'lcc_modules/lcc_frontend_toolkit/stylesheets/']}).on('error', function (err) {
          notify({ title: 'SASS Task' }).write(err.line + ': ' + err.message);
          this.emit('end');
      }))
      .pipe(gulp.dest('./public/stylesheets/'))
});

gulp.task('sync:assets', (done) => {
    syncy(['app/assets/**/*', '!app/assets/sass/**'], 'public', {
            ignoreInDest: '**/stylesheets/**',
            base: 'app/assets',
            updateAndDelete: true
        }).then(() => { 
            done();
    }).catch((err) => { done(err);})
});

gulp.task('sync:lcc_frontend_toolkit', (done) => {
    syncy(['node_modules/lcc_frontend_toolkit/**'], 'lcc_modules/lcc_frontend_toolkit', {
            base: 'node_modules/lcc_frontend_toolkit',
            updateAndDelete: true
        }).then(() => { 
            done();
    }).catch((err) => { done(err);})
});

gulp.task('generate-assets',  ['sync:assets', 'sync:lcc_frontend_toolkit', 'sass']);

gulp.task('default', function() {console.log('default')});