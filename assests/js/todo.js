// alert("welcome");
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});
// $("li").click(function(){

// });
$("ul").on("click","span", (function(){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
}));
$("input[type='text']").keypress(function(event){
    if(event.which == 13){
          let todoText = this.value;
          this.value = ""; 
          $("ul").append("<li><span><i class='fa fa-trash'></i></span> "+todoText+"</li>");
    }

});
