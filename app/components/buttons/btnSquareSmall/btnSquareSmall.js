//
//
// BUTTON SQUARE SMALL
//

// Export the button
// export let btnSquareSmallComponent = document.querySelector(btnSquareSmallID);

export let btnSquareSmallID;
export let btnSquareSmallIconClass;

export function btnSquareSmall(iconClass, id) {
  btnSquareSmallID = `btn__square-small__${id}`;
  btnSquareSmallIconClass = iconClass;

  const btnSquareSmallIcon = document.createElement('span');
  btnSquareSmallIcon.setAttribute(
    'class',
    `btn btn__square-small__icon ${btnSquareSmallIconClass}`
  );

  const btnSquareSmall = document.createElement('button');
  btnSquareSmall.setAttribute('class', 'btn btn__square-small');
  btnSquareSmall.setAttribute('id', btnSquareSmallID);

  btnSquareSmall.appendChild(btnSquareSmallIcon);

  return btnSquareSmall;
}
