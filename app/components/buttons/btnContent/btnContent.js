//
//
// BUTTON CONTENT
//

// Save the id of the button
let btnContentID;
let btnContentLabelID;

export function btnContent(label, id, btnCategoryClass) {
  // Create IDs dynamically
  btnContentID = `btn-content__${id}`;
  btnContentLabelID = `btn-content__label__${id}`;

  // Create label
  const btnContentLabel = document.createElement('span');
  btnContentLabel.setAttribute('class', `btn btn-content__label`);
  btnContentLabel.setAttribute('id', btnContentLabelID);
  btnContentLabel.innerHTML = label;

  // Create Button
  const btnContent = document.createElement('button');
  btnContent.setAttribute('class', `btn btn-content ${btnCategoryClass}`);
  btnContent.setAttribute('id', btnContentID);

  // Append label to button
  btnContent.appendChild(btnContentLabel);

  return btnContent;
}

//
// Different file
// List of functions to create an especific "content button"
export function btnContentLogin() {
  btnContent('Login', 'btn__login', 'btn--confirm');
  const inputFieldElement = document.querySelector(`#${btnContentID}`);
}
