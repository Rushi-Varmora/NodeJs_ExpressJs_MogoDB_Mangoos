function blueTicket(a, b, c){
  let ab = a + b;
  let bc = b + c;
  let ac = a + c;
 
  if (ab == 10 || bc == 10 || ac == 10)
    return 10;
  if (ab - bc == 10 || ab - ac == 10)
    return 5;
  else
    return 0;
}