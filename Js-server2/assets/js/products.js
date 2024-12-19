import { BASE_URL } from "./constants.js";

function getData(endpoint) {
  fetch(`${BASE_URL}/${endpoint}`)
    .then((responsive) => responsive.json())
    .then((data) => {
      table(data);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {});
}

function table(products) {
  const tbody = document.querySelector("#productTable tbody");
  tbody.innerHTML = "";

  products.forEach((product) => {
    const rowHTML = `
         <tr>
        <th scope="row">${product.id}</th>
        <td>${product.name}</td>
        <td>${product.description}</td>
        <td>${product.price}</td>
        <td><button class="btn btn-danger mt-3 delete-btn" data-id="${product.id}">Delete</button>
         <button class="btn btn-warning mt-3 edit-btn" data-id="${product.id}">Edit</button></td>

      </tr>
        `;
    tbody.insertAdjacentHTML("beforeend", rowHTML);
  });

 

  const deleteButtons = document.querySelectorAll(".delete-btn");
  console.log(deleteButtons);

  deleteButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const productId = e.target.getAttribute("data-id");
      console.log(productId);

      Swal.fire({
        title: "Are you sure?",
        text: "Are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete!",
        cancelButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          deleteProduct(productId);
        }
      });
    });
  });
}

getData("products");


function deleteProduct(productId) {
    fetch(`${BASE_URL}/products/${productId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete product");
        }
       
        document.querySelector(`button[data-id="${productId}"]`).closest('tr').remove();
        Swal.fire("Deleted!", "Your product has been deleted.", "success");
      })
      .catch((error) => {
        console.error(error);
        Swal.fire("Error", "There was an issue deleting the product.", "error");
      });
  }


  function handleCreateProductForm(event) {
    event.preventDefault();
  
    const name = document.querySelector("#productName").value;
    const description = document.querySelector("#productDescription").value;
    const price = document.querySelector("#productPrice").value;
  
    const newProduct = { name, description, price };
  
    fetch(`${BASE_URL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((response) => response.json())
      .then((data) => {
   
        addProductToTable(data);
        Swal.fire("Created!");
  
       
        document.querySelector("#createProductModal").style.display = "none";
        document.querySelector("#createProductForm").reset();
      })
      .catch((error) => {
        console.error(error);
        Swal.fire("Error", "There was an issue creating the product.", "error");
      });
  }
  

  function addProductToTable(product) {
    const tbody = document.querySelector("#productTable tbody");
    const rowHTML = `
      <tr>
        <th scope="row">${product.id}</th>
        <td>${product.name}</td>
        <td>${product.description}</td>
        <td>${product.price}</td>
        <td>
          <button class="btn btn-danger mt-3 delete-btn" data-id="${product.id}">Delete</button>
          <button class="btn btn-success mt-3 edit-btn">Edit</button>
        </td>
      </tr>
    `;
    tbody.insertAdjacentHTML("beforeend", rowHTML);
  }
  

  document.querySelector("#createProductBtn").addEventListener("click", () => {
    document.querySelector("#createProductModal").style.display = "block";
  });
  

  document.querySelector("#closeModal").addEventListener("click", () => {
    document.querySelector("#createProductModal").style.display = "none";
  });
  

  document.querySelector("#createProductForm").addEventListener("submit", handleCreateProductForm);




getData("products");







 