var addbutton = document.getElementById("add-popup-button")
var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")

addbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})


var cancelpopup = document.getElementById("cancel-popup")
cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"

})

var container = document.querySelector(".container")
var addbook = document.getElementById("add-book")
var booktitleinput = document.getElementById("book-title-input")
var bookauthor = document.getElementById("book-author-input")
var bookdiscription = document.getElementById("book-discription-input")

addbook.addEventListener("click",function(event){
    event.preventDefault()
     
    var div = document.createElement("div")
    div.setAttribute("class","book-container")

    div.innerHTML=`<h2>${booktitleinput.value}</h2>
        <h5>${bookauthor.value}</h5>
        <p>${bookdiscription.value}</p>
       <button onclick="deletebook(event)">Delet</button>`
    container.append(div)
})

function deletebook(event)
{
    event.target.parentElement.remove()

}