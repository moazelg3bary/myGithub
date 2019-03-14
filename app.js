window.onload = function () {
    'use strict';
    var screen = document.getElementById('main'),
        button = document.querySelectorAll('.num'),
        i;
    for (i = 0; i < button.length; i++) {
        button[i].addEventListener('click', function () {
            button = this.value;
            screen.innerHTML += button;
        }, false);
    }
};