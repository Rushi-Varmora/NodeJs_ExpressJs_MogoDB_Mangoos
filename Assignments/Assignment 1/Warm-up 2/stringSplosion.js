function stringSplosion(str){
  let len = str.length;
  String temp = "";
  for (int i = 0; i < len + 1; i++)
  temp += str.substring(0,i);
  return temp;

}