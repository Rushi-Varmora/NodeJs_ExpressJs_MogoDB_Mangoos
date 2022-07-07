function mirrorEnds(string){
  let len = string.length;
  let final = "";
  let temp1 = "";
  let temp2 = "";
 
  for (i = 0; i < len; i++) {
    temp1 += string.substring(i,i+1);
    temp2 = "";
    for (j = temp1.length-1; j >= 0; j--) {
      temp2 += temp1.substring(j,j+1);
      if (temp2==(string.substring(len-i-1,len)))
        final = temp1;
    }
  }
  return final;
}