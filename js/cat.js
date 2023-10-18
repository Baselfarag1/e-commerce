//variables 
let productsContainer = document.querySelector("#all-products");

//functions
let getProducts = async function(){
    let temp = "";
    let response  = await fetch(`https://api.escuelajs.co/api/v1/categories`);
    let products = await response.json();
    console.log(products)
    for(product of products){
        temp += `
        <div class="col-md-4 mb-5">
            <div class="card">
                <img src="${product.image}" class="img-fluid"  alt="...">
                <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                
                <a onclick="getProductNumber(${product.id})" class="btn btn-primary">products</a>
                </div>
            </div>
        </div>
        `;
        productsContainer.innerHTML = temp;
    }

}
getProducts();

function getProductNumber(index){
    localStorage.setItem("categoryId" ,index);
    location.href = "../categoryProducts.html";
}