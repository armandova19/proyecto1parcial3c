

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
///////el cobro solo se le hace al cliente que el propietario acaba de registrar
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
//Agregar la cantidad de deudas a todos los clientes registrados 
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

