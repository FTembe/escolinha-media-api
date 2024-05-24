function uploadFile() {
  var fileInput = document.getElementById("fileInput");
  var file = fileInput.files[0];

  var formData = new FormData();
  formData.append("file", file);

  fetch("https://api.centroinfantil.co.mz/api/v1/media", {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: formData,
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("deu erro " + error);
    });
}
