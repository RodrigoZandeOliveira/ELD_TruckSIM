import { welcomeScreen } from '../../screens/welcome/welcomeScreen.js';
import { btnGetStarted } from '../getStartedScript/getStartedScript.js';

export function onloadFirstScreen() {
  window.addEventListener('load', function (event) {
    welcomeScreen();
    btnGetStarted();
  });
}
