document.addEventListener("DOMContentLoaded", () => {
    getCatImage()
    btnClick()
})

function getCatImage(){
    let image= document.getElementById("cat-image");
    fetch('https://api.thecatapi.com/v1/images/search?api_key=live_PsFV5Yqlsoxq5r8i4vdPrUrOCCsRJZDkQkaMzcmQ6pIIGXo7c47UaatVlIvCVgo1')
    .then(resp => resp.json())
    .then(json => image.src = json[0].url)
}

function btnClick(){
    console.log("in btnClick")
    let button = document.getElementById("cat-btn");
    button.addEventListener("click", getCatImage);
    console.log("finished function")
}
