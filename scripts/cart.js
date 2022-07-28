let cart = document.getElementById("cart");
let data =JSON.parse(localStorage.getItem("items"));
let cart_total=document.getElementById("cart_total");

function appendItems(data){
    cart.innerHtml=null;
    let total =0;
    data.forEach((e,index) => {
      let container=document.createElement("div");
      let title=document.createElement("p");
      title.innerText=e.name;

      let image=document.createElement("img");
      image.src=e.image;

      let price=document.createElement("p");
      price.innerText=e.price;

      total += Number(e.price);
      let cartButton=document.createElement("button");
      cartButton.setAttribute("id","remove");
      cartButton.innerText="Remove";
      cartButton.onclick=function(){
          removeFromCart(index);
      }
      container.append(image,title,price,cartButton);
      cart.append(container);
    });
    cart_total.innerText=total;
}
appendItems(data);
function removeFromCart(index){
    let data =JSON.parse(localStorage.getItem("items"));
    data.splice(index,1);
    localStorage.setItem("items",JSON.stringify(data));
    appendItems(data);
}