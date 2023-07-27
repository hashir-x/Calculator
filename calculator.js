// display content inside calculator screen

function display(content){
    result.value += content
}

// to clear calculator screen

function clearBox(){
    result.value = ""
}

// evaluate expression 

function calculate(){
    try{
        result.value = eval(result.value)
    }catch{
        result.value = "ERROR"
    }
}

function clearLastDigit(){
    result.value = result.value.slice(0,-1)
}