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
  const shift = $btn.getAttribute('data-shift');
  const method = $btn.getAttribute('data-method');
  const url = `/api/shifts/${shift}`;

  console.log(shift);

  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }

  const response = await fetch(url, options);
  const data = await response.json();

  console.log(data);

  return data;

}

const initBtns = ($btns) => {
  $btns.forEach((btn) => {

    btn.addEventListener('click', (event) => {
      event.preventDefault();      
      fetchData(event.target).then(data => handleResponse(data));
    });

  });
}

export default initBtns;