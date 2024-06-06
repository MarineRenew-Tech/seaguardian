

let iconEye2 = document.querySelector("#olho2");
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
let iconEye3 = document.querySelector("#olho3");
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

let usuarioCadastrados = [
    {nome:"v", cpf:"123-456-789-10", email:"v@email.com", senha:"123456"},
];

if (localStorage.getItem("cadastro-usuarios") == null) {
    localStorage.setItem("cadastro-usuarios", JSON.stringify(usuarioCadastrados));
}

let inputEmail = document.getElementById("idEmail");
let inputNome = document.getElementById("idName");
let inputSenha = document.getElementById("idPassword");
let msgLogin = document.getElementById("msgLogin"); // Supondo que você tenha um elemento com esse ID

function cadastrar(event) {
    event.preventDefault();
    let usuario = {
        nome: inputNome.value,
        cpf: inputCpf.value,
        email: inputEmail.value,
        senha: inputSenha.value
    };

    // Recarrega os usuários cadastrados do localStorage
    let usuarioCadastrados = JSON.parse(localStorage.getItem("cadastro-usuarios"));

    let usuarioExistente = usuarioCadastrados.some((user) => {
        return user.email === inputEmail.value || user.cpf === inputCpf.value;
    });

    if (usuarioExistente) {
        msgLogin.innerText = "Usuario já cadastrado!";
        msgLogin.setAttribute("class", "deslogado");
        return false;
    } else {
        usuarioCadastrados.push(usuario);
        localStorage.setItem("cadastro-usuarios", JSON.stringify(usuarioCadastrados));
        msgLogin.innerText = "Usuario cadastrado com sucesso!";
        msgLogin.setAttribute("class", "logado");

        const timeoutTrue = setTimeout(() => {
            msgLogin.innerText = "";
            msgLogin.setAttribute("class", "");
            window.location.href = "../pages/login.html";
        }, 2000);

        return false;
    }
}


// let usuarioCadastrados = [
//     {nome:"v",cpf:"123-456-789-10",email:"v@email.com", senha:"123456"},
//   ];

// if(localStorage.getItem("cadastro-usuarios") == null) {
//     localStorage.setItem("cadastro-usuarios", JSON.stringify(usuarioCadastrados));
//   }


// let inputEmail = document.getElementById("idEmail")
// let inputNome = document.getElementById("idName")
// let inputSenha = document.getElementById("idPassword")

//   function cadastrar(event) {
//     event.preventDefault();
//     let usuario = {nome: inputNome.value,cpf: inputCpf.value,email: inputEmail.value,senha: inputSenha.value};

//     let usuarioExistente = usuarioCadastrados.some((user) => {
//         return user.email === inputEmail.value || user.cpf === inputCpf.value;
//     });
    

//     if (usuarioExistente) {
        
//         msgLogin.innerText = "Usuario ja cadastrado!";
//         msgLogin.setAttribute("class", "deslogado");
//         return false;
//     } else {
//         usuarioCadastrados.push(usuario);
//         localStorage.setItem("cadastro-usuarios", JSON.stringify(usuarioCadastrados));
//         msgLogin.innerText = "Usuario cadastrado com sucesso!";
//         msgLogin.setAttribute("class", "logado");

//         const timeoutTrue = setTimeout(() => {
//             msgLogin.innerText = "";
//             msgLogin.setAttribute("class", "");
//             window.location.href = "../pages/login.html";
//         }, 2000);

    // usuarioCadastrados.map((user) => {
    //     if((user.email == inputEmail.value) || (user.cpf == inputCpf.value)) {
    //     msgLogin.innerText = "Usuario ja cadastrado!"
    //     msgLogin.setAttribute("class", "deslogado") 
    //     return false;
    //     }else{
    //         usuarioCadastrados.push(usuario);
    //         localStorage.setItem("cadastro-usuarios", JSON.stringify(usuarioCadastrados));
    //         msgLogin.innerText = "Usuario cadastrado com sucesso!"
    //         msgLogin.setAttribute("class", "logado") 

    //         const timeoutTrue = setTimeout(()=>{
    //             msgLogin.innerText = "";
    //             msgLogin.setAttribute("class", "")   
    //             window.location.href = "../pages/login.html";
    //         },2000);

    //         return false;
    //         }
    // }
//     }

//   }