import { selectJobScreen } from '../../screens/selectJob/selectJobScreen.js';

export function btnNewJobScript() {
  const currentScreen = document.querySelector('#screen__home-screen');
  const btnNewJob = document.querySelector('#btn-content__home--new-job');

  btnNewJob.addEventListener('click', function (event) {
    event.preventDefault();

    body.removeChild(currentScreen);
    selectJobScreen();
  });
}
