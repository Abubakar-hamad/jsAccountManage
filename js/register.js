
// <<<<<<<<<<<<<<<<<< variable >>>>>>>>>>>>>>>>>>>>>>>//

let btnRegister = document.querySelector(".register-form")
let registerUserInput = document.getElementById("registerUsername")
let registerEmailInput = document.getElementById("registerEmail")
let registerPassInput = document.getElementById("registerPassword")





// <<<<<<<<<<<<<<<<<< event >>>>>>>>>>>>>>>>>>>>>>>//

btnRegister.addEventListener("submit", registerNewUser);



// <<<<<<<<<<<<<<<<<< function >>>>>>>>>>>>>>>>>>>>>>>//


function registerNewUser(e) {
    e.preventDefault()
    if (registerUserInput.value === "" || registerPassInput.value === "" || registerEmailInput.value === "") {
        alert("الرجاء ملء جميع الحقول !! ")
    } else {
        users = JSON.parse(localStorage.getItem("users")) ?? [];

        user = {
            "username": registerUserInput.value,
            "email": registerEmailInput.value,
            "password": registerPassInput.value,
        };

        if (!users.find((item) => {
            return item.username == user.username;
        })) {
            localStorage.setItem("users", JSON.stringify([...users, user]));
            setTimeout(() => {
                window.location = "login.html"
            } , 1000)
        } else {
            alert(" هذا الاسم موجود بالفعل  !! ")
        }
    }
}


