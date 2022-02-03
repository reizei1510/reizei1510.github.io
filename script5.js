function click1() {
    let re = /^\d+$/;
    let c = document.getElementById("count");
    let p = document.getElementById("price");
    let r = document.getElementById("result");
    if (re.test(c[0].value) && re.test(p[0].value)){
      alert(parseInt(c[0].value) * parseInt(p[0].value));
    }
    else {
      alert("Введены некорректные данные");
    }
    return false;
  }

window.addEventListener('DOMContentLoaded', function (event) {
    console.log("DOM fully loaded and parsed");
    let b = document.getElementById("button");
    b.addEventListener("click", click1);
});
