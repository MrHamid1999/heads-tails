window.addEventListener("load", () => {
    var playerName = prompt("Please Enter Your Name", "");
    if (playerName == null || playerName == "") {

    } else {
        document.getElementById("playerName").innerHTML = playerName;
    }
})
var head = document.querySelector(".head");
var tail = document.querySelector(".tail");
var WinResult = 0;
var LoseResult = 0;
head.addEventListener("click", moveL);
function moveL() {
    var timer = setInterval(sum, 20);
    var t = 0;
    var o = 0.35;
    function sum() {
        if (t == 35) {
            clearInterval(timer)
        } else {
            t++;
            o -= 0.01;
            head.style.left = t + "%";
            tail.style.opacity = o;
            if (o == 0) {
                tail.style.visibility = "hidden";
            }
        }
        head.value = 1;
        tail.value = 0;
        document.getElementById("err").innerHTML = "";
    }

}
tail.addEventListener("click", moveR);
function moveR() {
    var timer = setInterval(sum, 20);
    var t = 0;
    var o = 0.35;
    function sum() {
        if (t == 35) {
            clearInterval(timer)
        } else {
            t++;
            o -= 0.01;
            tail.style.right = t + "%";
            head.style.opacity = o
        }
        tail.value = 1;
        head.value = 0;
        document.getElementById("err").innerHTML = "";
    }

}
document.getElementById("btn").addEventListener("click", game);
function game() {
    if (head.value == 1) {
        Spining(head);
    } else if (tail.value == 1) {
        Spining(tail);
    } else {
        document.getElementById("err").innerHTML = "Please choose a side first";
    }
    function Spining(div) {

        var timerA = setInterval(spinnerA, 10);
        var timerB = setInterval(spinnerB, 5);
        var i = 150;
        var d = 0;
        function spinnerA() {
            
            if (i == 250) {
                clearInterval(timerA)
            }else{
                i+= 5;
                div.style.height = i + "px";
                div.style.width = i + "px";
            }

           
        }
        function spinnerB() {
            if (d == 3600) {
                clearInterval(timerB);

            } else {
                d += 10
                div.style.transform = "rotateX(" + d + "deg)";
            }
        }
    }
    function calculate() {
        var cal = Math.random();
        function random() {
        if (cal <=0.5) {
            cal =0;
        } else {
            cal = 1;
        } 
        }
        random();

        
        
        setTimeout(delay, 1800);
        function delay()
        {
            var ele = document.getElementById("finalResult");
            var s = 5;
            if(cal == 1)
        {
           var win = setInterval(finalResultW , 10);
           WinResult++;
           document.getElementById("playerResult").innerHTML = WinResult;
            
        }else{
          var lose =  setInterval(finalResultL , 10);
          LoseResult ++;
          document.getElementById("computerResult").innerHTML = LoseResult;
          background();

        }
        setTimeout(recovery , 1000);
        function recovery() {
           var again = setInterval(playAgain , 10);
            var a = 0;
            function playAgain() {
                if (a >= 35) {
                    clearInterval(again);
                    var wid =window.matchMedia("max-width:600px");
                    head.value = 0;
                    tail.value = 0;
                    head.style.height = "100%";
                    tail.style.height ="100%" ;
                    tail.style.width = "150px";
                    head.style.width = "150px";
                    head.style.left = 0;
                    head.style.opacity = 1;
                    tail.style.right = 0;
                    tail.style.opacity = 1;
                    ele.classList.remove("Result-PopUp-W") ;
                    ele.classList.remove("Result-PopUp-L") ;
                    ele.innerHTML = "";
                    ele.style.top =0; 
                    tail.className = "coin tail";
                    head.className = "coin head";
                    a = 0;
                    
                }else{
                    a++;
                    ele.style.top = a + "%";
                }
            }
        }
        
        
        function finalResultW() {
            ele.innerHTML = "you won";
            ele.className = "Result-PopUp-W";
            if (s <= 1) {
                clearInterval(win);

            } else {
                s-= 0.1;
                ele.style.transform = "scale(" + s +")";
            }
        }
        function finalResultL() {
            ele.innerHTML = "you lost";
            ele.className = "Result-PopUp-L";
            if (s <= 1) {
                clearInterval(lose)
            } else {
                s-= 0.05;
                ele.style.transform = "scale(" + s +")";
            }
        }
        function background()
        {
            if(head.value == 1)
            {
                head.className = "coin tail";
            }if(tail.value == 1){
                tail.className = "coin head";
                head.style.left = "35%";

            }
        }
           
        }

    }
    calculate();

}
var width = document.getElementsByClassName("CoinSides")[0].style.width ;
console.log(width);


