function generateCat(){
    var image = document.createElement('img');
    var div = document.querySelector('#flexcat-gen');
    image.src = "cat.jpg"
    div.appendChild(image);
}