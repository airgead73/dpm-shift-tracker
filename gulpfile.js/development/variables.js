const styles = {
  src: 'assets/scss/index.scss',
  dest: 'app/public',
  rename: 'main.css',
  arr: ['app/public/main.css', 'app/public/main.min.css'],
  watch: ['assets/scss/**/*.scss']
}

module.exports = {
  styles
};