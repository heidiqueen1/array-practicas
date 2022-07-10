let numbers = ["Heidi","Aithana", "Nathan", "Nabil"];

show(numbers);
showDom("array1", numbers);

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
