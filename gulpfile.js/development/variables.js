const filenames = {
  scss: 'main.css',
  concat: 'compiled.js',
  browserify: 'browser.js',
  babel: 'bundle.js'  
};

const styles = {
  SRC: 'assets/scss/index.scss',
  FILE: filenames.scss,
  DEST: 'app/public',
  CLEAN: [
    `app/public/${filenames.scss}`,
    `app/public/${filenames}.map`,
    ]  
};

const scripts = {
  SRC: {
    concat:[
      'assets/scripts/bootstrap.bundle.js',
      'assets/scripts/forms.js',
      'assets/scripts/btns.js',
      'assets/scripts/camelcase.js'
    ],
    browserify: `assets/scripts/${filenames.concat}`,
    babel: `assets/scripts/${filenames.browserify}`,
    reset: [
      `assets/scripts/${filenames.concat}`,
      `assets/scripts/${filenames.browserify}`
    ]
  },
  FILE: {
    concat: 'compiled.js',
    browserify: 'browser.js',
    babel: 'bundle.js'
  },
  DEST: {
    concat: 'assets/scripts',
    browserify: 'assets/scripts',
    babel: 'app/public'
  },
  CLEAN: [
    `app/public/${filenames.babel}`,
    `app/public/${filenames}.map`,
  ]  
};

const watch = {
  SRC: [
    'assets/scss/index.scss',
    'assets/scripts/bootstrap.bundle.js',
    'assets/scripts/forms.js',
    'assets/scripts/btns.js',
    'assets/scripts/camelcase.js'    
  ]
}

module.exports = {
  styles,
  scripts,
  watch
}
