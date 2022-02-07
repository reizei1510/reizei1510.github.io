function click1(){
    let t1 = /^\d+$/;
    let f1 = document.getElementByName("field1");
    let f2 = document.getElementByName("field2");
    let r1 = document.getElementById("result1");
    if(t1.test(f1.value) && t1.test(f2.value)){
      r1.innerHTML = parseInt(f1.value) * parseInt(f2.value);
    } else {
      r1.innerHTML = "Введены некорректные данные!";
    }
    return false;
  }

  window.addEventListener('DOMContentLoaded', function (event) {
    console.log("DOM fully loaded and parsed");
    document.getElementById("button1").addEventListener("click", click1);
  });

let param = {
    "Radio": {
    "radio1": 0,
    "radio2": 100
    },
    "checkbox1": {
    "check1": 200,
    "check2": 100
    },
    "Type":
    [100, 300, 500]
};
console.log(param);
let pr=0; //Для радиокнопок
let pch=0; //Для чекбокса
window.addEventListener("DOMContentLoaded", function (event) {
    let f3 = document.getElementsByName("field3"); //Количество товара
    let r2 = document.getElementById("result"); //Результат(конечная стоимость)
    let s = document.getElementsByName("Type"); //Изначальный выбор(1, 2 или 3)
    s[0].addEventListener("change", function(event) {
      let select = event.target; //Делегирование событий
      console.log(select.value);
      let t2 = /^\s*\d+\s*$/;
      if(t2.exec(f3[0].value))
      {
        if (select.value == "1")
        {r2.innerHTML=param.Type[0]*f3[0].value;}
        if (select.value == "2")
        {
          r2.innerHTML=(param.Type[1]+pr)*f3[0].value;
          let rad = document.querySelectorAll(".radio1 input[type=radio]"); //Все элементы для селектора радиокнопок
          rad.forEach(function(radio) { //Функция для каждой радиокнопки(по очереди для всех)
          radio.addEventListener("change", function(event) {
          rad = event.target;
          console.log(rad.value);
          if(t2.exec(f3[0].value))
          {
            if(document.getElementById("radio1").checked)
            {
                r2.innerHTML=(param.Type[1]+param.Radio.radio1)*f3[0].value;
                pr=param.Radio.radio1;
            }
            if(document.getElementById("radio2").checked)
            {
                r2.innerHTML=(param.Type[1]+param.Radio.radio2)*f3[0].value;
                pr=param.Radio.radio2;
            }
            if(document.getElementById("radio3").checked)
            {
                r2.innerHTML=(param.Type[1]+param.Radio.radio3)*f3[0].value;
                pr=param.Radio.radio3;
            }
        }
        else {alert("Некорректный ввод");}
        });});
        }
        if (select.value == "3")
        {
          r.innerHTML=(param.Type[2]+pch)*f3[0].value;
          let ch = document.querySelectorAll(".checkbox1 input[type=checkbox]");
          ch.forEach(function(checkbox) {
          checkbox.addEventListener("change", function(event) {
          ch = event.target;
          console.log(ch.value);
          if(t2.exec(f3[0].value))
          {
            if(document.getElementById("ch1").checked)
            {
                r2.innerHTML=(param.Type[2]+param.checkbox1.check1)*f3[0].value;
                pch=param.checkbox1.check1;
            }
            else
            {
                r2.innerHTML=(param.Type[2])*f3[0].value;
                pch=0;
            }
          }
          else alert("Некорректный ввод");
        });
      });
      }
    }
  else {alert("Некорректный ввод");}
    });
    return false;
});
window.addEventListener("DOMContentLoaded", function (event) {
let s = document.getElementsByName("Type");
s[0].addEventListener("change", function(event) {
let select = event.target;
let radios = document.getElementById("prodOptions");
console.log(select.value);
radios.style.display = (select.value == "2" ? "block" : "none");
});
let r = document.querySelectorAll(".prodOptions input[type=radio]");
r.forEach(function(radio) {
radio.addEventListener("change", function(event) {
  let r = event.target;
  console.log(r.value);
});
});
});
window.addEventListener("DOMContentLoaded", function (event) {
let s = document.getElementsByName("prodType");
s[0].addEventListener("change", function(event) {
  let select = event.target;
  let checkboxes = document.getElementById("checkbox1");
  console.log(select.value);
  checkboxes.style.display = (select.value == "3" ? "block" : "none");
});
let r = document.querySelectorAll(".checkbox1 input[type=checkbox]");
c.forEach(function(checkbox) {
  checkbox.addEventListener("change", function(event) {
    let c = event.target;
    console.log(r.value);
  });
});
});
