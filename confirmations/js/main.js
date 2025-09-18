/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */


function showSubmenu(id) {
    "use strict";
    var dropdownparents = document.getElementById(id).classList.toggle("show");
    event.stopPropagation();
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
        if (dropdowns[i].id != id) {
            document.getElementById(dropdowns[i].id).classList.remove('show');
        }
    }
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {

    if (event.target.parentElement.classList.contains('show')) {
        return;
    }

    var classes = event.target.className.split(' ');
    var found = false;
    var i = 0;
    while (i < classes.length && !found) {
        if (classes[i] == 'dropdown') found = true;
        else ++i;
    }
    if (!found) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var j;
        for (j = 0; j < dropdowns.length; j++) {
            var openDropdown = dropdowns[j];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

var mobileToggleButton = document.getElementsByClassName('mobile-nav-toggle')[0],navbarLinks = document.getElementsByClassName('navbar-links')[0];

mobileToggleButton.addEventListener('click',function ()  {
  navbarLinks.classList.toggle('show')
});

