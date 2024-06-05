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