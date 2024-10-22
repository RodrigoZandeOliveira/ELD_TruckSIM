// To do:
// Create the button card separately and import to the appsSlider();

export function appsSlider() {
  const slider = document.createElement('div');
  slider.setAttribute('class', 'slider');
  slider.setAttribute('id', 'slider__road-apps');

  const sliderItemCard01 = document.createElement('button');
  sliderItemCard01.setAttribute('class', 'slider__item-card');
  sliderItemCard01.setAttribute('href', '#');

  const sliderItemCard02 = document.createElement('button');
  sliderItemCard02.setAttribute('class', 'slider__item-card');
  sliderItemCard02.setAttribute('href', '#');

  const sliderItemCard03 = document.createElement('button');
  sliderItemCard03.setAttribute('class', 'slider__item-card');
  sliderItemCard03.setAttribute('href', '#');

  const sliderItemCard04 = document.createElement('button');
  sliderItemCard04.setAttribute('class', 'slider__item-card');
  sliderItemCard04.setAttribute('href', '#');

  // APPEND CHILD
  slider.appendChild(sliderItemCard01);
  slider.appendChild(sliderItemCard02);
  slider.appendChild(sliderItemCard03);
  slider.appendChild(sliderItemCard04);

  return slider;
}
