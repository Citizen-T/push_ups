'use strict';
(function () {
let counterSpace = document.getElementById('counter_space');
let counter = document.getElementById('counter');
counterSpace.onclick = () => {
    counter.textContent = parseInt(counter.textContent) + 1;
}
let resetButton = document.getElementById("reset_button");
resetButton.onclick = () => {
    counter.textContent = 0;
}

var drawerEl = document.querySelector('.mdc-temporary-drawer');
var MDCTemporaryDrawer = mdc.drawer.MDCTemporaryDrawer;
var drawer = new MDCTemporaryDrawer(drawerEl);
document.querySelector('.demo-menu').addEventListener('click', function() {
  drawer.open = true;
});
drawerEl.addEventListener('MDCTemporaryDrawer:open', function() {
  console.log('Received MDCTemporaryDrawer:open');
});
drawerEl.addEventListener('MDCTemporaryDrawer:close', function() {
  console.log('Received MDCTemporaryDrawer:close');
});
})();