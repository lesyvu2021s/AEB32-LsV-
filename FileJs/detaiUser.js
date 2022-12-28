let urlDetail =  new URLSearchParams(window.location.search);
let id = urlDetail.get("id");
console.log(id);

function getFlowerById(){
    
    const url = "https://63a2d9de471b38b206fe4923.mockapi.io/users/" + id ; 

    fetch(url , {
        method : "GET"
    }) 
    .then((Reponse) => Reponse.json())
    .then((data) => {
       console.log(data)
       renderUi(data);
    })
    .catch(error => console.log("Error : ", error));

    function renderUi(flower){
        let elm = document.getElementById("div_content");
    
        elm.innerHTML =
         `
      <div class="card col-4">
      <img
          src="${flower.avatar}"
          ,
          class="card-img-top"
          alt="..."
      />
      <div class="card-body  ">
          <h5 class="card-title">${flower.name}</h5>
          <p class="card-text"> Origin : <i>${flower.city}</i> </p>
          <p class="card-text"> Price   : ${flower.Price}</p>
          <p class="card-text"> Số Lượng : ${flower.Quantity}</p>
          <a onclick ="EditUser(${flower.id})" class="btn btn-secondary">Update</a>
      </div>
  </div>
  `;
    }
}
function EditUser(id){
    console.log("update user by id ", id);
    window.location.href = `./FormInput.html?id=${id}`;
}

getFlowerById();    
