import { homeScreen } from '../../screens/home/homeScreen.js';

export function btnNewJobBackScript() {
  const currentScreen = document.querySelector('#screen__new-job-screen');
  const btnNewJobBack = document.querySelector('#btn-content__new-job--back');

  btnNewJobBack.addEventListener('click', function (event) {
    event.preventDefault();

    body.removeChild(currentScreen);
    homeScreen();
  });
}
