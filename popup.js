
// document.querySelector('.openmodal').addEventListener('click', function(){
// chrome.tabs.query({currentWindow:true, active:true}, function(tabs){
// var activeTab= tabs[0];
// chrome.tabs.sendMessage(activeTab.id,{command:"openModal"})
// });
// });

   

let btn= document.getElementById("readSGC");
btn.addEventListener ("click", ReadSGC);


function ReadSGC(){
   
    console.log("Welcome to the RE");  
    var SGC_data = document.getElementsByClassName("HeadingCertCode");
    document.getElementById("showdata").innerHTML = SGC_data[1];  
    window.location.href = "/Details.html";
  
}

let closebtn= document.getElementById("Close");
closebtn.addEventListener ("click", closepopup);

function closepopup(){
    window.close();
  
}