
const url = "https://63a2d9de471b38b206fe4923.mockapi.io/users";
function listUserCard () {
    
    let listUser = [];

    

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
      <div class="card" style="width: 18rem;">
  <img src="${listUser.avatar}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${listUser.name}</h5>
    <p class="card-text">Click để xem chi tiết . </p>
    <a onclick="handDetail(${listUser.id})" class="btn btn-primary">Detail</a>
    <a onclick="handUpdate(${listUser.id})" class="btn btn-secondary">Update</a>
    <a onclick="handDel(${listUser.id})" class="btn  btn-danger">Delete</a>
  </div>
</div>
  `;
 
  }
  
   }
   function handDel(userId){
    console.log("delete user by  id");
    let user_delete = url + "/" + userId ;
    fetch(user_delete , {
      method : "DELETE",
    })
    .then((Response) => Response.json())
    .then((data) => {
      listUserCard();
    })
    .catch((Error) => {
      console.log("Erorr : " + Error );
    })
   }


   function handDetail(userId){
    console.log("get user by id" , userId);
    window.location.href = `./detaiUser.html?id=${userId}`;
   }

   function handUpdate(userId){
    console.log("update user by Id", userId);
      window.location.href =`./FormLogin.html?id=${userId}`;
    }
   


   
   listUserCard();



