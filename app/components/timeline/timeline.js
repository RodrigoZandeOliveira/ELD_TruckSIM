//
//
// TIMELINE
//

// Time : 📌 Convert to a function
const deliveryTime =
  '<span class="timeline__txt--bold">--</span> h <span class="timeline__txt--bold">--</span> min';

export function timeline() {
  // Timeline Card
  const timelineCard = document.createElement('div');
  timelineCard.setAttribute('class', 'timeline__card');

  // Timeline Progress Bar Container
  const timelineProgressBarContainer = document.createElement('div');
  timelineProgressBarContainer.setAttribute(
    'class',
    'timeline__progress-bar__container'
  );

  // Timeline Progress Bar : Full bar
  const timelineFullBar = document.createElement('div');
  timelineFullBar.setAttribute('class', 'timeline__full-bar');

  // Timeline Progress Bar : Adaptable Bar
  const timelineAdaptableBar = document.createElement('div');
  timelineAdaptableBar.setAttribute('class', 'timeline__adaptable-bar');

  // Timeline Progess Bar : txt container
  const timelineTxtContainer = document.createElement('div');
  timelineTxtContainer.setAttribute('class', 'timeline__txt__container');

  // Timeline Progess Bar : txt Shipper
  const timelineTxtShipper = document.createElement('p');
  timelineTxtShipper.setAttribute('class', 'timeline__txt');
  timelineTxtShipper.textContent = 'Shipper';

  // Timeline Progess Bar : txt Time Passed
  const timelineTxtTimer = document.createElement('p');
  timelineTxtTimer.setAttribute('class', 'timeline__txt');
  timelineTxtTimer.innerHTML = deliveryTime;

  // Timeline Progess Bar : txt Shipper
  const timelineTxtReceiver = document.createElement('p');
  timelineTxtReceiver.setAttribute('class', 'timeline__txt');
  timelineTxtReceiver.textContent = 'Receiver';

  // APPEND CHILD
  timelineFullBar.appendChild(timelineAdaptableBar);

  timelineTxtContainer.appendChild(timelineTxtShipper);
  timelineTxtContainer.appendChild(timelineTxtTimer);
  timelineTxtContainer.appendChild(timelineTxtReceiver);

  timelineProgressBarContainer.appendChild(timelineFullBar);
  timelineProgressBarContainer.appendChild(timelineTxtContainer);

  timelineCard.appendChild(timelineProgressBarContainer);

  return timelineCard;
}
