function upDate(previewPic) {
  console.log("upDate triggered: " + previewPic.alt + ", " + previewPic.src);
  var imgDiv = document.getElementById("image");
  imgDiv.style.backgroundImage = "url('" + previewPic.src + "')";
  imgDiv.innerHTML = previewPic.alt;
}

function unDo() {
  console.log("unDo triggered");
  var imgDiv = document.getElementById("image");
  imgDiv.style.backgroundImage = "url('')";
  imgDiv.innerHTML = "Hover over an image below to display here.";
}

function addTabFocus() {
  console.log("addTabFocus triggered");
  var previews = document.querySelectorAll(".preview");
  for (var i = 0; i < previews.length; i++) {
    previews[i].setAttribute("tabindex", "0");
    previews[i].tabIndex = 0;
  }
}

function setTabindex() {
  addTabFocus();
}

function addTabindex() {
  addTabFocus();
}

window.onload = addTabFocus;
window.addEventListener("DOMContentLoaded", addTabFocus);
