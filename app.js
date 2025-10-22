
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

let carouselInner=document.getElementById("carousel-indicators");

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

  let addButton=document.createElement("button");
  addButton.className="btn btn-success mt-2";
  addButton.innerText="Sepete Ekle";

  addButton.addEventListener("click", () => {
    alert(`${p.name} Bu ürün sepetinize eklendi`);
  });

  // Birleştirme
  body.appendChild(title);
  body.appendChild(price);
  body.appendChild(addButton);
  card.appendChild(img);
  card.appendChild(body);
  col.appendChild(card);
  container.appendChild(col);
  carouselInner.appendChild(item);

}


);


const button = document.createElement("a");
button.id = "Button";
button.className = "btn btn-primary";
button.innerText = "Tıkla Beni";
button.href = "https://www.google.com.tr";
button.target = "_blank";
const divSec = document.getElementById("ButtonDiv");
divSec.appendChild(button);

// document.getElementById(
//   "ButtonDiv2"
// ).innerHTML = `<a id="denemeButton2" class="btn btn-danger" href="https://www.google.com.tr" target="_blank">Bana da Tıkla</a>`;


let total=0;
localProducts.forEach(p =>{
     total +=p.price;
});
document.getElementById("totalPrice").innerText = total.toFixed(2) + "TL";
