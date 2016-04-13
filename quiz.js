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

if ( answer2.toUpperCase() === 'TRANSPORT LAYER' ) {
 correct += 1;
}

if ( answer3.toUpperCase() === 'TRANSPORT LAYER' ) {
 correct += 1;
}

if ( answer4.toUpperCase() === 'TCP' ) {
 correct += 1;
}

if ( answer5.toUpperCase() === 'GETINPUTSTREAM AND CLOSE' ) {
 correct += 1;
}

// output results
if ( answer1.toUpperCase() === 'NETWORK LAYER' ) {
 correct += 1;
 document.write("<p>" +"This was your answer: " + answer1+ "...GOOD LOOKS! that was correct"+"</p>");
}

else{
  document.write("<p>" +"This was your answer: " + answer1+ "...WRONG!" + "</p>");
}


if ( answer2.toUpperCase() === 'TRANSPORT LAYER' ) {
 correct += 1;
 document.write("<p>" +"This was your answer: " + answer2+ "...GOOD LOOKS! that was correct"+"</p>");
}

else{
  document.write("<p>" +"This was your answer: " + answer2+ "...WRONG!" + "</p>");
}

if ( answer3.toUpperCase() === 'TRANSPORT LAYER' ) {
 correct += 1;
 document.write("<p>" +"This was your answer: " + answer3+ "...GOOD LOOKS! that was correct"+"</p>");
}

else{
  document.write("<p>" +"This was your answer: " + answer3+ "...WRONG!" + "</p>");
}

if ( answer4.toUpperCase() === 'TCP' ) {
 correct += 1;
 document.write("<p>" +"This was your answer: " + answer4+ "...GOOD LOOKS! that was correct"+"</p>");
}

else{
  document.write("<p>" +"This was your answer: " + answer4+ "...WRONG!" + "</p>");
}

if ( answer5.toUpperCase() === 'GETINPUTSTREAM AND CLOSE' ) {
 correct += 1;
 document.write("<p>" +"This was your answer: " + answer5+ "...GOOD LOOKS! that was correct"+"</p>");
}

else{
  document.write("<p>" +"This was your answer: " + answer5+ "...WRONG!" + "</p>");
}


document.write("<P>"+ "You Got " + correct + " out of 5 answers correct. Shoot me an email if you'd like to discuss your results.");
document.write("<P>" + "HAVE A NICE DAY!"+ "</P>");
