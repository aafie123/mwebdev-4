const gulp = require('gulp'),
    sass = require('gulp-sass')(require('sass')),
    browserSync = require('browser-sync').create();

// werk directory paden
const paths = {
    styleDirs: {
        //pattern   ** is alle directories
        //          * is alle karater (hier naen met .scss)
        src: 'src/scss/**/*.scss',
        dest: 'dist/css'
    }
};

function style() {
    return (
        gulp.src(paths.styleDirs.src)
            .pipe(sass())
            .on("error", sass.logError) 
            .pipe(gulp.dest(paths.styleDirs.dest)) 
            .pipe(browserSync.stream())          
    ); 
}

function reload() {
    browserSync.reload();
}

function watch() {
    browserSync.init(
    {
        proxy: 'http://localhost/mwebdev-4/dist/'
    }
    );
    gulp.watch(paths.styleDirs.src, style); // hier wordt de sccs naar css omgezet
    gulp.watch('dist/index.html', reload);   //hier wordt de index pagina direct geladen
  }
//exports.default = style;
exports.default = watch;