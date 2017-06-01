// Canvas kitöltése
function fillCanvas() {
    var canvas = document.querySelector("#myCanvas");
    var context = canvas.getContext("2d"); //kétdimenzióban szeretnénk rajzolni
    context.fillStyle = "#ff0000";
    context.fillRect(10, 10, 180, 80);
}

//fillCanvas();

// Kép betöltése.
function fillImg() {
    var canvas = document.querySelector("#myCanvas");
    var context = canvas.getContext("2d"); //kétdimenzióban szeretnénk rajzolni
    
    //Vonal rajzolása
    context.moveTo(100, 100);
    context.lineTo(300, 100);
    context.stroke();

    //Kör rajzolása
    context.beginPath();
    context.arc(200, 50, 40, 0, 2*Math.PI);
    context.stroke();
    
    //Kép kiválasztása
    var img = document.querySelector("#myImg");
    context.drawImage(img, 0, 0);
    
}

fillImg();


//Kép húzása és dobása
//Alapértelmezett esemény megállítása.
function allowDrop(ev) {
    ev.target.style.border = "dashed 5px #e0e0e0";
    //console.log(ev.target);
    ev.preventDefault(); //Az alap eseményt, amit a böngésző csinálna, megállítjuk.
    
    
}

//Amikor lehuzzák az elemről a másik elemet
function dropLeaved(ev) {
    ev.target.style.border = "solid 1px #e0e0e0";
    ev.preventDefault(); //Az alap eseményt, amit a böngésző csinálna, megállítjuk.
}

//Elem húzásának megkezdése
function drag(ev) {
    ev.dataTransfer.setData("id", ev.target.id); //Az eseménybe beletesszük a húzott elemünk id-jét.
    
}

//Ledobják az elemet.
function drop(ev) {
    ev.preventDefault(); //Az alap eseményt, amit a böngésző csinálna, megállítjuk.
    var id = ev.dataTransfer.getData("id");
    
}






