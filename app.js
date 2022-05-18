const iceCream = [
  {
    id: 11,
    name: "Cookie Dough",
    image:
      "https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg",
    price: 1,
  },
  {
    id: 12,
    name: "Vanilla",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg",
    price: 1,
  },
  {
    id: 13,
    name: "Strawberry",
    image:
      "https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg",
    price: 2,
  },
];

const vessels = [
  {
    id: 21,
    name: "Waffle Cone",
    image: "https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg",
    price: 2,
  },
  {
    id: 22,
    name: "Waffle Bowl",
    image: "http://images.wbmason.com/350/L_JOY66050.jpg",
    price: 4,
  },
];

const toppings = [
  {
    id: 31,
    name: "Sprinkles",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg",
    price: 1,
  },
  {
    id: 32,
    name: "Chocolate Chips",
    image:
      "https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360",
    price: 2,
  },
];
//iceCream = ic = item
//vessel = v = item
//topping = t = item

const iceOrder = [];
const coneOrder = [];
const topOrder = [];
function drawIce() {
  let template = "";
  iceCream.forEach((ic) => {
    template += `
        <div class="col-4 p-0 d-flex align-items-center justify-content-center ">
        
        <div class="card" style="width: 18rem;">
            <img src="${ic.image}" class="card-img-top img-fluid" alt="...">
            <div class="card-body">
              <h5 class="card-title">'${ic.name}'</h5>
              
              <button class="btn btn-primary justify-content-center d-flex" onClick="buyIce(${ic.id})">$${ic.price}</button>
            </div>
          </div>

       </div>`;
  });
  document.getElementById("iceCreamMenu").innerHTML = template;
}
function drawCone() {
  let template = "";
  vessels.forEach((v) => {
    template += `
          <div class="col-6 d-flex align-items-center justify-content-center">
          
          <div class="card" style="width: 18rem;">
              <img src="${v.image}" class="card-img-top img-fluid" alt="...">
              <div class="card-body">
                <h5 class="card-title">'${v.name}'</h5>
                
                <button class="btn btn-primary justify-content-center d-flex" onClick="buyCone(${v.id})">$${v.price}</button>
              </div>
            </div>
            
  
         </div>`;
    console.log(buyCone);
  });
  document.getElementById("vesselMenu").innerHTML = template;
}
function drawTop() {
  let template = "";
  toppings.forEach((t) => {
    template += `
          <div class="col-6 d-flex align-items-center justify-content-center">
          
          <div class="card" style="width: 18rem;">
              <img src="${t.image}" class="card-img-top img-fluid" alt="...">
              <div class="card-body">
                <h5 class="card-title">'${t.name}'</h5>
                
                <button class="btn btn-primary justify-content-center d-flex" onClick="buyTop(${t.id})">$${t.price}</button>
              </div>
            </div>
  
         </div>`;
  });
  document.getElementById("topMenu").innerHTML = template;
}

function drawIceOrder() {
  let template = "";
  let totalic = 0;
  iceOrder.forEach((ic) => {
    totalic += ic.price;
    template += `
          <li class="d-flex justify-content-between border-bottom border-secondary">
          <p class="m-1">${ic.name}</p>
          <p class="m-1">$${ic.price}</p>
        </li>
          `;
    template =
      template || "<p class='text-white'><em>No items in cart</em></p>";
    document.getElementById("totalic").innerText = totalic.toString();
  });
}
function drawConeOrder() {
  let template = "";
  let totalv = 0;
  coneOrder.forEach((v) => {
    totalv += v.price;
    template += `
          <li class="d-flex justify-content-between border-bottom border-secondary">
          <p class="m-1">${v.name}</p>
          <p class="m-1">$${v.price}</p>
        </li>
          `;
    template =
      template || "<p class='text-white'><em>No items in cart</em></p>";
    document.getElementById("totalv").innerText = totalv.toString();
  });
}
function drawTopOrder() {
  let template = "";
  let totalt = 0;
  topOrder.forEach((t) => {
    totalt += t.price;
    template += `
          <li class="d-flex justify-content-between border-bottom border-secondary">
          <p class="m-1">${t.name}</p>
          <p class="m-1">$${t.price}</p>
        </li>
          `;
    template =
      template || "<p class='text-white'><em>No items in cart</em></p>";
    document.getElementById("totalt").innerText = totalt.toString();
  });
}

//add to cart
function buyIce(id) {
  let foundic = iceCream.find((ic) => ic.id == id);
  if (foundic) {
    console.log(foundic);
    iceOrder.push(foundic);
    drawIceOrder();
  }
}
function buyCone(id) {
  let foundv = vessels.find((v) => v.id == id);
  if (foundv) {
    console.log(foundv);
    coneOrder.push(foundv);
    drawConeOrder();
  }
}
function buyTop(id) {
  let foundt = toppings.find((t) => t.id == id);
  if (foundt) {
    console.log(foundt);
    topOrder.push(foundt);
  }
  drawTopOrder();
}

drawIce();
drawCone();
drawTop();
drawIceOrder();
drawConeOrder();
drawTopOrder();
