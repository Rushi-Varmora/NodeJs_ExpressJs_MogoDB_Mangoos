function squirrelPlay(temp, isSummer){
  if (isSummer && temp <= 100 && temp >= 60)
    return true;
  if (!(isSummer) && temp <= 90 && temp >=60)
    return true;
  else
    return false;
}