// ---------------------------
// LIBRARY TRACTOR SCREEN
const btnInspectionTractorCancel = document.querySelector(
  '#btn__inspection-tractor__cancel'
);
const btnInspectionTractorConfirm = document.querySelector(
  '#btn__inspection-tractor__confirm'
);
// ---------------------------
btnInspectionTractorCancel.addEventListener('click', function (event) {
  event.preventDefault();

  sectionInspectionTractor.classList.add('hidden');
  sectionShipperInspectionList.classList.remove('hidden');
});
