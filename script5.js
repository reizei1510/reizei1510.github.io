function click1(){
    let re = /^\d+$/;
    let c = document.getElementByID("count");
    let p = document.getElementByID("price");
    let r = document.getElementByID("result");
    if(re.test(f1.value) && re.test(f2.value)){
      r.innerHTML = parseInt(f1.value) * parseInt(f2.value);
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
