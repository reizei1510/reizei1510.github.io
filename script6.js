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

  window.addEventListener('DOMContentLoaded', function (event) {
    console.log("DOM fully loaded and parsed");
    document.getElementById("button1").addEventListener("click", click1);
  });

let param = {
    "options": {
    "radio1": 0,
    "radio2": 6900
    },
    "checkbox1": {
    "ch1": 200,
    "ch2": 100
    },
    "product":
    [500, 100, 300]
};

console.log(param);
let pr=0;
let pch=0;
window.addEventListener("DOMContentLoaded", function (event) {
    let f3 = document.getElementsById("field3");
    let r2 = document.getElementById("result2");
    let sel = document.getElementsByName("product");
    sel[0].addEventListener("change", function(event) {
      let select = event.target;
      console.log(select.value);
      let t2 = /^\s*\d+\s*$/;
      if(t2.exec(f3[0].value))
      {
        if (select.value == "1")
        {
            r.innerHTML=param.product[0]*f3[0].value;
        }
        if (select.value == "2")
        {
          r.innerHTML=(param.product[1]+pr)*f3[0].value;
          let rad = document.querySelectorAll(".prodOptions input[type=radio]");
          rad.forEach(function(radio) {
          radio.addEventListener("change", function(event) {
          rad = event.target;
          console.log(rad.value);
          if(t2.exec(f3[0].value))
          {
            if(document.getElementById("option1").checked)
            {
                r2.innerHTML=(param.product[1]+param.Options.option1)*f3[0].value;
                pr=param.Options.option1;
            }
            if(document.getElementById("option2").checked)
            {
                r2.innerHTML=(param.product[1]+param.Options.option2)*f3[0].value;
                pr=param.Options.option2;
            }
            if(document.getElementById("option3").checked)
            {
                r2.innerHTML=(param.product[1]+param.Options.option3)*f3[0].value;
                pr=param.Options.option3;
            }
        }
        else {
            r2.innerHTML = "Введите количество товара";
        }
        });});
        }
        if (select.value == "3")
        {
          r2.innerHTML=(param.product[2]+pch)*f3[0].value;
          let ch = document.querySelectorAll(".checkbox1 input[type=checkbox]");
          ch.forEach(function(checkbox) {
          checkbox.addEventListener("change", function(event) {
          ch = event.target;
          console.log(ch.value);
          if(t2.exec(f3[0].value))
          {
            if(document.getElementById("ch1").checked)
            {
                r2.innerHTML=(param.product[2]+param.checkbox1.check1)*f3[0].value;
                pch=param.checkbox1.check1;
            }
            else
            {
                r2.innerHTML=(param.product[2])*f3[0].value;
                pch=0;
            }
          }
          else {
              r2.innerHTML = "Введите количество товара";
          }
        });
      });
      }
    }
  else {
      r2.innerHTML = "Введите количество товара";
  }
    });
    r2.innerHTML="2";
    return false;
});
window.addEventListener("DOMContentLoaded", function (event) {
let s = document.getElementsByName("product");
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
let s = document.getElementsByName("product");
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
