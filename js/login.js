let iconEye = document.querySelector("i");
iconEye.addEventListener('click', function(){
    
    let inputSenha = document.querySelector("#password");

    if(this.className == "fa-regular fa-eye-slash" ){
        this.setAttribute("class","fa-regular fa-eye");
        inputSenha.setAttribute("type","text");
    }else{
        this.setAttribute("class","fa-regular fa-eye-slash");
        inputSenha.setAttribute("type","password");
    }
});
