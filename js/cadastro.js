

let iconEye2 = document.querySelector("i2");
iconEye2.addEventListener('click', function(){
    
    let inputSenha2 = document.querySelector("#idPassword");
    if(this.className == "fa-regular fa-eye-slash" ){
        this.setAttribute("class","fa-regular fa-eye");
        inputSenha2.setAttribute("type","text");
    }else{
        this.setAttribute("class","fa-regular fa-eye-slash");
        inputSenha2.setAttribute("type","password");
    }
});
let iconEye3 = document.querySelector("i3");
iconEye3.addEventListener('click', function(){
    
    let inputSenha3 = document.querySelector("#idConfPassword");
    if(this.className == "fa-regular fa-eye-slash" ){
        this.setAttribute("class","fa-regular fa-eye");
        inputSenha3.setAttribute("type","text");
    }else{
        this.setAttribute("class","fa-regular fa-eye-slash");
        inputSenha3.setAttribute("type","password");
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