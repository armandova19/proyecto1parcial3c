let bd = JSON.parse(localStorage.getItem("miBDp"));

//let bd = { datos: [] }
bd = { datos: [{nombre: 'jose', telefono: 3411095287, correo:'jose@5.com', contraseña: 1234, usuario:1, login:true},
{nombre:'juan', telefono:3332190881, correo: 'juan@.com', contraseña:5678, usuario:2, login:true},
{nombre:'gaby', telefono:3125478900, correo: 'gaby@.com', contraseña:7800, usuario:4, login:true}] }



document.getElementById("btnadd").addEventListener("click", ()=>{
    let nombre = document.getElementById("name").value;
    let telefono = document.getElementById("phone").value;
    let correo = document.getElementById("e-mail").value;
    let contraseña = document.getElementById("password").value;

    let v1= new personas(nombre,telefono,correo,contraseña);

    bd.datos.push(v1);
    localStorage.setItem("miBDp",JSON.stringify(bd));
    console.log("saving" + v1);
  

})
////boton re recuperar datos
document.getElementById("resave").addEventListener("click", ()=>{

    let v1=JSON.parse(localStorage.getItem("miBDp"));
     document.getElementById("name").value=v1.nombre;
     document.getElementById("phone").value=v1.telefono;
     document.getElementById("e-mail").value=v1.correo;
     document.getElementById("password").value=v1.contraseña;
 
     console.log("leido " );
     console.log(v1);
     let base = JSON.parse(localStorage.getItem("miBDp"));
     let texto = "";
     base.datos.forEach(element => {
         texto+=`
             <div class="card">
                 <p>Nombre: ${element.nombre}</p>
                 <p>Telefono: ${element.telefono}</p>
                 <p> <em>Correo:</em> ${element.correo}</p>
                
             </div>
         `
     });
     document.getElementById("contenido").innerHTML = texto;
     console.log(texto);
     console.log(base);
   
})

/*document.getElementById("btn_login").addEventListener("click", ()=>{
    let bd = JSON.parse(localStorage.getItem("miBDp"));
    bd = { datos: [{nombre: 'jose', telefono: 3411095287, correo:'jose@5.com', contraseña: 1234, usuario:1, login:true},
    {nombre:'juan', telefono:3332190881, correo: 'juan@.com', contraseña:5678, usuario:2, login:true},
    {nombre:'gaby', telefono:3125478900, correo: 'gaby@.com', contraseña:7800, usuario:4, login:true}] }


    var userphone = localStorage.getItem('telefono');
    var userpassword=localStorage.getItem('contraseña');
    //let user =localStorage.getItem('usuario');

    var phone = document.getElementById('phone2').value;
    var password = document.getElementById('password2').value;
    //let u = document.getElementById("usuario").value;

    if(phone.value == userphone && password.value == userpassword){  
        alert("datos correctos");
            window.location.href="index2.html";
    }else{
        alert("datos incorrectos");
            location.href="index.html";
    }
})*/

//funcion para verificar el login
function check(){
    let bd = JSON.parse(localStorage.getItem("miBDp"));
    bd = { datos: [{nombre: 'jose', telefono: 3411095287, correo:'jose@5.com', contraseña: 1234, usuario:1, login:true},
    {nombre:'juan', telefono:3332190881, correo: 'juan@.com', contraseña:5678, usuario:2, login:true},
    {nombre:'gaby', telefono:3125478900, correo: 'gaby@.com', contraseña:7800, usuario:4, login:true}] }

    var userphone = localStorage.getItem('telefono');
    var userpassword=localStorage.getItem('contraseña');
    

    var phone = document.getElementById('phone2').value;
    var password = document.getElementById('password2').value;
    

    if(phone.value == userphone && password.value == userpassword){
        location.replace=("index2.html");
        alert("datos correctos");
    }else if(phone.value != userphone && password.value !=userpassword){
        location.replace=("index2.html");
        alert("datos incorrectos");
    }
   
}

