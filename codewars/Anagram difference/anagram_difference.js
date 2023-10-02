function anagramDifference(w1,w2){
    var count1 = Array.from({length: 26}, (_, i) => 0); 
    var count2 = Array.from({length: 26}, (_, i) => 0);
  for (i = 0; i < w1.length ; i++)
        count1[w1.charAt(i).charCodeAt(0) -'a'.charCodeAt(0)]++;
   for (i = 0; i < w2.length ; i++)
        count2[w2.charAt(i).charCodeAt(0) -'a'.charCodeAt(0)]++;
  var result = 0;
    for (i = 0; i < 26; i++)
        result += Math.abs(count1[i] - count2[i]);
    return result;
}