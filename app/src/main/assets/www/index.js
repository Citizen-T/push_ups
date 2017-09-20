'use strict';
(function () {
let counterSpace = document.getElementById('app_space');
let counter = document.getElementById('counter');
counterSpace.onclick = () => {
    counter.textContent = parseInt(counter.textContent) + 1;
}
})();