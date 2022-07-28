// Store cart items in local storage with key: "items"
let cartItems = document.getElementById("items");
let items=JSON.parse(localStorage.getItem("items")) || [];

let item_count=document.getElementById("item_count");

item_count.innerText=items.length;

async function getItems(){
    try{
        let res = await fetch `https://grocery-masai.herokuapp.com/items`;

        let{data} = await res.json();
        appendItems(data);
        //console.log(data);
    }
    catch(e){
         console.log("e:",e);
    }
}
getItems();

function appendItems(data){
    
    cartItems.innerHTML=null;

    data.forEach((e) => {
        let container = document.createElement("div");
        let title=document.createElement("p");
        title.innerText=e.name;

        let price=document.createElement("p");
        price.innerText=e.price;

        let image=document.createElement("img");
        image.src=e.image;

        let cartButton = document.createElement("button");
         cartButton.setAttribute("id","add_to_cart");
         cartButton.innerText="Add to Cart";
         cartButton.onclick = function(){
             addToCart(e);
         };

         container.append(image,title,price,cartButton);
         cartItems.append(container);


    });
}

function addToCart(e){
    items=JSON.parse(localStorage.getItem("items")) || [];
    items.push(e);
    localStorage.setItem("items",JSON.stringify(items));
    item_count.innerText=items.length;
}