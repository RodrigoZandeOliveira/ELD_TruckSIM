// import { welcomeScreen } from '../../screens/welcome/welcomeScreen.js';
import { homeScreen } from '../../screens/home/homeScreen.js'; // To preview working page

export function onloadFirstScreen() {
  window.addEventListener('load', function (event) {
    // welcomeScreen();
    homeScreen(); // To preview working page
  });
}
