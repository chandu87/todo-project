// alert("welcome");

$("li").click(function(){
    $(this).toggleClass("completed");
});
$("span").click(function(){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});
