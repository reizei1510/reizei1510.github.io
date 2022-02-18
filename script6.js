function click1(){
    let t1 = /^\d+$/;
    let f1 = document.getElementsByName("field1");
    let f2 = document.getElementsByName("field2");
    let r1 = document.getElementById("result1");
    if(t1.test(f1[0].value) && t1.test(f2[0].value)){
      r1.innerHTML = parseInt(f1[0].value) * parseInt(f2[0].value);
    } else {
      r1.innerHTML = "Введены некорректные данные!";
    }
    return false;
  }

function hiden() {
    let prod;
    prod = document.getElementById('prod').value;
    switch (prod) {
        case'1':
            document.getElementById("radio").hidden = true;
            document.getElementById("checkbox").hidden = true;
            break;
        case'2':
            document.getElementById("radio").hidden = false;
            document.getElementById("checkbox").hidden = true;
            break;
        case'3':
            document.getElementById("radio").hidden = true;
            document.getElementById("checkbox").hidden = false;
            break;
    }
}
function click2() {
        let prod, count, checkbox, radio, result, answer;
        var rate, chec = 0;
        type = document.getElementById('prod').value;
        count = parseInt(document.getElementById('count').value);
        checkbox = document.getElementsByName('checkbox');
        radio = document.getElementsByName('radio');
        answer = document.getElementById('answer');
    
        if ((!Number.isInteger(count)) || (count < 0)) {
            answer.innerHTML = "Введите количество";
        } else {
            for (var i = 0; i < radio.length; i++) {
                if (radio[i].checked) {
                    rate = radio[i].value;
                }
            }
            for (var i = 0; i < checkbox.length; i++) {
                if (checkbox[i].checked) {
                    chec += checkbox[i].value;
                }
            }
            switch (prod) {
                case '1':
                    result = count * 300;
                    break;
                case '2':
                    if (rate == 1) {
                        result = count * 100;
                    }
                    if (rate == 2) {
                        result = count * 7000;
                    }
                    break;
                case '3':
                    if (chec == 0) {
                        result = count * 400;
                    }
                    if (chec == 1) {
                        result = count * 600;
                    }
                    if (chec == 2) {
                        result = count * 100;
                    }
                    if (chec == 12) {
                        result = count * (700);
                    }
                    break;
            }
            answer.innerHTML = "Стоимость: " + result + " руб.";
        }
        console.log("prod");
        console.log(prod);
        console.log("count");
        console.log(count);
        console.log("radio");
        console.log(rate);
        console.log("checkbox");
        console.log(chec);
        console.log("answer");
        console.log(answer);
    } 

  window.addEventListener('DOMContentLoaded', function (event) {
    console.log("DOM fully loaded and parsed");
    document.getElementById("button1").addEventListener("click", click1);
    document.getElementById("prod").addEventListener("click", hiden);
    document.getElementById("count").addEventListener("change", click2);
    document.getElementById("prod").addEventListener("change", click2);
    document.getElementById("r1").addEventListener("change", click2);
    document.getElementById("r2").addEventListener("change", click2);
    document.getElementById("chk1").addEventListener("change", click2);
    document.getElementById("chk2").addEventListener("change", click2);
  });
