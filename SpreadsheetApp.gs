const idDatabase = "1LzPjLuo6RoER_ZdduGRvDwIzzxWr4LvhPIk3wBMh65A";
const baseDeDatos = SpreadsheetApp.openById(idDatabase);
const sheetUsuarios = baseDeDatos.getSheetByName("usuarios");

function myFunction() {
  SpreadsheetApp.create("sheet de pruebas")
}

function crearSheetUsuarios() {
  baseDeDatos.insertSheet("usuarios");
}

function insertarDatos() {
  sheetUsuarios.appendRow([Utilities.getUuid(), "Fabio", "Castellanos", "appscriptdev2021@gmail.com"])
}

function obtenerValores() {
  const datosUsuario = sheetUsuarios.getDataRange().getDisplayValues();
  console.log(datosUsuario);
  return JSON.stringify(datosUsuario);
}

function modificarDato() {
  sheetUsuarios.getRange(2, 2).setValue("Ivan")
}


function insertarMultiplesDatos() {
  const numeroColumnas = sheetUsuarios.getLastColumn();
  sheetUsuarios.getRange(3,1,2,numeroColumnas).setValues([
    [Utilities.getUuid(), "Pepito", "Perez", "pepito@gmail.com"],
    [Utilities.getUuid(), "Juana", "de arco", "juana@gmail.com"]
  ]);
}
















