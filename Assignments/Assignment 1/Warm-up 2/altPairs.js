function altPairs(str){
  String result = "";

  for (let i=0; i<str.length; i += 4) {

    let end = i + 2;

    if (end > str.length) {

      end = str.length;
}

    result = result + str.substring(i, end);

  }

  return result;

}