
  let products = [
      { id: 1, name: "Lacivert Gömlek", price: 1999.9,  image: "https://cdn2.jimmykey.com/jimmykey/ContentImages/Product/2025kis/5WW035633/bluz_5ww035633_lacivert-494-lacivert_1_614x805.webp" },
      { id: 2, name: "Kırmızı Kısa Kollu Gömlek",  price: 1499.9, image: "https://cdn2.jimmykey.com/jimmykey/ContentImages/Product/2025kis/5WW035264/bluz_5ww035264_kirmizi-600-kirmizi_1_614x805.webp" },
      { id: 3, name: "Leopar Desenli Gömlek",   price: 2999.9, image: "https://cdn2.jimmykey.com/jimmykey/ContentImages/Product/2025kis/5WW085612/gomlek_5ww085612_aci-kahve-803-kahverengi_1_614x805.webp" },
       { id:4,name:"Mavi Örme Midi Elbise",price:2499.9, image:"https://cdn2.jimmykey.com/jimmykey/ContentImages/Product/2025kis/5WW065870/elbise_5ww065870_koyu-petrol-427-koyu-yesil_1_614x805.webp"},
        {id:5,name:"Fiyonk Detaylı Dokuma Mini Elbise",price:799.9,image:"https://cdn2.jimmykey.com/jimmykey/ContentImages/Product/2025yaz/5SW064409/elbise_5sw064409_ekru-114-ekru_3_614x805.webp"},
        {id:6,name:"Boncuk Detaylı Askılı Mini Elbise",price:1499.9,image:"https://cdn2.jimmykey.com/jimmykey/ContentImages/Product/2025yaz/5SW063118/100-keten-duz-kesim-boncuk-detayli-askili-mini-elbise_5sw063118_aci-kahve-803-kahverengi_8_614x805.webp"
        } 
    ];

  

localStorage.setItem("products",JSON.stringify(products));
let localProducts = JSON.parse(localStorage.getItem("products"));

let container = document.getElementById("product-list");
let carouselInner=document.getElementById("carousel-indicators");

localProducts.forEach(p => {

  });








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

