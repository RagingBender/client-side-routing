'use strict';

var app = app || {};

(function(module) {
  const showOne = {};

  showOne.initIndexPage = function() {
    $('.container').hide();
    $('.show-one').show();
    //figure out code to show one
  };

  module.showOne = showOne;
})(app);