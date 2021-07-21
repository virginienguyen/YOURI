document.getElementById("bour").addEventListener("focus",function() {
    this.style.border = "5px solid green";
    this.style.outline ="none";
  });
  document.getElementById("bour").addEventListener("focusout",function() {
    this.style.border = "5px solid red";
  });