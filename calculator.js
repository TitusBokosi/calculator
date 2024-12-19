const calculator = document.querySelector('.mainDiv');
const display = document.createElement('input');
calculator.appendChild(display);
const btnsDiv = document.createElement('div');
calculator.appendChild(btnsDiv);
const one = document.createElement('button');
btnsDiv.appendChild(one);
const two = document.createElement('button');
btnsDiv.appendChild(two);
const three = document.createElement('button');
btnsDiv.appendChild(three);
const four = document.createElement('button');
btnsDiv.appendChild(four);
const five = document.createElement('button');
btnsDiv.appendChild(five);
const six = document.createElement('button');
btnsDiv.appendChild(six);
const seven = document.createElement('button');
btnsDiv.appendChild(seven);
const eight = document.createElement('button');
btnsDiv.appendChild(eight);
const nine = document.createElement('button');
btnsDiv.appendChild(nine);
const zero = document.createElement('button');
btnsDiv.appendChild(zero);
const add = document.createElement('button');
btnsDiv.appendChild(add);
const sub = document.createElement('button');
btnsDiv.appendChild(sub);
const mult = document.createElement('button');
btnsDiv.appendChild(mult);
const dev = document.createElement('button');
btnsDiv.appendChild(dev);
const equal = document.createElement('button');
btnsDiv.appendChild(equal);
const clear = document.createElement('button');
btnsDiv.appendChild(clear);

const btnsHolder = [one, two,three,four,five,six,seven,eight,nine,zero,add,sub,mult,dev,equal,clear];
const textContents = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/', '=', 'cleare'];

for( i =0; i < btnsHolder.length; i++){
    btnsHolder[i].textContent = textContents[i];
}


one.addEventListener('click',appendsToDisplay);
two.addEventListener('click', appendsToDisplay);
three.addEventListener('click',appendsToDisplay);
four.addEventListener('click', appendsToDisplay);
five.addEventListener('click',appendsToDisplay);
six.addEventListener('click', appendsToDisplay);
seven.addEventListener('click',appendsToDisplay);
eight.addEventListener('click', appendsToDisplay);
nine.addEventListener('click',appendsToDisplay);
zero.addEventListener('click', appendsToDisplay);
add.addEventListener('click',appendsToDisplay);
sub.addEventListener('click', appendsToDisplay);
mult.addEventListener('click',appendsToDisplay);
dev.addEventListener('click', appendsToDisplay);
clear.addEventListener('click', cleareDispaly);

let expressionHolder = '';
let firstNumber = '';
let secondNumber = '';
let operator = '';
let result = 0;

equal.addEventListener('click', extractString);

function extractString(){
    expressionHolder = display.value;
    for( i = 0; i < expressionHolder.length; i ++){
        if(!isNaN(expressionHolder.charAt(i))){
            firstNumber += expressionHolder.charAt(i)
        }
        else if(isNaN(expressionHolder.charAt(i))){
            operator = expressionHolder.charAt(i);
        }

    }
    secondNumber = expressionHolder.substring((expressionHolder.indexOf(operator)) +1)
    

    // if(operator === '+'){
    //     result = Number(firstNumber) + Number(secondNumber);
    // }
    display.value = firstNumber;
}


function cleareDispaly(){
    display.value = '';
    firstNumber = '';
    secondNumber = '';
    operator = '';
    expressionHolder = '';
}
function appendsToDisplay(item){
    display.value += item.target.textContent;
    expressionHolder += item.target.textContent;
}