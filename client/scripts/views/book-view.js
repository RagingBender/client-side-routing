'use strict';

var app = app || {};

(function (module) {
  const bookView = {};

  bookView.initIndexPage = function () {
    $('.container').hide();
    $('.book-view').show();
    module.Book.all.map(book => $('#book-list').append(book.toHtml()));
  };

  bookView.oneBook = (bookdata) => {
    console.log("bookdata", bookdata);
    $('.container').hide();
    $('.detail-view').show();
    let template = Handlebars.compile($('#show-one-template').text());
    $('.detail-view').append(template(bookdata));
  };

  const createPage = {};

  createPage.init = () => {
    $('.form-view').off().on('submit', 'form', (event) => {
      event.preventDefault();
      $('#book-list').empty();
    });
    $('.form-view').show();
  };
  module.bookView = bookView;
})(app);

$(function () {
  app.Book.fetchAll(app.bookView.initIndexPage);
});