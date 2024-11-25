// localStorage.setItem("car", "BMW")
// let carValue = localStorage.getItem("car")
// console.log(carValue);
// localStorage.removeItem("car")



// sessionStorage.setItem("car", "BMW")
// let bValue = localStorage.getItem("car")
// console.log(bValue);

 
window.onload = function(){
    let savedInput = localStorage.getItem("int");
    if (savedInput) {
        document.getElementById("output").textContent = savedInput;
    }
}



function showInput () {
    let int = document.getElementById("int").value;
    let out = document.getElementById("output");


    localStorage.setItem("int" , int);

    out.textContent = int;

    document.getElementById("int").value = "";
}