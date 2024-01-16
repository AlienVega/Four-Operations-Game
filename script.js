var number1, number2, operator, result, answer, trueCount = 0, falseCount = 0;
number1 = document.getElementById("number1");
number2 = document.getElementById("number2");
operator = document.getElementById("Operator");
result = document.getElementById("result");
answer = document.getElementById("answer");
trueElement = document.getElementById("True");
falseElement = document.getElementById("False");

// Rastgele sayı üretilecek yer
function randomnumber(min, max) {
    var number = Math.floor(Math.random() * (max - min)) + min;
    return number;
}

// Oyun başlangıcında veya soru tahmini sonrası yeni soru oluşturma fonksiyonu
function newquestion() {
    var operation = ["+", "-", "*", "/"];
    operator.textContent = operation[randomnumber(0, 4)];  // Rastgele 4 operatörden birini oluşturacak
    number1.textContent = randomnumber(0, 50);
    number2.textContent = randomnumber(0, 50);
    result.value = "";

    // Kalansız bölme işlemi yapacak koşul
    if (operator.textContent === "/") {
        while (true) {
            number2.textContent = randomnumber(0, 50);
            if (number1.textContent % number2.textContent === 0) {
                break;
            }
        }
    }
}

// Sayfa yüklendiğinde yeni soru soran fonksiyon (newquestion) çalışır.
window.onload = function () {
    newquestion();
}

// Cevapla butonuna basıldığında değerlendirme işlemini yapma
answer.onclick = function () {
    var ans, num1, num2;
    num1 = Number(number1.textContent);
    num2 = Number(number2.textContent);
    switch (operator.textContent) {
        case "+": ans = num1 + num2; break;
        case "*": ans = num1 * num2; break;
        case "/": ans = num1 / num2; break;
        case "-": ans = num1 - num2; break;
        default: break;
    }
    if (result.value === ans.toString()) {
        trueCount++;
        trueElement.textContent = trueCount;
    } else {
        falseCount++;
        falseElement.textContent = falseCount;
    }
    newquestion();
}
