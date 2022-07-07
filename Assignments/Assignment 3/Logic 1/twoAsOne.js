function twoAsOne(a, b, c){
  if((a+b)==c)
    return true;
  else if((a+c)==b)
    return true;
  else if((b+c)==a)
    return true;
  else return false ;
}