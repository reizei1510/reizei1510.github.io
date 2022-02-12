 function click1(){
    let t = /^\d+$/;
    let f1 = document.getElementsByName("field1");
    let f2 = document.getElementsByName("field2");
    let r = document.getElementById("result");
    if(t.test(f1[0].value) && t.test(f2[0].value)){
      r.innerHTML = parseInt(f1[0].value) * parseInt(f2[0].value);
    } else {
      r.innerHTML = "Введены некорректные данные!";
    }
    return false;
  }

  window.addEventListener('DOMContentLoaded', function (event) {
    console.log("DOM fully loaded and parsed");
    document.getElementById("button1").addEventListener("click", click1);
  });
