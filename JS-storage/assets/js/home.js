 import { getDataFromLocalStorage,setDataToLocalStorage } from "./helpers"

 const registerForm = document.querySelector(".login-form")
const InputEmail = document.querySelector("#InputEmail")
const InputPassword1 = document.querySelector("#InputPassword1")
const btn = document.querySelector(".btn")


const users = getDataFormLocalStorage("users") || [];
registerForm.addEventListener("submit", function(event){
    event.preventDefault();
    const user = {
        id: Date.now(),
        email: InputEmail.value.trim(),
        password: InputPassword1.value.trim(),
        isLogged: false,
      };
    
      users.push(user);
      setDataToLocalStorage("users", users);
      window.location.replace("login.html");
      resetForm();
    });
    
    function resetForm() {
      loginForm.reset();
    }
