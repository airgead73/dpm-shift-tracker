const forms = Array.from(document.querySelectorAll('.form'));
import { initForms } from './modules/index.js';

if(forms.length) {
  initForms(forms)
} else {
  console.log('page does not have forms')
}





