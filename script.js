
    function myfunc(){
    var b1,b2,b3,b4,b5,b6,b7,b8,b9;
    b1 = document.getElementById("b1").value;
    b2 = document.getElementById("b2").value;
    b3 = document.getElementById("b3").value;
    b4 = document.getElementById("b4").value;
    b5 = document.getElementById("b5").value;
    b6 = document.getElementById("b6").value;
    b7 = document.getElementById("b7").value;
    b8 = document.getElementById("b8").value;
    b9 = document.getElementById("b9").value;


    var bt1,bt2,bt3,bt4,bt5,bt6,bt7,bt8,bt9;
    bt1 = document.getElementById("b1");
    bt2 = document.getElementById("b2");
    bt3 = document.getElementById("b3");
    bt4 = document.getElementById("b4");
    bt5 = document.getElementById("b5");
    bt6 = document.getElementById("b6");
    bt7 = document.getElementById("b7");
    bt8 = document.getElementById("b8");
    bt9 = document.getElementById("b9");

    if((b1 == 'x' || b1 == 'X') && (b2 == 'x' || b2 == "X")
&& (b3 == 'x' || b3 == 'X')){
    document.getElementById('print').innerHTML = 'PLAYER 1 WON';
    bt4.disabled = true;
    bt5.disabled = true;
    bt7.disabled = true;
    bt6.disabled = true;
    bt8.disabled = true;
    bt9.disabled = true;

    bt1.style.color = "red";
    bt2.style.color = "red";
    bt3.style.color = "red";
}

else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' || 
b4 == 'X') && (b7 == 'x' || b7 == 'X')) { 
document.getElementById('print').innerHTML = "Player X won"; 
bt2.disabled = true; 
bt3.disabled = true; 
bt5.disabled = true; 
bt6.disabled = true; 
bt8.disabled = true; 
bt9.disabled = true; 

bt1.style.color = "red"; 
bt4.style.color = "red"; 
bt7.style.color = "red";
}
else if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' || 
        b8 == 'X') && (b9 == 'x' || b9 == 'X')) { 
        document.getElementById('print').innerHTML = "Player X won"; 
  
        bt1.disabled = true; 
        bt2.disabled = true; 
        bt3.disabled = true; 
        bt4.disabled = true; 
        bt5.disabled = true; 
        bt6.disabled = true; 
  
        bt7.style.color = "red"; 
        bt8.style.color = "red"; 
        bt9.style.color = "red"; 
    } 
    else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' || 
        b6 == 'X') && (b9 == 'x' || b9 == 'X')) { 
        document.getElementById('print').innerHTML = "Player X won"; 
  
        bt1.disabled = true; 
        bt2.disabled = true; 
        bt4.disabled = true; 
        bt5.disabled = true; 
        bt7.disabled = true; 
        bt8.disabled = true; 
  
        bt3.style.color = "red"; 
        bt6.style.color = "red"; 
        bt9.style.color = "red"; 
    } 
    else if((b1 == 'x' || b1 == 'X') && (b5 == 'x' || b5 == 'X')&& (b9 == 'x' || b9 == 'X')){
        document.getElementById('print').innerHTML = "PLAYER X WON";
        bt2.disabled = true;
        bt3.disabled = true;
        bt4.disabled = true;
        bt6.disabled = true;
        bt7.disabled = true;
        bt8.disabled = true;


        bt1.style.color = "red";
        bt5.style.color = "red";
        bt9.style.color = "red";
    }

    else if((b3 == 'x' || b3 == 'X') && (b5 == 'x' || b5 == 'X')&& (b7 == 'x' || b7 == 'X')){
        document.getElementById('print').innerHTML = 'PLAYER X WON';
        bt1.disabled = true;
        bt2.disabled = true;
        bt4.disabled = true;
        bt6.disabled = true;
        bt9.disabled = true;
        bt8.disabled = true;


        bt3.style.color = "red";
        bt5.style.color = "red";
        bt7.style.color = "red";
    }
    else if((b2 == 'x' || b2 == 'X') && (b5 == 'x' || b5 == 'X')&& (b8 == 'x' || b8 == 'X')){
        document.getElementById('print').innerHTML = 'PLAYER X WON';
        bt1.disabled = true;
        bt3.disabled = true;
        bt4.disabled = true;
        bt6.disabled = true;
        bt7.disabled = true;
        bt9.disabled = true;


        bt2.style.color = "red";
        bt5.style.color = "red";
        bt8.style.color = "red";
    }

    else if((b4 == 'x' || b4 == 'X') && (b5 == 'x' || b5 == 'X')&& (b6 == 'x' || b6 == 'X')){
        document.getElementById('print').innerHTML = 'PLAYER X WON';
        bt2.disabled = true;
        bt3.disabled = true;
        bt1.disabled = true;
        bt9.disabled = true;
        bt7.disabled = true;
        bt8.disabled = true;


        bt4.style.color = "red";
        bt5.style.color = "red";
        bt6.style.color = "red";
    }
    else if((b1 == 'o' || b1 == 'O') && (b2 == 'o' || b2 == 'O')&& (b3 == 'o' || b3 == 'O')){
        document.getElementById('print').innerHTML = 'PLAYER O WON';
        bt5.disabled = true;
        bt9.disabled = true;
        bt4.disabled = true;
        bt6.disabled = true;
        bt7.disabled = true;
        bt8.disabled = true;


        bt1.style.color = "red";
        bt2.style.color = "red";
        bt3.style.color = "red";
    }

    else if((b1 == 'o' || b1 == 'O') && (b4 == 'o' || b4 == 'O')&& (b7 == 'o' || b7 == 'O')){
        document.getElementById('print').innerHTML = 'PLAYER O WON';
        bt5.disabled = true;
        bt9.disabled = true;
        bt2.disabled = true;
        bt6.disabled = true;
        bt3.disabled = true;
        bt8.disabled = true;


        bt1.style.color = "red";
        bt4.style.color = "red";
        bt7.style.color = "red";
    }

    else if((b7 == 'o' || b7 == 'O') && (b8 == 'o' || b8 == 'O')&& (b9 == 'o' || b9 == 'O')){
        document.getElementById('print').innerHTML = 'PLAYER O WON';
        bt5.disabled = true;
        bt3.disabled = true;
        bt4.disabled = true;
        bt6.disabled = true;
        bt1.disabled = true;
        bt2.disabled = true;


        bt7.style.color = "red";
        bt8.style.color = "red";
        bt9.style.color = "red";
    }

    else if((b3 == 'o' || b3 == 'O') && (b6 == 'o' || b6 == 'O')&& (b9 == 'o' || b9 == 'O')){
        document.getElementById('print').innerHTML = 'PLAYER O WON';
        bt5.disabled = true;
        bt1.disabled = true;
        bt4.disabled = true;
        bt2.disabled = true;
        bt7.disabled = true;
        bt8.disabled = true;


        bt3.style.color = "red";
        bt6.style.color = "red";
        bt9.style.color = "red";
    }

    else if((b1 == 'o' || b1 == 'O') && (b5 == 'o' || b5 == 'O')&& (b9 == 'o' || b9 == 'O')){
        document.getElementById('print').innerHTML = 'PLAYER O WON';
        bt5.disabled = true;
        bt9.disabled = true;
        bt4.disabled = true;
        bt6.disabled = true;
        bt7.disabled = true;
        bt8.disabled = true;


        bt1.style.color = "red";
        bt5.style.color = "red";
        bt9.style.color = "red";
    }
    else if((b3 == 'o' || b3 == 'O') && (b5 == 'o' || b5 == 'O')&& (b7 == 'o' || b7 == 'O')){
        document.getElementById('print').innerHTML = 'PLAYER O WON';
        bt5.disabled = true;
        bt9.disabled = true;
        bt4.disabled = true;
        bt6.disabled = true;
        bt7.disabled = true;
        bt8.disabled = true;


        bt3.style.color = "red";
        bt5.style.color = "red";
        bt7.style.color = "red";
    }
    else if((b2 == 'o' || b2 == 'O') && (b5 == 'o' || b5 == 'O')&& (b8 == 'o' || b8 == 'O')){
        document.getElementById('print').innerHTML = 'PLAYER O WON';
        bt5.disabled = true;
        bt9.disabled = true;
        bt4.disabled = true;
        bt6.disabled = true;
        bt7.disabled = true;
        bt8.disabled = true;


        bt2.style.color = "red";
        bt5.style.color = "red";
        bt8.style.color = "red";
    }
    else if((b4 == 'o' || b4 == 'O') && (b5 == 'o' || b5 == 'O')&& (b6 == 'o' || b6 == 'O')){
        document.getElementById('print').innerHTML = 'PLAYER O WON';
        bt5.disabled = true;
        bt9.disabled = true;
        bt4.disabled = true;
        bt6.disabled = true;
        bt7.disabled = true;
        bt8.disabled = true;


        bt4.style.color = "red";
        bt5.style.color = "red";
        bt6.style.color = "red";
    }
    
   
    

    else{
        if(flag == 1){
            document.getElementById("print").innerHTML = 'PLAYER X TURN';
        }
        else{
            document.getElementById("print").innerHTML = 'PLAYER 0 TURN';
        }
    }

    
    }


    function myfunc_2(){
        location.reload();
        b1 = b2 = b3 = b4= b5= b6= b7 = b8 = b9 = '';
    }


    flag = 1;
    function myfunc_3(){
        if(flag == 1){
            document.getElementById("b1").value = 'X';
            document.getElementById("b1").disabled = true;
            flag = 0;
        }
        else{
            document.getElementById("b1").value = 'O';
            document.getElementById("b1").disabled = true;
            flag = 1;
        }
    }

        function myfunc_4(){
            if(flag == 1){
                document.getElementById("b2").value = 'X';
                document.getElementById("b2").disabled = true;
                flag = 0;
            }
            else{
                document.getElementById("b2").value = 'O';
                document.getElementById("b2").disabled = true;
                flag = 1;
            }
        }

        function myfunc_5(){
            if(flag == 1){
                document.getElementById("b3").value = 'X';
                document.getElementById("b3").disabled = true;
                flag = 0;
            }
            else{
                document.getElementById("b3").value = 'O';
                document.getElementById("b3").disabled = true;
                flag = 1;
            }

        }

        function myfunc_6(){
            if(flag == 1){
                document.getElementById("b4").value = 'X';
                document.getElementById("b4").disabled = true;
                flag = 0;
            }
            else{
                document.getElementById("b4").value = 'O';
                document.getElementById("b4").disabled = true;
                flag = 1;
            }

        }

        function myfunc_7(){
            if(flag == 1){
                document.getElementById("b5").value = 'X';
                document.getElementById("b5").disabled = true;
                flag = 0;
            }
            else{
                document.getElementById("b5").value = 'O';
                document.getElementById("b5").disabled = true;
                flag = 1;
            }

        }

        
        function myfunc_8(){
            if(flag == 1){
                document.getElementById("b6").value = 'X';
                document.getElementById("b6").disabled = true;
                flag = 0;
            }
            else{
                document.getElementById("b6").value = 'O';
                document.getElementById("b6").disabled = true;
                flag = 1;
            }

        }

        
        function myfunc_9(){
            if(flag == 1){
                document.getElementById("b7").value = 'X';
                document.getElementById("b7").disabled = true;
                flag = 0;
            }
            else{
                document.getElementById("b7").value = 'O';
                document.getElementById("b7").disabled = true;
                flag = 1;
            }

        }

        
        function myfunc_10(){
            if(flag == 1){
                document.getElementById("b8").value = 'X';
                document.getElementById("b8").disabled = true;
                flag = 0;
            }
            else{
                document.getElementById("b8").value = 'O';
                document.getElementById("b8").disabled = true;
                flag = 1;
            }

        }

        
        function myfunc_11(){
            if(flag == 1){
                document.getElementById("b9").value = 'X';
                document.getElementById("b9").disabled = true;
                flag = 0;
            }
            else{
                document.getElementById("b9").value = 'O';
                document.getElementById("b9").disabled = true;
                flag = 1;
            }

        }

