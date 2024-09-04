const btnShipperInspectionReminderNext = document.querySelector(
  '#btn__inspection-reminder__next'
);
// const sectionShipperInspectionList = document.querySelector(
//   '#section__shipper__inspection__list'
// );

btnShipperInspectionReminderNext.addEventListener('click', function (event) {
  event.preventDefault();

  sectionShipperInspectionReminder.classList.add('hidden');
  sectionShipperInspectionList.classList.remove('hidden');
});
