

let paises = ["Brasil", "Argentina", "Perú", "Venezuela"];

paises.push("Chile");
paises.unshift("Panamá");
console.log(paises);
/* Con splice el primer termino dice la posición donde lo quieres colocar y el segundo elemento los elementos  que vas a eliminar posterior a la posición del que estas metiendo*/
paises.splice(3, 0, "EEUU");
console.log(paises);
/* pop Elimina ultimo y retorna el eliminado*/
let p = paises.pop();
console.log(p);
/* shift Elimina primer y retorna el eliminado*/
let pp = paises.shift();
console.log(pp);




