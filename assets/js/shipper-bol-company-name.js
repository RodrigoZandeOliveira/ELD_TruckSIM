const btnShipperNameNext = document.querySelector('#btn__shipper-name__next');
const btnShipperNameBack = document.querySelector('#btn__shipper-name__back');

const sectionShipperCompanyLocation = document.querySelector(
  '#section__shipper__company-location'
);

btnShipperNameNext.addEventListener('click', function (event) {
  event.preventDefault();

  sectionShipperCompanyName.classList.add('hidden');
  sectionShipperCompanyLocation.classList.remove('hidden');
});

btnShipperNameBack.addEventListener('click', function (event) {
  event.preventDefault();

  sectionShipperCompanyName.classList.add('hidden');
  sectionShipperCheckIn.classList.remove('hidden');
});
