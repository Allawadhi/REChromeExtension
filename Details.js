
let  backbtn= document.getElementById("back");
backbtn.addEventListener ("click", Back);
function Back(){window.location.href = "/popup.html";}


let fillbtn = document.getElementById("FillValues");
fillbtn.addEventListener ("click", fillForm);
function fillForm(){
    // var gradeValue = document.getElementById("AuthCode").nodeValue;
    let gradeValue="SEARCHED AUTH CODE: 4843865";
    document.getElementById("mat-input-4").innerText ="SEARCHED AUTH CODE: 4843865";  
}