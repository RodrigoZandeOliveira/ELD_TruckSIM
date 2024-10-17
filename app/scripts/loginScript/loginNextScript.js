// BTN : NEXT to Home Screen

import { homeScreen } from '../../screens/home/homeScreen.js';

export function btnLoginNextScript() {
  const currentScreen = document.querySelector('#screen__login');
  const btnLoginNext = document.querySelector('#btn-content__login--next');

  btnLoginNext.addEventListener('click', function (event) {
    event.preventDefault();

    body.removeChild(currentScreen);
    homeScreen();
  });
}
