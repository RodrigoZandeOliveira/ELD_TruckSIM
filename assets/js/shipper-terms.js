const btnShipperTermsConfirm = document.querySelector(
  '#btn__shipper-terms__confirm'
);

const sectionShipperGoToCargo = document.querySelector(
  '#section__shipper__go-to-cargo'
);

btnShipperTermsConfirm.addEventListener('click', function (event) {
  event.preventDefault();

  sectionShipperTerms.classList.add('hidden');

  // Show Loading screen  & Update the loading message
  sectionLoadingScreen.classList.remove('hidden');
  loadingMessage.innerHTML = 'Loading';

  setTimeout(function () {
    sectionLoadingScreen.classList.add('hidden');
    sectionTimeline.classList.remove('hidden');
    sectionShipperGoToCargo.classList.remove('hidden');
  }, 2000);
});
