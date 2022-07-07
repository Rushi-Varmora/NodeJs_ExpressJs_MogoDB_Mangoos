function without2(str){
    if(str.length > 1 && str.substring(0,2)==(str.substring(str.length-2))){
    return str.substring(2, str.length);
  }
  return str;
}