'use strict';
(function () {
var drawerEl = document.querySelector('.mdc-temporary-drawer');
var drawer = new mdc.drawer.MDCTemporaryDrawer(drawerEl);
document.querySelector('.demo-menu').addEventListener('click', function () {
  drawer.open = true;
});

let home = document.getElementById("home");
home.onclick = () => {
  var drawerEl = document.querySelector('.mdc-temporary-drawer');
  var drawer = new mdc.drawer.MDCTemporaryDrawer(drawerEl);
  drawer.open = false;
  HomeActivity.make().show();
}

let freestyle = document.getElementById("freestyle");
freestyle.onclick = () => {
  var drawerEl = document.querySelector('.mdc-temporary-drawer');
  var drawer = new mdc.drawer.MDCTemporaryDrawer(drawerEl);
  drawer.open = false;
  CounterActivity.make().show();
}

const HomeActivity = {
  make: function() {
    return {
      show: function() {
        let main = document.getElementById('app_main');
        let homeSpace = document.createElement('div');
        homeSpace.id = 'home_space';
        while (main.firstChild)
          main.removeChild(main.firstChild);
        main.appendChild(homeSpace);
        let fab = document.getElementById('fab');
        if (fab)
          fab.remove();
      }
    };
  }
};

const CounterActivity = {
  make: function() {
    return {
      show: function() {
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
        let fab = FloatingActionButton.make().show();        
        let resetButton = document.getElementById("fab");
        let icon = document.createElement('span');
        icon.classList = ['mdc-fab__icon'];
        icon.textContent = 'refresh';
        resetButton.appendChild(icon);
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

const FloatingActionButton = {
  make: function() {
    return {
      show: function() {
        let body = document.getElementById('app_body');
        let fab = document.createElement('button');
        fab.id = 'fab';
        fab.classList = 'mdc-fab material-icons app-fab--absolute';
        fab.setAttribute('data-mdc-auto-init', 'MDCRipple');
        body.appendChild(fab);
      }
    };
  }
};
})();