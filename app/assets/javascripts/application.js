//removes top margin frpm right hand column if empty
function isEmpty( el ){
      return !$.trim(el.html())
  }
  if (isEmpty($('aside.col-md-4'))) {
      $('aside.col-md-4').addClass('empty');
  }

//reveal text swap
$('.reveal-code').click(function(){
		var $this = $(this);
		if($this.hasClass('collapsed')){
			$this.text(' Hide code');			
		} else {
			$this.text(' See code');
		}
	});
    
//input block label
$('input:radio').click(function() {
    $('input:radio[name='+$(this).attr('name')+']').parent().removeClass('active');
        $(this).parent().addClass('active');
});

//input block label
$('input:checkbox').click(function() {
    	$(this).parent().toggleClass('active');
});

//sticky-nav
function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#sticky-anchor').offset().top;
    if (window_top > div_top) {
        $('#sticky').addClass('stick');
        $('#sticky-anchor').height($('#sticky').outerHeight());
    } else {
        $('#sticky').removeClass('stick');
        $('#sticky-anchor').height(0);
    }
}

$(function() {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
});

//random image for hero-lcc
function randomImage(){
  var images = [
   '/public/images/home-hero-images/1.jpg',
   '/public/images/home-hero-images/2.jpg',
   '/public/images/home-hero-images/3.jpg',
   '/public/images/home-hero-images/4.jpg',
   '/public/images/home-hero-images/5.jpg',
   '/public/images/home-hero-images/6.jpg'];
  var size = images.length;
  var x = Math.floor(size * Math.random());
  console.log(x);
  var element = document.getElementsByClassName('hero-lcc-wrapper');
  console.log(element);
  if(element.length > 0)
  {
    element[0].style["background-image"] = "url("+ images[x] + ")";
  }
}

document.addEventListener("DOMContentLoaded", randomImage);

//search auto complete configuration
    var options = {
    url: "/public/javascripts/site-search.json",

    getValue: "page",

    template: {
        type: "description",
        fields: {
            description: "service"
        }
    },

    list: {
        maxNumberOfElements: 10,
        match: {
            enabled: true
        }
    },

    theme: "square"
};

//$("#hero-site-search").easyAutocomplete(options);

//ARIA accordion
!function(t,e,a){"use strict";var r={};t.ARIAaccordion=r,r.NS="ARIAaccordion",r.AUTHOR="Scott O'Hara",r.VERSION="2.1.0",r.LICENSE="https://github.com/scottaohara/accessible-components/blob/master/LICENSE.md";var i="accordion__trigger",n="accordion__heading";r.create=function(){var t,a,l,o,u,c,d="none",s=e.querySelectorAll("[data-aria-accordion]");for(c=0;c<s.length;c++){var A;if((t=s[c]).hasAttribute("id")||(t.id="acc_"+Math.floor(999*Math.random())+1),e.querySelectorAll("#"+t.id+"> li").length?(a=e.querySelectorAll("#"+t.id+" li > .accordion__panel"),l=e.querySelectorAll("#"+t.id+" li > ."+n)):(a=e.querySelectorAll("#"+t.id+" > .accordion__panel"),l=e.querySelectorAll("#"+t.id+" > ."+n)),t.hasAttribute("data-default")&&(d=t.getAttribute("data-default")),u=t.hasAttribute("data-constant"),t.hasAttribute("data-multi"),t.hasAttribute("data-transition")){var g=t.querySelectorAll(".accordion__panel");for(A=0;A<g.length;A++)g[A].setAttribute("style","transition: "+t.getAttribute("data-transition")+"s ease-in-out")}for(r.setupPanels(t.id,a,d,u),r.setupHeadingButton(l,u),o=e.querySelectorAll("#"+t.id+"> li").length?e.querySelectorAll("#"+t.id+" li > ."+n+" ."+i):e.querySelectorAll("#"+t.id+" > ."+n+" ."+i),A=0;A<o.length;A++)o[A].addEventListener("click",r.actions),o[A].addEventListener("keydown",r.keytrolls)}},r.setupPanels=function(t,e,a,r){var i,n,o,u;for(i=0;i<e.length;i++)n=t+"_panel_"+(i+1),o=a,u=r,e[i].setAttribute("id",n),l(e[0],!0),"none"!==o&&NaN!==parseInt(o)&&(o<=1?l(e[0],!1):o-1>=e.length?l(e[e.length-1],!1):l(e[o-1],!1)),(u&&"none"===o||NaN===parseInt(o))&&l(e[0],!1)},r.setupHeadingButton=function(t,a){var r,n,l,u,d,s;for(s=0;s<t.length;s++)n=(r=t[s]).nextElementSibling.id,l=e.getElementById(n).getAttribute("aria-hidden"),u=e.createElement("button"),d=r.textContent,r.innerHTML="",u.setAttribute("type","button"),u.setAttribute("aria-controls",n),u.setAttribute("id",n+"_trigger"),u.classList.add(i),"false"===l?(o(u,!0),c(u,!0),a&&u.setAttribute("aria-disabled","true")):(o(u,!1),c(u,!1)),r.appendChild(u),u.appendChild(e.createTextNode(d))},r.actions=function(t){var a,l=this.id.replace(/_panel.*$/g,""),o=e.getElementById(this.getAttribute("aria-controls"));a=e.querySelectorAll("#"+l.id+"> li").length?e.querySelectorAll("#"+l+" li > ."+n+" ."+i):e.querySelectorAll("#"+l+" > ."+n+" ."+i),t.preventDefault(),r.togglePanel(t,l,o,a)},r.togglePanel=function(t,a,r,i){var n,d,s=t.target;if("true"!==s.getAttribute("aria-disabled")&&(n=s.getAttribute("aria-controls"),c(s,"true"),"true"===s.getAttribute("aria-expanded")?(o(s,"false"),l(r,"true")):(o(s,"true"),l(r,"false"),e.getElementById(a).hasAttribute("data-constant")&&u(s,"true")),e.getElementById(a).hasAttribute("data-constant")||!e.getElementById(a).hasAttribute("data-multi")))for(d=0;d<i.length;d++)s!==i[d]&&(c(i[d],"false"),n=i[d].getAttribute("aria-controls"),u(i[d],"false"),o(i[d],"false"),l(e.getElementById(n),"true"))},r.keytrolls=function(t){if(t.target.classList.contains(i)){var a,r=t.keyCode||t.which,l=this.id.replace(/_panel.*$/g,"");switch(a=e.querySelectorAll("#"+l.id+"> li").length?e.querySelectorAll("#"+l+" li > ."+n+" ."+i):e.querySelectorAll("#"+l+" > ."+n+" ."+i),r){case 35:t.preventDefault(),a[a.length-1].focus();break;case 36:t.preventDefault(),a[0].focus()}}},r.init=function(){r.create()};var l=function(t,e){t.setAttribute("aria-hidden",e)},o=function(t,e){t.setAttribute("aria-expanded",e)},u=function(t,e){t.setAttribute("aria-disabled",e)},c=function(t,e){t.setAttribute("data-current",e)};r.init()}(window,document);