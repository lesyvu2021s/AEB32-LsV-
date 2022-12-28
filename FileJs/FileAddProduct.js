let url_post = "https://63a2d9de471b38b206fe4923.mockapi.io/users";
let urlDetail = new URLSearchParams(window.location.search);
let id = urlDetail.get("id");

if(id){
getElementByUser();
}      
function getElementByUser() {
  fetch(`${url_post}/${id}`, {
    method: "GET",
  })
    .then((Response) => Response.json())
    .then((data) => {
      console.log(data);
     let elmAvatar = document.getElementById("iPath");
      let elmName = document.getElementById("uname");
      let elmCity = document.getElementById("city");
      let elmQuantity = document.getElementById("quantity");
      let elmPrice = document.getElementById("price");
      elmAvatar.value = data.avatar;
      elmName.value = data.name;
      elmCity.value = data.city;
      elmPrice.value = data.Price;
      elmQuantity.value = data.Quantity;
    })
    .catch((Error) => console.log("Error :", Error));
}

function handClick() {
 let elmAvatar = document.getElementById("iPath");
  let elmName = document.getElementById("uname");
  let elmCity = document.getElementById("city");
  let elmQuantity = document.getElementById("quantity");
  let elmPrice = document.getElementById("price");
  let flower = {
    avatar: elmAvatar.value,
    name: elmName.value,
    city: elmCity.value,
    price: elmPrice.value,
    quantity: elmQuantity.value
  };
  console.log(flower);
  if (id) {
    updateUser(flower);
  } else {
    fetch(url_post, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(flower),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
}

function updateUser(flower) {
  fetch(`${url_post}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "Application/json" },
    body: JSON.stringify(flower),
  })
    .then((Response) => Response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((Error) => {
      console.log("Error :", Error);
    });
}
