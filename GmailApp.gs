function enviarCorreo(pdf) {
  // GmailApp.sendEmail("appscriptdev@gmail.com","asunto de prueba","este es el cuerpo del correo");

  // GmailApp.sendEmail("appscriptdev@gmail.com","asunto de prueba","este es el cuerpo del correo", {
  //   attachments: [pdf.getAs(MimeType.PDF)]
  // })

  GmailApp.sendEmail("appscriptdev@gmail.com", "asunto de prueba", "", {
    attachments: [pdf.getAs(MimeType.PDF)],
    name: "Curso de apps script",
    htmlBody: `
    <table>
      <tr>
        <td><h2>Hola este es el correo personalizado</h2></td>
      <tr>
    </table>
    `
  })
}
