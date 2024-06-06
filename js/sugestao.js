const msgLogin = document.getElementById("msgLogin");
let texto = document.getElementById("idTextoSugestao");

function enviar(event){
    event.preventDefault();
    
        if(!localStorage.getItem("usuario-logado")){
            msgLogin.innerText = "Entre para enviar uma sugestão!"
            msgLogin.setAttribute("class", "deslogado");
            const timeoutTrue = setTimeout(()=>{
                msgLogin.innerText = "";
                msgLogin.setAttribute("class", "")   
                window.location.href = "../pages/login.html";
              },2000);
            return false;
        }else{
            msgLogin.innerText = "Sugestão enviada com sucesso!"
            msgLogin.setAttribute("class", "logado");
            const timeoutTrue = setTimeout(()=>{
                msgLogin.innerText = "";
                msgLogin.setAttribute("class", "");
                texto.value = "";
              },2000);
            return false;
        }
   
}

