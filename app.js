
  let products = [
      { id: 1, name: "Lacivert Gömlek", price: 1999.9,  image: "https://cdn2.jimmykey.com/jimmykey/ContentImages/Product/2025kis/5WW035633/bluz_5ww035633_lacivert-494-lacivert_1_614x805.webp" },
      { id: 2, name: "Kırmızı Kısa Kollu Gömlek", price: 1499.9, image: "https://cdn2.jimmykey.com/jimmykey/ContentImages/Product/2025kis/5WW035264/bluz_5ww035264_kirmizi-600-kirmizi_1_614x805.webp" },
      { id: 3, name: "Leopar Desenli Gömlek", price: 2999.9, image: "https://cdn2.jimmykey.com/jimmykey/ContentImages/Product/2025kis/5WW085612/gomlek_5ww085612_aci-kahve-803-kahverengi_1_614x805.webp" },
       { id:4,name:"Mavi Örme Midi Elbise",price:2499.9, image:"https://cdn2.jimmykey.com/jimmykey/ContentImages/Product/2025kis/5WW065870/elbise_5ww065870_koyu-petrol-427-koyu-yesil_1_614x805.webp"},
        {id:5,name:"Fiyonk Detaylı Dokuma Mini Elbise",price:799.9,image:"https://cdn2.jimmykey.com/jimmykey/ContentImages/Product/2025yaz/5SW064409/elbise_5sw064409_ekru-114-ekru_3_614x805.webp"},
        {id:6,name:"Boncuk Detaylı Askılı Mini Elbise",price:1499.9,image:"https://cdn2.jimmykey.com/jimmykey/ContentImages/Product/2025yaz/5SW063118/100-keten-duz-kesim-boncuk-detayli-askili-mini-elbise_5sw063118_aci-kahve-803-kahverengi_8_614x805.webp"
        } 
    ];

  
function createCard(p) {
  const card=document.createElement("div");
  card.className="card";
  card.style.width="14rem";


  const img=document.createElement("img");
  img.src=p.image;
  img.alt=p.name;
  img.className="card-img-top";


  const body=document.createElement("div");
  body.className="card-body text-center";

  const title=document.createElement("h5");
  title.className="card-title";
  title.textContent=p.name;

  const price=document.createElement("p");
  price.className="card-text text-danger fw-bold"
  price.textContent=`${p.price} TL`;

  const btn=document.createElement("button");
  btn.className="btn btn-success";
  btn.textContent="Sepete Ekle";

  btn.addEventListener("click", () => {
    alert(`${p.name} sepetinize eklendi`);
  });

  body.appendChild(title);
  body.appendChild(price);
  body.appendChild(btn);
  card.appendChild(img);
  card.appendChild(body);

  return card;

}


function createCarouselItems(products,targetId) {
  const carouselInner=document.getElementById(targetId);

  for (let i=0; i<products.length;i+=2) {
    const group=products.slice(i,i +2);


    const item=document.createElement("div");
    item.className="carousel-item";
    if (i===0) item.classList.add("active");

    group.forEach(p => {
      const card=createCard(p);
      item.appendChild(card);
    });

    carouselInner.appendChild(item);
    
  }
}



createCarouselItems(products.slice(0,6),"carousel1-inner");
createCarouselItems(products.slice(6),"carousel2-inner");




// const button = document.createElement("a");
// button.id = "Button";
// button.className = "btn btn-primary";
// button.innerText = "Tıkla Beni";
// button.href = "https://www.google.com.tr";
// button.target = "_blank";
// const divSec = document.getElementById("ButtonDiv");
// divSec.appendChild(button);



// document.getElementById(
//   "ButtonDiv2"
// ).innerHTML = `<a id="denemeButton2" class="btn btn-danger" href="https://www.google.com.tr" target="_blank">Bana da Tıkla</a>`;

