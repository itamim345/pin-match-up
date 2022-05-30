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

function pinVerify(){
    const generatedPin = document.getElementById('generated-pin').value;
    const typedValue = document.getElementById('typed-key').value;
    if(generatedPin === typedValue){
        document.getElementById('pin-match').style.display = "block";
    }else{
        document.getElementById('pin-dismatch').style.display = "block";
    }
}
document.getElementById('submit').addEventListener('click',function(){
    pinVerify();
})
