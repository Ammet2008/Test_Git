function ValidarExtension() {
  var archivo = document.getElementById("archivo");
  console.log(document.getElementById("archivo"));
  var archivoruta = archivo.value;
  var extPermitida = /(.csv)$/i;

  if (!extPermitida.exec(archivoruta)) {
    alert("Asegurate de haber seleccionado un archivo .CSV");
    archivo.value = "";
    document.getElementById("form_p").reset();
    return false;
  } else {
    //AQUI DEBERIA LEER EL CSV
    const data = [];
    const fileInput = document.querySelector("#archivo");

    Papa.parse(fileInput.files[0], {
      download: true,
      header: true,
      keepEmptyRows: false,
      skipEmptyLines: true,
      step: function (row) {
        data.push(row.data);
      },
      complete: function (results) {
        document.querySelector("#Container").innerHTML = JSON.stringify(data);

        //Data es el Array
        console.log(data);

        //Notaras que hay un valor más en el Array 'Parsed Extra', esto es porque "6,954415218,29/01/20 02:54:04,000000000 PM" tiene 4 elementos (Hay 3 comas)
        //Mientras que solo hay 3 Headers codcat,nomcat,datecat"

        console.log("Valores por Campo");
        console.log(data[0].codcat); //CodCat del Primer valor de la Lista.
        console.log(data[0].nomcat); //NomCat del Primer valor de la Lista.
        console.log(data[0].datecat); //DateCat del Primer valor de la Lista.
      },
    });
  }
}
