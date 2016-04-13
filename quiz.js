// variables
var correct = 0;

// prompt
var answer1 = prompt("On which layer does internet protocall exist?");
console.log("the answer is:" + answer1);
var answer2=prompt("On which layer does User Datagram Protocol exist?");
var answer3=prompt("On which layer does Transmission Control Protocol exist?");
var answer4=prompt("Which Protocol is the most reliable: TCP, UDP, or United States Postal Service? ");
var answer5=prompt("Which methods can be invoked on Socket objects in Java? ");

// if statement
if ( answer1.toUpperCase() === 'NETWORK LAYER' ) {
 correct += 1;
}

if ( answer2.toUpperCase() === 'Transport Layer' ) {
 correct += 1;
}

if ( answer3.toUpperCase() === 'Transport Layer' ) {
 correct += 1;
}

if ( answer4.toUpperCase() === 'TCP' ) {
 correct += 1;
}

if ( answer5.toUpperCase() === 'GETINPUTSTREAM AND CLOSE' ) {
 correct += 1;
}

// output results
document.write("<p>write something to page...</p>");
