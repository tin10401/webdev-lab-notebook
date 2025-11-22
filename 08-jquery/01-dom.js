// Wait until the DOM is ready
$(document).ready(function () {
  // Exercise #1:
  // When the user clicks the 'copy' button, copy the user input to the output area

  $('#copy').on('click', function () {
    const value = $('#userInput').val();
    $('#output1').text(value);
  });

  // Exercise #2:
  // When the user enters input text, copy the user input to the output area

  $('#userInput2').on('input', function () {
    const value = $(this).val();
    $('#output2').text(value);
  });
});

