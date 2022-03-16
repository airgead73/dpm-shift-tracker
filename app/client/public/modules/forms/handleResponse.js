const handleResponse = ($method, $data) => {

  if($method === 'POST' || $method === 'PUT' || $method === 'DELETE') {
    alert($data.message);
  }

  window.location.reload();

}

export default handleResponse;