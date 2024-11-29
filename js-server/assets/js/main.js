import { BASE_URL } from "./constants.js";

function getData(endpoint) {
  fetch(`${BASE_URL}/${endpoint}`)
    .then((responsive) => responsive.json())
    .then((data) => {
      cards(data);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {});
}

function cards(array) {
  const rowContainer = document.querySelector(".row");
  rowContainer.innerHTML = "";
  array.forEach((item) => {
    const cardHTML = `
         <div class="col-12 col-md-6 col-lg-3 mb-3">
                    <div class="id">ID: ${item.id}</div>
                  <div class="card-title">Title: ${item.title}</div>
                  <div class="card-body">Body: ${item.body}</div>
                  <div class="author">Author: ${item.author}</div>
                  <button class="btn btn-danger mt-3 delete-btn">Delete</button>
                  <button class="btn btn-success mt-3 edit-btn">Edit</button>
                </div>
        `;
    rowContainer.insertAdjacentHTML("beforeend", cardHTML);
  });
  const deleteButtons = document.querySelectorAll(".delete-btn");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          button.closest(".col-12").remove();
          Swal.fire("Deleted");
        }
      });
    });
  });
}

document.getElementById("search").addEventListener("input", function (event) {
  const query = event.target.value.toLowerCase();
  const cards = document.querySelectorAll(".col-12");

  cards.forEach((card) => {
    const title = card.querySelector(".card-title").textContent.toLowerCase();
    if (title.includes(query)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

getData("blogs");
