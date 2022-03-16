import initForms from './modules/forms/initForms';

const forms = Array.from(document.querySelectorAll('.form'));

if(forms.length) initForms(forms);

