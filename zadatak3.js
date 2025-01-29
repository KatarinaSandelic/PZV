
    let num = Math.floor(Math.random() * 10) + 1;
    const Broj = prompt("Unesite broj od 1 do 10:");

    if (Broj === num) {
        alert("Bravo, pogodio si broj!");
    } else {
        alert("Netočno, traženi broj je: " + num);
    }

