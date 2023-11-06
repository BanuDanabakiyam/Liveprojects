var list = [];
document.getElementById("Btn").addEventListener('click',checkCon => {
let item = document.getElementById("userInput").value
list.push(item);
console.log(list);
document.getElementById("userInput").value = "";
getItems();
});
let getItems = () => {
    var seriNo = 0;
    var emptyStr = "";
    list.forEach((function(value,index)  {
    seriNo += 1;
    emptyStr += '<tr><td>'+seriNo+'</td><td>'+value+'</td><td><input type = "button" value="Remove" onclick="itemsRemoved('+index+')"/></td></tr>';
    }))
    document.getElementById("bodyId").innerHTML = emptyStr;
}
function itemsRemoved(index) {
    list.splice(index,1);
    getItems();
}