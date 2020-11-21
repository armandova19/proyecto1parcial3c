let bd = JSON.parse(localStorage.getItem("miBDp"));

//let bd = { datos: [] }
if (!bd || bd==undefined)
{
    bd = { 
           datos: [],
        }
}
bd = { datos: [{nombre: 'jose', telefono: 3411095287, correo:'jose@5.com', contraseña: 1234, usuario:1, login:true},
{nombre:'juan', telefono:3332190881, correo: 'juan@.com', contraseña:5678, usuario:2, login:true},
{nombre:'gaby', telefono:3125478900, correo: 'gaby@.com', contraseña:7800, usuario:4, login:true}] }


//let miBDp=JSON.parse(localStorage.getItem(miBDp));
//console.log(miBDp);

const ingresar=() =>{
    let telefono = document.getElementById("phone2").value;
    let password = document.getElementById("password2").value;

    let cliente = authenticate(telefono, password);

    if(cliente==null)
    return;

    localStorage.setItem('client', JSON.stringify(cliente));
    location.replace("index2.html");
}

let authenticate = (telefono,password) =>{
    let clientes =JSON.parse(localStorage.getItem("miBDp"));
    console.log(clientes);

    for(let cliente of clientes.datos){
        if(cliente.telefono==telefono && cliente.password==password){
            return cliente;
        }
        alert("datos incorrectos");
        return null;

    }
}

let check = ()=>{
    let clientes = JSON.parse(localStorage.getItem('client'));

    if(!(!clientes  || clientes==null  || typeof(clientes)=="undefined"))
        location.replace("index2.html");
}
 let clientes = check();
/*document.getElementById("btnadd").addEventListener("click", ()=>{
    let nombre = document.getElementById("name").value;
    let telefono = document.getElementById("phone").value;
    let correo = document.getElementById("e-mail").value;
    let contraseña = document.getElementById("password").value;

    let v1= new personas(nombre,telefono,correo,contraseña);

    bd.datos.push(v1);
    localStorage.setItem("miBDp",JSON.stringify(bd));
    console.log("saving" + v1);
  

})*/
////boton de recuperar datos
/*document.getElementById("resave").addEventListener("click", ()=>{

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
   
})*/

/*document.getElementById("btn_login").addEventListener("click", ()=>{
    let bd = JSON.parse(localStorage.getItem("miBDp"));
    //bd = { datos: [{nombre: 'jose', telefono: 3411095287, correo:'jose@5.com', contraseña: 1234, usuario:1, login:true},
    //{nombre:'juan', telefono:3332190881, correo: 'juan@.com', contraseña:5678, usuario:2, login:true},
    //{nombre:'gaby', telefono:3125478900, correo: 'gaby@.com', contraseña:7800, usuario:4, login:true}] }


    var userphone = localStorage.getItem('telefono');
    var userpassword=localStorage.getItem('contraseña');
    //let user =localStorage.getItem('usuario');

    var phone = document.getElementById('phone2').value;
    var password = document.getElementById('password2').value;
    //let u = document.getElementById("usuario").value;

    if(phone.value == userphone && password.value == userpassword){  
            location.replace=("index2.html");
    }else{
            location.replace=("index.html");
    }
})*/

//funcion para verificar el login
/*function check(){
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
        
    }else if(phone.value != userphone && password.value !=userpassword){
        location.replace=("index2.html");
        
    }
   
}*/

