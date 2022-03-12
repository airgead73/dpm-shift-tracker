console.log('app has loaded');
const forms = Array.from(document.querySelectorAll('.form'));

const fetchData = async ($formAttrs) => {
  const requestOptions = {
    method: $formAttrs.method,
    headers: {
      'Content-Type': $formAttrs.enctype,
      'Accept': $formAttrs.enctype
    }
  }

  const response = await fetch($formAttrs.action, requestOptions);
  const json = await response.json();

  console.log(json);

}

const handleSubmit = ($form) => {  
  const attrs = $form.getAttributeNames().reduce((acc, name) => {
    return {...acc, [name]: $form.getAttribute(name)}
  }, {});

  fetchData(attrs);
  
}

forms.forEach(form => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    handleSubmit(event.target);
  });
});