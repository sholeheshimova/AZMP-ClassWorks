import { getDataFromLocalStorage,setDataToLocalStorage } from "./helpers"

const loginForm = document.querySelector(".login-form")
const InputPassword1 = document.querySelector("#InputPassword1")
const emailorUsernameInput = document.querySelector("#username-email")
const btn = document.querySelector(".btn")

const users = getDataFormLocalStorage("users") || [];
loginForm.addEventListener("sumbit", function(event){
    event.preventDefault();

    let password = InputPassword1.value.trim();
    let userNameOrEmail = emailorUsernameInput.value.trim();
    const foundUser = users.find(
        (user) =>
        user.password === password && 
        (user.userName === userNameOrEmail || user.email === userNameOrEmail)
    );
    if (foundUser) {
        foundUser.isLogged = true;
        setDataToLocalStorage("users", users);
        window.location.replace("home.html");
      } else {
        window.alert("daxil etidiyiniz məlumatlar yanlışdır!");
      }
    });
    
    function resetForm() {
      registerForm.reset();
    }

