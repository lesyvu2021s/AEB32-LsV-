let urlDetail = new URLSearchParams(window.location.search);
let id = urlDetail.get("id");
console.log(id);

function AddToCart(){

    let listFlower = [];
   
   
    const url = "https://63a2d9de471b38b206fe4923.mockapi.io/users/" + id ; 
    fetch(url,{
        method:"GET"
    })
    .then((Response) => Response.json())
    .then((data) =>{
        console.log(data);
        renderUi(data);

        
    }).catch((Error) => {
        console.log("Error",Error);
    })

}
function renderUi(listFlower){
    let elm = document.getElementById("tbody_content");
    
    elm.innerHTML = `
    <tr>
    <hr/>
    <td>
        <img src="${listFlower.avatar}" class="w-100 h-100"  alt="">
    </td>
    <td>
    <h5 class="tbody-name">${listFlower.name}</h5>
    </td>
    <td>
    <h6 class="tbody-price" id="tbody-price">${listFlower.Price}</h6>
    </td>
    <td>
        <input id="tNumber" type="number" value ="2">  
    </td>
    <td>
       <h4>${totalPrice()}</h4>
    </td>
   </tr>
    `
}
function totalPrice(data){
    let sum =0;
    let elmPrice = document.getElementById("tbody-price");
    let elmNumber = document.getElementById("tNumber");
    elmPrice.value = data.Price;
    
    sum = elmPrice*elmNumber;
    console.log(sum);
}

AddToCart();

