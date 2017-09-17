'use strict';
(function () {
let counterSpace = document.getElementById('counter_space');
let counter = document.getElementById('counter');
counterSpace.onclick = () => {
    counter.textContent = parseInt(counter.textContent) + 1;
}
})();