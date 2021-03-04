const php = () => {
    return gulp
      .src(paths.src.php)
      .pipe(rigger())
      .pipe(gulp.dest(paths.build.php));
  };
  
  module.exports = php;