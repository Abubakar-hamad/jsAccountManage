let logged = document.getElementById("userLogged")
let user = document.getElementById("userNameLoged")
let unlogged = document.getElementById("userUnlogged")
let out = document.getElementById("signOut") ; 


let empty = 0

emp =  JSON.parse(localStorage.getItem('user'))




if (emp) {
        
        unlogged.remove() ;
        logged.style.display = 'block';
        user.innerHTML = emp.username
        
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
            window.location.reload()
        })
    },1000)

})