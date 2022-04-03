const filenames = {
  scss: 'main.min.css',
  concat: 'compiled.js',
  browserify: 'browser.js',
  babel: 'bundle.min.js'
};

const styles = {
  SRC: 'assets/scss/index.scss',
  FILE: filenames.scss,
  DEST: 'app/public',
  CLEAN: [
    `app/public/${filenames.scss}`,
    `app/public/${filenames.scss}.map`
  ]
};

const scripts = {
  SRC: {
    concat: [
      'assets/scripts/bootstrap.bundle.js',
      'assets/scripts/forms.js',
      'assets/scripts/btns.js',
      'assets/scripts/camelcase.js'
    ],
    browserify: 'assets/scripts/${filenames.concat}',
    babel: 'assets/scripts/${filenames.browserify}',
    reset: [
      `assets/scripts/${filenames.concat}`,
      `assets/scripts/${filenames.browserify}`      
    ]
  },
  FILE: {
    concat: filenames.concat,
    browserify: filenames.browserify,
    babel: filenames.babel
  },
  DEST: {
    concat: 'assets/scripts',
    browserify: 'assets/scripts',
    babel: 'app/public'
  },
  CLEAN: [
    `app/public/${filenames.babel}`,
    `app/public/${filenames.babel}.map`,
  ]   
};

module.exports = {
  styles,
  scripts
}