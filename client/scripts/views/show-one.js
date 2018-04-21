'use strict';

var app = app || {};

(function(module) {
  const showOne = {};

  showOne.initIndexPage = function() {
    $('.container').hide();
    $('.detail-view').show();
    const id = $(event.target).parent().data('id');
    page('/api/v1/books/' + id);
    let template = Handlebars.compile($('#show-one-template').text());
    $('.detail-view').append(template);
  };

  module.showOne = showOne;
})(app);