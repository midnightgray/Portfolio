//pwinsess mewi
// ang galing galing ng pwinsess mewi ko naka gawa na ng first calculatorr hindi na siya gumagawa ng html sa canva.
let result=0;
let firstinput="";
let current_value="";
let operation="";

function calculation(ops,num1,num2){
    const number1=parseFloat(num1);
    const number2=parseFloat(num2);

    switch(ops){
        case "+":
            result=number1+number2;
            break;
        case "-":
            result=number1-number2;
            break;
        case "/":
            if(number2==0){
                alert("Cannot divide to 0");
            }
            result=number1/number2;
            break;
        case "x":
            result=number1*number2;
            break;
        case "%":
            result=number1%number2;
             break;
    }
    return result;
}

function handleOperation(event){
    const value=event.target.value;
    document.querySelector(".num").value=null;
    if(value=="+" || value=="-" || value=="x" || value=="/" || value=="%"){
        firstinput=current_value;
        operation=value;
    }
    if(value=="AC"){
        document.querySelector(".num").value=null;
        firstinput="";
        current_value="";
        operation="";
    }
    if(value=="+/-"){
        const negats=parseFloat(current_value);
        document.querySelector(".num").value = -negats;
        current_value = -negats.toString();    
    }
}

function handleclick(event){
    const value=event.target.value;
    current_value = document.querySelector(".num").value = document.querySelector(".num").value + value;
}

function handleSubmit(){
    result=calculation(operation,firstinput,current_value);
    document.querySelector(".num").value = result;
    //printing result and inputs
    console.log("result:",result,"num1: ", firstinput, "num2: ", current_value, "operation: ", operation);
}

