'use strict';
(function () {
var drawerEl = document.querySelector('.mdc-temporary-drawer');
var drawer = new mdc.drawer.MDCTemporaryDrawer(drawerEl);
document.querySelector('.demo-menu').addEventListener('click', function () {
  drawer.open = true;
});

let freestyle = document.getElementById("freestyle");
freestyle.onclick = () => {
  CounterActivity.make().show();
}

// <div id="counter_space">
//   <span id="counter">0</span>
// </div>
const CounterActivity = {
  make: function() {
    return {
      show: function() {
        var drawerEl = document.querySelector('.mdc-temporary-drawer');
        var drawer = new mdc.drawer.MDCTemporaryDrawer(drawerEl);
        drawer.open = false;

        let main = document.getElementById('app_main');
        let counterSpace = document.createElement('div');
        counterSpace.id = 'counter_space';
        let counter = document.createElement('span');
        counter.id = 'counter';
        counter.textContent = '0';
        counterSpace.appendChild(counter);
        
        counterSpace.onclick = () => {
          counter.textContent = parseInt(counter.textContent) + 1;
        }
        
        let resetButton = document.getElementById("reset_button");
        resetButton.onclick = () => {
          counter.textContent = 0;
        }

        while (main.firstChild)
          main.removeChild(main.firstChild);
        
        main.appendChild(counterSpace);
      }
    };
  }
}
})();