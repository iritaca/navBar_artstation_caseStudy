const $upload = document.getElementById("upload")
const $dropDown = document.getElementById("dropMenu")

$upload.addEventListener("click",()=>{
    $upload.classList.toggle('open');
    $dropDown.classList.toggle('showList');
    
}
)