
function getUserById(){
    
    const url = "https://63a2d9de471b38b206fe4923.mockapi.io/users/2"  ; 

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
          <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
  </div>
  `;
    }
}

getUserById();
