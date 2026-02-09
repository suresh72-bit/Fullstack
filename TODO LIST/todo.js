    var ul = document.getElementById("list")
    var inp = document.getElementById("input")
    var del = document.getElementById("list")

    function Add()
    {
        var list = document.createElement("li")
        list.innerHTML=input.value+"<button onclick='Delet(event)'>Delete</button>"
        ul.append(list)
    }

    function Delet(event)
    {
        event.target.parentElement.remove()
    }