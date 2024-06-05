let iconEye = document.getElementById("olho");
iconEye.addEventListener('click', function(){
    
    let inputSenha = document.querySelector("#idPassword");
    if(this.className == "fa-regular fa-eye-slash" ){
        this.setAttribute("class","fa-regular fa-eye");
        inputSenha.setAttribute("type","text");
    }else{
        this.setAttribute("class","fa-regular fa-eye-slash");
        inputSenha.setAttribute("type","password");
    }
});

if(localStorage.getItem("cadastro-usuarios") == null) {
    localStorage.setItem("cadastro-usuarios", JSON.stringify(usuarioCadastrados));
  }
  
  const inputEmail = document.getElementById("idEmail");
  const inputSenha = document.getElementById("idPassword");
  const msgLogin = document.getElementById("msgLogin");
  const botao = document.getElementById("login");
  
  function logar(event) {

    event.preventDefault();
  
    let logado = false
  
  
    const listaUsuario = JSON.parse(localStorage.getItem("cadastro-usuarios"))
  
    listaUsuario.map((user) => {
      if((user.email == inputEmail.value) && (user.senha == inputSenha.value)) {
        msgLogin.innerText = "Login feito!"
        msgLogin.setAttribute("class", "logado")
  
        localStorage.setItem("usuario-logado", JSON.stringify({email: inputEmail.value, senha: inputSenha.value}));
  
        

  
        const timeoutTrue = setTimeout(()=>{
          msgLogin.innerText = "";
          msgLogin.setAttribute("class", "")   
          window.location.href = "../index.html";
        },2000);
  
  
        logado = true
  
        return false
      } 
    })
  
    if (!logado) {
      msgLogin.innerText = "Usuário não encontrado!"
      msgLogin.setAttribute("class", "deslogado")
  
      const timeoutFalse = setTimeout(()=>{
        msgLogin.innerText = "";
        msgLogin.setAttribute("class", "")
      },2000);
  
  
      return false
    }
  
  }