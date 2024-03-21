$(function(){
    // выпадающее меню
    let nav = $("#burger-distlay");
    let navToggle = $("#navToggle");
    navToggle.on("click", function(event){
    event.preventDefault();
        nav.toggleClass("show");
    
    });
    
});