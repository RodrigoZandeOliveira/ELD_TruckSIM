//
//
// Version of the APP
//

// Save the version of the app
export let version;

export function appVersion() {
  version = '0.02.0';

  const txtV = document.createElement('p');
  txtV.setAttribute('class', 'txt__app-v');
  txtV.textContent = 'version ';

  const txtAppVersion = document.createElement('span');
  txtAppVersion.setAttribute('class', 'txt__app-v txt__app-version');
  txtAppVersion.textContent = version;

  // Append Child
  txtV.appendChild(txtAppVersion);

  return txtV;
}
