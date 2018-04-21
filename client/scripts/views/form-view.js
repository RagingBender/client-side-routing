'use strict';

var app = app || {};

(function(module) {
  const formView = {};

  formView.initIndexPage = function() {
    $('#book-list').empty();
    $('.container').hide();
    $('.form-view').show();
    $('.form-view').off().on('submit', 'form', (event) => {
      event.preventDefault();
      let book = new Book({
        title: $('#title').val(),
        author: $('#author').val(),
        authorUrl: $('#isbn').val(),
        category: $('#img_url').val(),
        body: $('#descriptino').val()
      });
      book.insertRecord();
      window.location = '../';
    });
  };
  module.formView = formView;

})(app);