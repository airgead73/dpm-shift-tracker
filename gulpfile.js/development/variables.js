const styles = {
  src: 'assets/scss/index.scss',
  dest: 'app/public',
  rename: 'main.css',
  arr: ['app/public/main.css', 'app/public/main.min.css', 'app/public/main.min.css.map','app/public/main.css.map'],
  watch: ['assets/scss/index.scss']
}

const scripts = {
  // src: ['assets/scripts/bootstrap.bundle.js', 'assets/scripts/forms.js', 'assets/scripts/btns.js'],
  src: ['assets/scripts/forms.js', 'assets/scripts/btns.js'],
  dest: 'app/public',
  rename: 'bundle.js',
  watch: ['assets/scripts/*.js'],
  arr: ['app/public/bundle.js', 'app/public/bundle.min.js', 'app/public/bundle.min.js.map','app/public/bundle.js.map']
}

module.exports = {
  styles,
  scripts
};