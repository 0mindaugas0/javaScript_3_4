let a;
a = prompt("Įveskite pirmos kraštinės ilgį");
a = Math.abs(a);

let b;
b = prompt("Įveskite antros kraštinės ilgį");
b = Math.abs(b);

let plotas = plotoSkaiciavimas(a, b);
console.log(plotas);


function plotoSkaiciavimas(ilgis, plotis){
    return ilgis * plotis;
}