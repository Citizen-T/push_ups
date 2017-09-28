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
  FreestyleActivity.make().show();
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

const FreestyleActivity = {
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
        while (main.firstChild)
          main.removeChild(main.firstChild);
        FloatingActionButton.make().hide();
        let planSpace = document.createElement('div');
        planSpace.id = 'plan_space';
        planSpace.classList = 'training-plan-card';
        for (let i=0; i < trainingPlans.length; i++) {
          // create card with plan
          let card = document.createElement('div');
          card.classList = 'mdc-card';
          let section_1 = document.createElement('section');
          section_1.classList = 'mdc-card__media one-hundred-plan__16-9-media';
          card.appendChild(section_1);
          let section_2 = document.createElement('section');
          section_2.classList = 'mdc-card__primary';
          let title = document.createElement('h1');
          title.classList = 'mdc-card__title mdc-card__title--large';
          title.textContent = trainingPlans[i].name;
          section_2.appendChild(title);
          let subtitle = document.createElement('h2');
          subtitle.classList = 'mdc-card__subtitle';
          subtitle.textContent = trainingPlans[i].pitch;
          section_2.appendChild(subtitle);
          card.appendChild(section_2);
          let section_3 = document.createElement('section');
          section_3.classList = 'mdc-card__actions';
          let start = document.createElement('button');
          start.classList = 'mdc-button mdc-button--compact mdc-card__action';
          start.textContent = 'Start';
          start.onclick = () => {
            ActionBar.make().timer();
          }
          section_3.appendChild(start);
          card.appendChild(section_3);
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
      },

      hide: function() {
        let fab = document.getElementById('fab');
        if (!fab)
          return;
        while (fab.firstChild)
          fab.removeChild(fab.firstChild);
        fab.remove();
      }
    };
  }
};

const ActionBar = {
  make: function() {
    return {
      timer: function() {
        let actions = document.getElementById('actions');
        let button = document.createElement('button');
        button.classList = 'material-icons mdc-toolbar__icon';
        button.textContent = 'timer';
        actions.appendChild(button);
      }
    };
  }
};

const trainingPlans = [
  {
      name: 'One Hundred Pushups',
      pitch: 'Six week program that guides you to your goal of completing 100 consecutive push ups.',
      description: 'Hundred Pushups is the ultimate program to train the body to go from just one pushup to 100 consecutive reps in less than two months -- sculpting muscles in the chest, abs, back, glutes and arms without a single piece of unwieldy equipment.',
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