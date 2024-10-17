//
//
// SCREEN LOGIN
//

// Import Template : Default
import {
  templateDefault,
  mainContentCard,
  mainActionCard,
} from '../../components/screenTemplate/templateDefault/templateDefault.js';

// Import Login Form
import {
  loginForm,
  btnContentLogin,
} from '../../components/form/loginForm/loginForm.js';
const loginFormComponent = loginForm();

import { btnContent } from '../../components/buttons/btnContent/btnContent.js';

import { btnLoginNextScript } from '../../scripts/loginScript/loginNextScript.js';
import { btnLoginBackScript } from '../../scripts/loginScript/loginBackScript.js';

// Export the login screen
export function loginScreen() {
  templateDefault('login');

  // MAIN CONTENT CONTAINER
  // Main card
  const mainLoginContainer = document.createElement('div');
  mainLoginContainer.setAttribute('class', 'main-login__container');

  const mainLoginTitleContainer = document.createElement('div');
  mainLoginTitleContainer.setAttribute('class', 'main-login__title__container');

  const mainLoginContentContainer = document.createElement('div');
  mainLoginContentContainer.setAttribute(
    'class',
    'main-login__content__container'
  );

  const mainLoginTitle = document.createElement('h2');
  mainLoginTitle.setAttribute('class', 'main-login__title');
  mainLoginTitle.textContent = `Your company's information`;

  // ACTION CONTAINER
  // Action container
  const actionContainer = document.createElement('div');
  actionContainer.setAttribute('class', 'login__action-container');

  // Btn : Back
  const btnLoginBack = btnContent(
    'Back',
    'login--back',
    'btn--secondary',
    'btn--secondary-small'
  );

  // APPEND CHILD
  mainLoginTitleContainer.appendChild(mainLoginTitle);

  mainLoginContentContainer.appendChild(loginFormComponent);

  mainLoginContainer.appendChild(mainLoginTitleContainer);
  mainLoginContainer.appendChild(mainLoginContentContainer);

  actionContainer.appendChild(btnLoginBack);
  mainActionCard.appendChild(actionContainer);

  mainContentCard.appendChild(mainLoginContainer);

  btnLoginNextScript(); // Login Script : Next page
  btnLoginBackScript(); // Login Script : Preview page

  // return { mainContentCard, mainActionCard };
}
