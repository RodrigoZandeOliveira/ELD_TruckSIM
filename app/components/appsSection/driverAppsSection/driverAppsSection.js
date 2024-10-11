//
//
// DRIVER APPS SECTION
//

import { btnApp } from '../../buttons/btnApp/btnApp.js';

// APPS
let btnAppMyVehicle = btnApp(
  'icon--fueling',
  'my-vehicle',
  'My Vehicle',
  'Kenworth T680'
);
let btnAppDeliveries = btnApp(
  'icon--fueling',
  'deliveries',
  'Deliveries',
  '2 completed'
);

export let sectionBtnAppsTitle;

export function driverAppsSection(title) {
  sectionBtnAppsTitle = title;

  const sectionTitle = document.createElement('h3');
  sectionTitle.setAttribute('class', 'section-apps__title');
  sectionTitle.textContent = sectionBtnAppsTitle;

  const sectionBtnsContainer = document.createElement('div');
  sectionBtnsContainer.setAttribute('class', 'section-apps__btns-container');

  const sectionBtnAppsComponent = document.createElement('div');
  sectionBtnAppsComponent.setAttribute('class', 'section-apps__wrap');

  // APPEND CHILD
  sectionBtnsContainer.appendChild(btnAppMyVehicle);
  sectionBtnsContainer.appendChild(btnAppDeliveries);

  sectionBtnAppsComponent.appendChild(sectionTitle);
  sectionBtnAppsComponent.appendChild(sectionBtnsContainer);

  return sectionBtnAppsComponent;
}
