function oddEven(number){
    const result=number%2;
    if(result == 0){
        return true;
    }
    else{
        return false;
    }
}

const even = oddEven(10);
console.log(even);