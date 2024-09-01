const sectionSignIn = document.querySelector('#section__sign-in');
const btnSignIn = document.querySelector('#btn__form__sign-in');

const sectionLoadingScreen = document.querySelector('#section__loading-screen');
const loadingMessage = document.querySelector('#loading__message');

const sectionSelectJob = document.querySelector('#section__select-job');

// Sign In
btnSignIn.addEventListener('click', function (event) {
  event.preventDefault();

  // Show the loading screen
  sectionSignIn.classList.add('hidden');
  sectionLoadingScreen.classList.remove('hidden');

  // Update the loading message
  loadingMessage.innerHTML = 'Initializing';

  // Hide the loading screen after 4 seconds (4000 milliseconds)
  setTimeout(function () {
    sectionLoadingScreen.classList.add('hidden');
    sectionSelectJob.classList.remove('hidden');
  }, 5000);
});
