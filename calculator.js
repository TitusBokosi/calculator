const mainDiv = document.querySelector('.mainDiv');
const input = document.createElement('input');
const btnsDiv = document.createElement('div');
// mainDiv.appendChild(input);
const inputDiv = document.createElement('div');
mainDiv.appendChild(inputDiv);
inputDiv.appendChild(input)
mainDiv.appendChild(btnsDiv);
const digitHolder =new Array(10);
for(i = 0; i <= 9; i++){
    const btn = document.createElement('button');
    btn.textContent = i.toString();
    digitHolder[i] = btn;
    btnsDiv.appendChild(btn);
    // btn.addEventListener('click', () => {
        // input.value = btn.textContent;
    // })
}


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

digitHolder.forEach(button => {
    button.addEventListener('click', () => {
        input.value = button.textContent;
    })
})

actionbtns.forEach(button => {
    button.addEventListener('click', () => {
        input.value = button.textContent;
    })
})


