/**
 * Increment DOM element with animation
 *
 * @param  {Object} target - Target DOM element to animate [required]
 * @param  {String} style - CSS property of element to increment [required]
 * @param  {Number} value - Value to increment [required]
 * @return {Function}
 */
export default function(elem, style, value) {
  let from = 0;

  function increment() {
    setTimeout(function() {
      from++;

      if (from < value) {
        elem.style[style] = from + '%';
        increment();
      }
    }, 20);
  }

  increment();
}
