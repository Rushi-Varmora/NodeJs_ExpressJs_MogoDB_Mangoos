function countTriple(str){
  let len = str.length;
  let count = 0;
  
  for (i = 0; i < len-2; i++){
    let temp = str.charAt(i);
    if (temp == str.charAt(i+1) && temp == str.charAt(i+2))
      count++;
  }
 return count;
}