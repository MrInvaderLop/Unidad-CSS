const closeButton = document.getElementById('closeBannerButton')
const cookieBanner = document.getElementById('cookieBanner')
closeButton.addEventListener('click', () => {
  cookieBanner .classList.add('invisible')
})