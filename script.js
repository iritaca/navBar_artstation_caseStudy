const $upload = document.getElementById("upload")
const $dropDownUpload = document.getElementById("dropMenu-upload")
const $body = document.getElementById("bodyClick")
const $bell=document.getElementById("notificationBell")
const $notificationBox=document.getElementById("notificationBox")
const $userData=document.getElementById("userData");
const $arrowTurn=document.getElementById("arrowTurn");
const $showUserData=document.getElementById("showUserData");

$upload.addEventListener("click",()=>{
    $upload.classList.toggle('active');
    $dropDownUpload.classList.toggle('showList');    

    $bell.classList.remove("active");
    $notificationBox.classList.remove("showList")
})

$bell.addEventListener('click',()=>{
    $upload.classList.remove("active");
    $dropDownUpload.classList.remove("showList");

    $bell.classList.toggle("active");
    $notificationBox.classList.toggle("showList")
})

$userData.addEventListener('click', ()=>{
    $userData.classList.toggle("active");
    $arrowTurn.classList.toggle("turn")
    $showUserData.classList.toggle("showList")
})

