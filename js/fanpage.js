document.addEventListener("DOMContentLoaded", () => {
    getCatImage()
    btnClick()
})

function getCatImage(){
    let image= document.getElementById("cat-image");
    fetch('https://api.thecatapi.com/v1/images/search?api_key=live_PsFV5Yqlsoxq5r8i4vdPrUrOCCsRJZDkQkaMzcmQ6pIIGXo7c47UaatVlIvCVgo1')
    .then(resp => resp.json())
    .then(json => image.src = json[0].url)
    image.height = 500;
    image.width = 600;
}

function btnClick(){
    let button = document.getElementById("cat-btn");
    button.addEventListener("click", getCatImage);
}