//
//
// BUTTON ACTION BIG
//

let btnActionBig = document.querySelector(btnActionBigID);

let btnActionBigID;

export function btnActionBig(label, id) {
  btnActionBigID = `btn-action__big__${id}`;
  btnActionBigLabelID = `btn-action__big__label__${id}`;

  const btnActionBigLabel = document.createElement('span');
  btnActionBigLabel.createAttribute('class', 'btn btn-action__big__label');
  btnActionBigLabel.createAttribute('id', btnActionBigLabelID);

  const btnActionBig = document.createElement('button');
  btnActionBig.createAttribute('class', 'btn btn-action__big');
  btnActionBig.createAttribute('id', btnActionBigID);

  btnActionBig.appendChild(btnActionBigLabel);
}
