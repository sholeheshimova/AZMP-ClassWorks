import { BASE_URL } from "./constant.js";

const tBody = document.querySelector("tbody")
const spinner = document.querySelector(".spinner")

function getAllData(endpoint) {
    fetch(`${BASE_URL}${endpoint}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            drawTable(data)
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            spinner.classList.add("d-none");
            document.body.style.backgroundColor = "dark";
        });
}


function drawTable(array) {
    tBody.innerHTML = "";
    array.forEach((element) => {
        tBody.innerHTML += `
                <tr>
                   <td>${element.id}</td>
                   <td>${element.companyName}</td>
                   <td>${element.contactTitle}</td>
                   <td>${element.address?.phone}</td>
                   <td>${element.address?.street}</td>
                   <td>${element.address?.city}</td>
                   <td class="d-flex gap-2">
                <button class="delete btn btn-outline-danger" data-id=${element.id}>delete</button>
                <button class="edit btn btn-outline-success">edit</button>
                <a class="btn btn-outline-primary d-flex align-items-center" href="details.html?id=${element.id}">details</a>
            </td>
            </tr>
                `;
    });

}

getAllData("customers")