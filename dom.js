const spanNumber=document.getElementsByTagName('span')[0];
const increamentButton=document.getElementById('increament');
const setZero=document.getElementById('setZero');
const decreamentButton=document.getElementById('decreament');
let num=0;

increamentButton.addEventListener('click',() => {
    num++;
    spanNumber.innerText=num;

})
decreamentButton.addEventListener('click',() => {
    num--;
    spanNumber.innerText=num;
    
})
setZero.addEventListener('click',() => {
    num=0;
    spanNumber.innerText=num;
    
})