import { screenLogin } from '../../screens/login/loginScreen.js';

export function onloadFirstScreen() {
  window.addEventListener('load', function (event) {
    screenLogin();
  });
}
