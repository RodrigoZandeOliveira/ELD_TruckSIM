export let status = 'Currently no delivery is in progress'; // Convert to a function

//
// VARIABLES TO CONSIDER
//
// 1. If there is no delivery > Currently no delivery is in progress
// 2. If the driver is going to shipper > Cargo is ready at shipper
// 3. If driver is at shipper > Collecting the load
// 4. If driver is on the road > Delivery is on route
// 5. If driver is at receiver > Delivery at the receiver
// 6. If driver has delivered > Delivered!

export function deliveryStatus() {
  // Build HTML Element --------------------------------------
  // Information container
  const mainHomeInfoContainer = document.createElement('div');
  mainHomeInfoContainer.setAttribute('class', 'main-home__info__container');

  // Screen title container
  const mainHomeTitleContainer = document.createElement('div');
  mainHomeTitleContainer.setAttribute('class', 'main-home__title__container');

  // Info Text Container
  const mainHomeInfoTextContainer = document.createElement('div');
  mainHomeInfoTextContainer.setAttribute(
    'class',
    'main-home__info-text__container'
  );

  const mainHomeTitle = document.createElement('h2');
  mainHomeTitle.setAttribute('class', 'main-home__title');
  mainHomeTitle.textContent = 'Currently no delivery is in progress';

  // TEXT : From City A to City B
  const mainHomeCities = document.createElement('h3');
  mainHomeCities.setAttribute('class', 'main-home__cities-names');
  mainHomeCities.innerHTML = `DENVER <span class:"main-home__cities-names__normal-txt">to </span>SEATTLE`;
  // mainHomeCities.innerHTML = `${fromCity} <span class:"main-home__cities-names__normal-txt">to </span> ${toCity}`;

  // TEXT : Load "Content" and "Total Weight"
  const mainHomeLoadContent = document.createElement('p');
  mainHomeLoadContent.setAttribute('class', 'main-home__load-content');
  mainHomeLoadContent.textContent =
    'Transporting food with a total weight of 60.000lbs';

  // APPEND CHILD
  mainHomeTitleContainer.appendChild(mainHomeTitle);
  mainHomeInfoTextContainer.appendChild(mainHomeCities);
  mainHomeInfoTextContainer.appendChild(mainHomeLoadContent);

  mainHomeInfoContainer.appendChild(mainHomeTitleContainer);
  mainHomeInfoContainer.appendChild(mainHomeInfoTextContainer);

  return mainHomeInfoContainer;
}
