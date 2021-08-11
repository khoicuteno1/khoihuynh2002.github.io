var getTitle = document.querySelector("div p");


var getList = document.querySelector("div ul")
console.log(getList);

getTitle.onclick = function() {
    var changeItem = getList.style.display;
    if(getList.style.display !== 'none')
    {
        getList.style.display = 'none';
    }
    else 
    {
        getList.style.display = 'block';
    }
}