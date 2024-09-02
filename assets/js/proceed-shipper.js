const btnShipperCancel = document.querySelector('#btn__shipper-cancel');
const btnShipperArrived = document.querySelector('#btn__shipper-arrived');
const sectionShipperCheckIn = document.querySelector(
  '#section__shipper__checkin'
);

// btn : CANCEL
btnShipperCancel.addEventListener('click', function (event) {
  event.preventDefault();

  sectionSelectJob.classList.remove('hidden');
  sectionProceedShipper.classList.add('hidden');
});

// btn : ARRIVED
btnShipperArrived.addEventListener('click', function (event) {
  event.preventDefault();

  // Hide : Proceed to Shipper screen & Timeline
  sectionProceedShipper.classList.add('hidden');
  sectionTimeline.classList.add('hidden');

  // Show Loading screen  & Update the loading message
  sectionLoadingScreen.classList.remove('hidden');
  loadingMessage.innerHTML = 'Updating';

  setTimeout(function () {
    sectionLoadingScreen.classList.add('hidden');
    sectionShipperCheckIn.classList.remove('hidden');
  }, 2000);
});
