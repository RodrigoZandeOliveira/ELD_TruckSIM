const btnJobSelected = document.querySelector('#btn__job-select');

const sectionProceedShipper = document.querySelector(
  '#section__proceed-shipper'
);

btnJobSelected.addEventListener('click', function (event) {
  event.preventDefault();

  sectionSelectJob.classList.add('hidden');
  sectionProceedShipper.classList.remove('hidden');
});
