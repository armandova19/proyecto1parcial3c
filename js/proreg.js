

//let bd = { datos: [] }
let bd = JSON.parse(localStorage.getItem("miBDp"));

//let bd = { datos: [] }
bd = { datos: [{nombre: 'jose', telefono: 3411095287, correo:'jose@5.com', contraseña: 1234, usuario:1, login:true},
{nombre:'juan', telefono:3332190881, correo: 'juan@.com', contraseña:5678, usuario:2, login:true},
{nombre:'gaby', telefono:3125478900, correo: 'gaby@.com', contraseña:7800, usuario:4, login:true}] }


document.getElementById("btnagregar").addEventListener("click", ()=>{
    let nombre = document.getElementById("name").value;
    let telefono = document.getElementById("phone").value;
    let correo = document.getElementById("e-mail").value;
    let contraseña = document.getElementById("password").value;

    let v1= new personas(nombre,telefono,correo,contraseña);

    bd.datos.push(v1);
    localStorage.setItem("miBDp",JSON.stringify(bd));
    console.log("saving" + v1);
  

})

document.getElementById("recuperar").addEventListener("click", ()=>{

   /*let v1=JSON.parse(localStorage.getItem("miBDp"));
    document.getElementById("name").value=v1.nombre;
    document.getElementById("phone").value=v1.telefono;
    document.getElementById("e-mail").value=v1.correo;
    document.getElementById("password").value=v1.contraseña;

    console.log("leido " );
    console.log(v1);*/
    let base = JSON.parse(localStorage.getItem("miBDp"));
    let texto = "";
    base.datos.forEach(element => {
        texto+=`
            <div class="card">
                <p>Nombre: ${element.nombre}</p>
                <p>Telefono: ${element.telefono}</p>
                <p> <em>Correo:</em> ${element.correo}</p>
                <p> <em>Contraseña:</em> ${element.contraseña}</p><br>
            </div>
        `
    });
    document.getElementById("contenido").innerHTML = texto;
    console.log(texto);
    console.log(base);
  
})

document.getElementById("btnadd").addEventListener("click", ()=>{
    let telefono = document.getElementById("phone2").value;
    let cantidad = document.getElementById("cantidad").value;

    let v1= new cuenta(telefono, cantidad);

    bd.datos.push(v1);
    localStorage.setItem("miBDp",JSON.stringify(bd));
    console.log("saving" + v1);
  

})

document.getElementById("resave").addEventListener("click", ()=>{

    /*let v1=JSON.parse(localStorage.getItem("miBDp"));
     document.getElementById("name").value=v1.nombre;
     document.getElementById("phone").value=v1.telefono;
     document.getElementById("e-mail").value=v1.correo;
     document.getElementById("password").value=v1.contraseña;
 
     console.log("leido " );
     console.log(v1);*/
     let base = JSON.parse(localStorage.getItem("miBDp"));
     let texto = "";
     base.datos.forEach(element => {
         texto+=`
             <div class="card">
                 <p>Telefono: ${element.telefono}</p>
                 <p> <em>Cuenta:</em> ${element.cantidad}</p>
             </div>
         `
     });
     document.getElementById("contenido2").innerHTML = texto;
     console.log(texto);
     console.log(base);
   
})

