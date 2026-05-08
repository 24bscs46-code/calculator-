display=document.getElementById("display");
function pressbutton(value){
    if (value==="C"){
        display.value="";
    }
    else if (value==="="){
        display.value=eval(display.value);
    }
    else{
        display.value+=value;
    }
}
