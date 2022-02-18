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
function calc() {
        let t2 = /^\d+$/;
        let prod, count, checkbox, radio, answer;
        let result = 0;
        prod = document.getElementById('prod').value;
        count = parseInt(document.getElementById('count').value);
        checkbox = document.getElementsByName('checkbox');
        radio = document.getElementsByName('radio');
        answer = document.getElementById('answer');
        if (!t2.test(count) || (count < 0)) {
            answer.innerHTML = "Введите количество";
        } else {
            switch (prod) {
                case '1':
                    result = count * 300;
                    break;
                case '2':
                    if (radio[0].checked) {
                        result = count * 100;
                    }
                    if (radio[1].checked) {
                        result = count * 7000;
                    }
                    break;
                case '3':
                    result = count * 400;
                    if (checkbox[0].checked) {
                        result += count * 200;
                    }
                    if (checkbox[1].checked) {
                        result += count * 100;
                    }
                    break;
            }
            answer.innerHTML = result + " руб.";
        }
    } 

  window.addEventListener('DOMContentLoaded', function (event) {
    console.log("DOM fully loaded and parsed");
    document.getElementById("button1").addEventListener("click", click1);
    document.getElementById("prod").addEventListener("click", hiden);
    document.getElementById("count").addEventListener("change", calc);
    document.getElementById("prod").addEventListener("change", calc);
    document.getElementById("r1").addEventListener("change", calc);
    document.getElementById("r2").addEventListener("change", calc);
    document.getElementById("chk1").addEventListener("change", calc);
    document.getElementById("chk2").addEventListener("change", calc);
  });
