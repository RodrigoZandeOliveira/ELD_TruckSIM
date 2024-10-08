// IMPORT
import { loginForm } from '../form/loginForm/loginForm.js';

//
//
// INPUT FIELD
//

// Input field ID
let inputFieldID;
let inputLabelID;

// Function to create the component
export function inputField(labelText, id) {
  // Create IDs dynamically
  inputLabelID = `input-label__${id}`;
  inputFieldID = `input-field__${id}`;

  // Create label
  const label = document.createElement('label');
  label.setAttribute('class', 'input__label');
  label.setAttribute('id', inputLabelID);
  label.textContent = labelText;

  // Create input field
  const inputField = document.createElement('input');
  inputField.setAttribute('class', 'input__field');
  inputField.setAttribute('id', inputFieldID);
  // inputField.value = inputValue;

  // Create container for input and label
  const inputContainer = document.createElement('div');
  inputContainer.setAttribute('class', 'input__container');
  inputContainer.setAttribute('id', `input-container`);

  // Append input and label to container
  inputContainer.appendChild(inputField);
  inputContainer.appendChild(label);

  return inputContainer;
}

//
// Different file
// List of functions to create an especific input field
export function carrierInputField() {
  inputField('Carrier name', 'carrier-name');
  const inputFieldElement = document.querySelector(`#${inputFieldID}`);
}

// SCRIPTS (Different File)
// Value collected on the input field
// export let inputFieldValue = '';
