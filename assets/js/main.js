function SetMenuState(state){
    window.scrollTo(0,0);
    if(state == true){
        menu.classList.add("active");
        body.style.setProperty("overflow-y", "hidden");
    }
    else{
        menu.classList.remove("active");
        body.style.setProperty("overflow-y", "visible");
    }
}
var menu = Select(".sidebar-menu");
var sidemenuBtnOpen = Select(".sidemenu-btn.open");
var sidemenuBtnClose = Select(".sidemenu-btn.close");
var body = Select("body");
sidemenuBtnOpen.onclick = () => {SetMenuState(true)};
sidemenuBtnClose.onclick = () => {SetMenuState(false)};
$(".counter .plus").on("click", function(){
    var input = $(this).parent().children("input");
    if(parseInt(input.attr("max")) > parseInt(input.val())) {
        input.val(parseInt(input.val()) + 1);
        input.change();
    }
});
$(".counter .minus").on("click", function(){
    var input = $(this).parent().children("input");
    if(parseInt(input.attr("min")) < parseInt(input.val())) {
        input.val(parseInt(input.val()) - 1);
        input.change();
    }
});