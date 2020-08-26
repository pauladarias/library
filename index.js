async function getBooks() {
  let response = await fetch("books.json");
  let books = await response.json();
  // unique id
  let n = 1;
  return books.map((book) => {
    book.id = n;
    n += 1;
    return book;
  });
}

getBooks().then((books) => {
  let sampleBook = books[0];
  console.log(sampleBook);

  document.body.innerHTML = `<div class="my-book">
      <div class="my-book-cover">${sampleBook.title}</div>
      <div class="my-book-spine">Spine</div>
      <div class="my-book-footer">Footer</div>
  </div>`;
});
