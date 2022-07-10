let personas = ["Heidi","Aithana", "Nathan", "Nabil"];
let carros = ["toyota", "fiat", "suzuki", "audi"];

show(personas);
showDom("array1", personas);
showDom("array2", carros);

function show(arr){
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

function showDom(element, arr){
    document.getElementById(element).innerHTML = "";

    for(let i = 0; i < arr.length; i++){
        document.getElementById(element).innerHTML+=  
        `<div>${arr[i]}</div>`;
    }


}
