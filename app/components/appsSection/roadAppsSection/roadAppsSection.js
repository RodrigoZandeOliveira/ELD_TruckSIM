//
//
// ROAD APPS SECTION
//

import { btnApp } from '../../buttons/btnApp/btnApp.js';

// APPS
let btnAppFueling = btnApp('icon--fueling', 'fueling', 'Fueling', '$ 1.349');
let btnAppWeightStation = btnApp(
  'icon--fueling',
  'weight-station',
  'Weight Station',
  '2 weight station'
);
let btnAppRestBreak = btnApp(
  'icon--fueling',
  'rest-break',
  'Rest Break',
  '1 rest break'
);
let btnAppCertifiedScale = btnApp(
  'icon--fueling',
  'certified-scale',
  'Certified Scale',
  'nda'
);

export let sectionBtnAppsTitle;

export function roadAppsSection(title) {
  sectionBtnAppsTitle = title;

  const sectionTitle = document.createElement('h3');
  sectionTitle.setAttribute('class', 'section-apps__title');
  sectionTitle.textContent = sectionBtnAppsTitle;

  const sectionBtnsContainer = document.createElement('div');
  sectionBtnsContainer.setAttribute('class', 'section-apps__btns-container');

  const sectionBtnAppsComponent = document.createElement('div');
  sectionBtnAppsComponent.setAttribute('class', 'section-apps__wrap');

  // APPEND CHILD
  sectionBtnsContainer.appendChild(btnAppFueling);
  sectionBtnsContainer.appendChild(btnAppWeightStation);
  sectionBtnsContainer.appendChild(btnAppRestBreak);
  sectionBtnsContainer.appendChild(btnAppCertifiedScale);

  sectionBtnAppsComponent.appendChild(sectionTitle);
  sectionBtnAppsComponent.appendChild(sectionBtnsContainer);

  return sectionBtnAppsComponent;
}
