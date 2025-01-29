function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
  }
  
  const d = new Date();
  let h = addZero(d.getHours());
  let m = addZero(d.getMinutes());
  let s = addZero(d.getSeconds());
  let time = h + ":" + m + ":" + s;
  document.getElementById("demo").innerHTML = time;


if (vrijeme <= 10) {
    console.log("Dobro jutro");
} else if (vrijeme >= 11 && vrijeme <= 18) {
    console.log("Dobar dan");
} else if (vrijeme >= 19) {
    console.log("Dobro večer");
}
