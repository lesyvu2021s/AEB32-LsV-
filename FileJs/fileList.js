
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
         
    let elm = document.getElementById("div_content");
      let resUI = "";
      for (let index = 0; index < listFlower.length; index++) {
          resUI += formUICard(listFlower[index]);
    
          
      }
      elm.innerHTML = resUI;
       return `
       <div class="card" style="width: 16rem;">
   <img src="${listFlower.avatar}" class="card-img-top" alt="...">
   <div class="card-body">
     <h5 class="card-title">${listFlower.name}</h5>
     <p class="card-text"> Price : <b>${listFlower.Price}</b> $  </p>
     <p class="card-text"> Quantity : <b>${listFlower.Quantity}</b>  </p>
     <a onclick="handDetail(${listFlower.id})" class="btn btn-primary">Detail</a>
     <a onclick="handUpdate(${listFlower.id})" class="btn btn-secondary">Update</a>
     <a onclick="handDel(${listFlower.id})" class="btn  btn-danger">Delete</a>
   </div>
 </div>
   `; 
  }
  
   }
   function handDel(flowerId){
    console.log("delete user by  id");
    let flower_delete = url + "/" + flowerId ;
    fetch(flower_delete , {
      method : "DELETE",
    })
    .then((Response) => Response.json())
    .then((data) => {
      listCard();
    })
    .catch((Error) => {
      console.log("Erorr : " + Error );
    })
   }


   function handDetail(flowerId){
    console.log("get user by id" , flowerId);
    window.location.href = `./detaiFlower.html?id=${flowerId}`;
   }

   function handUpdate(flowerId){
    console.log("update user by Id", flowerId);
      window.location.href =`./FormInput.html?id=${flowerId}`;
    }
   
   listCard();



