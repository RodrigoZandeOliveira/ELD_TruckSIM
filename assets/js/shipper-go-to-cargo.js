const btnShipperBeginInspection = document.querySelector(
  '#btn__begin-inspection'
);

const sectionShipperInspectionReminder = document.querySelector(
  '#section__shipper__inspection__reminder'
);

btnShipperBeginInspection.addEventListener('click', function (event) {
  event.preventDefault();

  sectionTimeline.classList.add('hidden');
  sectionShipperGoToCargo.classList.add('hidden');
  sectionShipperInspectionReminder.classList.remove('hidden');
});
