//
//
// Name of the APP
//

export function appName() {
  const appNameContainer = document.createElement('div');
  appNameContainer.setAttribute('class', 'header__app-name__container');

  let appNameText = document.createElement('h1');
  appNameText.setAttribute('class', 'txt__app-name');
  appNameText.innerHTML = `
  <span class="txt__app-name__accent-color">SIM</span>Truck Logger
  `;

  appNameContainer.appendChild(appNameText);

  return appNameContainer;
}
