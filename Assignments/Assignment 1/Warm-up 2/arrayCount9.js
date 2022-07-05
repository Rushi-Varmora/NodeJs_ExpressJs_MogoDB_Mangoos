function arrayCount9(nums){
  let counter = 0;

  for (let i = 0; i < nums.length; i++){

    if (nums[i] == 9)

      counter++;

  }

  return counter;

  
}