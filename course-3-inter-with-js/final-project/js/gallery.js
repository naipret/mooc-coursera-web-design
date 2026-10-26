function upDate(previewPic) {
  document.getElementById("image").style.backgroundImage =
    "url('" + previewPic.src + "')";
  document.getElementById("image").innerHTML = previewPic.alt;
}

function unDo() {
  document.getElementById("image").style.backgroundImage = "url('')";
  document.getElementById("image").innerHTML =
    "Hover over an image below to display here.";
}

function addTabFocus() {
  console.log("Page loaded");
  var previews = document.querySelectorAll(".preview");
  for (var i = 0; i < previews.length; i++) {
    previews[i].setAttribute("tabindex", "0");
  }
}
