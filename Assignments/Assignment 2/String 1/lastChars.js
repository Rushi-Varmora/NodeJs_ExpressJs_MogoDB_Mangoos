function lastChars(a, b){
  if(a.length < 1 && b.length < 1){
    return "@@";
  } else if(a.length < 1){
    return "@" + b.substring(b.length-1,b.length);
  } else if(b.length < 1){
    return a.substring(0,1) + "@";
  }
  return a.substring(0,1) + b.substring(b.length-1,b.length);
}