function update(previewPic) {
    document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
    document.getElementById("image").innerText = previewPic.alt;
}

function undo() {
    document.getElementById("image").style.backgroundImage = "url('')";
    document.getElementById("image").innerText = "Hover over an image below to display here";


}