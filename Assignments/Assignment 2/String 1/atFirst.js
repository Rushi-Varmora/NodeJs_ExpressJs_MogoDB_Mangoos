function atFirst(str){
    if(str.length < 1){
    return str + "@@";
  } else if(str.length < 2){
    return str + "@";
  }
  return str.substring(0,2);
}