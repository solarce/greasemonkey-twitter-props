// ==UserScript==
// @name        massive props
// @namespace   caseyboardman.com
// @description replace the twitter heart / fulfill wishes of @ryanqnorth
// @include     https://twitter.com/*
// @version     1
// @grant       none
// @require       http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// ==/UserScript==
this.$ = this.jQuery = jQuery.noConflict(true);
$(document).ready(function () {
  $('div.HeartAnimation').css({
    'background-image': 'none',
    'font-size': '10px',
    'top': '-8px',
    'left': '-24px'
  });
  $('div.HeartAnimation').html('florps');
});
