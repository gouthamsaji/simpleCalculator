function updateDisplay(value){
    const displayElement=document.getElementById('display')
    if (displayElement.innerHTML==0){
        displayElement.innerHTML=value
    }
    else{
        displayElement.innerHTML+=value
    }
}

function clearDisplay(){
    const displayElement=document.getElementById('display')
    displayElement.innerHTML=0
}

function findResult(){
    const displayElement=document.getElementById('display')
    displayElement.innerHTML=eval(display.innerHTML)
}