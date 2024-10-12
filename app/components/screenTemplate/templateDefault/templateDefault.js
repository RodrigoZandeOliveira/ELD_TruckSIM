import { body } from '../../../scripts/main.js';
import { btnSquareSmall } from '../../buttons/btnSquareSmall/btnSquareSmall.js';
// Import App Name
import { appName } from '../../appName/appName.js';

export let screenID;
export let header;
export let btnMenu = btnSquareSmall('icon--menu', 'menu');
export let btnSettings = btnSquareSmall('icon--settings', 'settings');
const appNameTitle = appName();
export let mainContentCard;
export let mainActionCard;

export function templateDefault(id) {
  // CHILD ELEMENTS
  let headerTitle = appNameTitle;
  screenID = `screen__${id}`;

  // Screen / HEADER
  header = document.createElement('header');
  header.setAttribute('class', 'header');

  // Screen / MAIN
  const main = document.createElement('main');
  main.setAttribute('class', 'main');

  // Screen / Main Section / Section Main Content Container
  const sectionMainContentContainer = document.createElement('section');
  sectionMainContentContainer.setAttribute('class', 'main-content__container');

  // Screen / Main Section / Section Main Content Container / Main Card
  mainContentCard = document.createElement('div');
  mainContentCard.setAttribute('class', 'main-content__card');

  // Screen / Main / ACTION Container
  const sectionActionContentContainer = document.createElement('section');
  sectionActionContentContainer.setAttribute('class', 'main-action__container');

  // Screen / Main / ACTION Container
  mainActionCard = document.createElement('div');
  mainActionCard.setAttribute('class', 'main-action__card');

  // Screen
  const screen = document.createElement('div');
  screen.setAttribute('class', 'screen');
  screen.setAttribute('id', screenID);

  // APPEND CHILD --------------------------------------------------------------
  // Append Buttons to Header
  header.appendChild(btnMenu);
  header.appendChild(headerTitle);
  header.appendChild(btnSettings);

  sectionMainContentContainer.appendChild(mainContentCard);

  // Append Action Content Card to the action container
  sectionActionContentContainer.appendChild(mainActionCard);

  // Append the Main Content & Action container to the main
  main.appendChild(sectionMainContentContainer);
  main.appendChild(sectionActionContentContainer);

  // Append header and main to the screen (Already in HTML code);
  screen.appendChild(header);
  screen.appendChild(main);

  // Append screen to the body
  body.insertBefore(screen, body.firstChild);
}
