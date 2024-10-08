import { body } from '../../../scripts/main.js';
import { btnSquareSmall } from '../../buttons/btnSquareSmall/btnSquareSmall.js';

export let header;
export let btnMenu = btnSquareSmall('icon--menu', 'menu');
export let headerTitle;
export let cardMainContent;
export let sectionActionContentContainer;
export let screenStorageContainer;

export function templateDefault(screenTitle) {
  // CHILD ELEMENTS
  // headerTitle = document.createElement('h1');
  // headerTitle.setAttribute('class', 'header__title');
  // headerTitle.textContent = screenTitle;

  headerTitle = screenTitle;

  // Main > Section Main Content Container > card
  cardMainContent = document.createElement('div');
  cardMainContent.setAttribute('class', 'main-content__card');
  cardMainContent.setAttribute('id', 'main-content__card');

  // Screen / Main Section / Section Main Content Container
  const sectionMainContentContainer = document.createElement('section');
  sectionMainContentContainer.setAttribute('class', 'main-content__container');

  // Screen / Main / ACTION Container
  sectionActionContentContainer = document.createElement('section');
  sectionActionContentContainer.setAttribute(
    'class',
    'action-content__container'
  );
  sectionActionContentContainer.setAttribute('id', 'action-content');

  // Screen / HEADER
  header = document.createElement('header');
  header.setAttribute('class', 'header');

  // Screen / MAIN
  const main = document.createElement('main');
  main.setAttribute('class', 'main');

  // Screen
  const screen = document.createElement('div');
  screen.setAttribute('class', 'screen');

  // Append Buttons to Header
  header.appendChild(btnMenu);
  header.appendChild(headerTitle);

  // Append Main Content Card to the Section Main Content
  sectionMainContentContainer.appendChild(cardMainContent);

  // Append the Main Content & Action container to the main
  main.appendChild(sectionMainContentContainer);
  main.appendChild(sectionActionContentContainer);

  // Append header and main to the screen (Already in HTML code);
  screen.appendChild(header);
  screen.appendChild(main);

  // Append screen to the body
  body.insertBefore(screen, body.firstChild);
}
