//
//
// BUTTON APP
//

export let btnApp = document.querySelector(btnAppID);

export let btnAppID;
export let btnAppIconClass;

export function btnApp(iconClass, id) {
  btnAppID = `btn-app__${id}`;
  btnAppIconClass = iconClass;

  const btnAppIcon = document.createElement('span');
  btnAppIcon.createAttribute('class', 'btn btn-app__icon ${btnAppIconClass}');
  btnAppIcon.createAttribute('id', id);

  const btnApp = document.createElement('button');
  btnApp.createAttribute('class', 'btn btn-app');
  btnApp.createAttribute('id', btnAppID);

  btnApp.appendChild(btnAppIcon);
}
