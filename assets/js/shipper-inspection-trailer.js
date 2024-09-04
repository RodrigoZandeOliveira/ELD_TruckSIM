// ---------------------------
// LIBRARY TRAILER SCREEN
const btnInspectionTrailerCancel = document.querySelector(
  '#btn__inspection-trailer__cancel'
);
const btnInspectionTrailerConfirm = document.querySelector(
  '#btn__inspection-trailer__confirm'
);
// ---------------------------

btnInspectionTrailerCancel.addEventListener('click', function (event) {
  event.preventDefault();

  sectionInspectionTrailer.classList.add('hidden');
  sectionShipperInspectionList.classList.remove('hidden');
});
