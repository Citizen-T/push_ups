'use strict';
(function () {
let hello = document.getElementById('hello');
hello.onclick = () => {
    hello.textContent += '!';
}
})();