//
//
// TIMELINE
//

export function timeline() {
  // Timeline title
  const timelineTitle = document.createElement('p');
  timelineTitle.setAttribute('class', 'timeline__title');
  timelineTitle.textContent = 'On the road'; // Need to receive value

  // Timeline Delivery number
  const timelineDeliveryNumber = document.createElement('p');
  timelineDeliveryNumber.setAttribute('class', 'timeline__title');
  timelineDeliveryNumber.textContent = '000.000';

  // Timeline Progress Bar Shipped
  const progressBarShipped = document.createElement('div');
  progressBarShipped.setAttribute('class', 'progress-bar progress-bar__small');

  // Timeline Progress Bar On The Road
  const progressBarOnTheRoad = document.createElement('div');
  progressBarOnTheRoad.setAttribute('class', 'progress-bar progress-bar__big');

  // Timeline Progress Delivered
  const progressBarDelivered = document.createElement('div');
  progressBarDelivered.setAttribute(
    'class',
    'progress-bar progress-bar__small'
  );

  // Timeline txt Step : shipped
  const timelineStepShipped = document.createElement('p');
  timelineStepShipped.setAttribute('class', 'timeline__txt');
  timelineStepShipped.textContent = 'Shipped';

  // Timeline txt Step : Time Spent
  const timelineTimeSpent = document.createElement('p');
  timelineTimeSpent.setAttribute('class', 'timeline__txt');
  timelineTimeSpent.textContent = '1h 16min';

  // Timeline txt Step : Delivered
  const timelineStepDelivered = document.createElement('p');
  timelineStepDelivered.setAttribute('class', 'timeline__txt');
  timelineStepDelivered.textContent = 'Delivered';

  // Timeline header
  const timelineHeader = document.createElement('div');
  timelineHeader.setAttribute('class', 'timeline__header');

  // Timeline Progress Bar
  const timelineProgressBar = document.createElement('div');
  timelineProgressBar.setAttribute('class', 'timeline__progress-bar');

  // Timeline Progress Steps Container
  const timelineProgressStepsContainer = document.createElement('div');
  timelineProgressStepsContainer.setAttribute(
    'class',
    'progress-steps__container'
  );

  // Timeline Content container
  const timelineContentContainer = document.createElement('div');
  timelineContentContainer.setAttribute('class', 'timeline__content-container');

  // Timeline
  const timelineCard = document.createElement('div');
  timelineCard.setAttribute('class', 'timeline__card');

  // APPEND CHILD
  timelineHeader.appendChild(timelineTitle);
  timelineHeader.appendChild(timelineDeliveryNumber);

  timelineProgressBar.appendChild(progressBarShipped);
  timelineProgressBar.appendChild(progressBarOnTheRoad);
  timelineProgressBar.appendChild(progressBarDelivered);

  timelineProgressStepsContainer.appendChild(timelineStepShipped);
  timelineProgressStepsContainer.appendChild(timelineTimeSpent);
  timelineProgressStepsContainer.appendChild(timelineStepDelivered);

  timelineContentContainer.appendChild(timelineProgressBar);
  timelineContentContainer.appendChild(timelineProgressStepsContainer);

  timelineCard.appendChild(timelineHeader);
  timelineCard.appendChild(timelineContentContainer);

  // timelineCard.appendChild();
  return timelineCard;
}
