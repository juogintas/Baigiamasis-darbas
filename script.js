var tabs = document.getElementsByClassName("tab-info")

//paslepia visus tabus
for (var tab of tabs) {
    tab.style.display = "none"
}

// paslepia tik tuos kurie nepaspausti
function displayTab(id){
    for (var tab of tabs) {
    tab.style.display = "none"}

    document.getElementById(id).style.display = "block"
}


//stilius mygtuka,

var buttons = document.querySelectorAll("button")

for(var button of buttons ) {
    button.addEventListener("click", function(){
        for(var x of buttons){
            //nuima klase nuo visu
            x.classList.remove("selected")
        }
        //prideda klase tam kuris paspaustas
        this.classList.add("selected")
    })
}



for (button of buttons) {
    button.addEventListener("click", function(){
        var index = this.getAttribute("index")

        document.body.style.background = backgroundColors[index]
        console.log(backgroundColors[index])
    })
}