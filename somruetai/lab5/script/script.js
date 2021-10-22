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
