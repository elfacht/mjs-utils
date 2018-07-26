/**
 * Add classes to an element
 * 
 * @param {Object} $element
 * @param {String} className
 * @return {Function}
 */
export default function($element, className) {
  if ($element.classList) {
      $element.classList.add(className);
  } else {
      $element.className += ' ' + className;
  }
}
