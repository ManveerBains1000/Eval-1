let bgImgContainer = document.querySelector("#container");
console.log(bgImgContainer);
const bgImgArray = ["image-1","image-2"];
let index = 0;
const changeBgImage = (img) => {
    console.log(bgImgArray[img]);
    bgImgContainer.classList.remove(bgImgArray[img++]);
    console.log(bgImgArray[img]);
    if (img < bgImgArray.length){
    bgImgContainer.classList.add(bgImgArray[0]);
    }
}

let main = document.querySelector("main");
let header = document.querySelector("header");
let footer = document.querySelector("footer");
let preLoader = document.querySelector("#pre-loader");
main.style.display = "none";
header.style.display = "none";
footer.style.display = "none";

setTimeout(()=>{
    main.style.display = "block";
    header.style.display = "block";
    footer.style.display = "block";
    preLoader.style.display = "none";
},2000)
