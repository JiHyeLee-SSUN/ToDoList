//Checking Off Specific Todos By Clicking
//ul lerin icindeki butun li-lara aid olur. gelecek elementlerde buradadir
$("ul").on("click", "li", function() {
    //new version
    $(this).toggleClass("completed");

})


//Click on X to delete Todos
//ul lerin icindeki butun spanlara aid olur. gelecek elementlerde buradadir
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    })
    event.stopPropagation();
})


