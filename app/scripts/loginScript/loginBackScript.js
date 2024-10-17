// BTN : BACK to Welcome Screen
import { welcomeScreen } from '../../screens/welcome/welcomeScreen.js';
import { body } from '../main.js';

export function btnLoginBackScript() {
  const currentScreen = document.querySelector('#screen__login');
  const btnLoginBack = document.querySelector('#btn-content__login--back');

  if (btnLoginBack) {
    btnLoginBack.addEventListener('click', function (event) {
      event.preventDefault();

      if (currentScreen) {
        body.removeChild(currentScreen);
        welcomeScreen();
      }
    });
  } else {
    console.error('btnLoginBack element not found');
  }
}
