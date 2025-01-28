// while e do while
 /* let i = 1;

 while (i <= 8) {
    console.log(i);
    i++;
 }
*/ 


function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 20;
let rand =  10;

while (rand !== 10); {
 rand = random(min, max);
 console.log(rand);
}

console.log('#####');

 do {
    rand = random(min, max);
    console.log(rand);
 } while(rand !== 10);