// If else conditions

// Write a program to find maximum between two numbers using conditional operator

console.log("Maximum between two numbers using conditional operator ====================================");
console.log("===========================================================================================");

var findMaxValue = (a, b) =>    (a < b) ? console.log('The maximum number between '+a+' and '+b+' is '+b) :
                                (b < a) ? console.log('The maximum number between '+a+' and '+b+' is '+b) :
                                console.log('The numbers '+a+' and '+b+' are same');

findMaxValue(-5, 2); 
findMaxValue(2, 5);
findMaxValue(5, 5);
console.log("");

// Write a program to find maximum between three numbers using conditional operator.

console.log("Maximum between three numbers using conditional operator ==================================");
console.log("===========================================================================================");

var findMax = (a, b, c) =>  (a > b && a > c) ? console.log('The maximum number between '+a+', '+b+', '+c+' is ' + a) :
                            (b > a && b > c) ? console.log('The maximum number between '+a+', '+b+', '+c+' is ' + b) : 
                            console.log('The maximum number between '+a+', '+b+', '+c+' is ' + c) ;
                            
findMax(20, 13, 19);
console.log("");



// Write a program to check whether a number is even or odd using conditional operator.

console.log("Check whether a number is even or odd using conditional operator ==========================");
console.log("===========================================================================================");

var findEvenOdd = (a) => (a < 0)    ? console.log('Sorry, I am not considering negative values') :
                         (a%2 == 0) ? console.log('Entered value '+a+' is even')              : 
                         console.log('Entered value '+a+' is odd') ;

findEvenOdd(-1);
findEvenOdd(1);
findEvenOdd(2);
findEvenOdd(0);
console.log("");

// Write a program to check whether year is leap year or not using conditional operator.

console.log("Check whether year is leap year or not using conditional operator =========================");
console.log("===========================================================================================");

function findLeapYear(year) {
    if (year%4 == 0 && year%100 == 0 && year%400 == 0) {
        console.log('The year '+year+' is a leap year');        
    } else if (year%4 == 0 && year%100 != 0){
        console.log('The year '+year+' is a leap year');       
    } else {
        console.log('The year '+year+' is not a leap year'); 
    }
}

findLeapYear(2016);
findLeapYear(2600);
findLeapYear(2019);
console.log("");

// Write a program to check whether character is an alphabet or not using conditional operator.

console.log("Check whether character is an alphabet or not using conditional operator ==================");
console.log("===========================================================================================");

function checkAlphabet(a) {
    if (a.length == 1 && a.match(/[a-z]/i)){                 
            console.log('The character ' +a+ ' is an alphabet');
        }    
        else {
            console.log('The character ' +a+ ' is not an alphabet');                        
        }        
}

checkAlphabet("2c");
checkAlphabet("c3");
checkAlphabet(2);
checkAlphabet('2');
checkAlphabet('a');
checkAlphabet('A');
console.log("");


// Write a program to check whether a number is negative, positive or zero.

console.log("Check whether a number is negative, positive or zero ======================================");
console.log("===========================================================================================");

var findNegPosZero = a =>   (a < 0) ? console.log('The entered value ' +a+ ' negative') :
                            (a > 0) ? console.log('The entered value ' +a+ ' positive') : 
                            console.log('The entered value is zero');

                            
findNegPosZero(0);
findNegPosZero(2);
findNegPosZero(-10);
findNegPosZero(-1/10);
console.log("");


// Write a program to check whether a number is divisible by 5 and 11 or not.

console.log("Check whether a number is divisible by 5 and 11 or not ====================================");
console.log("===========================================================================================");

var divisibleBy5and11 = a => ((a % 5 == 0) && (a % 11 == 0)) ?  
                             console.log('The entered value ' +a+ ' is divisible by 5 and 11') :
                             console.log('The entered value ' +a+ ' is not divisible by 5 and 11');

divisibleBy5and11(5);
divisibleBy5and11(55);
console.log("");


// Write a program to input any alphabet and check whether it is vowel or consonant.

console.log("Check whether any alphabet is  vowel or consonant =========================================");
console.log("===========================================================================================");

function checkVowelCons(a) {
    if (a.length == 1 && a.match(/[a-z]/ig)) {
        if (a.match(/[aeiou]/ig)){            
            console.log('the entered value '+a+' is vowel');
        }     
        else if (a.match(/[^aeiou]/ig)) {
            console.log('the entered value '+a+' is consonant');
        }                 
    } else{
        console.log('Please enter an alphabet');
    }
}
checkVowelCons('e');
checkVowelCons('bb');
checkVowelCons('b');
checkVowelCons('2');
checkVowelCons(2); 
checkVowelCons(-2);
checkVowelCons('#');
console.log("");


// Write a program to input any character and check whether it is alphabet, digit or special charater.

console.log("Check whether any character is alphabet, digit or special charater ========================");
console.log("===========================================================================================");

function checkCharacter(a) {

    if (a.length == 1) {
        if (a.match(/[a-z]/)) {
            console.log("It is alphabet");
        } else if (a.match(/[0-9]/)) {
            console.log("It is a digit");
        } else {
            console.log('It is a special character');
        }
    } else if ((typeof (a) == "number")) {
        console.log("It is digit");
    } else {
        console.log("Please enter a single character");
    }

}


checkCharacter(2);
checkCharacter(22);
checkCharacter('a');
checkCharacter('ab');
checkCharacter('#');
checkCharacter('2');
console.log("");

// Write a program to check whether a character is uppercase or lowercase alphabet.

console.log("Check whether any character is uppercase or lowercase =====================================");
console.log("===========================================================================================");

function checkCase(a) {
        if(a.length == 1 && (a.match(/[a-z]/ig))){
            if((a == a.toUpperCase())){
                console.log('Upper Case');
            } else {
                console.log('Lower Case');
            }
        } else {
            console.log('Please enter an alphabet');
        }
       
}

checkCase('a');
checkCase('ab');
checkCase('2');
checkCase('#');
console.log('');


// Write a program to input week number and print week day.

console.log("Program to input week number and print week day ===========================================");
console.log("===========================================================================================");

var getWeekDay = (number) =>  (number == 1) ? console.log('The '+number+' st day of week is Monday') :
                        (number == 2) ? console.log('The '+number+'nd day of week is Tuesday')   :
                        (number == 3) ? console.log('The '+number+'rd day of week is Wednesday') :
                        (number == 4) ? console.log('The '+number+'th day of week is Thursday')  :
                        (number == 5) ? console.log('The '+number+'th day of week is Friday')    :
                        (number == 6) ? console.log('The '+number+'th day of week is Saturday')  :
                        (number == 7) ? console.log('The '+number+'th day of week is Sunday')    :
                        console.log('Please enter a valid week number from 1 to 7 ');

getWeekDay(1);                        
getWeekDay(4);
getWeekDay(7);
console.log('');

// Write a program to input month number and print number of days in that month.

console.log("Program to input month number and print number of days in that month ======================");
console.log("===========================================================================================");

function daysInMonth(m) {

    (m == 2) ? console.log('The ' + m + ' th month has 28 or 29 days'):
        (m > 12) ? console.log('Please enter a valid month number from 1 to 12') :
        (m == 4 || m == 6 || m == 9 || m == 11) ? console.log('The ' + m + ' th month has 30 days') :
        console.log('The ' + m + ' th month has 31 days');
            
}

daysInMonth(5);
daysInMonth(12);
daysInMonth(13);
console.log('');


// Write a program to count total number of notes in given amount.

console.log("Program to count total number of notes in given amount ====================================");
console.log("===========================================================================================");

function notes(amount) {
    
    var amt = Math.floor(amount);
    var count = 0;
    
    while(amt > 0) {
        var notes = 0;
        
        if (amt >= 2000) { notes += Math.floor(amt/2000); amt = amt - (notes* 2000); }
        else if (amt >= 1000) { notes += Math.floor(amt/1000); amt = amt - (notes* 1000); }
        else if (amt >= 500) { notes += Math.floor(amt/500); amt = amt - (notes* 500); }
        else if (amt >= 200) { notes += Math.floor(amt/200); amt = amt - (notes* 200); } 
        else if (amt >= 100) { notes += Math.floor(amt/100); amt = amt - (notes* 100); }
        else if (amt >= 20) { notes += Math.floor(amt/20); amt = amt - (notes* 20); }
        else if (amt >= 10) { notes += Math.floor(amt/10); amt = amt - (notes* 10); }
        else if (amt >= 5) { notes += Math.floor(amt/5); amt = amt - (notes* 5); }
        else if (amt >= 2) { notes += Math.floor(amt/2); amt = amt - (notes* 2); }
        else if (amt >= 1) { notes += Math.floor(amt/1); amt = amt - (notes* 1); }

        count += notes;        
    }
    console.log('The amount ₹' +amount+ ' has '+ count+ ' notes');   
}

notes(1);
notes(4000);
notes(2300);
console.log('* Note: Adds 5, 2, 1 each as note');
console.log('');


// Write a program to input angles of a triangle and check whether triangle is valid or not.

console.log("Program to input angles of a triangle and check whether triangle is valid or not ==========");
console.log("===========================================================================================");

function checkTriangleWithAngles(a, b, c) {

    if ((a > -1) && (b > -1) && (c > -1)) {
        if (a + b + c == 180) {
            console.log('Angles ' + a + ', ' + b + ', ' + c + ' does not make a valid triangle');
        }
    } else {
        console.log('Angles ' + a + ', ' + b + ', ' + c + ' make a valid triangle');
    }

}

checkTriangleWithAngles(90, 90, 0);
checkTriangleWithAngles(-1,-1,-6);
console.log('');


// Write a program to input all sides of a triangle and check whether triangle is valid or not

console.log("Program to input all sides of a triangle and check whether triangle is valid or not =======");
console.log("===========================================================================================");

function checkTriangleWithSides(a, b, c) {

    if (a > (b+c) && b > (c+a) && c > (a+b)) {        
        console.log('Sides ' + a + ', ' + b + ', ' + c + ' does make a valid triangle');
    } else{
        console.log('Sides ' + a + ', ' + b + ', ' + c + ' does not make a valid triangle');
    }
}

checkTriangleWithSides(3, 3, 5);
checkTriangleWithSides(1, 1, 5);
console.log('');


// Write a program to check whether the triangle is equilateral, scalene triangle.

console.log("Program to check whether the triangle is equilateral, scalene triangle ====================");
console.log("===========================================================================================");

function checkScalenOrEquilateral(a, b, c) {

    if (a > -1 && b > -1 && c > -1) {
        if (a == b && b == c && c == a) {
            console.log('Values ' + a + ', ' + b + ', ' + c + '  makes an equilateral triangle');
        } else {
            console.log('Values ' + a + ', ' + b + ', ' + c + '  makes a scalene triangle');
        }
    }

}

checkScalenOrEquilateral(2,2,3);
checkScalenOrEquilateral(60,60,60);
console.log('');

// Write a program to find all roots of a quadratic equation.

console.log("Program to find all roots of a quadratic equation =========================================");
console.log("===========================================================================================");


function calcQuadraticEq(a, b, c) {

    var discriminant = Math.sqrt(Math.abs((b * b) - 4 * a * c));
    var minusB = -b;
    var twoA = 2 * a;

    var rootOne = (minusB + discriminant) / twoA;
    var rootTwo = (minusB - discriminant) / twoA;

    if (discriminant < 0) {
        console.log( a + ', ' + b + ', ' + c + ' has no real roots');
    } else if (discriminant == 0) {
        console.log('The quadratic roots for ' + a + ', ' + b + ', ' + c + ' has only one real root');
    } else {
        console.log('The quadratic roots for ' + a + ', ' + b + ', ' + c + ' are ' + rootOne + ', ' + rootTwo);        
    }
}

calcQuadraticEq(1,-7,12);
calcQuadraticEq(1,1,1);
calcQuadraticEq(0,0,0);
calcQuadraticEq(-1,-1,-1);
console.log('');


// Write a program to calculate profit or loss.

console.log("Program to calculate profit or loss =======================================================");
console.log("===========================================================================================");

function calcProfitLoss(purchasedPrice, soldPrice) {

    console.log('Purchased price ===> ' + purchasedPrice);
    console.log('Sold price      ===> ' + soldPrice);

    if (purchasedPrice < soldPrice) {
        console.log('There is a profit of ' + (soldPrice - purchasedPrice));
    } else if (purchasedPrice > soldPrice) {
        console.log('There is a loss of ' + (purchasedPrice - soldPrice));
    } else {
        console.log('No profit or loss as the CP and SP is same');
    }

}

calcProfitLoss(1000, 200);
calcProfitLoss(1000, 2000);
console.log('');


// Write a program to input marks of five subjects Physics, chemistry, Biology, Mathematics and computer. 
// Calculate percentage and grade according to following: 
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F


console.log("Program to calculate percentage and grade =================================================");
console.log("===========================================================================================");

function calcPercentageGrade(physics, chemistry, biology, mathematics, computer) {

    var totalMarks = 500;
    if (totalMarks <= 500 && totalMarks >= 0) {
        var obtainedMarks = physics + chemistry + biology + mathematics + computer;
        var percentage = (obtainedMarks / totalMarks) * 100;
        if (percentage >= 90) {            
            console.log('Total Marks: '+obtainedMarks+', Percentage : '+percentage+', Grade : A');
        } else if (percentage >= 80) {
            console.log('Total Marks: '+obtainedMarks+', Percentage : '+percentage+', Grade : B');
        } else if (percentage >= 70) {
            console.log('Total Marks: '+obtainedMarks+', Percentage : '+percentage+', Grade : C');
        } else if (percentage >= 60) {
            console.log('Total Marks: '+obtainedMarks+', Percentage : '+percentage+', Grade : D');
        } else if (percentage >= 40) {
            console.log('Total Marks: '+obtainedMarks+', Percentage : '+percentage+', Grade : E');
        } else {
            console.log('Total Marks: '+obtainedMarks+', Percentage : '+percentage+', Grade : F');
        }
    } else {
        console.log('Enter valid marks for each subject');
    }

}

calcPercentageGrade(100,0,0,20,90);
calcPercentageGrade(100,100,100,100,100);


// Write a program to input basic salary of an employee and calculate its Gross salary according to following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%

console.log("Program to input basic salary of an employee and calculate its Gross salary ===============");
console.log("===========================================================================================");

function grossSalary(basicSalary) {

    var hra, da;    
    var grossSalary;    
    if (basicSalary <= 10000) {
        hra = basicSalary * (20 / 100);
        da = basicSalary * (80 / 100);
    } else if (basicSalary <= 20000) {
        hra = basicSalary * (25 / 100);
        da = basicSalary * (90 / 100);
    } else {
        hra = basicSalary * (30 / 100);
        da = basicSalary * (95 / 100);
    }
    grossSalary = basicSalary + hra + da;
    console.log('The gross salary of empoyee is : ', grossSalary);

}

grossSalary(9000);
grossSalary(19000);
grossSalary(22000);
console.log('');

// Write a program to input eletricity unit charges and calculate total eletricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill

console.log("Program to input eletricity unit charges and calculate total eletricity bill ==============");
console.log("===========================================================================================");

function calcElecBill(units) {

    var amt, firstCharge, secondCharge, thirdCharge, fourthCharge, surcharge;
    amt = 0;
    firstCharge = units * 0.50
    secondCharge = 50 * 0.50;
    thirdCharge = secondCharge + 100 * 0.75;
    fourthCharge = thirdCharge + 100 * 1.20;
    surcharge = 0;

    if (units >= 0 && units <= 50) {
        amt = firstCharge;
    } else if (units > 50 && units <= 150) {
        amt = (units - 50) * 0.75 + secondCharge;
    } else if (units > 150 && units <= 250) {
        amt = (units - 150) * 1.20 + thirdCharge
    } else {
        amt = (units - 250) * 1.50 + fourthCharge;
    }
    
    surcharge = amt * 0.2;
    amt += surcharge; 
    
    console.log('The electricity bill for ' + units + ' units are : ₹' + amt);
}

calcElecBill(40);
calcElecBill(50);
calcElecBill(130);
calcElecBill(210);
calcElecBill(300);
