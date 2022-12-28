const url = "https://63a2d9de471b38b206fe4923.mockapi.io/users";
function listCard () {
    
    let listFlower = [];

    

    fetch(url)
      .then((Response) => Response.json())
      .then((data) => {
        console.log(data);
        formUICard(data);
      })
      .catch((error) => console.log("Error : " , error));
  
    function formUICard(listFlower){
         
    let elm = document.getElementById("content_right");
      let resUI = "";
      for (let index = 0; index < listFlower.length; index++) {
          resUI += formUICard(listFlower[index]);
    
          
      }
      elm.innerHTML = resUI;
      return `
      <div class="card" style="width: 10rem;">
  <img src="${listFlower.avatar}" class="card-img-top" alt="...">
  <div class="card-body">
    <h6 class="card-title">${listFlower.name}</h6>
    <p class="card-text"> Price : <b>${listFlower.Price}</b> $  </p>
    <p class="card-text ps-2 ">Quantity : <b>${listFlower.Quantity}</b>  </p>
    <a onclick="handDetail(${listFlower.id})" class="btn btn-primary p-0">Detail</a>
    <p><input type="submit" value="Add to cart" class="btn btn-success AddToCart p-0 m-14 " onclick="handAddToCart(${listFlower.id})" /></p>
  </div>
</div>
  `;
 
  }
  
   }
function handAddToCart(id){
  console.log("Add to Cart", id);
  window.location.href = `./cart.html?id=${id}`;
}

listCard ();