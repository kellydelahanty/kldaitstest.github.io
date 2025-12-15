/* Dropdown navigation fuctionality adapted from
https://www.w3.org/WAI/tutorials/menus/flyout/#flyoutnavkbbtn
*/


/*Mobile Navigation Toggle*/
var mobileToggleButton = document.getElementsByClassName('mobile-nav-toggle')[0]
var navbarLinks = document.getElementsByClassName('navbar-links')[0];

/* if mobileToggleButton exists, add a listener */
if (typeof(mobileToggleButton) != 'undefined' 
	&& mobileToggleButton != null){	
	mobileToggleButton.addEventListener('click',function ()  {
		navbarLinks.classList.toggle('show')
	});
}	


/*NAVIGATION BAR*/
!function(){
	var w = window,
	d = w.document;

	if( w.onfocusin === undefined ){
		d.addEventListener('focus' ,addPolyfill ,true);
		d.addEventListener('blur' ,addPolyfill ,true);
		d.addEventListener('focusin' ,removePolyfill ,true);
		d.addEventListener('focusout' ,removePolyfill ,true);
	}
	function addPolyfill(e){
		var type = e.type === 'focus' ? 'focusin' : 'focusout';
		var event = new CustomEvent(type, { bubbles:true, cancelable:false });
		event.c1Generated = true;
		e.target.dispatchEvent( event );
	}
	function removePolyfill(e){
if(!e.c1Generated){ // focus after focusin, so chrome will the first time trigger tow times focusin
	d.removeEventListener('focus' ,addPolyfill ,true);
	d.removeEventListener('blur' ,addPolyfill ,true);
	d.removeEventListener('focusin' ,removePolyfill ,true);
	d.removeEventListener('focusout' ,removePolyfill ,true);
}
setTimeout(function(){
	d.removeEventListener('focusin' ,removePolyfill ,true);
	d.removeEventListener('focusout' ,removePolyfill ,true);
});
}
}();

function hasClass(el, className) {
	if (el.classList) {
		return el.classList.contains(className);
	} else {
		return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
	}
}

var menuItems1 = document.querySelectorAll('#mainnav li.has-submenu');
var timer1, timer2;

var parseHTML = function(str) {
	var tmp = document.implementation.createHTMLDocument();
	tmp.body.innerHTML = str;
	return tmp.body.children;
};

Array.prototype.forEach.call(menuItems1, function(el, i){
		var activatingA = el.querySelector('a');
		var btn = '<button><span><span class="hidden">show submenu for “' + activatingA.text + '”</span></span></button>';
		activatingA.insertAdjacentHTML('afterend', btn);

		el.addEventListener("mouseover", function(event){
				this.classList.add("open");
				this.querySelector('a').setAttribute('aria-expanded', "true");
				this.querySelector('button').setAttribute('aria-expanded', "true");
				this.querySelector('button').className = "rotate";
				clearTimeout(timer1);
		});

		el.addEventListener("mouseout", function(event){
				this.classList.remove("open");
				btn.className = " ";
				this.querySelector('a').setAttribute('aria-expanded', "false");
				this.querySelector('button').setAttribute('aria-expanded', "false");
				this.querySelector('button').className = " ";

		});

/*
// This adds a delay to the dropdown closing, but if multiple are open at the same time, only the first one closes
		el.addEventListener("mouseout", function(event){
				timer1 = setTimeout(function(event){
						document.querySelector("#mainnav .has-submenu.open").className = "has-submenu";
						document.querySelector('#mainnav .has-submenu.open a').setAttribute('aria-expanded', "false");
						document.querySelector('#mainnav .has-submenu.open button').setAttribute('aria-expanded', "false");
				}, 500);
		});
*/

		el.querySelector('button').addEventListener("click",  function(event){
			if (this.parentNode.className == "has-submenu" || "has-submenu current")  {
				this.parentNode.classList.add("open");
				this.className = "rotate";
				this.parentNode.querySelector('a').setAttribute('aria-expanded', "true");
				this.parentNode.querySelector('button').setAttribute('aria-expanded', "true");
			} else {
				this.parentNode.classList.remove("open");
				this.className= "";
				this.parentNode.querySelector('a').setAttribute('aria-expanded', "false");
				this.parentNode.querySelector('button').setAttribute('aria-expanded', "false");
			}
			event.preventDefault();
		});
		var links = el.querySelectorAll('a');

		Array.prototype.forEach.call(links, function(el, i){
			el.addEventListener("focus", function() {
				if (timer2) {
					clearTimeout(timer2);
					timer2 = null;
				}
			});
			el.addEventListener("blur", function(event) {
				timer2 = setTimeout(function () {
					var opennav = document.querySelector("#mainnav .has-submenu.open");
					var openCurrent = document.querySelector("#mainnav .has-submenu.current.open")

					if (opennav) {
						opennav.className = "has-submenu";
						opennav.querySelector('a').setAttribute('aria-expanded', "false");
						opennav.querySelector('button').setAttribute('aria-expanded', "false");
					}
					
					if (openCurrent) {
						opennav.className = "has-submenu current";
						opennav.querySelector('a').setAttribute('aria-expanded', "false");
						opennav.querySelector('button').setAttribute('aria-expanded', "false");
					}

				}, 10);
			});
		});
});





/*ALERT*/
function removeAlert(bannernumber) {
	var alert = document.getElementById(bannernumber);
  alert.remove();
}
