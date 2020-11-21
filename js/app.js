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

