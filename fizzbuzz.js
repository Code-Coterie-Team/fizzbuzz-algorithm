function FizzBuzz(){

    let input1 = Number((document.querySelector("#parameter1").value));


    if (isNaN(input1)){
        console.log("NaN");
    }
    else{
        if( input1 % 3 == 0  &&  input1 % 5 == 0 ){

            console.log("FizzBuzz");
        }
    
        else if (input1 % 3 == 0 &&  input1 % 5 != 0 ){
            console.log("Fizz");
        }
    
        else if(input1 % 5 == 0 &&  input1 % 3 != 0 ){
            console.log("Buzz");
        }
        
        else if (input1 % 3 != 0 && input1 % 5 != 0) {
    
            console.log("given input Number/Value");
        }
    }

}

// let result1 = FizzBuzz();
// document.getElementById("result").innerHtml = result1;