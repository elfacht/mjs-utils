/**
 * Check if element is in viewport
 *
 * @param {Object} $el – DOM element to check
 * @return {Boolean}
 *
 */
export default function($el) {
  var bounding = $el.getBoundingClientRect();
  return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
