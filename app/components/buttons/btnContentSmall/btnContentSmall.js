//
//
// BUTTON CONTENT
//

// Save the id of the button
let btnContentSmallID;
let btnContentSmallLabelID;

export function btnContentSmall(label, id, btnCategoryClass, btnNewClass) {
  // Create IDs dynamically
  btnContentSmallID = `btn-content__small__${id}`;
  btnContentSmallLabelID = `btn-content__small__label__${id}`;

  // Create label
  const btnContentSmallLabel = document.createElement('span');
  btnContentSmallLabel.setAttribute('class', `btn btn-content__small__label`);
  btnContentSmallLabel.setAttribute('id', btnContentSmallLabelID);
  btnContentSmallLabel.innerHTML = label;

  // Create Button
  const btnContentSmall = document.createElement('button');
  btnContentSmall.setAttribute(
    'class',
    `btn btn-content__small ${btnCategoryClass} ${btnNewClass}`
  );
  btnContentSmall.setAttribute('id', btnContentSmallID);

  // Append label to button
  btnContentSmall.appendChild(btnContentSmallLabel);

  return btnContentSmall;
}

//
// Different file
// List of functions to create an especific "content button"
export function btnContentLogin() {
  btnContent('Login', 'btn__login', 'btn--confirm');
  const inputFieldElement = document.querySelector(`#${btnContentID}`);
}
