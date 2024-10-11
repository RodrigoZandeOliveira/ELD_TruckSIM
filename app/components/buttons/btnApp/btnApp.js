//
//
// BUTTON APP
//

export let btnAppID;
export let btnAppIconClass;

export function btnApp(iconClass, id, title, subtitle) {
  btnAppID = `btn-app__${id}`;
  btnAppIconClass = iconClass;

  // BTN ICON
  const btnAppIcon = document.createElement('span');
  btnAppIcon.setAttribute('class', `btn btn-app__icon ${btnAppIconClass}`);
  btnAppIcon.setAttribute('id', id);

  // BTN TITLE & SUBTITLE CONTAINER
  const btnAppTextContainer = document.createElement('div');
  btnAppTextContainer.setAttribute('class', 'btn-app__txt-container');

  // BTN TITLE
  const btnAppTitle = document.createElement('h3');
  btnAppTitle.setAttribute('class', 'btn-app__title');
  btnAppTitle.textContent = title;

  // BTN SUBTITLE
  const btnAppSubtitle = document.createElement('h4');
  btnAppSubtitle.setAttribute('class', 'btn-app__subtitle');
  btnAppSubtitle.textContent = subtitle;

  // BTN
  const btnApp = document.createElement('button');
  btnApp.setAttribute('class', 'btn btn-app');
  btnApp.setAttribute('id', `btn-app__${btnAppID}`);

  // APPEND CHILD
  btnAppTextContainer.appendChild(btnAppTitle);
  btnAppTextContainer.appendChild(btnAppSubtitle);

  btnApp.appendChild(btnAppIcon);
  btnApp.appendChild(btnAppTextContainer);

  return btnApp;
}
