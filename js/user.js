let logged = document.getElementById("userLogged")
let user = document.getElementById("userNameLoged")
let unlogged = document.getElementById("userUnlogged")
let out = document.getElementById("signOut") ; 


let empty = 0

user =  JSON.parse(localStorage.getItem('user'))




if (user) {
        
        unlogged.remove() ;
        logged.style.display = 'block';
        user.innerHTML = localStorage.getItem("username")
        
    }


    unlogged.addEventListener("click" , ()=>{
        setTimeout(()=>{
            window.location='mybank/login.html'
        },1000)
    })

out.addEventListener("click" ,  ()=>{
    setTimeout(()=>{
        localStorage.removeItem("user")
        user.style.display="none";
        unlogged.style.display="block"
        setTimeout(()=>{
            window.location = "./index.html"
        })
    },1000)

})