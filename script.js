
    //    bildirimler yapılıyor
    var number1,number2,operator,result,answer,True=0,False=0;
    number1=document.getElementById("number1");
    number2=document.getElementById("number2");
    operator=document.getElementById("Operator");
    result=document.getElementById("result");
    answer=document.getElementById("answer");
    True=document.getElementById("True");
    False=document.getElementById("False");
    // rastgele sayı üretilecek yer
    function randomnumber(min,max){
        var number=Math.floor(Math.random()*(max-min))+min;
        return number;
    }
    // oyun başlangıcında veya soru tahmini sonrası yeni soru oluşturma fonksiyonu
    function newquestion(){
        var operation =["+","-","*","/"];
        operator.textContent=operation[randomnumber(0,4)];  // rastgele 4 operatörden birini oluşturacak
        number1.textContent=randomnumber(0,50);
        number2.textContent=randomnumber(0,50);
        result.value="";
        // kalansız bölme işlemi yapacak koşul

        if(operator.textContent=="/"){
            while(True){
                number2.textContent=randomnumber(0,50);
                if(number1.textContent%number2.textContent==0){
                    break;
                }
            }
        }

     }

    // sayfa yüklendiğinde yeni soru soran fonksiyon (newquestion) çalışır.

    window.onload = function() {
        newquestion();
    }
    // CEVAPLA BUTONUNA BASILDIĞINDA DEĞERLENDİRME İLEMİNİ YAPMA
    answer.onclick=function(){
        var ans ,num1,num2
        num1 = Number(number1.textContent);
        num2 = Number(number2.textContent);
        switch (operator.textContent) {
            case "+" :ans=num1+num2;break;
            case "*" :ans=num1*num2;break;
            case "/" :ans=num1/num2;break;
            case "-" :ans=num1-num2;break;
            default:break;
        }
        if (result.value==ans){
            True.textContent=Number(True.textContent)+1
        }else{
            False.textContent=Number(False.textContent)+1
        }
        newquestion();
    }

