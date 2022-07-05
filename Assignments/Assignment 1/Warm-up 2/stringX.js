function stringX(str){
  String result = "";

  let len = str.length;

  for (let i = 0; i < len; i++){

    String temp = str.charAt(i);

    if (!(i > 0 && i < len - 1 && temp == 'x'))
      result = result + temp;

  }

    return result; 
  
}