// DELIVERY INFORMATION | PAGE 01 : "Add Delivery Information"
const btnAddDeliveryInformation = document.querySelector(
  '#btn__add-delivery-information'
);
const sectionBolCarrierName = document.querySelector(
  '#section__bol__carrier-name'
);

btnAddDeliveryInformation.addEventListener('click', function (event) {
  event.preventDefault();

  // Current Page
  sectionBillOfLading01.classList.add('hidden');
  sectionTimeline.classList.add('hidden');

  // Next Page
  sectionBolCarrierName.classList.remove('hidden');
});

// Section : Carrier Information -----------------------------------------
// DELIVERY INFORMATION | PAGE 02 : "Add/Confirm Carrier Name"
const btnBolCarrierNameNext = document.querySelector(
  '#btn__bol__carrier-name__next'
);
const btnBolCarrierNameBack = document.querySelector(
  '#btn__bol__carrier-name__back'
);
const sectionBolDriverId = document.querySelector('#section__bol__driver-id');

// next
btnBolCarrierNameNext.addEventListener('click', function (event) {
  event.preventDefault();

  // Current Page
  sectionBolCarrierName.classList.add('hidden');

  // Next Page
  sectionBolDriverId.classList.remove('hidden');
});

// back
btnBolCarrierNameBack.addEventListener('click', function (event) {
  event.preventDefault();

  // Current Page
  sectionBolCarrierName.classList.add('hidden');

  // Previous Page
  sectionBillOfLading01.classList.remove('hidden');
  sectionTimeline.classList.remove('hidden');
});

// DELIVERY INFORMATION | PAGE 03 : "Add/Confirm Driver ID"
const btnBolDriverIdNext = document.querySelector('#btn__bol__driver-id__next');
const btnBolDriverIdBack = document.querySelector('#btn__bol__driver-id__back');
const sectionBolTruckModel = document.querySelector(
  '#section__bol__truck-model'
);

// next
btnBolDriverIdNext.addEventListener('click', function (event) {
  event.preventDefault();

  // Current Page
  sectionBolDriverId.classList.add('hidden');

  // Next Page
  sectionBolTruckModel.classList.remove('hidden');
});

// back
btnBolDriverIdBack.addEventListener('click', function (event) {
  event.preventDefault();

  // Current Page
  sectionBolDriverId.classList.add('hidden');

  // Previous Page
  sectionBolCarrierName.classList.remove('hidden');
});

// DELIVERY INFORMATION | PAGE 04 : "Truck Brand & Model"
const btnBolTruckModelNext = document.querySelector(
  '#btn__bol__truck-model__next'
);
const btnBolTruckModelBack = document.querySelector(
  '#btn__bol__truck-model__back'
);
const sectionBolTruckMilageShipper = document.querySelector(
  '#section__bol__truck-milage-shipper'
);

// next
btnBolTruckModelNext.addEventListener('click', function (event) {
  event.preventDefault();

  // Current Page
  sectionBolTruckModel.classList.add('hidden');

  // Next Page
  sectionBolTruckMilageShipper.classList.remove('hidden');
});

// back
btnBolTruckModelBack.addEventListener('click', function (event) {
  event.preventDefault();

  // Current Page
  sectionBolTruckModel.classList.add('hidden');

  // Previous Page
  sectionBolDriverId.classList.remove('hidden');
});

// DELIVERY INFORMATION | PAGE 05 : "Truck Milage at Shipper"
const btnBolTruckMilageShipperNext = document.querySelector(
  '#btn__bol__truck-milage-shipper__next'
);
const btnBolTruckMilageShipperBack = document.querySelector(
  '#btn__bol__truck-milage-shipper__back'
);
const sectionBolTrailerOwner = document.querySelector(
  '#section__bol__trailer-owner'
);

// next
btnBolTruckMilageShipperNext.addEventListener('click', function (event) {
  event.preventDefault();

  // Current Page
  sectionBolTruckMilageShipper.classList.add('hidden');

  // Next Page
  sectionBolTrailerOwner.classList.remove('hidden');
});

// back
btnBolTruckMilageShipperBack.addEventListener('click', function (event) {
  event.preventDefault();

  // Current Page
  sectionBolTruckMilageShipper.classList.add('hidden');

  // Previous Page
  sectionBolTruckModel.classList.remove('hidden');
});

// DELIVERY INFORMATION | PAGE 06 : "Trailer Ownership"
const btnBolTrailerOwnerNext = document.querySelector(
  '#btn__bol__trailer-owner__next'
);
const btnBolTrailerOwnerBack = document.querySelector(
  '#btn__bol__trailer-owner__back'
);
const sectionBolTrailerPlate = document.querySelector(
  '#section__bol__trailer-plate'
);

// next
btnBolTrailerOwnerNext.addEventListener('click', function (event) {
  event.preventDefault();

  // Current Page
  sectionBolTrailerOwner.classList.add('hidden');

  // Next Page
  sectionBolTrailerPlate.classList.remove('hidden');
});

// back
btnBolTrailerOwnerBack.addEventListener('click', function (event) {
  event.preventDefault();

  // Current Page
  sectionBolTrailerOwner.classList.add('hidden');

  // Previous Page
  sectionBolTruckMilageShipper.classList.remove('hidden');
});

// DELIVERY INFORMATION | PAGE 07 : "Trailer Plate Number"
const btnBolTrailerPlateNext = document.querySelector(
  '#btn__bol__trailer-plate__next'
);
const btnBolTrailerPlateBack = document.querySelector(
  '#btn__bol__trailer-plate__back'
);
const sectionBolCargoLoadContent = document.querySelector(
  '#section__bol__cargo-load'
);

// next
btnBolTrailerPlateNext.addEventListener('click', function (event) {
  event.preventDefault();

  // Current Page
  sectionBolTrailerPlate.classList.add('hidden');

  // Next Page
  sectionBolCargoLoadContent.classList.remove('hidden');
});

// back
btnBolTrailerPlateBack.addEventListener('click', function (event) {
  event.preventDefault();

  // Current Page
  sectionBolTrailerPlate.classList.add('hidden');

  // Previous Page
  sectionBolTrailerOwner.classList.remove('hidden');
});

// DELIVERY INFORMATION | PAGE 08 : "Cargo Load Content"
const btnBolCargoLoadContentNext = document.querySelector(
  '#btn__bol__cargo-load__next'
);
const btnBolCargoLoadContentBack = document.querySelector(
  '#btn__bol__cargo-load__back'
);
const sectionBolCargoLoadWeight = document.querySelector(
  '#section__bol__cargo-weight'
);

// next
btnBolCargoLoadContentNext.addEventListener('click', function (event) {
  event.preventDefault();

  // Current Page
  sectionBolCargoLoadContent.classList.add('hidden');

  // Next Page
  sectionBolCargoLoadWeight.classList.remove('hidden');
});

// back
btnBolCargoLoadContentBack.addEventListener('click', function (event) {
  event.preventDefault();

  // Current Page
  sectionBolCargoLoadContent.classList.add('hidden');

  // Previous Page
  sectionBolTrailerPlate.classList.remove('hidden');
});

// DELIVERY INFORMATION | PAGE 09 : "Cargo Load Weight"
const btnBolCargoLoadWeightNext = document.querySelector(
  '#btn__bol__cargo-weight__next'
);
const btnBolCargoLoadWeightBack = document.querySelector(
  '#btn__bol__cargo-weight__back'
);
const sectionBolTripToCompany = document.querySelector(
  '#section__bol__trip-to-company'
);

// next
btnBolCargoLoadWeightNext.addEventListener('click', function (event) {
  event.preventDefault();

  // Current Page
  sectionBolCargoLoadWeight.classList.add('hidden');

  // Next Page
  sectionBolTripToCompany.classList.remove('hidden');
});

// back
btnBolCargoLoadWeightBack.addEventListener('click', function (event) {
  event.preventDefault();

  // Current Page
  sectionBolCargoLoadWeight.classList.add('hidden');

  // Previous Page
  sectionBolCargoLoadContent.classList.remove('hidden');
});

// DELIVERY INFORMATION | PAGE 10 : "Trip to Company"
const btnBolTripToCompanyNext = document.querySelector(
  '#btn__bol__trip-to-company__next'
);
const btnBolTripToCompanyBack = document.querySelector(
  '#btn__bol__trip-to-company__back'
);
const sectionBolTripToCity = document.querySelector(
  '#section__bol__trip-to-city'
);

// next
btnBolTripToCompanyNext.addEventListener('click', function (event) {
  event.preventDefault();

  // Current Page
  sectionBolTripToCompany.classList.add('hidden');

  // Next Page
  sectionBolTripToCity.classList.remove('hidden');
});

// back
btnBolTripToCompanyBack.addEventListener('click', function (event) {
  event.preventDefault();

  // Current Page
  sectionBolTripToCompany.classList.add('hidden');

  // Previous Page
  sectionBolCargoLoadWeight.classList.remove('hidden');
});

// DELIVERY INFORMATION | PAGE 11 : "Trip to City"
const btnBolTripToCityNext = document.querySelector(
  '#btn__bol__trip-to-city__next'
);
const btnBolTripToCityBack = document.querySelector(
  '#btn__bol__trip-to-city__back'
);
const sectionBolPrice = document.querySelector('#section__bol__price');

// next
btnBolTripToCityNext.addEventListener('click', function (event) {
  event.preventDefault();

  // Current Page
  sectionBolTripToCity.classList.add('hidden');

  // Next Page
  sectionBolPrice.classList.remove('hidden');
});

// back
btnBolTripToCityBack.addEventListener('click', function (event) {
  event.preventDefault();

  // Current Page
  sectionBolTripToCity.classList.add('hidden');

  // Previous Page
  sectionBolTripToCompany.classList.remove('hidden');
});

// DELIVERY INFORMATION | PAGE 12 : "Price"
const btnBolPriceNext = document.querySelector('#btn__bol__price__next');
const btnBolPriceBack = document.querySelector('#btn__bol__price__back');
const sectionGenerateDeliveryNumber = document.querySelector(
  '#section__bol__generate-number'
);

// next
btnBolPriceNext.addEventListener('click', function (event) {
  event.preventDefault();

  // Current Page
  sectionBolPrice.classList.add('hidden');

  // Next Page
  sectionGenerateDeliveryNumber.classList.remove('hidden');
});

// back
btnBolPriceBack.addEventListener('click', function (event) {
  event.preventDefault();

  // Current Page
  sectionBolPrice.classList.add('hidden');

  // Previous Page
  sectionBolTripToCity.classList.remove('hidden');
});

// DELIVERY INFORMATION | PAGE 13 : "Generate Delivery Number"
const btnBolGenerateNumberGenerate = document.querySelector(
  '#btn__bol__generate-number__generate'
);
const btnBolGenerateNumberBack = document.querySelector(
  '#btn__bol__generate-number__back'
);
const sectionSendGeneratedNumber = document.querySelector(
  '#section__bol__delivery-number'
);

// next
btnBolGenerateNumberGenerate.addEventListener('click', function (event) {
  event.preventDefault();

  // Current Page
  sectionGenerateDeliveryNumber.classList.add('hidden');

  sectionLoadingScreen.classList.remove('hidden');

  // Update the loading message
  loadingMessage.innerHTML = 'Updating';

  // Hide the loading screen after 4 seconds (4000 milliseconds)
  setTimeout(function () {
    sectionLoadingScreen.classList.add('hidden');
    sectionSendGeneratedNumber.classList.remove('hidden'); // Next Page
  }, 1000);
});

// back
btnBolGenerateNumberBack.addEventListener('click', function (event) {
  event.preventDefault();

  // Current Page
  sectionGenerateDeliveryNumber.classList.add('hidden');

  // Previous Page
  sectionBolPrice.classList.remove('hidden');
});

// DELIVERY INFORMATION | PAGE 14 : "Generated Delivery Number to send to Carrier"
const btnBolSendNumberToCarrierSend = document.querySelector(
  '#btn__bol__delivery-number__send'
);
const btnBolSendNumberToCarrierBack = document.querySelector(
  '#btn__bol__delivery-number__back'
);
const sectionBolConfirmInformation = document.querySelector(
  '#section__bol__confirm-info'
);

// next
btnBolSendNumberToCarrierSend.addEventListener('click', function (event) {
  event.preventDefault();

  // Current Page
  sectionSendGeneratedNumber.classList.add('hidden');

  sectionLoadingScreen.classList.remove('hidden');

  // Update the loading message
  loadingMessage.innerHTML = 'Updating';

  // Hide the loading screen after 4 seconds (4000 milliseconds)
  setTimeout(function () {
    sectionLoadingScreen.classList.add('hidden');
    sectionBolConfirmInformation.classList.remove('hidden'); // Next Page
  }, 1000);
});

// back
btnBolSendNumberToCarrierBack.addEventListener('click', function (event) {
  event.preventDefault();

  // Current Page
  sectionSendGeneratedNumber.classList.add('hidden');

  // Previous Page
  sectionGenerateDeliveryNumber.classList.remove('hidden');
});

// DELIVERY INFORMATION | PAGE 15 : "Confirm info on Bill of Lading and send to Carrier"
const btnBolConfirmInfoConfirm = document.querySelector(
  '#btn__bol__confirm-info__confirm'
);
const btnBolConfirmInfoBack = document.querySelector(
  '#btn__bol__confirm-info__back'
);
const sectionShipperCheckOut = document.querySelector(
  '#section__shipper__check-out'
);

// next
btnBolConfirmInfoConfirm.addEventListener('click', function (event) {
  event.preventDefault();

  // Current Page
  sectionBolConfirmInformation.classList.add('hidden');

  sectionLoadingScreen.classList.remove('hidden');

  // Update the loading message
  loadingMessage.innerHTML = 'Updating';

  // Hide the loading screen after 4 seconds (4000 milliseconds)
  setTimeout(function () {
    sectionLoadingScreen.classList.add('hidden');
    sectionTimeline.classList.remove('hidden');
    sectionShipperCheckOut.classList.remove('hidden'); // Next Page
  }, 1000);
});

// back
btnBolConfirmInfoBack.addEventListener('click', function (event) {
  event.preventDefault();

  // Current Page
  sectionBolConfirmInformation.classList.add('hidden');

  // Previous Page
  sectionSendGeneratedNumber.classList.remove('hidden');
});

// DELIVERY INFORMATION | PAGE 16 : "Shipper Check-out"
const btnShipperCheckOut = document.querySelector('#btn__shipper__check-out');
const sectionShipperDeliveryBol = document.querySelector(
  '#section__shipper__delivery-bol'
);

// next
btnShipperCheckOut.addEventListener('click', function (event) {
  event.preventDefault();

  // Current Page
  sectionShipperCheckOut.classList.add('hidden');

  // Next Page
  sectionShipperDeliveryBol.classList.remove('hidden');
  sectionTimeline.classList.add('hidden');
});

// DELIVERY INFORMATION | PAGE 17 : "Shipper Check-out : Delivery Bill of Lading"
const btnShipperDeliveredBolYes = document.querySelector(
  '#btn__shipper__delivered-bol__yes'
);
const btnShipperDeliveredBolBack = document.querySelector(
  '#btn__shipper__delivered-bol__back'
);
const sectionShipperTripTips = document.querySelector(
  '#section__shipper__trip-tips'
);

// next
btnShipperDeliveredBolYes.addEventListener('click', function (event) {
  event.preventDefault();

  // Current Page
  sectionShipperDeliveryBol.classList.add('hidden');

  // Next Page
  sectionShipperTripTips.classList.remove('hidden');
});

// back
btnShipperDeliveredBolBack.addEventListener('click', function (event) {
  event.preventDefault();

  // Current Page
  sectionShipperDeliveryBol.classList.add('hidden');

  // Next Page
  sectionShipperTripTips.classList.remove('hidden');
  sectionTimeline.classList.remove('hidden');
});

// DELIVERY INFORMATION | PAGE 17 : "Shipper Check-out : Trip Tips"
const btnShipperTripTipsConfirm = document.querySelector(
  '#btn__shipper__trip-tips__confirm'
);

const sectionOnTheRoad = document.querySelector('#section__on-the-road');

// next
btnShipperTripTipsConfirm.addEventListener('click', function (event) {
  event.preventDefault();

  // Current Page
  sectionShipperTripTips.classList.add('hidden');

  // Show the Loading Screen
  sectionLoadingScreen.classList.remove('hidden');

  // Update the loading message
  loadingMessage.innerHTML = 'Updating';

  // Hide the loading screen after 4 seconds (4000 milliseconds)
  setTimeout(function () {
    sectionLoadingScreen.classList.add('hidden');
    sectionTimeline.classList.remove('hidden');
    sectionOnTheRoad.classList.remove('hidden');
    // Next Page
  }, 1000);
});
