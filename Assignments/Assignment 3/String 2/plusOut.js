function plusOut(str, word){
  let slen = str.length;
  let wlen = word.length;
  let final = "";
  
  for (i = 0; i < slen; i++) {
    if (i <= slen - wlen) {
      let temp = str.substring(i,i+wlen);
      if (temp==(word)) {
        final += word;
        i += wlen-1;
      }
      else
        final += "+";
    }
    else
      final += "+";
  }
  
  return final;
}