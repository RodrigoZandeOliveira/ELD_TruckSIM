import { welcomeScreen } from '../../screens/welcome/welcomeScreen.js';
import { homeScreen } from '../../screens/home/homeScreen.js';
import { selectJobScreen } from '../../screens/selectJob/selectJobScreen.js'; // To preview working page

export function onloadFirstScreen() {
  window.addEventListener('load', function (event) {
    welcomeScreen();
    // homeScreen();
    // selectJobScreen(); // To preview working page
  });
}
