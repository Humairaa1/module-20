function inchesToFeet(inches){
    feet=inches/12;
    return feet;
} 

const myInches = 135;
const myFeet = inchesToFeet(myInches);
console.log('my Feet = ' , myFeet);
