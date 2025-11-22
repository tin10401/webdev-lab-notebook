const url = 'https://anapioficeandfire.com/api/books/';

const app = document.querySelector('#books');

const fetchData = (url) => {
  // Fetch all books from the API of Ice and Fire and append them to the DOM
  // Create an element for each book that contains title, author, publication year, and number of pages
  // Update the styles in JavaScript to center all the books in the container given

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // remove loader
      app.innerHTML = '';

      const wrapper = document.createElement('div');
      wrapper.style.display = 'flex';
      wrapper.style.flexWrap = 'wrap';
      wrapper.style.justifyContent = 'center';
      wrapper.style.gap = '1rem';

      data.forEach((book) => {
        const card = document.createElement('div');
        card.classList.add('p-3', 'border', 'rounded', 'bg-light');
        card.style.width = '220px';
        card.style.textAlign = 'left';

        const title = document.createElement('h2');
        title.textContent = book.name;

        const author = document.createElement('p');
        author.textContent = `Author: ${book.authors.join(', ')}`;

        const year = document.createElement('p');
        year.textContent = `Published: ${book.released.slice(0, 4)}`;

        const pages = document.createElement('p');
        pages.textContent = `Pages: ${book.numberOfPages}`;

        card.append(title, author, year, pages);
        wrapper.appendChild(card);
      });

      app.appendChild(wrapper);
    })
    .catch((error) => {
      app.textContent = 'Unable to load books.';
      console.error(error);
    });
};

fetchData(url);

