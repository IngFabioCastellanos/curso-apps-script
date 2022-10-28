function crearPdfPlantilla() {
  const ID_DOCUMENT = "1EU9qCEbO02DBM0KBhmWk1lNQkWTEOwAXybAs_Yax2J4";
  const ID_CARPETA = "1EAD6jSs6_KIZfr1NBxo3OhH8BBfuFsbp";

  // obtener la carpeta del drive
  const carpeta = DriveApp.getFolderById(ID_CARPETA);

  // obtener el documento y su cuerpo
  const plantilla = DriveApp.getFileById(ID_DOCUMENT);

  const copiaDocumento = plantilla.makeCopy("plantilla copiada",carpeta);

  const documento = DocumentApp.openById(copiaDocumento.getId());
  
  const cuerpoDocumento = documento.getBody();

  cuerpoDocumento.replaceText("<<NOMBRE>>", "FABIO CASTELLANOS")
  cuerpoDocumento.replaceText("<<FIRMA>>", "FABIO CASTELLANOS")
  cuerpoDocumento.replaceText("<<CONSECUTIVO>>", "123456")

  documento.saveAndClose();

  const pdf = DriveApp.getFileById(copiaDocumento.getId()).getAs(
    "application/pdf"
  );
  const pdfCreado = carpeta.createFile(pdf.copyBlob());

  DriveApp.getFileById(copiaDocumento.getId()).setTrashed(true);

  enviarCorreo(pdfCreado);

  // console.log(cuerpoDocumento)
}
