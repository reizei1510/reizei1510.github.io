 function click1(){
    let t = /^\d+$/;
    let f1 = document.getElementsByName("field1");
    let f2 = document.getElementsByName("field2");
    let r1 = document.getElementById("result1");
    if(t.test(f1[0].value) && t.test(f2[0].value)){
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
