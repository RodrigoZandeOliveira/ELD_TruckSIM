import { loginScreen } from '../../screens/login/loginScreen.js';

export function btnGetStarted() {
  const screenToRemove = document.querySelector('#screen__welcome-screen');
  const btnWelcomeGetStarted = document.querySelector(
    '#btn-content__welcome__get-started'
  );

  btnWelcomeGetStarted.addEventListener('click', function (event) {
    event.preventDefault();

    body.removeChild(screenToRemove);
    loginScreen();
  });
}
