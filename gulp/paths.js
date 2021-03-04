module.exports = {
  src: {
    html: 'src/*.html',
    css: 'src/sass/main.scss',
    js: 'src/js/**/*.js',
    images: 'src/images/**/*',
    fonts: 'src/fonts/**/*',
    php: 'src/php/*.php',
  },
  watch: {
    html: 'src/**/*.html',
    css: 'src/sass/**/*.scss',
    php: 'src/php/**/*.php',
    js: 'src/js/**/*.js',
    images: 'src/images/**/*',
    fonts: 'src/fonts/**/*',
  },
  build: {
    html: 'build/',
    css: 'build/css',
    php: 'build/php',
    js: 'build/js',
    images: 'build/images',
    fonts: 'build/fonts',
  },
  inject: {
    html: 'build/index.html',
    css: 'build/css/**/*.css',
    js: 'build/js/**/*.js',
  },
  clean: 'build/',
};
