const forms = Array.from(document.querySelectorAll('.form'));

const handleResponse = ($method, $data) => {

  if($method === 'POST' || $method === 'PUT' || $method === 'DELETE') {
    alert($data.message);
  }

  window.location.reload();

}

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

  const needsBody = attrs.method === 'POST' || attrs.method === 'PUT';
 
  if(needsBody) {
    let body = {};
    let formElements = Array.from($form.elements);
    formElements = formElements.filter(element => {
      if(element.hasAttribute('name')) {
        return element;
      }
    });

    formElements.forEach(element => {
      const property = element.getAttribute('name');
      const value = $form[property].value;
      body[property] = value;
      
    });
    
    options.body = JSON.stringify(body);
    
  }

  const response = await fetch(attrs.action, options);
  const data = await response.json();
  
  handleResponse(attrs.method, data);  

}

forms.forEach(form => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    fetchData(event.target);
  });
  
});