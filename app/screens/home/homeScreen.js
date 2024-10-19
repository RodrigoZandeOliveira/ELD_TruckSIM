import {
  templateDefault,
  mainContentCard,
  mainActionCard,
} from '../../components/screenTemplate/templateDefault/templateDefault.js';

import { btnContent } from '../../components/buttons/btnContent/btnContent.js';
import { btnContentSmall } from '../../components/buttons/btnContentSmall/btnContentSmall.js';
import { timeline } from '../../components/timeline/timeline.js';
import { appsSlider } from '../../components/appsSlider/appsSlider.js';

export function homeScreen() {
  templateDefault('home-screen');

  // MAIN CONTENT CONTAINER
  // Main card
  const mainHomeContainer = document.createElement('div');
  mainHomeContainer.setAttribute('class', 'main-home__container');

  // Information container
  const mainHomeInfoContainer = document.createElement('div');
  mainHomeInfoContainer.setAttribute('class', 'main-home__info__container');

  // Apps container
  const mainHomeAppsContainer = document.createElement('div');
  mainHomeAppsContainer.setAttribute('class', 'main-home__apps__container');

  // Screen title container
  const mainHomeTitleContainer = document.createElement('div');
  mainHomeTitleContainer.setAttribute('class', 'main-home__title__container');

  // Apps title container
  const mainHomeAppsTitleContainer = document.createElement('div');
  mainHomeAppsTitleContainer.setAttribute(
    'class',
    'main-home__apps-title__container'
  );

  // Screen Title
  const mainHomeTitle = document.createElement('h2');
  mainHomeTitle.setAttribute('class', 'main-home__title');
  mainHomeTitle.textContent = 'Delivery in progress'; // Has to be adaptable

  // Apps Title
  const mainHomeAppsTitle = document.createElement('h2');
  mainHomeAppsTitle.setAttribute('class', 'main-home__apps-title');
  mainHomeAppsTitle.textContent = 'Apps';

  // Info Text Container
  const mainHomeInfoTextContainer = document.createElement('div');
  mainHomeInfoTextContainer.setAttribute(
    'class',
    'main-home__info-text__container'
  );

  // TEXT : From City A to City B
  const mainHomeCities = document.createElement('h3');
  mainHomeCities.setAttribute('class', 'main-home__cities-names');
  mainHomeCities.innerHTML = `DENVER <span class:"main-home__cities-names__normal-txt">to </span>SEATTLE`;
  // mainHomeCities.innerHTML = `${fromCity} <span class:"main-home__cities-names__normal-txt">to </span> ${toCity}`;

  // TEXT : Load "Content" and "Total Weight"
  const mainHomeLoadContent = document.createElement('p');
  mainHomeLoadContent.setAttribute('class', 'main-home__load-content');
  mainHomeLoadContent.textContent =
    'Transporting food with a total weight of 60.000lbs';

  // // BTN : Bill of Lading
  // const btnHomeBillOfLading = btnContentSmall(
  //   'Bill of lading',
  //   'home--bill-of-lading',
  //   'btn--secondary'
  // );

  //

  // APPS CARROUSEL CONTAINER
  const mainHomeAppsCarrouselContainer = document.createElement('div');
  mainHomeAppsCarrouselContainer.setAttribute(
    'class',
    'main-home__apps-carrousel__container'
  );

  // APPS CARROUSEL
  const mainHomeAppsCarrousel = document.createElement('div');
  mainHomeAppsCarrousel.setAttribute('class', 'main-home__apps-carrousel');

  const appsSliderComponent = appsSlider();

  // APPS BTN CATEGORY CONTAINER
  const mainHomeBtnAppsContainer = document.createElement('div');
  mainHomeBtnAppsContainer.setAttribute(
    'class',
    'main-home__btns-apps__container'
  );

  // BTN : Road apps
  const btnHomeRoadApps = btnContentSmall(
    'Road',
    'home--road',
    'btn--secondary--current'
  );

  // BTN : Driver apps
  const btnHomeDriverApps = btnContentSmall(
    'Driver',
    'home--driver',
    'btn--secondary'
  );

  //
  // ACTION CONTAINER
  // Action container
  const actionContainer = document.createElement('div');
  actionContainer.setAttribute('class', 'home__action-container');

  const btnsActionContainer = document.createElement('div');
  btnsActionContainer.setAttribute('class', 'action__btns__container');

  // BTN : Cancel Job
  const btnCancelJob = btnContent(
    'Cancel Job',
    'home--cancel-job',
    'btn--secondary'
  );

  // BTN : Cancel Job
  const btnDeliveryNextStep = btnContent(
    'Receiver<br>Check-in',
    'home--receiver-check-in',
    'btn--primary'
  );

  // TIMELINE
  const timelineComponent = timeline();

  // APPEND CHILD
  mainHomeTitleContainer.appendChild(mainHomeTitle);
  mainHomeAppsTitleContainer.appendChild(mainHomeAppsTitle);

  mainHomeInfoTextContainer.appendChild(mainHomeCities);
  mainHomeInfoTextContainer.appendChild(mainHomeLoadContent);
  // mainHomeInfoTextContainer.appendChild(btnHomeBillOfLading);

  mainHomeInfoContainer.appendChild(mainHomeTitleContainer);
  mainHomeInfoContainer.appendChild(mainHomeInfoTextContainer);

  mainHomeBtnAppsContainer.appendChild(btnHomeRoadApps);
  mainHomeBtnAppsContainer.appendChild(btnHomeDriverApps);

  mainHomeAppsCarrouselContainer.appendChild(mainHomeAppsCarrousel);
  mainHomeAppsCarrouselContainer.appendChild(mainHomeBtnAppsContainer);

  mainHomeAppsCarrousel.appendChild(appsSliderComponent);

  mainHomeAppsContainer.appendChild(mainHomeAppsTitleContainer);
  mainHomeAppsContainer.appendChild(mainHomeAppsCarrouselContainer);

  mainHomeContainer.appendChild(mainHomeInfoContainer);
  mainHomeContainer.appendChild(mainHomeAppsContainer);

  // btnsActionContainer.appendChild(btnCancelJob);
  // btnsActionContainer.appendChild(btnDeliveryNextStep);

  actionContainer.appendChild(timelineComponent);
  actionContainer.appendChild(btnCancelJob);
  actionContainer.appendChild(btnDeliveryNextStep);
  // actionContainer.appendChild(btnsActionContainer);

  mainContentCard.appendChild(mainHomeContainer);
  mainActionCard.appendChild(actionContainer);
}
