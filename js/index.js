$(function(){
    // выпадающее меню
    let nav = $("#burger-distlay");
    let navToggle = $("#navToggle");
    navToggle.on("click", function(event){
    event.preventDefault();
        nav.toggleClass("show");
    
    });

    // выпадающей список
    let listclick1 = $("#listclick1");
    let listclickon1 = $("#listclickon1");
    let listclick2 = $("#listclick2");
    let listclickon2 = $("#listclickon2");
    let listclick3 = $("#listclick3");
    let listclickon3 = $("#listclickon3");
    let listclick4 = $("#listclick4");
    let listclickon4 = $("#listclickon4");
    listclickon1.on("click", function(){
    listclick1.toggleClass("display");
    });
    listclickon2.on("click", function(){
    listclick2.toggleClass("display");
    });
    listclickon3.on("click", function(){
    listclick3.toggleClass("display");
    });
    listclickon4.on("click", function(){
    listclick4.toggleClass("display");
    });
  
});