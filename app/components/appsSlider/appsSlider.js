export function appsSlider() {
  const slider = document.createElement('div');
  slider.setAttribute('class', 'slider');
  slider.setAttribute('id', 'slider__road-apps');

  const sliderItemCard01 = document.createElement('div');
  sliderItemCard01.setAttribute('class', 'slider__item-card');

  const sliderItemCard02 = document.createElement('div');
  sliderItemCard02.setAttribute('class', 'slider__item-card');

  const sliderItemCard03 = document.createElement('div');
  sliderItemCard03.setAttribute('class', 'slider__item-card');

  const sliderItemCard04 = document.createElement('div');
  sliderItemCard04.setAttribute('class', 'slider__item-card');

  // APPEND CHILD
  slider.appendChild(sliderItemCard01);
  slider.appendChild(sliderItemCard02);
  slider.appendChild(sliderItemCard03);
  slider.appendChild(sliderItemCard04);

  return slider;
}
