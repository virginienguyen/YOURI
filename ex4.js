let Border = object.getElementById("Border");
Border.focus = () => object.style.border = "thin dotted red";
Border.focusout = () => object.style.border = "green";