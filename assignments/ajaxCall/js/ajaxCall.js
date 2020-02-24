/*
    Author: Mahesh
    Description: Integrating API in a grid
*/

// Prompt to get number of rows and columns
var rows = prompt("Enter number of rows");
var columns = prompt("Enter number of columns");

var thumbnailCont = document.getElementById('thumbnail-container');


// Creating required grid
function grid(row, clm) {

    for (var r = 0; r < row; r++) {
        for (var c = 0; c < clm; c++) {
            var img = document.createElement("img");
            thumbnailCont.appendChild(img);
            img.style.cssText = "grid-row-start:" + (r + 1) + "; grid-row-end:" + (r + 2) + "; grid-column-start: " + (c + 1) + "; grid-column-end: " + (c + 2) + ";";
        }
    }

}
grid(rows, columns);


// Retrieving the photos with ajax call
function ajax(url, val) {

    var xml = new XMLHttpRequest();
    xml.open("GET", url, true);
    xml.send();
    xml.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            for (var i = 0; i < val; i++) {
                console.log(data[i].thumbnailUrl);
                //sets attributes for each grid img          
                setAtrbts(i, data[i].thumbnailUrl, data[i].url);
            }
        }
    }

}
ajax('https://jsonplaceholder.typicode.com/photos', rows * columns);


// Setting attributes for img tag
function setAtrbts(i, tUrl, url) {

    var image = thumbnailCont.children[i].setAttribute("id", "image-" + i);
    var imageId = document.getElementById("image-" + i);
    imageId.src = tUrl;

    imageId.addEventListener('click', function () {
        modal(url);
    })
}


// Creating modal 
function modal(url) {
    var modal = document.getElementById("modal");
    var bigImage = " ";
    bigImage += `<div id='imgDiv'><img src="${url}"><span id='close'><b>X</b></span></div>`;
    modal.innerHTML = bigImage;

    var imgDiv = document.getElementById('imgDiv');
    var close = document.getElementById('close');

    close.addEventListener('click', function (e) {
        imgDiv.parentNode.removeChild(imgDiv);
    })
}

