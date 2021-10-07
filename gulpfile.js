const gulp = require('gulp'),
    sass = require('gulp-sass')(require('sass'));

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
    ); 
}

exports.default = style;