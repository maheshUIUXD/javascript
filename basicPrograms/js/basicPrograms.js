// Basic Programs 

// Write a program to perform basic input and output of all types

var value = prompt("Enter the input : ");
alert(value);

// Write a program to enter two numbers and find their sum

console.log("Sum of two numbers");
console.log("====================================");

function add_numbers(a, b){
    console.log("The sum of "+a+" and "+b+" = ", a + b);
}

add_numbers(2, 3);
console.log("");

// Write a program to enter two numbers and perform all arthematic operations

console.log("Arthematic operations of two numbers");
console.log("====================================");

function result(a, b){
    
    var add = a + b;
    var sub = a - b;
    var mul = a * b;
    var div = a / b;
    var mod = a % b;

    console.log("Addition of " +a+ " and " +b+ " = "  + add + "\n" +
                "\n"+
                "Subtraction of "+a+ " and " +b+ " =  " + sub + "\n" +
                "\n"+
                "Multiplication of "+a+ " and " +b+ " =  " + mul + "\n" +
                "\n"+
                "Division of "+a+ " and " +b+ " =  " + div + "\n" +
                "\n"+
                "Modulus of "+a+ " and " +b+ " =  " + mod + "\n" );
}

result(2, 3);
console.log("");


// Write a program to enter the length and breadth of a rectangle and find its perimeter

console.log("Length and breadth of rectangle");
console.log("===============================");

function peri_of_rect(len, bre) {    
    console.log("Perimeter of a rectangle = " + 2*(len + bre));    
}

peri_of_rect(2,3);
console.log("");


// Write a program to enter the length and breadth of a rectangle and find its perimeter

console.log("Perimeter of a rectangle");
console.log("========================");

function area_of_rect(len, bre) {
    console.log("Area of a rectangle = " + (len * bre));
}
area_of_rect(2, 3);
console.log("");


// Write a program to enter radius of a circle and find its diameter, circumference and area

console.log("Diameter, circumference, area of a triangle");
console.log("===========================================");

function dia_circum_area_of_circle(radius) {

    var diameter = 2*radius;
    var circumference = 2*3.14*radius;
    var area = 3.14 * (radius)^2;

    console.log("The diameter of a circle = "+ diameter +"\n"+
                "The circumference of a circle = "+ circumference +"\n"+
                "The area of a circle = "+ area);
}

dia_circum_area_of_circle(2);
console.log("");


// Write a program to enter the length in centimeter and convert it into meter and kilometer

console.log("Length in centimeter and convert it into meter and kilometer");
console.log("============================================================");

function cent_to_meter_kilom(centimeter){
        
    var meter = centimeter/100;
    var kilometer = centimeter/100000;

    console.log("Number of meters for "+centimeter+" centimeter = "+meter+"\n" +
                "Number of kilometers for "+centimeter+" centimeter = "+kilometer+"\n");

}

cent_to_meter_kilom(1);
console.log("");


// Write a program to enter temperature in celcius and convert into fahrenhiet.

console.log("Temperature in celcius and convert into fahrenhiet");
console.log("==================================================");

function celcius_to_farenheit(celcius){
    var farenheit = (celcius*(9/5) + 32);
    console.log("The fahrenheit value = "+farenheit);
}

celcius_to_farenheit(10);
console.log("");


// Write a program to enter temperature in fahrenhiet and convert into celcius

console.log("Temperature in fahrenhiet and convert into celcius");
console.log("==================================================");

function farenheit_to_celcius(farenheit){
    var celcius = ((farenheit - 32)* (5/9));
    console.log("The celcius value = "+ celcius);
}

farenheit_to_celcius(50);
console.log("");


// Write a program to convert days into years, weeks and days

console.log("Convert days into years, weeks and days");
console.log("=======================================");

function days_to_yrs_wks_dys(days){      

    console.log("The number of days = " +days+ "\n"+
                "The number of weeks = " +days/7+ "\n"+
                "The number of years = "+days/365+ "\n");
}

days_to_yrs_wks_dys(365);
console.log("");


// Write a program to power of any number x ^ y

console.log("program to power of any number x ^ y");
console.log("====================================");

function power_of_num(a, b){
    var power = a;
    if(b == 1){
        power = b;
    }
    for (var i = 1; i < b; i++){
        power *=  a;        
    }
    // return power;
    console.log( "The value of "+a+ "^"+b+" = "+power);
}

power_of_num(2, 3);
console.log("");


// Write a program to enter any number and calculate its square root

console.log("Calculate square root of a number");
console.log("=================================");

function calc_sqrt(num) {
    console.log(Math.sqrt(num));
}

calc_sqrt(64);
console.log("");


// Write a program to enter two angles of a triangle and find the third angle

console.log("Find the third andgle of a triangle");
console.log("===================================");

function third_angle(f_angle, s_angle){ 
    console.log("The third angle of a triangle = "+ (180 - f_angle-s_angle));
}

third_angle(70,10);
console.log("");


// Write a program to enter base and height of a triangle and find its area

console.log("Find the area of a triangle");
console.log("===========================");

function area_of_triangle(base, height){
    console.log("The area of a triangle = "+ (base*height)/2);
}

area_of_triangle(10,5);
console.log("");


// Write a program to calculate area of an equilateral triangle

console.log("Calculate area of an equilateral triangle");
console.log("=========================================");

function area_of_equilateral_triangle(side){
    console.log("The area of an equilateral triangle = " + ((1.73205080757)/4) * (side*side));
}
area_of_equilateral_triangle(5);
console.log("");


// Write a program to enter marks of five subjects and calculate total, average
// and percentage

console.log("Calculate  total, average, percentage");
console.log("=========================================");

function calc_tot_avg_perc(sub1, sub2, sub3, sub4, sub5){
    var total = sub1 + sub2 + sub3 + sub4 + sub5;
    var average = total/5;
    var percentage = total/100*5;

    console.log("The total of sub1, sub2, sub3, sub4, sub5 = " + total + "\n"+
                "The average of sub1, sub2, sub3, sub4, sub5 = " + average + "\n"+
                "The percentage of sub1, sub2, sub3, sub4, sub5 = " +percentage+ "\n");           
}

calc_tot_avg_perc(10, 10, 10, 10, 10);
console.log("");


// Write a function to enter P, T, R and calculate Simple Interest.

console.log("Calculate simple interest - time in years");
console.log("=========================================");

function calc_simple_interest(principal, rate, time) {
    console.log("The simple interest for the principal = "+principal*(rate/100)* time);
}


calc_simple_interest(200,1,10);
console.log("");


// Write a function to enter P, T, R and calculate Compound Interest.

console.log("Calculate simple interest - time and compound in years");
console.log("======================================================");

function cal_compund_interest(principal, rate, time, compoundTime) {
    
    var actual_value = principal*(Math.pow((1 + ((rate/100)/compoundTime)),time * compoundTime ));
    console.log("The compound interest for the princial after "+ compoundTime + " years = "+actual_value);
}

cal_compund_interest(1000, 5, 7, 1);