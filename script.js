// subtle hover effect only
const banner = document.querySelector('.banner');

banner.addEventListener('mouseover', () => {
  banner.style.opacity = '0.95';
});

banner.addEventListener('mouseout', () => {
  banner.style.opacity = '1';
});