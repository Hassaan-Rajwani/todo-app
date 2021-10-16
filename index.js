
function app(){
    var mscreen = document.getElementById("screen")
    var item = document.createElement("li")
    
    var li = document.getElementById("list")
    
    var item_list = document.createTextNode(mscreen.value)
    item.appendChild(item_list)
    li.appendChild(item)
    
    mscreen.value = ""
}
