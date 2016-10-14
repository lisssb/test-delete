export default function() {
  // These comments are here to help you get started. Feel free to delete them.

  /*
  Config (with defaults).

  Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  this.namespace = '/api';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
  Shorthand cheatsheet:

  this.get('/posts');
  this.post('/posts');
  this.get('/posts/:id');
  this.put('/posts/:id'); // or this.patch
  this.del('/posts/:id');

  http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */
  this.get('/books');
  this.get('/books/:id');

//   this.get('/books', function(db, request) {
//     console.log(request.queryParams.book_id)
//   if(request.queryParams.book_id !== undefined) {
//     console.log(books.books, 'kkk')
//     let filteredBook = books.books.filter(function(i) {
//       //i hace referencia a cada uno de los elementos de rentals
//       console.log(i)
//       console.log(i.attributes)
//       console.log(i.attributes.books)
//       // return {data : {}}
//       // return i.attributes.books.toLowerCase().indexOf(request.queryParams.book_id.toLowerCase()) !== -1;
//     });
//     return { data: filteredBook };
//   } else {
//     return  books ;
//   }
// });

}
