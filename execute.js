// Initialize this script right when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // The css, hiding the sections of Facebook that I don't like
  var css = 
    '#pagelet_trending_tags_and_topics,' +
    '#pagelet_video_home_continue_watching_with_fallback_rhc,' +
    '#pagelet_ego_pane {' +
      'display: none;' +
    '}';
  // Create the <style> DOM element with the CSS
  var style = document.createElement('style');
  style.type = 'text/css';
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  // Inject this element at the bottom of the <head> of the page
  var head = document.head || document.getElementsByTagName('head')[0];
  head.appendChild(style);
});
