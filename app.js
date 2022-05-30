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


