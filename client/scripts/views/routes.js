'use strict';

page('/*', (ctx, next) => {
  $('.page').hide();
  next();
});

page('/', app.bookView.initIndexPage);
// page('/books/:book_id', (ctx) => app.Book.fetchOne(ctx.params.id));
// page('/books/new');

page.start();