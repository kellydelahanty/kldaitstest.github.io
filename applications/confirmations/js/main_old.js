/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

function showSubmenu(id) {
  document.getElementById(id).classList.toggle("show");
}
/*
document.getElementById("myDropdown1").addEventListener('click', function (event) {
            alert("click outside");
            event.stopPropagation();
        });

*/


window.onclick = function(event) {
  if (!event.target.matches('.dropdown-parent')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


const mobileToggleButton = document.getElementsByClassName('mobile-nav-toggle')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

mobileToggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('show')
})
