const btnNoJobAvailable = document.querySelector('#btn__shipper-no-job');
const btnYesJobAvailable = document.querySelector('#btn__shipper-yes-job');

const sectionSelectNewJob = document.querySelector('#section__shipper__no-job');
const sectionShipperCompanyName = document.querySelector(
  '#section__shipper__company-name'
);

btnNoJobAvailable.addEventListener('click', function (event) {
  event.preventDefault();

  sectionShipperCheckIn.classList.add('hidden');
  sectionSelectNewJob.classList.remove('hidden');
  sectionTimeline.classList.add('hidden');
});

btnYesJobAvailable.addEventListener('click', function (event) {
  event.preventDefault();

  sectionShipperCheckIn.classList.add('hidden');
  sectionShipperCompanyName.classList.remove('hidden');
  sectionTimeline.classList.add('hidden');
});
