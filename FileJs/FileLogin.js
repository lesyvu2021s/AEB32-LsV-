let dem = 3 ; 
function validate(){

    let username = document.getElementById("uname").value;
    let psw = document.getElementById("psw").value;

    if(username == "admin"&& psw == "admin"){
        alert("Login Succes");
        window.location = "Page.html";
        return false;
    }else {
        dem -- ;
        alert("nhập sai Username or Password , bạn còn " + dem);
    
     if(dem == 0 ){
        document.getElementById("uname").disabled = true ; 
        document.getElementById("pws").disabled = true ;
        document.getElementById("submit").disabled = true ;
        return false;
     }
    }

}