import { confirmFetch } from './utils.js';

const handleResponse = ($data) => {
  const { success, message, relocateTo } = $data;

  alert(message);

  if(relocateTo) {
    window.location.replace(relocateTo);
  } else {
    window.location.reload();
  }

}

const fetchData = async ($btn) => {

  // confirm

  const isConfirmed = confirmFetch($btn.getAttribute('data-confirm'));

  if(!isConfirmed) return;

  // if confirmed, continue

  const action = $btn.getAttribute('data-action');
  const method = $btn.getAttribute('data-method');  

  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }

  const response = await fetch(action, options);
  const data = await response.json();

  return handleResponse(data);

}

const initBtns = ($btns) => {
  $btns.forEach((btn) => {

    btn.addEventListener('click', (event) => {
      event.preventDefault(); 
      fetchData(event.target);      
    });

  });
}

export default initBtns;