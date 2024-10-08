import { actionContainer } from '../main.js';

export const timeline = function () {
  // HTML Structure -------------------------------------------
  // Timeline container
  const timelineContainer = document.createElement('div');
  timelineContainer.classList.add('action__timeline__container');
  actionContainer.appendChild(timelineContainer);

  // Timeline
  const timelineCard = document.createElement('div');
  timelineCard.classList.add('timeline-card');
  timelineContainer.appendChild(timelineCard);
};
