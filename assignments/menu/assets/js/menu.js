/*
    Author : Mahesh
    Description: Displaying menu items
*/


// Menu object

var menu = {
            "Home": "home.html",
            "About": "about.html",
            "Services": "services.html",
            "Contact": "contact.html"
            }

// Creating main div element

var mainDiv = document.createElement("div");
document.body.appendChild(mainDiv);

// Updating menu items to main div

for(i in menu){
    var alink = document.createElement("a");
    mainDiv.appendChild(alink).setAttribute("href", menu[i]);
    var menuValue = document.createTextNode(i);
    alink.appendChild(menuValue);
}


