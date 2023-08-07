function findArrSum (numbers){
    
    for (let i=0 ; i<numbers.length ; i++){
        if(numbers[i] % 2 == 0){
            sum=sum+numbers[i];
        }
        
    }
    return sum;
    
}
let sum=0;
const arr = [11 ,12 ,13, 14 ,15, 16, 17, 18];
const totalSum = findArrSum(arr);
console.log(totalSum);
