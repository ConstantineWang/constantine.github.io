var tags = document.getElementsByClassName("row")
AOS.init();
console.log(tags)

for (let i = 0; i < tags.length; i++) {

    tags[i].addEventListener("click", function () {
        console.log(this)
        for (let i = 1; i < this.children.length; i++) {{
                if (this.children[i].style.display == "block") {
                    this.children[i].style.display = "none"
                }
                else {
                    this.children[i].style.display = "block"
                }   
            }
        }

    })

}


var close = true;
function collapse(){

    if(close){
        setTimeout(()=>{
            document.getElementById("navbarNavAltMarkup").className="collapse";
        },400)
       
    }
}

document.getElementById("responsiveClose").addEventListener("click",()=>{
    close = !close;
    collapse();
})



