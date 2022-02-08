function click1(){
    let t1 = /^\d+$/;
    let f1 = document.getElementById("field1");
    let f2 = document.getElementById("field2");
    let r1 = document.getElementById("result1");
    if(t1.test(f1.value) && t1.test(f2.value)){
      r1.innerHTML = parseInt(f1.value) * parseInt(f2.value);
    } else {
      r1.innerHTML = "Некорректные данные";
    }
    return false;
  }

  window.addEventListener('DOMContentLoaded', function (event) {
    console.log("DOM fully loaded and parsed");
    document.getElementById("button1").addEventListener("click", click1);
  });

let param = {
    "Options": {
    "option1": 0,
    "option2": 6900
    },
    "checkbox1": {
    "prop1": 200,
    "prop2": 100
    },
    "prodType":
    [500, 100, 300]
};
console.log(param);
let pr=0;
let pch=0;
window.addEventListener("DOMContentLoaded", function (event) {
    let f = document.getElementsById("field3");
    let r = document.getElementById("result");
    let s = document.getElementsByName("prodType");
    s[0].addEventListener("change", function(event) {
      let select = event.target;
      console.log(select.value);
      let re = /^\s*\d+\s*$/;
      if(re.exec(f[0].value))
      {
        if (select.value == "1")
        {r.innerHTML=param.prodType[0]*f[0].value;}
        if (select.value == "2")
        {
          r.innerHTML=(param.prodType[1]+pr)*f[0].value;
          let rad = document.querySelectorAll(".prodOptions input[type=radio]");
          rad.forEach(function(radio) {
          radio.addEventListener("change", function(event) {
          rad = event.target;
          console.log(rad.value);
          if(re.exec(f[0].value))
          {
            if(document.getElementById("option1").checked)
            {
                r.innerHTML=(param.prodType[1]+param.Options.option1)*f[0].value;
                pr=param.Options.option1;
            }
            if(document.getElementById("option2").checked)
            {
                r.innerHTML=(param.prodType[1]+param.Options.option2)*f[0].value;
                pr=param.Options.option2;
            }
            if(document.getElementById("option3").checked)
            {
                r.innerHTML=(param.prodType[1]+param.Options.option3)*f[0].value;
                pr=param.Options.option3;
            }
        }
        else {r.innerHTML = "Введите количество товара";}
        });});
        }
        if (select.value == "3")
        {
          r.innerHTML=(param.prodType[2]+pch)*f[0].value;
          let ch = document.querySelectorAll(".checkbox1 input[type=checkbox]");
          ch.forEach(function(checkbox) {
          checkbox.addEventListener("change", function(event) {
          ch = event.target;
          console.log(ch.value);
          if(re.exec(f[0].value))
          {
            if(document.getElementById("ch1").checked)
            {
                r.innerHTML=(param.prodType[2]+param.checkbox1.prop1)*f[0].value;
                pch=param.checkbox1.prop1;
            }
            else
            {
                r.innerHTML=(param.prodType[2])*f[0].value;
                pch=0;
            }
          }
          else {r.innerHTML = "Введите количество товара";}
        });
      });
      }
    }
  else {r.innerHTML = "Введите количество товара";}
    });
    return false;
});
window.addEventListener("DOMContentLoaded", function (event) {
let s = document.getElementsByName("prodType");
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
