import {
  templateDefault,
  mainContentCard,
  mainActionCard,
} from '../../components/screenTemplate/templateDefault/templateDefault.js';

import { btnContent } from '../../components/buttons/btnContent/btnContent.js';

import { appVersion } from '../../components/appVersion/appVersion.js';

export function welcomeScreen() {
  templateDefault();

  // MAIN CONTENT CONTAINER
  // Main card
  const mainWelcomeContainer = document.createElement('div');
  mainWelcomeContainer.setAttribute('class', 'main-welcome__container');

  // Title container
  const mainWelcomeTitleContainer = document.createElement('div');
  mainWelcomeTitleContainer.setAttribute(
    'class',
    'main-welcome__title__container'
  );

  // Content container
  const mainWelcomeContentContainer = document.createElement('div');
  mainWelcomeContentContainer.setAttribute(
    'class',
    'main-welcome__content__container'
  );

  // Welcome message
  const mainWelcomeTitle = document.createElement('h2');
  mainWelcomeTitle.setAttribute('class', 'main-welcome__title');
  mainWelcomeTitle.innerHTML = `Welcome to <br/><span class="welcome__app-name">SIMTruck Logger</span>`;

  // Btn : Get Started!
  const btnWelcomeGetStarted = btnContent(
    'Get Started!',
    'welcome__get-started',
    'btn--primary'
  );

  // Btn : About
  const btnWelcomeAbout = btnContent(
    'About',
    'welcome__about',
    'btn--secondary'
  );

  // ACTION CONTAINER
  // Action container
  const actionContainer = document.createElement('div');
  actionContainer.setAttribute('class', 'welcome__action-container');

  // App Version
  const welcomeAppVersion = appVersion();

  // APPEND CHILD
  mainWelcomeTitleContainer.appendChild(mainWelcomeTitle);
  mainWelcomeContentContainer.appendChild(btnWelcomeGetStarted);
  mainWelcomeContentContainer.appendChild(btnWelcomeAbout);

  mainWelcomeContainer.appendChild(mainWelcomeTitleContainer);
  mainWelcomeContainer.appendChild(mainWelcomeContentContainer);

  mainContentCard.appendChild(mainWelcomeContainer);

  actionContainer.appendChild(welcomeAppVersion);
  mainActionCard.appendChild(actionContainer);
}
