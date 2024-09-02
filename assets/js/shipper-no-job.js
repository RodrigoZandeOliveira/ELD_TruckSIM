const btnNewJobCancel = document.querySelector('#btn__newjob-cancel');
const btnNewJobSelected = document.querySelector('#btn__newjob-selected');

// btn : CANCEL
btnNewJobCancel.addEventListener('click', function (event) {
  event.preventDefault();
  sectionSelectNewJob.classList.add('hidden');
  sectionShipperCheckIn.classList.remove('hidden');
});

// btn : NEW JOB SELECTED
btnNewJobSelected.addEventListener('click', function (event) {
  event.preventDefault();

  sectionSelectNewJob.classList.add('hidden');

  // Show Loading screen  & Update the loading message
  sectionLoadingScreen.classList.remove('hidden');
  loadingMessage.innerHTML = 'Updating';

  setTimeout(function () {
    sectionLoadingScreen.classList.add('hidden');
    sectionProceedShipper.classList.remove('hidden');
    sectionTimeline.classList.remove('hidden');
  }, 2000);
});
