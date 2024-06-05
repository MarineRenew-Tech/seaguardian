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

let inputCpf = document.getElementById("idCpf");

inputCpf.addEventListener("input", (e) => {
    let cpf = e.target.value;
   
    cpf = cpf.replace(/\D/g, "");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    e.target.value = cpf;
});