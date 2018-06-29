/*
   docSkimmer theme v0.3.0
   License: BSD-2-Clause license (https://github.com/hfagerlund/mkdocs-docskimmer/blob/master/LICENSE)
*/

var MenuPanel = (function() {
  'use strict';

  var menuOpenControl = document.getElementById('menu-hamburger');
  var containerPageToc = document.getElementById("page-toc");
  var menuCloseControl = document.getElementById('page-toc__closebtn');
  var pageTocLinks = document.getElementsByClassName("page-toc__link");
  var containerMainContent = document.getElementById("maincontent");

  function _bindEventListeners(){
    menuCloseControl.addEventListener('click', _menuCloseControlEventHandler);
    menuCloseControl.addEventListener('keydown', _menuCloseControlEventHandler);
    menuOpenControl.addEventListener('click', _menuOpenControlEventHandler);
    menuOpenControl.addEventListener('keydown', _menuOpenControlEventHandler);
    for (var i = 0; i < pageTocLinks.length; i++) {
      pageTocLinks[i].addEventListener('click', _menuCloseControlEventHandler);
      pageTocLinks[i].addEventListener('keydown', _menuCloseControlEventHandler);
    }
  }

  function _hideMenuOpenControl(){
    menuOpenControl.style.visibility = "hidden";
  }

  function _menuOpenControlEventHandler(event) {
    containerPageToc.style.width = "17em";
    containerMainContent.style.marginLeft = "19em";
  }

  function _menuCloseControlEventHandler(event) {
    //only respond to Enter or Space keys, or to click event
    if((event.keyCode === 13 || event.keyCode === 32) || (event.type === 'click')){
      containerPageToc.style.width = "0";
      containerMainContent.style.marginLeft= "2em";
      //check whether page-toc link was activated
      if(event.target.href){
        var link = event.target.href,
            anchor = "#";
        if(link.indexOf(anchor) !== -1){
          //scroll activated anchor link to top of page
          window.location.href = event.target.href;
        }
      }
    }
  }

  return {
    init: function() {
      if(containerPageToc){
        _bindEventListeners();
      } else {
        _hideMenuOpenControl();
      }
    } //END init
  };
})();

MenuPanel.init();
