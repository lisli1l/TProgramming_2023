function findMissingLetter(array){
    let string = array.join('');
    let lastWord = string.charCodeAt(0);
    for(var i = 1; i < string.length; i++)
      if (string.charCodeAt(i) - lastWord != 1){
        return String.fromCharCode(lastWord + 1);     
      }else{
        lastWord = string.charCodeAt(i);
      }  
  }