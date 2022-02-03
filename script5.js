function click1(){
    let re = /^\d+$/;
    let c = document.getElementByID("field1");
    let p = document.getElementByID("field2");
    let r = document.getElementByID("result");
    if(re.test(c.value) && re.test(p.value)){
      r.innerHTML = parseInt(c.value) * parseInt(p.value);
    }
    else {
      r.innerHTML = "Введены некорректные данные!";
    }
    return false;
  }

  window.addEventListener('DOMContentLoaded', function (event) {
    console.log("DOM fully loaded and parsed");
    document.getElementById("button").addEventListener("click", click1);
  });
