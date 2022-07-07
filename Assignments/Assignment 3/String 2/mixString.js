function mixString(a, b){
  let alen = a.length;
  let blen = b.length;
  let max = Math.max(alen, blen);
  let word = "";
   
  for (i = 0; i < max; i++) {
    if (i <= alen-1)
      word += a.substring(i,i+1);
    if (i <= blen-1)
      word += b.substring(i,i+1);
   }
  return word;
}