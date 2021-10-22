// var arr = []

function app(){
    var mscreen = document.getElementById("screen").value
    var ol = document.getElementById("ol")
    
    // arr.push(mscreen)
    
    // document.getElementById("ol").innerText = ""
    
    // for(var i = 0; i < arr.length; i++){
        var li = document.createElement("li")
        var list = document.createTextNode(mscreen)
        li.appendChild(list)
        ol.appendChild(li)

        // create btn 1
        var button1 = document.createElement("button")
        button1.className = "done"
        li.appendChild(button1)

        button1.onclick = function done(){
            li.style.textDecoration = "line-through"
            li.style.opacity = "0.5"
        }

        // btn 2        
        var button2 = document.createElement("button")
        button2.className = "delete"
        li.appendChild(button2)
    }
