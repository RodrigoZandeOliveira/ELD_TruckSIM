const btnShipperLocationNext = document.querySelector(
  '#btn__shipper-location__next'
);
const btnShipperLocationBack = document.querySelector(
  '#btn__shipper-location__back'
);

const sectionShipperTerms = document.querySelector(
  '#section__shipper__company-terms'
);

// btn : NEXT
btnShipperLocationNext.addEventListener('click', function (event) {
  event.preventDefault();

  sectionShipperCompanyLocation.classList.add('hidden');
  sectionShipperTerms.classList.remove('hidden');
});

// btn : BACK
btnShipperLocationBack.addEventListener('click', function (event) {
  event.preventDefault();

  sectionShipperCompanyLocation.classList.add('hidden');
  sectionShipperCompanyName.classList.remove('hidden');
});
