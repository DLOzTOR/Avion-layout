function SetMenuState(state){
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