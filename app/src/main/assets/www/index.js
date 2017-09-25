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

let plans = document.getElementById('training_plans');
plans.onclick = () => {
  var drawerEl = document.querySelector('.mdc-temporary-drawer');
  var drawer = new mdc.drawer.MDCTemporaryDrawer(drawerEl);
  drawer.open = false;
  WorkoutPlansActivity.make().show();
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

const WorkoutPlansActivity = {
  make: function() {
    return {
      show: function() {
        let main = document.getElementById('app_main');
        let planSpace = document.createElement('div');
        planSpace.id = 'plan_space';
        for (let i=0; i < trainingPlans.length; i++) {
          // create card with plan
          let card = document.createElement('div');
          card.textContent = JSON.stringify(trainingPlans[i]);
          planSpace.appendChild(card);
        }
        while (main.firstChild)
          main.removeChild(main.firstChild);
        main.appendChild(planSpace);
      }
    };
  }
};

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

const trainingPlans = [
  {
      name: "One Hundred Pushups",
      sessions: [
          {
              sets: [6, 6, 4, 4, 5]
          },
          {
              sets: [6, 8, 6, 6, 7]
          },
          {
              sets: [8, 10, 7, 7, 10]
          },
          {
              sets: [9, 11, 8, 8, 11]
          },
          {
              sets: [10, 12, 9, 9, 13]
          },
          {
              sets: [12, 13, 10, 10, 15]
          }
      ]
  }
];
})();