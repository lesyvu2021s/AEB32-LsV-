let urlDetail =  new URLSearchParams(window.location.search);
let id = urlDetail.get("id");
console.log(id);

function getUserById(){
    
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

    function renderUi(user){
        let elm = document.getElementById("div_content");
    
        elm.innerHTML =
         `
      <div class="card col-4">
      <img
          src="${user.avatar}"
          ,
          class="card-img-top"
          alt="..."
      />
      <div class="card-body">
          <h5 class="card-title">${user.name}</h5>
          <p class="card-text"> ${user.city}</p>
          <p class="card-text"> ${user.password}</p>
          <a onclick ="EditUser(${user.id})" class="btn btn-secondary">Update</a>
      </div>
  </div>
  `;
    }
}
function EditUser(id){
    console.log("update user by id ", id);
    window.location.href = `./FormLogin.html?id=${id}`;
}

getUserById();
