function xyBalance(str){
  Boolean x = false;
  Boolean y = false;
  let len = str.length;

  for (let i = 0; i < len; i++) {
    if (str.charAt(i) == 'x' && y == true){
      x = true;
      y = false;
    } else if (str.charAt(i) == 'x') {
      x = true;
    }
    if (str.charAt(i) == 'y' && x == true)
      y = true;
  }
  if (x == false)
    y = true;
  return y;

}