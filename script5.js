function click1() {
    let c = document.getElementById('count').value;
    let p = document.getElementById('price').value;
    let r = document.getElementById('result');
    if (re.test(c) && re.test(p)){
      r.innerHTML = parseInt(c) * parseInt(p);
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
