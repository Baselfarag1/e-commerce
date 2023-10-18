

let productId = localStorage.getItem('clickedProduct');
let productContainer = document.getElementById("product-details");

let getProductDetails = async function(productId){
    let res = await fetch(`https://api.escuelajs.co/api/v1/products/${productId}`);
    let productDetails = await res.json();
    let temp = `
                <div class="col-md-6">
                <img src="${productDetails.images[1]}" class="img-fluid" alt="">
            </div>
            <div class="col-md-6">
                <h1>${productDetails.title}</h1>
                <span class="card-text bg-info badge">${productDetails.category.name}</span>
                <span class="card-text bg-info badge">${productDetails.price} $</span>
                <p>${productDetails.description}</p>
            </div>
    `;
    productContainer.innerHTML = temp;
}
getProductDetails(productId);