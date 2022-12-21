function CountElement(arr,k) {
    let count = 0;
    for(let i = 0 ; i< arr.length ; i++ ){
      for(let j= 0 ; j< arr[i].length ;j++){
         if(arr[i][j] ==k)
         count++;
        }
    
  }
  console.log(count);
}
let arr = [[2,4,6,8],[2,5,2,9]];
  CountElement(arr,2);