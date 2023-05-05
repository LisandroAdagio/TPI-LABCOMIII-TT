import './LogIn.css';
var dataBase;
const LogInDataBase = () => {
    var call = indexedDB.open("Datos-de-Usuario");
    call.addEventListener("error", ShowError);
    call.addEventListener("success", Start);
    call.addEventListener("upgradedneeded", CreateStorage);
}
const ShowError = (event) => {
    alert("Hubo un ERROR: "+ event.code + "/"+ event.message);
}
const Start = (event) => {
    dataBase = event.target.result;
    console.log("Se ha iniciado la base de datos");
}
const CreateStorage = (event) => {
    var newDataBase = event.target.result;
    var storage = newDataBase.createObjectStore("Users", {keyPath: "id"});
    storage.createIndex("BuscarPorNombre", "Nombre", {unique: false});

}

window.addEventListener("load", LogInDataBase)
export default LogInDataBase;