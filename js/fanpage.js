document.addEventListener("DOMContentLoaded", () => {
    getCatImage()
    btnClick()
})

function getCatImage(){
    let image= document.getElementById("cat-image");
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(resp => resp.json())
    .then(json => image.src = json[0].url)
}

function btnClick(){
    let button = document.getElementbyId("cat-btn");
    button.addEventListener("click", getCatImage);
}