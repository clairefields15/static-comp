const hamburgerButton = document.getElementById('mobileNav');
const mobileDropdown = document.getElementById('mobileDropdownNav')
const closeUnfilled = document.getElementById('closeUnfilled');

hamburgerButton.addEventListener('click', showMobileNavBar)
closeUnfilled.addEventListener('click', showMobileNavBar);

function showMobileNavBar() {
  hamburgerButton.classList.toggle('hidden');
  mobileDropdown.classList.toggle('hidden');
  closeUnfilled.classList.toggle('hidden');
}