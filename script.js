const button = document.querySelector('#btn');
const printOut = () => {
const storeType = document.querySelector('#store');

// Adding array of store
let storeOne = ["beans", "rice", "garri", "vegetables", "gabbage"];
let storeTwo = ["biscuit", "chocolate", "orage", "milk", "bread"];
let storeThree = ["pepsi", "coke-cola", "7up","hero"];

let x = storeOne.concat(storeTwo, storeThree);
console.log(x);

// Implement the input type
for (let i = 0; i < x.length; i++){
    console.log(x[i]);
    if (storeType.value !== x[1]) {
        alert("Not in shopping list");
        alert(x[i]);
        window.location.reload("");
    }else {``
        alert("the price is $20");
       let addUp = prompt("How many cup of Rice comrade");
       alert(addUp * 10 + "$");
       window.location.reload("");
    }
}

}

button.addEventListener('click',(event) => {
    event.preventDefault();
    // alert("hello world");
    printOut();
});

