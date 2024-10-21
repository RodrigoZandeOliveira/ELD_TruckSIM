import {
  templateDefault,
  mainContentCard,
  mainActionCard,
} from '../../components/screenTemplate/templateDefault/templateDefault.js';

import { btnContent } from '../../components/buttons/btnContent/btnContent.js';
import { btnContentSmall } from '../../components/buttons/btnContentSmall/btnContentSmall.js';
import { timeline } from '../../components/timeline/timeline.js';
import { appsSlider } from '../../components/appsSlider/appsSlider.js';
import { deliveryStatus } from '../../components/deliveryStatus/deliveryStatus.js';

export function homeScreen() {
  templateDefault('home-screen');

  // MAIN CONTENT CONTAINER
  // Main card
  const mainHomeContainer = document.createElement('div');
  mainHomeContainer.setAttribute('class', 'main-home__container');

  // Apps container
  const mainHomeAppsContainer = document.createElement('div');
  mainHomeAppsContainer.setAttribute('class', 'main-home__apps__container');

  // Apps title container
  const mainHomeAppsTitleContainer = document.createElement('div');
  mainHomeAppsTitleContainer.setAttribute(
    'class',
    'main-home__apps-title__container'
  );

  // Apps Title
  const mainHomeAppsTitle = document.createElement('h2');
  mainHomeAppsTitle.setAttribute('class', 'main-home__apps-title');
  mainHomeAppsTitle.textContent = 'Apps';

  // DELIVERY STATUS
  const deliveryStatusComponent = deliveryStatus();

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
  mainHomeAppsTitleContainer.appendChild(mainHomeAppsTitle);

  mainHomeBtnAppsContainer.appendChild(btnHomeRoadApps);
  mainHomeBtnAppsContainer.appendChild(btnHomeDriverApps);

  mainHomeAppsCarrouselContainer.appendChild(mainHomeAppsCarrousel);
  mainHomeAppsCarrouselContainer.appendChild(mainHomeBtnAppsContainer);

  mainHomeAppsCarrousel.appendChild(appsSliderComponent);

  mainHomeAppsContainer.appendChild(mainHomeAppsTitleContainer);
  mainHomeAppsContainer.appendChild(mainHomeAppsCarrouselContainer);

  mainHomeContainer.appendChild(deliveryStatusComponent);
  mainHomeContainer.appendChild(mainHomeAppsContainer);

  actionContainer.appendChild(timelineComponent);
  actionContainer.appendChild(btnCancelJob);
  actionContainer.appendChild(btnDeliveryNextStep);

  mainContentCard.appendChild(mainHomeContainer);
  mainActionCard.appendChild(actionContainer);
}
