import fetchData from './fetchData';

const initForms = ($forms) => {

  $forms.forEach(form => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      fetchData(event.target);
    });
    
  });

}

