const confirmFetch = ($confirmMessage = false) => {

  let isConfirmed = true; 

  if($confirmMessage) isConfirmed = confirm($confirmMessage);  

  return isConfirmed;

}

export {
  confirmFetch
}