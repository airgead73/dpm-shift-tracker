console.log('app has loaded');
const forms = Array.from(document.querySelectorAll('.form'));

const fetchData = async ($form) => {
  const attrs = $form.getAttributeNames().reduce((acc, name) => {
    return {...acc, [name]: $form.getAttribute(name)}
  }, {});

  const options = {
    method: attrs.method,
    headers: {
      'Content-Type': attrs.enctype,
      'Accept': attrs.enctype
    }
  }

  // const needsBody = attrs.method === 'POST' || attrs.method === 'PUT';
  const needsBody = false

  if(needsBody) {
    let body = {};
    let formElements = Array.from($form.elements);
    formElements.forEach(element => {
      const property = element.getAttribute('name');
      const value = $form[property].value;
      body[property] = value
    });
    options.body = JSON.stringify(body);a
  }

  const response = await fetch(attrs.action, options);
  const json = await response.json();

  console.log(json);

}

forms.forEach(form => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    fetchData(event.target);
  });
});