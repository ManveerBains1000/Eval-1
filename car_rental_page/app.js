let bgImgContainer = document.querySelector("#container");
const bgImgArray = ["image-1","image-2","image-3","image-4"];
let index = 0;
const changeBgImg = () => {
    bgImgContainer.classList.remove(bgImgArray[index]);
    index = (index + 1) % bgImgArray.length;
    bgImgContainer.classList.add(bgImgArray[index]);
}
setInterval(changeBgImg,5000);
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


let selectCar = document.querySelector("#Selectcar-col");
let carSelectBtn = document.querySelector("#car-sel-submit-btn");
let locationBox = document.querySelector("#location");
let selectCarObj = {
    1:'../secomndary pages/Mahindra/thar_5door.html',
    2:'../secomndary pages/Mahindra/Scorpio_N.html',
    3:'../secomndary pages/Mahindra/Bolero.html',
    4:'../secomndary pages/Mahindra/xuv700.html'
};
carSelectBtn.addEventListener('click',()=>{
    if (locationBox.value === "") {
        locationBox.style.border = "1px solid red";
    }
    else{
    window.location.href = selectCarObj[selectCar.value];
    }
})


