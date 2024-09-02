const btnShipperTermsConfirm = document.querySelector(
  '#btn__shipper-terms__confirm'
);

btnShipperTermsConfirm.addEventListener('click', function (event) {
  event.preventDefault();

  sectionShipperTerms.classList.add('hidden');

  // Show Loading screen  & Update the loading message
  sectionLoadingScreen.classList.remove('hidden');
  loadingMessage.innerHTML = 'Loading';

  setTimeout(function () {
    sectionLoadingScreen.classList.add('hidden');
    // sectionShipperCheckIn.classList.remove('hidden');
  }, 2000);
});
