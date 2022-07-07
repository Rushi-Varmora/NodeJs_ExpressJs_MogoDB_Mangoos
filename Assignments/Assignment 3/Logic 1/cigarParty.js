function cigarParty(cigars, isWeekend){
  if (isWeekend == true && cigars >= 40)
    return true;
  if (!(isWeekend) && cigars >=40 && cigars <= 60)
    return true;
  else
    return false;
}