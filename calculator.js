const mainDiv = document.querySelector('.mainDiv');
const input = document.createElement('input');
const btnsDiv = document.createElement('div');
// mainDiv.appendChild(input);
const inputDiv = document.createElement('div');
mainDiv.appendChild(inputDiv);
inputDiv.appendChild(input)
mainDiv.appendChild(btnsDiv);

const one = document.createElement('button');
const two = document.createElement('button');
const three = document.createElement('button');
const four = document.createElement('button');
const five = document.createElement('button');
const six = document.createElement('button');
const seven = document.createElement('button');
const eight = document.createElement('button');
const nine = document.createElement('button');
const zero = document.createElement('button');
const digitHolder = [one, two, three, four, five, six, seven, eight, nine, zero];
const digitText = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

for(i = 0; i < digitHolder.length; i++){
    btnsDiv.appendChild(digitHolder[i]);
    digitHolder[i].textContent = digitText[i];
}

// for(i = 0; i <= 9; i++){
//     const btn = document.createElement('button');
//     btn.textContent = i.toString();
//     digitHolder[i] = btn;
//     btnsDiv.appendChild(btn);
//     // btn.addEventListener('click', () => {
//         // input.value = btn.textContent;
//     // })
// }


const mutlbtn = document.createElement('button');
const divbtn = document.createElement('button')
const addbtn = document.createElement('button')
const subbtn = document.createElement('button')
const equalbtn = document.createElement('button')
const clearbtn = document.createElement('button')
const actionbtns = [mutlbtn, divbtn,addbtn,subbtn,equalbtn,clearbtn];
for(i = 0; i < actionbtns.length; i++){
    btnsDiv.appendChild(actionbtns[i]);
}

const textContents = ['*', '/', '+', '-', '=', 'X'];

for(i = 0; i < textContents.length; i++){
    actionbtns[i].textContent = textContents[i];
}


let firstNUmber = '';
let operator = '';
let secondNumber = '';
let display = '';


digitHolder.forEach(buton => {
    buton.addEventListener('click', () => {
       display = display.concat(buton.textContent);
       input.value = display;
    })
})

actionbtns.forEach(button => {
    button.addEventListener('click', () => {
        display = display.concat(button.textContent);
        operator = button.textContent;
        input.value = display;
    })
});




