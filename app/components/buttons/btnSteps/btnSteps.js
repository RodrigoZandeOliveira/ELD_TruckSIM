//
//
// BUTTON APP
//

export let btnStepsID;

export function btnSteps(id, stepTitle) {
  btnStepsID = `btn-app__${id}`;

  // BTN TITLE : Related to the current step
  const btnStepsTitle = document.createElement('h3');
  btnStepsTitle.setAttribute('class', 'btn-steps__title');
  btnStepsTitle.textContent = stepTitle;

  // BTN
  const btnSteps = document.createElement('button');
  btnSteps.setAttribute('class', 'btn btn-steps');
  btnSteps.setAttribute('id', btnStepsID);

  // APPEND CHILD
  btnSteps.appendChild(btnStepsTitle);

  return btnSteps;
}
