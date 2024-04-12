const button = document.getElementById("burger-menu");
patterns = document.querySelectorAll(".burger-pattern");
const menu = document.querySelector(".hidden-burg-menu");

console.log(patterns);

isHidden = true;
button.addEventListener('click', function(event){
    if(isHidden==true){
        menu.className = "hidden-burg-menu-active";
        patterns.forEach(function(item) {
            item.style.rotate = "270deg";
        });
        isHidden=false;
    }
    else if(isHidden==false)
    {
        menu.className = "hidden-burg-menu";
        patterns.forEach(function(item) {
            item.style.rotate = "0deg";
        });
        isHidden=true;
    }
})