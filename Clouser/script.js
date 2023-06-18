function counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = counter();
alert(counter());
alert(counter());
alert(counter());
alert(counter());

let count = 0;
    (function () {
      if (count === 0) {
        let count = 1;
        console.log(count); // What is logged?
      }
      console.log(count); // What is logged?
    })();


        for (var i = 0; i < 3; i++) {
            setTimeout(function log() {
            console.log(i); // What is logged?
            }, 1000);
        }


    function outer(len){
        // let breath=20
        function inner(breath){
        return breath*len
        }
        return inner;
    }
    const area=outer(5);
    console.log(area(8));


    var a = 12;
    (function () {
      alert(a);
    })();

    var a = 10;
    var x = (function () {
      var a = 12;
      return function () {
        alert(a);
      };
    })();
    x();
    var globalVar = "xyz";

    (function outerFunc(outerArg) {
        var outerVar = 'a';
        
        (function innerFunc(innerArg) {
        var innerVar = 'b';
        
        console.log(
            "outerArg = " + outerArg + "\n" +
            "innerArg = " + innerArg + "\n" +
            "outerVar = " + outerVar + "\n" +
            "innerVar = " + innerVar + "\n" +
            "globalVar = " + globalVar);
        
        })(456);
    })(123);
   

    // function outer(){
    //   let count=0;
    //   function inner(){
    //     count++
    //   }
    //   retun
    // }


    function counter() {
      let counter = 0;
    
      function inccount() {
        counter++;
        console.log(counter);
      }
    
      return inccount;
    }
    
   const count1= counter();
    count1();
    count1();
    count1();
    

   
    
    
    