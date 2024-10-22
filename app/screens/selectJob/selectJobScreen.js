import {
  templateDefault,
  mainContentCard,
  mainActionCard,
} from '../../components/screenTemplate/templateDefault/templateDefault.js';

import { btnContent } from '../../components/buttons/btnContent/btnContent.js';
import { btnNewJobBackScript } from '../../scripts/newJobScript/newJobBackScript.js';

export function selectJobScreen() {
  templateDefault('new-job-screen');

  //
  // MAIN CONTENT CONTAINER
  // Main card
  const mainNewJobContainer = document.createElement('div');
  mainNewJobContainer.setAttribute('class', 'main-new-job__container');

  // Screen title container
  const mainNewJobTitleContainer = document.createElement('div');
  mainNewJobTitleContainer.setAttribute(
    'class',
    'new-job-screen__title__container'
  );

  const mainHomeTitle = document.createElement('h2');
  mainHomeTitle.setAttribute('class', 'new-job__title');
  mainHomeTitle.textContent = 'Select a job from the game menu';

  //
  // ACTION CONTAINER
  // Action container
  const actionContainer = document.createElement('div');
  actionContainer.setAttribute(
    'class',
    'new-job__action-container new-job__action-container--two-btn'
  );

  // EMPTY DIV
  const newJobEmptyDiv = document.createElement('div');
  newJobEmptyDiv.setAttribute('class', 'new-job__empty-div');

  // BTN : Back to Home
  const btnBackToHome = btnContent('Back', 'new-job--back', 'btn--secondary');

  // BTN : New Job
  const btnJobSelected = btnContent(
    'Job Selected',
    'new-job--job-selected',
    'btn--primary'
  );

  // APPEND CHILD
  mainNewJobTitleContainer.appendChild(mainHomeTitle);

  mainNewJobContainer.appendChild(mainNewJobTitleContainer);

  actionContainer.appendChild(newJobEmptyDiv);
  actionContainer.appendChild(btnBackToHome);
  actionContainer.appendChild(btnJobSelected);

  mainContentCard.appendChild(mainNewJobContainer);
  mainActionCard.appendChild(actionContainer);

  btnNewJobBackScript();
}
