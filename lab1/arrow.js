// write a fxn  number b/w 0 to 9  and return in words using arrow fxn
const toWords = (num) => {
  switch (num) {
    case 0: return 'Zero';
    case 1: return 'One';
    case 2: return 'Two';
    case 3: return 'Three';
    case 4: return 'Four';
    case 5: return 'Five';
    case 6: return 'Six';
    case 7: return 'Seven';
    case 8: return 'Eight';
    case 9: return 'Nine';
    default: return 'Invalid';
  }
};
console.log(toWords(0)); 
console.log(toWords(5)); 
console.log(toWords(9)); 
console.log(toWords(12)); 


//create another fxn that takes a number show in words with the hlp of towards fxn

/*const rollnum="2503201000041";
const digit =String(rollnum).split("");
console.log(digit);*/
//USING FOR EACH LOOP:-
const rollNum = "2503201000041";
const digits = String(rollNum).split("");
console.log(digits);

let inWords = "";

digits.forEach((d) => {
    inWords += " " + toWords(Number(d));
});

console.log(inWords);





