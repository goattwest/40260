function papu(){
}

const boton = document.getElementById("enviar");
let nombre = document.getElementById("username");
let pass = document.getElementById("password");

boton.addEventListener("click", 
    () => {
            console.log(nombre.value);
            console.log(pass.value);
            alert("nombre: "+ nombre + " contraseña: "+ pass);
    }
)
