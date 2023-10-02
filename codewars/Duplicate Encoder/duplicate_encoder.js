function duplicateEncode(str){
    var word = str.toLowerCase();
    var unique = '';
      for (var i = 0; i < word.length; i++) {
        if (word.lastIndexOf(word[i]) === word.indexOf(word[i])) {
          unique += '(';
        } else
        unique += ')';
      }
      return unique;
    }