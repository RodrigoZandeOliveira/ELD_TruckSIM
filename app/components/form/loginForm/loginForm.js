// import : INPUT FIELD
import { inputField } from '../../inputField/inputField.js';
const inputFieldCarrier = inputField(`Carrier's name`, 'carrier-name');
const inputFieldDriver = inputField(`Driver's name`, 'driver-name');

// import : BTN CONTENT
import { btnContent } from '../../buttons/btnContent/btnContent.js';
export const btnContentLogin = btnContent(
  'Login',
  'btn__login',
  'btn--confirm'
);

// Declaring formID for use
export let formID;

export function loginForm() {
  formID = 'login-form';

  const inputLoginContainer = document.createElement('div');
  inputLoginContainer.setAttribute('class', 'login__input__wrap');

  const form = document.createElement('form');
  form.setAttribute('class', 'form');
  form.setAttribute('id', formID);

  // Append Child Elements
  inputLoginContainer.appendChild(inputFieldCarrier);
  inputLoginContainer.appendChild(inputFieldDriver);
  form.appendChild(inputLoginContainer);
  form.appendChild(btnContentLogin);

  return form; // Return the created form
}
