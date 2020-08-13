const $upload = document.getElementById("upload")
const $dropDownUpload = document.getElementById("dropMenu-upload")
const $body = document.getElementById("bodyClick")

$upload.addEventListener("click",()=>{
    $upload.classList.toggle('active');
    $dropDownUpload.classList.toggle('showList');    
})
