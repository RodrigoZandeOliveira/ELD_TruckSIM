import { welcomeScreen } from '../../screens/welcome/welcomeScreen.js';

export function onloadFirstScreen() {
  window.addEventListener('load', function (event) {
    welcomeScreen();
  });
}
