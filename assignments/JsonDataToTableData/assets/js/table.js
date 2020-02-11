/*
    Author: Mahesh
    Description: Displaying JSON data in table
*/

// JSON Data

var tableData = [
                    {
                        "name": "abc",
                        "age": 50
                     }
                     ,
                    {
                        "age": "25",
                        "hobby": "swimming"
                    },
                    {
                        "name": "xyz",
                        "hobby": "programming"
                    }
                ]

// Creating  div and table elemets 

var container = document.createElement("div");
document.body.appendChild(container);
var table = document.createElement("table");
container.appendChild(table);

// Returns the header values

function getHeaders(data){
    var headers = [];
    for(x in data){
        var objects = data[x];
        for(i in objects){
            if(headers.includes(i)){
                continue;
            }else{                
                headers.push(i);
            }                        
        }        
    }   
    return headers;
}

// Checks for undefined data

function checkValue(value){
    if(value != undefined){
        return value;
    }
    else{
        return "";
    }
}

var headers = getHeaders(tableData);

// Displaying header data

var headValues = " ";
for (var i = 0; i < headers.length; i++ ){
    headValues +=  "<th>"+headers[i]+"</th>"              
}

// Displaying table row data

var childValues = " ";
for(var i = 0; i < tableData.length; i++){      
    
    childValues += "<tr>"+
                    "<td>"+checkValue(tableData[i].name)+"</td>"+
                    "<td>"+checkValue(tableData[i].age)+"</td>"+
                    "<td>"+checkValue(tableData[i].hobby)+"</td>"+                    
                    "</tr>"
}

// Assigning data to table

table.innerHTML = headValues+childValues;