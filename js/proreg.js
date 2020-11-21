

//let bd = { datos: [] }
let bd = JSON.parse(localStorage.getItem("miBDp"));

bd = { datos: [{nombre: 'jose', telefono: 3411095287, correo:'jose@5.com', contraseña: 1234, cuenta:1000,usuario:1, login:true},
{nombre:'juan', telefono:3332190881, correo: 'juan@.com', contraseña:5678, cuenta: 800, usuario:2, login:true},
{nombre:'gaby', telefono:3125478900, correo: 'gaby@.com', contraseña:7800, cuenta:900 , usuario:4, login:true}] }


document.getElementById("btnagregar").addEventListener("click", ()=>{
    let nombre = document.getElementById("name").value;
    let telefono = document.getElementById("phone").value;
    let correo = document.getElementById("e-mail").value;
    let contraseña = document.getElementById("password").value;
    let cuenta=0;

    let v1= new personas(nombre,telefono,correo,contraseña, parseInt(cuenta));

    bd.datos.push(v1);
    localStorage.setItem("miBDp",JSON.stringify(bd));
  

})

document.getElementById("recuperar").addEventListener("click", ()=>{

    let base = JSON.parse(localStorage.getItem("miBDp"));
    let texto = "";
    base.datos.forEach(element => {
        texto+=`
            <div class="card"  style="text-align:center">
                <p>Nombre: ${element.nombre}</p>
                <p>Telefono: ${element.telefono}</p>
                <p> <em>Correo:</em> ${element.correo}</p>
                <p> <em>Contraseña:</em> ${element.contraseña}</p><br>
                <p> <em>Cuenta:</em> ${element.cuenta}</p>
                <p>--------------------------------------------------</p><br>
            </div>
        `
    });
    document.getElementById("contenido").innerHTML = texto;
    console.log(texto);
    console.log(base);
  
})

function CobroCliente(telefono)
{
    $("#telefono").val(telefono)
    $("#agregarcobro").modal("show");
}

function addCobroClient()
{
    let telefono = document.getElementById("telefono").value;
    let cobro = document.getElementById("cobro").value;
    if(cobro <= 0 )
        return alert("Numero mayor a 0");

    let base = JSON.parse(localStorage.getItem("miBDp")); 
    
    base.datos.forEach((element) => {
        if( element.telefono == telefono )
        {
            element.cuenta = parseInt(element.cuenta)-parseInt(cobro);
        }
    });

    localStorage.setItem('miBDp',JSON.stringify(base));
}
///////////////////////////////////////

function abrirModalClientes()
{
    $("#cantidad_todos").modal("show");
}
//Agregar deuda a todos los clientes por igual
function AddcantClientes()
{
    let cuenta = document.getElementById("cantidad").value;
    if(cuenta <= 0 )
        return alert(" mayor a 0");
    let base = JSON.parse(localStorage.getItem("miBDp")); 
    
    base.datos.forEach((element) => {
        element.cuenta = parseInt(element.cuenta)+parseInt(cuenta);
        console.log(element.deuda)
    });
    
    localStorage.setItem('miBDp',JSON.stringify(base));
}

/*document.getElementById("btnadd").addEventListener("click", ()=>{
    let telefono = document.getElementById("phone2").value;
    let cantidad = document.getElementById("cantidad").value;

    let v1= new cuenta(telefono, cantidad);

    bd.datos.push(v1);
    localStorage.setItem("miBDp",JSON.stringify(bd));
    console.log("saving" + v1);
  

})*/

/*document.getElementById("resave").addEventListener("click", ()=>{

    /*let v1=JSON.parse(localStorage.getItem("miBDp"));
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
                 <p>Telefono: ${element.telefono}</p>
                 <p> <em>Cuenta:</em> ${element.cantidad}</p>
             </div>
         `
     });
     document.getElementById("contenido2").innerHTML = texto;
     console.log(texto);
     console.log(base);
   
})
*/
