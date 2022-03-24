const forms = Array.from(document.querySelectorAll('.form'));
const btns = Array.from(document.querySelectorAll('.btn-fetch'));
import { initForms, initBtns } from './modules/index.js';


if(btns.length) {
  initBtns(btns);
} else {
  console.log('page does not have fetch buttons')
}


if(forms.length) {
  initForms(forms)
} else {
  console.log('page does not have forms')
}