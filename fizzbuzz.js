function FizzBuzz(){

    let input1 =(document.querySelector("#parameter1").value);


    if( input1 % 3 == 0  &&  input1 % 5 == 0 ){

        console.log("FizzBuzz");
    }

    else if (input1 % 3 == 0 ){
        console.log("Fizz");
    }

    else if(input1 % 5 == 0){
        console.log("Buzz");
    }
    
    else if (input1 % 3 != 0 && input1 % 5 != 0) {

        console.log("given input Number/Value");
    }

    else if( typeof(input1) !== Number ) {

        console.log("NaN");
    }
}