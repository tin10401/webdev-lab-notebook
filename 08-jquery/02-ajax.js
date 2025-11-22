// Wait until the DOM is ready
$(document).ready(function () {
  const url = 'https://anapioficeandfire.com/api/books/';

  const $app = $('#books');
  const $loading = $('#loading');

  const addBookToDOM = (item) => {
    // Create a card for each book
    const $card = $('<div></div>');

    const $title = $('<h4></h4>').text(item.name);
    const $author = $('<p></p>').text(`by ${item.authors.join(', ')}`);
    const $published = $('<p></p>').text(`Published: ${item.released.substr(0, 4)}`);
    const $pages = $('<p></p>').text(`${item.numberOfPages} pages`);

    // Simple styling to center and space the cards
    $card.css({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: '20px',
    });

    $card.append($title, $author, $published, $pages);
    $app.append($card);
  };

  const fetchData = (url) => {
    $.ajax({
      url: url,
      method: 'GET',
      dataType: 'json',
    })
      .done(function (data) {
        data.forEach((item) => addBookToDOM(item));
      })
      .fail(function (jqXHR, textStatus, errorThrown) {
        console.error('Error fetching books:', textStatus, errorThrown);
        const $error = $('<p></p>').text('An error occurred. Please try again.');
        $app.append($error);
      })
      .always(function () {
        // Remove the loading gif after success or error
        $loading.remove();
      });
  };

  fetchData(url);
});

