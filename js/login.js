// <<<<<<<<<<<<<<<<<< variable >>>>>>>>>>>>>>>>>>>>>>>//

let btnLogin = document.querySelector(".login-form")
let loginUserInput = document.getElementById("loginUsername")
let loginPassInput = document.getElementById("loginPassword")





// <<<<<<<<<<<<<<<<<< event >>>>>>>>>>>>>>>>>>>>>>>//
btnLogin.addEventListener("submit", loginUser)


// <<<<<<<<<<<<<<<<<< function >>>>>>>>>>>>>>>>>>>>>>>//

function loginUser(e) {
    e.preventDefault();
    if (loginUserInput.value === "" || loginPassInput.value === "") {
        alert("بعض الحقول فارغة !! ")
    } else {
        users = JSON.parse(localStorage.getItem("users")) ?? [];
        user = users.find((item) => {
            return item.username == loginUserInput.value && item.password == loginPassInput.value;
        })
        if (user) {
            localStorage.setItem("user", JSON.stringify(user))
            setTimeout(() => {
                window.location = "../index.html"
            }, 1000)
        } else {
            alert("اسم الموظف أو كلمة المرور خاطئة !!")
        }
    }


}