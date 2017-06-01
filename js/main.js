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

///////////////////////////////////////////////////

//Kép húzása és dobása
//Alapértelmezett esemény megállítása, letiltása, hogy az az esemény menjen végbe amit mi //megadunk.
function allowDrop(ev) {
    //ev.target.style.border = "dashed 5px #e0e0e0";
    //console.log(ev.target);
    ev.preventDefault(); //Az alap eseményt, amit a böngésző csinálna, megállítjuk.
    
    
}

//Amikor lehuzzák az elemről a másik elemet
function dropLeaved(ev) {
    //ev.target.style.border = "solid 1px #e0e0e0";
    ev.preventDefault(); //Az alap eseményt, amit a böngésző csinálna, megállítjuk.
}

//Elem húzásának megkezdése
function drag(ev) {
    ev.dataTransfer.setData("id", ev.target.id); //Az eseménybe beletesszük a húzott elemünk id-jét.
    
}

//Ledobják az elemet.
function drop(ev) {
    ev.preventDefault(); //Az alap eseményt, amit a böngésző csinálna, megállítjuk.
    
    //Esemény célpontja, ahova beejtettük az elemet.
    var div = ev.target;
       
    //Elem hozzáadása. Elmentjük, hogy honnan indult a húzás.
    var id = ev.dataTransfer.getData("id");
    //Megadjuk, hogy honnan húztuk ki az elemet, itt még a szülőé, dobás előtt
    var sdiv = document.querySelector("#"+id).parentNode;
    
    // ev.target.appendChild(document.querySelector("#"+id));
    //Hozzáadjuk az új helyhez, azt az elemet, amit elkezdtünk húzni.
    div.appendChild(document.querySelector("#"+id));
    
    //Ár kalkulálása, a forrás és a cél div összegét is frissítjük.
    calcPrice(div);
    calcPrice(sdiv);
}

function calcPrice(div) {
    //Lekérjük az összes olyan elemet, aminek van data-ar tulajdonsága.
    var order = div.querySelectorAll("[data-ar]");
    
    //Végigmegyünk a rendelés elemein
    var price = 0;
    //Az összes képen, ami be van rakva a div-be végigmegyünk és összesítjük, göngyöljük.
    // Az order tömbön megyünk végig, és az átadja a 2. paraméterében megadott fgv.-nek 
    // egyesével a tömb értékeit. Szöveg értéket egész decimális számmá alakítjuk.
    Array.prototype.forEach.call(order, function(item) {
        var ar = item.getAttribute("data-ar");
        price += parseInt(ar, 10);                                         
    });
    
    // Az adott div-be (.price-div) beleírjuk a fent összesített árat.
    div.querySelector(".price-div").innerHTML = price+" Ft";

}






