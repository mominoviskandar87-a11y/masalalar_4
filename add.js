for (let i=1; i<=10; i++){
    console.log(i);
}


let count=0
for (let i=2; i<=30; i++){
    console.log(i++)
}


for (let i=1; i<=50; i++){
    count +=i;
}
console.log(count)

let yigindi = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        yigindi += i;
    }
}
console.log(yigindi);


let natija = "";
let soni = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        natija += i + " ";
        soni++;
    }
}
console.log(natija.trim());
console.log("Soni:", soni);


let number = 7;
for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}


let numberr = -15;

if (numberr === 0) {
    console.log("Son nolga teng");
} else {
    let natija = "";
    for (let i = 1; i <= Math.abs(numberr); i++) {
        natija += i + " ";
    }
    console.log(natija.trim());
}


let secretNumber = 8;

for (let i = 1; i <= 10; i++) {
    if (i === secretNumber) {
        console.log("Son topildi");
        break;
    } else {
        console.log("Bu son emas");
    }
}



let numberrr = 58324;
let hisoblagich = 0;

while (numberrr > 0) {
    number = Math.floor(numberrr / 10);
    hisoblagich++;
}

console.log(hisoblagich + " ta raqam");




let numbeer = 28;
let yigindii = 0;

for (let i = 1; i < numbeer; i++) {
    if (numbeer % i === 0) {
        yigindii += i;
    }
}

if (yigindii === numbeer) {
    console.log("Bu mukammal son");
} else {
    console.log("Bu mukammal son emas");
}






