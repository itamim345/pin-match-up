function getpin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin+ '';
    if(pinString.length == 4){
        return pin;
    }else{
        return getpin();
    }
}
document.getElementById('genarate').addEventListener('click', function(){
    document.getElementById('generated-pin').value = getpin();
})

document.getElementById('keypad').addEventListener('click', function(event){
    const InputNumber = (event.target.innerText);
    const calcDisplay = document.getElementById('typed-key');
    if(isNaN(InputNumber)){
        if(InputNumber == 'C'){
            calcDisplay.value = "";
        }
    }else{
        const oldNumber = calcDisplay.value;
        const newNumber = oldNumber+InputNumber;
        calcDisplay.value = newNumber;
    }
})
