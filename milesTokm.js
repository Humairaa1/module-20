function milesToKm(miles){
    km = miles*1.60934;
    return km;
}

const bdMiles = 57320;
const bdKm = milesToKm(bdMiles);
console.log('BD Km = ' , bdKm);