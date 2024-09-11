const btnInspectionFinish = document.querySelector(
  '#btn__inspection-screen__finish'
);
const sectionBillOfLading01 = document.querySelector(
  '#section__bill-of-lading__01'
);

btnInspectionFinish.addEventListener('click', function (event) {
  event.preventDefault();

  // Show the loading screen
  sectionShipperInspectionList.classList.add('hidden');
  sectionLoadingScreen.classList.remove('hidden');

  // Update the loading message
  loadingMessage.innerHTML = 'Updating';

  // Hide the loading screen after 4 seconds (4000 milliseconds)
  setTimeout(function () {
    sectionLoadingScreen.classList.add('hidden');
    sectionBillOfLading01.classList.remove('hidden');
    sectionTimeline.classList.remove('hidden');
  }, 1000);
});

// ---------------------------
const btnInspectionListItemTractor = document.querySelector(
  '#btn__inspection__list-item__tractor'
);
const btnInspectionListItemTrailer = document.querySelector(
  '#btn__inspection__list-item__trailer'
);

const sectionInspectionTractor = document.querySelector(
  '#section__shipper__inspection__tractor'
);

const sectionInspectionTrailer = document.querySelector(
  '#section__shipper__inspection__trailer'
);

// ---------------------------

btnInspectionListItemTractor.addEventListener('click', function (event) {
  event.preventDefault();

  sectionShipperInspectionList.classList.add('hidden');
  sectionInspectionTractor.classList.remove('hidden');
});

btnInspectionListItemTrailer.addEventListener('click', function (event) {
  event.preventDefault();

  sectionShipperInspectionList.classList.add('hidden');
  sectionInspectionTrailer.classList.remove('hidden');
});
