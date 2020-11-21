class personas{
    constructor(nombre,telefono,correo, contraseña, cantidad){
        this.nombre=nombre;
        this.telefono=telefono;
        this.correo=correo;
        this.contraseña=contraseña;
        this.cuenta=cantidad;
    }
}

class cuenta{
    constructor(telefono, cantidad){
        this.telefono=telefono;
        this.cuenta=cantidad;
    }
}

class login{
    constructor(telefono, contraseña){
        this.telefono=telefono;
        this.contraseña=contraseña;
    }
}
