function towerBuilder(nFloors) {
    let result = [];
    let cpace = "";
    let star = "";
    for (i = 1; i <= nFloors; i++){
      cpace = (" ").repeat(nFloors - i);
      star = ("*").repeat((2 * i) - 1);
      result.push(cpace + star + cpace);
    }
    return result;
  } 