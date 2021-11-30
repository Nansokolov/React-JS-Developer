

function printResult(id){
    let number = document.getElementById(id).value;

        if(number%2 == 0 && number%7 == 0) {
            document.getElementById('mynumberLabel').innerHTML= 'foobar';
            console.log("foobar");
        }
        else if(number%7 == 0) {
            document.getElementById('mynumberLabel').innerHTML = 'bar';
            console.log("bar");
        }
        else if(number%2 == 0) {
            document.getElementById('mynumberLabel').innerHTML = 'foo';
            console.log("foo");
        }else{
            document.getElementById('mynumberLabel').innerHTML = number;
            console.log(number);
        }
    
}




