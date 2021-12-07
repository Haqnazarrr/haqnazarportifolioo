$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass(".sticky");
        }else {
            $('.navbar').removeClass('sticky'); 
        }
    });
    // toggle menu navbar script
    $("menu_btn").click(function(){
        $(".navbar .menu").toggleClass("active")
    })
});




function myFunction() {
    var x = document.getElementById("menu");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }






  function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }