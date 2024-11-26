document.getElementById("createCardForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Formun göndərilməsini bloklayır
  
    // Formdan məlumatları alırıq
    const title = document.getElementById("title").value.trim();
    const body = document.getElementById("body").value.trim();
    const author = document.getElementById("author").value.trim();
  
    // Yeni kart HTML strukturunu yaradacağıq
    const newCard = `
      <div class="card mb-4">
        <div class="card-header">
          <strong>Title:</strong> ${title}
        </div>
        <div class="card-body">
          <p><strong>Body:</strong> ${body}</p>
          <p><strong>Author:</strong> ${author}</p>
        </div>
      </div>
    `;
  
    // Yeni yaradılmış kartı ekrana əlavə edirik
    const createdCardContainer = document.getElementById("createdCard");
    createdCardContainer.innerHTML = newCard;
  
    // Optional: Yeni kart məlumatlarını local storage-da saxlaya bilərik
    const cards = JSON.parse(localStorage.getItem("cards")) || [];
    cards.push({ title, body, author });
    localStorage.setItem("cards", JSON.stringify(cards));
  
    // Formu təmizləyirik
    document.getElementById("createCardForm").reset();
  });
  

