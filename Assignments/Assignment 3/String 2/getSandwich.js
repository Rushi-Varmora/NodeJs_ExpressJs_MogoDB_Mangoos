function getSandwich(str){
  let len = str.length;
  String tmp = "";
  String final = "";
  let start = 0;
  let finish = 0;
  let found = false;

  if (len <= 10)
    return "";
  
  for ( i = 0; i < len - 4; i++) {
    tmp = str.substring(i, i+5);
     
    if (tmp==("bread") && found == true)
      finish = i; 
       
    if (tmp==("bread") && found == false) {
      start = i+5;
      found = true;
    }
  }
   
  final = str.substring(start,finish);
  return final;
}

}