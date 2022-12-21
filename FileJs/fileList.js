function listUserCard () {
    
    let listUser = [];

    const url = "https://63a2d9de471b38b206fe4923.mockapi.io/users";

    fetch(url)
      .then((Response) => Response.json())
      .then((data) => {
        console.log(data);
        formUICard(data);
      })
      .catch((error) => console.log("Error : " , error));
  
    function formUICard(listUser){
         
    let elm = document.getElementById("div_content");
      let resUI = "";
      for (let index = 0; index < listUser.length; index++) {
          resUI += formUICard(listUser[index]);
    
          
      }
      elm.innerHTML = resUI;
      return `
      <div class="card col-4">
      <img
          src="${listUser.avatar}"
          ,
          class="card-img-top"
          alt="..."
      />
      <div class="card-body">
          <h5 class="card-title">${listUser.name}</h5>
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
   
   listUserCard();


