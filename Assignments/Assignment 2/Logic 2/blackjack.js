function blackjack(a, b){
  if (a > 21 && b > 21) {
      return 0;
  }else if (a > 21) {
      return b;
  } else if (b > 21) {
      return a;
  }
  let sumA = 21 - a;
  let sumB = 21 - b;
  if (sumA > sumB) {
      return b;
  } else {
      return a;
  }
}