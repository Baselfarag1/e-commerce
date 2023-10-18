
/*
Api Link all products :
https://fakestoreapi.com/products

*/
//variables 
let productsContainer = document.querySelector("#all-products");

//functions
let getProducts = async function(){
    let temp = "";
    let response  = await fetch(`https://api.escuelajs.co/api/v1/products`);
    let products = await response.json();
    console.log(products)
    for(product of products){
        temp += `
        <div class="col-md-4 mb-5">
            <div class="card">
                <img src="${product.images[1]}" class="img-fluid"  alt="...">
                <div class="card-body">
                <h5 class="card-title">${product.title}<span class="bg-danger badge ">${product.price} $</span></h5>
                <span class="card-text bg-info badge">${product.category.name}</span>
                <p class="card-text">${product.description}</p>
                <a onclick="getProductNumber(${product.id})" class="btn btn-primary">Details</a>
                </div>
            </div>
        </div>
        `;
        productsContainer.innerHTML = temp;
    }

}
getProducts();

function getProductNumber(index){
    localStorage.setItem("clickedProduct" ,index);
    location.href = "../details.html";
}