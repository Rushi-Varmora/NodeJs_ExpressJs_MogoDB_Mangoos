function countHi(str){
  let count =0;
  if (str.length ==1 && str.charAt(0) == 'h')
  count = 0;
  else
  {
  for(i = 0;i<str.length;i++) {
    if ( (str.charAt(i) == 'h') && (str.charAt(i+1) == 'i') )
     count+=1; 
     }
     }
     return count;
}