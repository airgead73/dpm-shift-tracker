const styles = {
  src: 'assets/scss/index.scss',
  dest: 'app/public',
  rename: 'main.min.css',
  arr: ['app/public/main.css', 'app/public/main.min.css', 'app/public/main.min.css.map']
}

const scripts = {
  src: ['assets/scripts/bootstrap.bundle.js', 'assets/scripts/forms.js', 'assets/scripts/btns.js'],
  dest: 'app/public',
  rename: 'bundle.min.js',
  arr: ['app/public/bundle.js', 'app/public/bundle.min.js', 'app/public/bundle.min.js.map']
}

module.exports = {
  styles,
  scripts
};