const pass_field = document.querySelector("#password");
const show_btn = document.querySelector("#show");
show_btn.addEventListener('click',function(){
    if (pass_field.type === "password"){
        pass_field.type = "text" ;
    }
    else{
        pass_field.type = "password" ;
    }
});
document.addEventListener("DOMContentLoaded",function() {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createaccount");

    document.querySelector("#linkcreate_Account").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });
});
