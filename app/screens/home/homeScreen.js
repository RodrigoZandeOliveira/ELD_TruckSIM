import {
  templateDefault,
  cardMainContent,
  sectionActionContentContainer,
} from '../../components/screenTemplate/templateDefault/templateDefault.js';

import { btnSteps } from '../../components/buttons/btnSteps/btnSteps.js';
const btnStep = btnSteps('btn-steps__shipper', 'Shipper-check-in');

import { roadAppsSection } from '../../components/appsSection/roadAppsSection/roadAppsSection.js';
const roadTasks = roadAppsSection('Road tasks');

import { driverAppsSection } from '../../components/appsSection/driverAppsSection/driverAppsSection.js';
const driverTasks = driverAppsSection('Driver tasks');

import { timeline } from '../../components/timeline/timeline.js';
const timelineDefault = timeline();

export function screenHome() {
  templateDefault();

  const driverCurrentStatus = document.createElement('p');
  driverCurrentStatus.setAttribute('class', 'screen__title');
  driverCurrentStatus.textContent = 'Delivery in Progress';

  const mainContentBtnStepContainer = document.createElement('div');
  mainContentBtnStepContainer.setAttribute('class', 'btn-step__container');

  const mainContentAppsContainer = document.createElement('div');
  mainContentAppsContainer.setAttribute(
    'class',
    'screen__home__apps-container'
  );

  const homeScreenComponent = document.createElement('div');
  homeScreenComponent.setAttribute('class', 'screen__home__container');

  // APPEND CHILD
  // content container
  mainContentBtnStepContainer.appendChild(driverCurrentStatus);
  mainContentBtnStepContainer.appendChild(btnStep);

  mainContentAppsContainer.appendChild(roadTasks);
  mainContentAppsContainer.appendChild(driverTasks);

  homeScreenComponent.appendChild(mainContentBtnStepContainer);
  homeScreenComponent.appendChild(mainContentAppsContainer);

  cardMainContent.appendChild(homeScreenComponent);

  // action container
  sectionActionContentContainer.appendChild(timelineDefault);

  return { cardMainContent, sectionActionContentContainer };
}
