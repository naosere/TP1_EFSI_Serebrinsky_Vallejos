//EJERCICIO 1
const formatearNombre = (nombre) => {


     nombre = nombre.toLowerCase();
    let nuevoNombre = nombre[0].toUpperCase() + nombre.slice(1);
    console.log(nuevoNombre);    
    //return nuevoNombre;
}


formatearNombre("NAO");


//EJERCICIO 2
const contarLetras  = (texto) =>{
    let contador = 0;
    for (i=0 ; i<texto.length; i++){
        if (texto[i]!== " "){
            contador++;
        }
    }
    console.log(contador);
}


contarLetras("lucho callate");


//EJERCICIO 3
const maximo = (a, b, c) => {
    let numMax;
    if (a>b){
        numMax=a;
    }
    else{
        numMax=b;
    }
    if (c>numMax){
        numMax=c;        
    }
    console.log(numMax);
}


maximo(10,1,6565656);


//EJERCICIO 3 bis Y EJERCICIO 6
const maximo2 = unArray => {
    const arrayOrdenado = unArray.sort((a, b) => b - a);
    console.log("El número mayor es " + arrayOrdenado[0]);
}
const array3 = [1, 2, 3];
maximo2(array3);


//EJERCICIO 4
const validarPassword= (password) =>{
    let correcta = false;
    if (password.length>8){
        for (i=0 ; i<password.length; i++){
        if (!isNaN(password[i])){
            correcta = true;
        }
    }
    }
    if(correcta){
        console.log("La contraseña es valida");
    }
    else console.log("La contraseña no es valida");
}


validarPassword("aoiwdhioa24234sedhd");


//EJERCICIO 5
const sumarArray = (numeros) =>{
    let suma = 0;
    numeros.forEach(element => {
        suma+= element;
    });
    console.log(suma);
}
const array5 = [81236, 1, 2, 3];
sumarArray(array5);


//EJERCICIO 7
const obtenerPares = (numeros)=>{
    numerosPares = [];
    numeros.forEach(element => {
        if (element % 2 == 0){
            numerosPares.push(element);
        }
    });
    console.log(numerosPares)
}
const array7 =[1,2,3,4,5,56778];
obtenerPares(array7);


//EJERCICIO 8
const descripcionUsuario = (usuario)=>{
    console.log(`${usuario.nombre} tiene ${usuario.edad} años`);
}

const usuario = {
 nombre: "Ana",
 edad: 20,
 activo: false
}

descripcionUsuario(usuario);


//EJERCICIO 9
const activarUsuario= (usuario)=>{
    usuario.activo = true;
    console.log(usuario.activo);
}

activarUsuario(usuario);


//EJERCICIO 10
const productos = [
{nombre:"Mouse", precio:10},
{nombre:"Teclado", precio:25},
{nombre:"Monitor", precio:200}
]


const sumarPrecios = (productos) => {
    let suma = 0;
    productos.forEach(element => {
        suma+= element.precio;
    });
    console.log(suma);
}


sumarPrecios(productos);


//EJERCICIO 11
const usuarios = [
{nombre:"Ana", edad:17},
{nombre:"Juan", edad:25},
{nombre:"Pedro", edad:30}
]


const nuevosUsuarios = (usuarios) =>{
    const nombres = usuarios.map(e =>
    {
        return e.nombre
    }
    );
    console.log(nombres);
}


nuevosUsuarios(usuarios);


//EJERCICIO 12
const mayoresA18 = (usuarios) =>{
    const numerosMayores18 = usuarios.filter(e => e.edad > 18);
    console.log (numerosMayores18);
}


mayoresA18 (usuarios);


//EJERCICIO 13
const sumarEdades = (usuarios) =>{
    let suma = usuarios.reduce((acc, u) => {
        return acc + u.edad;
    }, 0);
    console.log(suma);
}


sumarEdades (usuarios);


//EJERCICIO 16
const buscarProducto = (productos, nombre) =>{
    let existe = false;
    let i = 0;
    do {
        if (productos[i].nombre == nombre){
            existe = true;
            console.log(`Si existe, el precio es ${productos[i].precio}`);
        }
        i++;
    }while(existe == false && i < productos.length);
    if (i == productos.length){
        console.log("No se encontró ningún producto con ese nombre");
    }
}

buscarProducto(productos, "Mouse"); //SI LO ENCUENTRA
buscarProducto(productos, "ladiaskljd"); //NO LO ENCUENTRA


//EJERCICIO 17
const productosCaros = productos => {
    const productosMas50 = productos.filter(e => e.precio > 50);
    console.log (productosMas50);
}

productosCaros(productos);

//EJERCICIO 18
const promedio = numeros => {
    let suma = numeros.reduce((acc, num) => {
        return acc + num;
    }, 0);

    let promedio = suma / numeros.length;
    console.log(`la suma da ${suma}, y el promedio es ${promedio}, ya que tiene ${numeros.length} numeros`);
}

promedio([1,2,3,4,5,6,22]);

//APIS 1
const usuarios2 = [
{id:1, nombre:"Ana", edad:20},
{id:2, nombre:"Juan", edad:15},
{id:3, nombre:"Pedro", edad:30}
]

const obtenerUsuarios = () =>{
    return usuarios2;
}


//APIS 2
const obtenerUsuarioPorId = id =>{
    let existe = false;
    let i = 0;
    do {

        if (usuarios2[i].id == id){
            existe = true;
            console.log(`Si existe, ese numero de id le corresponde al usuario ${usuarios2[i].nombre}`);
        }
        i++;
    }while(existe == false && i < usuarios2.length);
    if (i == usuarios2.length){
        console.log("No se encontró ningún usuario con ese id");
    }
}
obtenerUsuarioPorId(987); //NO LO ENCUENTRA
obtenerUsuarioPorId(1); //SI LO ENCUENTRA


//APIS 3
const obtenerMayores = () =>{
    const numerosMayores18 = usuarios2.filter(e => e.edad > 18);
    console.log (numerosMayores18);
}
obtenerMayores ();


//APIS 4
const crearUsuario = () =>{
    let ultimoUser = usuarios2.at(-1);
    let nuevoUser = {
        id : (ultimoUser.id +1),
        nombre: "lucho",
        edad:18000
    }
    usuarios2.push(nuevoUser);
    console.log(usuarios2);
}

crearUsuario();
