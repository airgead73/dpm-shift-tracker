const handleResponse = ($data) => {

  const { success, message, relocateTo } = $data;

  alert(message);

  if(relocateTo) {
    window.location.replace(relocateTo);
  } else {
    window.location.reload();
  }  

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

    console.log(body);
    
    options.body = JSON.stringify(body);
    
  }

  const response = await fetch(attrs.action, options);
  const data = await response.json();
  

  console.log(data);
  return data;   

}

const initForms = ($forms) => {
  $forms.forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      fetchData(event.target).then(data => handleResponse(data));
    });
    
  });
}

export default initForms;