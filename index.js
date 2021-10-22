var arr = []
function app(){
    var mscreen = document.getElementById("screen").value
    var ol = document.getElementById("ol")
    arr.push(mscreen)
    genList()
}
function genList(){
    document.getElementById("ol").innerText = ""
    for(var i = 0; i < arr.length; i++){
        var li = document.createElement("li")
        var list = document.createTextNode(arr[i])
        li.appendChild(list)
        ol.appendChild(li)

        // create btn 1
        var button1 = document.createElement("button")
        button1.id = "edit"
        li.appendChild(button1)
        button1.onclick = edit(i)

        // create btn 2        
        var button2 = document.createElement("button")
        button2.id = "delete"
        li.appendChild(button2)
        button2.onclick = dlt(i)
    
        // create btn 3
        var button3 = document.createElement("button")
        button3.id = "done"
        li.appendChild(button3)

        // remove input
        document.getElementById("screen").value = ""
    }
}

function dlt(index){
    return function(){
        arr.splice(index,1)
        genList()
    }
}

function edit(i){
    return function(){
        (document.getElementById("screen").value = arr[i])
        arr.splice(i,1)
    }
}