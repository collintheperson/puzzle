$(document).ready(function( ) {
  
  // var originalString = "Believe you can and your're halfway there. Theodore Roosevelt";
  var originalString = "Believe you can and your halfway there. Theordore Roosevelt";
  var splits = originalString.toLowerCase().split('');

  var puzzleLetters = [];
  var puzzleLetters = splits.map(function(letter) {
    vowels = ["a","e","i","o","u"];
    vowels.forEach(function(vowel) {
      if ( letter === vowel) {
        letter = "-";
      };
    });
    return letter;
  });
  $("#puzzle").append(puzzleLetters);

  });
