'use strict';
(function () {
let counter = document.getElementById('counter');
counter.onclick = () => {
    counter.textContent = parseInt(counter.textContent) + 1;
}
})();