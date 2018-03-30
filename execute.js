// Initialize this script right when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Link to css which hides the sections of Facebook that I don't like
  let link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'hideElements.css';
  // Inject this link at the bottom of the <head> of the page
  let head = document.head || document.getElementsByTagName('head')[0];
  head.appendChild(link);
});