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

  function cards(arr){
    const rowConatiner = document.querySelector(".row");
    rowConatiner.innerHTML = ""
    arr.forEach((item) => {
        const cardHTML =  `
        <div class="col-12 col-md-6 col-lg-3 mb-3">
          <img class="image w-100 mt-5 mb-4" src="${item.image}"/>
                <div class="name">Name: ${item.name}</div>
                <div class="description">Description: ${item.description}</div>
                <div class="price">Price: ${item.price}</div>
          
        </div>
        `;
        rowConatiner.insertAdjacentHTML("beforeend", cardHTML)
    })
  }



  getData("products")