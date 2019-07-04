/**
 * Check if element is in viewport
 *
 * @param {Object} $el - DOM element [required]
 * @return {Boolean}
 */
export default function($el) {
  var bounding = $el.getBoundingClientRect();
  return (
      bounding.bottom >= 0 &&
      bounding.right >= 0 &&
      bounding.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.left <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
