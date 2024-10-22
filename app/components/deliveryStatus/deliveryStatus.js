export let status = 'Currently no delivery is in progress'; // Convert to a function

// --------------------------------------------------------------------------
//
// 📝 VARIABLES TO CONSIDER
//
// 1. If there is no delivery > Currently no delivery is in progress
// 2. If the driver is going to shipper > Cargo is ready at shipper
// 3. If driver is at shipper > Collecting the load
// 4. If driver is on the road > Delivery is on route
// 5. If driver is at receiver > Delivery at the receiver
// 6. If driver has delivered > Delivered!
// --------------------------------------------------------------------------

// DELIVERY STATUS TITLE : 📌 Convert to a function to receive values
const deliveryStatusTitle = 'Currently no delivery is in progress';

// LOAD CONTENT : 📌 Convert to a function to receive values
const deliveryLoadContent = 'Find a new job on the game menu';

// SHIPPER & RECEIVER : 📌 Convert to a function to receive values
const shipperCity = '--';
const receiverCity = '--';

export function deliveryStatus() {
  // Build HTML Element --------------------------------------
  // Information container
  const mainHomeInfoContainer = document.createElement('div');
  mainHomeInfoContainer.setAttribute(
    'class',
    'delivery-status__info__container'
  );

  // Screen title container
  const mainHomeTitleContainer = document.createElement('div');
  mainHomeTitleContainer.setAttribute(
    'class',
    'delivery-status__title__container'
  );

  // Info Text Container
  const mainHomeInfoTextContainer = document.createElement('div');
  mainHomeInfoTextContainer.setAttribute(
    'class',
    'delivery-status__info-text__container'
  );

  const mainHomeTitle = document.createElement('h2');
  mainHomeTitle.setAttribute('class', 'delivery-status__title');
  mainHomeTitle.textContent = deliveryStatusTitle;

  // TEXT : From City A to City B
  const mainHomeCities = document.createElement('h3');
  // mainHomeCities.setAttribute('class', 'main-home__cities-names');
  mainHomeCities.innerHTML = `<p class="delivery-status__cities-names__normal-txt "><span class="delivery-status__cities-names">${shipperCity}</span> to <span class="delivery-status__cities-names">${receiverCity}</span></p>`;

  // TEXT : Load "Content" and "Total Weight"
  const mainHomeLoadContent = document.createElement('p');
  mainHomeLoadContent.setAttribute('class', 'delivery-status__load-content');
  mainHomeLoadContent.textContent = deliveryLoadContent;

  // APPEND CHILD
  mainHomeTitleContainer.appendChild(mainHomeTitle);
  mainHomeInfoTextContainer.appendChild(mainHomeCities);
  mainHomeInfoTextContainer.appendChild(mainHomeLoadContent);

  mainHomeInfoContainer.appendChild(mainHomeTitleContainer);
  mainHomeInfoContainer.appendChild(mainHomeInfoTextContainer);

  return mainHomeInfoContainer;
}
