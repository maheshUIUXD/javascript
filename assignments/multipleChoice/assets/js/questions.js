/*
    Author: Mahesh
    Description: "Mutliple choice Quiz"
*/

// Questions Data

var questions = [{
        'name': 'first',
        'Q': "A man presses more weight on earth at :",
        'A': "Sitting position",
        'B': "Standing position",
        'C': "Lying position",
        'D': "None of these"
    },
    {
        'name': 'second',
        'Q': 'Youngs modulus is the property of :',
        'A': "Gas only",
        'B': "Both solid and Liquid",
        'C': "Remain Same",
        'D': "None of these"
    },

    {
        'name': 'third',
        'Q': 'Product of Force and Velocity is called :',
        'A': "Work",
        'B': "Power",
        'C': "Energy",
        'D': "Momentum"
    }
]


// Getting div element

var multipleChoice = document.getElementById("multiple-choice");

// Appednding multiple questions to result variable

var result = "";
for (x in questions) {

    result += "<div class='inputs-container' id='" + questions[x].name + "' onclick='checkAndDisplayAnswer(" + x + ")'>" +
        "<h3>" + questions[x].Q + "</h3>" +
        "<input type='radio' name='" + questions[x].name + "' value='" + questions[x].A + "'>" +
        "<label for='" + questions[x].name + "'>" + questions[x].A + "</label><br>" +
        "<input type='radio' name='" + questions[x].name + "' value='" + questions[x].B + "'>" +
        "<label for='" + questions[x].name + "'>" + questions[x].B + "</label><br>" +
        "<input type='radio' name='" + questions[x].name + "' value='" + questions[x].C + "'>" +
        "<label for='" + questions[x].name + "'>" + questions[x].C + "</label><br>" +
        "<input type='radio' name='" + questions[x].name + "' value='" + questions[x].D + "'>" +
        "<label for='" + questions[x].name + "'>" + questions[x].D + "</label><br>" +
        "<p id='correct-" + x + "'></p>" +
        "<p id='wrong-" + x + "'></p>" +
        "</div>"
}

// Displaying multiple questions on webpage

multipleChoice.innerHTML = result;


// Check and displays whether answer is correct or wrong

function checkAndDisplayAnswer(x) {

    document.getElementById('wrong-' + x).innerHTML = " ";
    document.getElementById('correct-' + x).innerHTML = " ";

    var val = document.querySelector("input[name = '" + questions[x].name + "']:checked").value;

    if ((val == questions[x].A && questions[x].name == 'first') ||
        (val == questions[x].B && questions[x].name == 'second') ||
        (val == questions[x].B && questions[x].name == 'third')) {
        document.getElementById('correct-' + x).innerHTML = "Selected answer :" + val + " is correct";
    } else {
        document.getElementById('wrong-' + x).innerHTML = "Selected answer :" + val + " is wrong";
        if (questions[x].name == 'first') {
            document.getElementById('correct-' + x).innerHTML = "Correct answer :" + questions[x].A;
        } else if (questions[x].name == 'second') {
            document.getElementById('correct-' + x).innerHTML = "Correct answer :" + questions[x].B;
        } else if (questions[x].name == 'third') {
            document.getElementById('correct-' + x).innerHTML = "Correct answer :" + questions[x].B;
        }
    }
}

