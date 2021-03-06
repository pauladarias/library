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

function getBookHtml(book) {
  return `<div class="my-book">
      <div class="my-book-cover">${book.title}</div>
      <div class="my-book-spine"></div>
      <div class="my-book-footer"></div>
  </div>`;
}

function displayBooks(books) {
  let sampleBook = books[0];
  console.log(sampleBook);

  document.body.innerHTML = `<div class="my-library">
      ${books.map(getBookHtml).join("")}
  </div>`;
}

getBooks()
  .then(displayBooks)
  .catch((e) => console.log(e));
