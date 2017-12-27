/************* Captilize first character ************/
String.prototype.capitalizeFirstLetter = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

/************* Captilize first character of word ************/
String.prototype.capitalizeEachLetter = function() {
  return this.toLowerCase()
    .split(' ')
    .map(function(word) {
      return word.capitalizeFirstLetter();
    })
    .join(' ');
};
