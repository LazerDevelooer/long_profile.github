// document.getElementById("BtnTimeShow").addEventListener("click", function(){
//     document.querySelector(".popUp").style.display = "block";
// })
// document.getElementById("close").addEventListener("click", function(){
//     document.querySelector(".popUp").style.display = "none";
// })
var popupsBtn = document.getElementsByClassName("popup-btn");

// Go through the popup's btn list
for (var i = 0; i < popupsBtn.length; i++) {
  
  // Define the onclick event on popup's btn
    popupsBtn[i].onclick = function() {
  
    // Get the popup associated to the btn with the data-popup-id
    var popup = document.getElementById("popup-" + this.dataset.popupId);
    
    // Use a class to toggle popup visible or not
    popup.classList.toggle("visible");
    
  }
  
}

