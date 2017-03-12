/* globals, document, module */

/* 

Create a function that takes an id or DOM element and an array of contents

* if an id is provided, select the element
* Add divs to the element
  * Each div's content must be one of the items from the contents array
* The function must remove all previous content from the DOM element provided
* Throws if:
  * The provided first parameter is neither string or existing DOM element
  * The provided id does not select anything (there is no element that has such an id)
  * Any of the function params is missing
  * Any of the function params is not as described
  * Any of the contents is neight `string` or `number`
    * In that case, the content of the element **must not be** changed   
*/

module.exports = 
function solve() {
    'use strict';
    return function (element, contents) {

        if (typeof element === 'string') {
            element = document.getElementById(element);
        }
        if (!(element instanceof HTMLElement)) {
            throw new Error('Provided first parameter is neither string or existing DOM element!');
        }

        contents.forEach(x => {
            if (typeof x !== 'string' && typeof x !== 'number') {
                throw new Error('Invalid array content!');
            }
        });
        element.innerHTML = '';
        let div = document.createElement('div');
        let fragment = document.createDocumentFragment();
        contents.forEach(x => {
            if (typeof x !== 'string' && typeof x !== 'number') {
                throw new Error('Invalid array content!');
            }
            let currentDiv = div.cloneNode(true);
            currentDiv.innerHTML = x;
            fragment.appendChild(currentDiv);
        });
        element.appendChild(fragment);
    };
}