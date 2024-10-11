//
//
// SCREEN LOGIN
//

// Import Template : Default
import {
  templateDefault,
  cardMainContent,
  sectionActionContentContainer,
} from '../../components/screenTemplate/templateDefault/templateDefault.js';

// Import Login Form
import {
  loginForm,
  btnContentLogin,
} from '../../components/form/loginForm/loginForm.js';
const loginFormComponent = loginForm();

// Import App Version
import { appVersion } from '../../components/appVersion/appVersion.js';
const appVersionComponent = appVersion();

import { body } from '../../scripts/main.js';

// Export the login screen
export function screenLogin() {
  templateDefault('login');

  const loginScreenComponent = document.createElement('div');
  loginScreenComponent.setAttribute('class', 'screen__login__container');

  loginScreenComponent.appendChild(loginFormComponent);

  cardMainContent.appendChild(loginScreenComponent);
  sectionActionContentContainer.appendChild(appVersionComponent);

  return { cardMainContent, sectionActionContentContainer };
}

// import { loginScript } from '../../scripts/loginScript/loginScript.js';
import { screenHome } from '../home/homeScreen.js';
btnContentLogin.addEventListener('click', function (event) {
  event.preventDefault();

  let loginScreenToRemove = document.querySelector('#screen__login');
  const changeOfScreen = body.removeChild(loginScreenToRemove);
  screenHome();
});
