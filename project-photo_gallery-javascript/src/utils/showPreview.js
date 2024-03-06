function showPreview(event) {
  if (event.target.files.length > 0) {
    // const src = URL.createObjectURL(event.target.files[0]);
    // const preview = document.getElementById("file-ip-1-preview");
    // const close = document.getElementById("close");

    // preview.src = src;
    // preview.style.display = "block";

    // document.getElementById("uploadingForm").style.height = "600px";

    var src = URL.createObjectURL(event.target.files[0]);
    var preview = document.getElementById("file-ip-1-preview");
    preview.src = src;
    preview.style.display = "block";
  }
}
