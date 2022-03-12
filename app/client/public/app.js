console.log('app has loaded');
const forms = Array.from(document.querySelectorAll('.form'));

const handleSubmit = ($form) => {
  console.log($form);
}

forms.forEach(form => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    handleSubmit(event.target);
  });
});