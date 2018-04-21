'use strict';

page('/*', (ctx, next) => {
  $('.page').hide();
  next();
});

page('/', app.bookView.initIndexPage);
// page('/books/:book_id', app.showOne.initIndexPage);
page('/new', app.formView.initIndexPage);
page('/api/v1/books/', (ctx) => app.Book.fetchOne(ctx.params.id).then(app.showOne.initIndexPage));

page.start();