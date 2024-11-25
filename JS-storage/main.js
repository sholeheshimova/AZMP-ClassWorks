const form = document.getElementById("form")
const textInput = document.getElementById("textInput")
const scoreInput = document.getElementById("scoreInput")
const calculateAverage = document.getElementById("calculateAverage")
const average = document.getElementById("average")
const sumbit = document.getElementById("sumbit")



let studentsArr;
window.addEventListener("DOMContentLoaded", function (){
    studentsArr = JSON.parse(localStorage.getItem("student")) || [];
    average.textContent = calculateAverage(studentsArr);
})






form.addEventListener("sumbit", function(e){
e.preventDefault();

const student = {
    id: Date.now(),
    score: +scoreInput.value,
    name: textInput.value

};
studentsArr.push(student)
localStorage.setItem("student" , JSON.stringify(studentsArr));

this.reset();
}
) 

function calculateAverage(arr){
    let sum = 0;
    arr.forEach(item => {
        sum +=item.score
    });
    return sum / arr.length
}