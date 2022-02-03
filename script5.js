function click1(){
    let re = /^\d+$/;
    let c = document.getElementById("count");
    let p = document.getElementById("price");
    let r = document.getElementById("result");
    if (re.test(c.value) && re.test(p.value)){
      r.innerHTML = parseInt(c.value) * parseInt(p.value);
    }
    else {
      r.innerHTML = "Введены некорректные данные!";
    }
    r = c * p;
    console.log("result");
    console.log(result);
    document.getElementById('sum').innerHTML = "Сумма равна: " + r + " руб.";
    return false;
  }
