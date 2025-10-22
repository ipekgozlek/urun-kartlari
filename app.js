
  let products = [
      { id: 1, name: "Lacivert Gömlek", price: 1999.9, 
        image: "https://cdn2.jimmykey.com/jimmykey/ContentImages/Product/2025kis/5WW035633/bluz_5ww035633_lacivert-494-lacivert_1_614x805.webp" },
      { id: 2, name: "Kırmızı Kısa Kollu Gömlek",  price: 1499.9, 
         image: "https://cdn2.jimmykey.com/jimmykey/ContentImages/Product/2025kis/5WW035264/bluz_5ww035264_kirmizi-600-kirmizi_1_614x805.webp" },
      { id: 3, name: "Leopar Desenli Gömlek",   price: 2999.9, 
         image: "https://cdn2.jimmykey.com/jimmykey/ContentImages/Product/2025kis/5WW085612/gomlek_5ww085612_aci-kahve-803-kahverengi_1_614x805.webp" },
      
    ];

localStorage.setItem("products",JSON.stringify(products));
let localProducts = JSON.parse(localStorage.getItem("products"));

let container = document.getElementById("product-list");

localProducts.forEach(p => {
  // Dış kolon div
  let col = document.createElement("div");
  col.className = "col-md-2 mb-2";

  // Kart div
  let card = document.createElement("div");
  card.className = "card h-100 shadow-sm";

  // Görsel
  let img = document.createElement("img");
  img.src = p.image;
  img.alt = p.name;
  img.className = "card-img-top";

  // Kart gövdesi
  let body = document.createElement("div");
  body.className = "card-body text-center";

  let title = document.createElement("h5");
  title.className = "card-title";
  title.textContent = p.name;

  let price = document.createElement("p");
  price.className = "card-text text-danger fw-bold";
  price.textContent = `${p.price.toFixed(2)} TL`;

  // Birleştirme
  body.appendChild(title);
  body.appendChild(price);
  card.appendChild(img);
  card.appendChild(body);
  col.appendChild(card);
  container.appendChild(col);
});


const button = document.createElement("a");
button.id = "Button";
button.className = "btn btn-primary";
button.innerText = "Tıkla Beni";
button.href = "https://www.google.com.tr";
button.target = "_blank";
const divSec = document.getElementById("ButtonDiv");
divSec.appendChild(button);

document.getElementById(
  "ButtonDiv2"
).innerHTML = `<a id="denemeButton2" class="btn btn-danger" href="https://www.google.com.tr" target="_blank">Bana da Tıkla</a>`;

// console.log(value);










// // ---- Ekrana basma ----
// function renderProducts() {
//   const listEl = document.getElementById("productList");
//   const data = loadProducts() || [];

//   // Temizle
//   listEl.innerHTML = "";

//   data.forEach((p) => {
//     const col = document.createElement("div");
//     col.className = "col-12 col-sm-6 col-lg-3";

//     col.innerHTML = `
//       <div class="card h-100 shadow-sm">
//         <img src="${p.image}" class="card-img-top" alt="${p.name}" style="object-fit:cover;height:180px;">
//         <div class="card-body d-flex flex-column">
//           <h5 class="card-title mb-1">${p.name}</h5>
//           <p class="card-text text-muted mb-3">${p.price.toLocaleString("tr-TR", { style:"currency", currency:"TRY" })}</p>
//           <div class="mt-auto d-grid">
//             <button class="btn btn-primary btn-sm">Sepete Ekle</button>
//           </div>
//         </div>
//       </div>
//     `;
//     listEl.appendChild(col);
//   });
// }

// // ---- Reset butonu (test kolaylığı için) ----
// document.getElementById("resetBtn").addEventListener("click", () => {
//   localStorage.removeItem(LS_KEY);
//   location.reload();
// });

// // ---- Başlat ----
// renderProducts();
