// Import Template : Default
import {
  header,
  templateDefault,
  cardMainContent,
  sectionActionContentContainer,
} from '../../components/screenTemplate/templateDefault/templateDefault.js';

// Import Login Form
import { loginForm } from '../../components/form/loginForm/loginForm.js';
const loginFormComponent = loginForm();

// Import App Version
import { appVersion } from '../../components/appVersion/appVersion.js';
const appVersionComponent = appVersion();

// Import App Name
import { appName } from '../../components/appName/appName.js';
const appHeaderTitle = appName();

// Export the login screen
export function screenLogin() {
  templateDefault(appHeaderTitle);

  cardMainContent.appendChild(loginFormComponent);
  sectionActionContentContainer.appendChild(appVersionComponent);

  return cardMainContent;
}
