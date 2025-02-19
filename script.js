function opseg(){
    let a = document.getElementById("prviBroj").value;
    let b = document.getElementById("drugiBroj").value;

    let opseg = (2 * a) + (2 * b);

    document.getElementById("opseg").innerHTML= opseg;

}
function povrsina(){
    let a = document.getElementById("prviBroj").value;
    let b = document.getElementById("drugiBroj").value;

    let povrsina = a * b;

    document.getElementById("povrsina").innerHTML= povrsina;

}