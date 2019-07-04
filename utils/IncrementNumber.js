/**
 * Increment number with animation
 *
 * @param  {Number} value - Value to increment [required]
 * @param  {Object} target - Target DOM element to animate [required]
 * @return {Function}
 */
export default function(value, target) {
  let from = 0;

  function increment() {
    setTimeout(function() {
      from++;

      if (from < value) {
        target.innerHTML = from;
        increment();
      }
    }, 20);
  }

  increment();
}
