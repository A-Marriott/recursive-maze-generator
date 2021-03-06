// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()


// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------

// External imports
import "bootstrap";

// Internal imports, e.g:
import playerMovement from './init_player_movement.js';
import mazeEndPoint from './init_maze_end_point.js';
import mazeCompletionCheck from './init_maze_completion_check.js';
import powerUp from './init_powerup.js';
import preventKeyboardScroll from './prevent_keyboard_scroll.js';

document.addEventListener('turbolinks:load', () => {
  mazeEndPoint();
  mazeCompletionCheck();
  powerUp();
  playerMovement();
  preventKeyboardScroll();
});
