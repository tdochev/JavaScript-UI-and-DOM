/* globals module  */

/* 

Create a function that takes an id or DOM element and:
  

*/

function solve() {
  'use strict';
  return function (selector) {
    if (typeof selector === 'string') {
      selector = document.getElementById(selector);
    }
    if (!(selector instanceof HTMLElement)) {
      throw new Error('Provided first parameter is neither string or existing DOM element!');
    }
    let items = selector.children;
    for (let i = 0, len = items.length; i < len; i += 1) {
      if (items[i].className === 'button') {
        items[i].innerHTML = 'hide';
        items[i].addEventListener('click', function(e) {
          let topmostContentBeforeButton;
          for (let y = i + 1; y <  items.length; y += 1) {
            if (items[y+1] && items[y].className === 'content' && items[y + 1].className === 'button') {
              topmostContentBeforeButton = items[y];
              if (topmostContentBeforeButton.style.display === '') {
                topmostContentBeforeButton.style.display = 'none'; 
                e.target.innerHTML = 'show';

              } else {
                topmostContentBeforeButton.style.display = '';
                e.target.innerHTML = 'hide';
              }
              break;
            }
          }
        });
      }
    }
  };
}

module.exports = solve;