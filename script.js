let c = (el) => document.querySelector(el);
let cs = (el) => document.querySelectorAll(el);

function openSideBar(){
    let title = document.getElementById("title");
    title.style.marginLeft == "70px" || title.style.marginLeft == "" ? title.style.marginLeft = "200px" : title.style.marginLeft = "70px";

    let text = c(".container");
    text.style.width == "50px" || text.style.width == "" ? text.style.width =  "190px" : text.style.width = "50px";

    let logo = c(".logo");
    logo.style.display == "none" || logo.style.display == "" ? logo.style.display = "block" : logo.style.display = "none";
    
    let menuSide = c(".menu-side");
    menuSide.style.marginLeft == "0px" || menuSide.style.marginLeft == "" ? menuSide.style.marginLeft = "140px" : menuSide.style.marginLeft = "0px";

    let openList = cs(".text");
    for (let i = 0; i < openList.length; ++i){
        openList[i].style.marginLeft == "-75px" || openList[i].style.marginLeft == "" ? openList[i].style.marginLeft = "57px" : openList[i].style.marginLeft = "-75px";
    };

    let logOut = c(".icon-log-out");
    logOut.style.width == "40px" || logOut.style.width == "" ? logOut.style.width = "180px" : logOut.style.width = "40px";

    let iconLeft = c(".icon-log-out img");
    iconLeft.style.marginLeft == "0px" || iconLeft.style.marginLeft == "" ? iconLeft.style.marginLeft = "140px" : iconLeft.style.marginLeft = "0px";

    let photoName = c(".photo-name");
    photoName.style.marginLeft == "-140px" || photoName.style.marginLeft == "" ? photoName.style.marginLeft = "0px" : photoName.style.marginLeft = "-140px";
};