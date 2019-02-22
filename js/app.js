'use strict';

var userName = prompt('Why don\'t we play a guessing game to know more about me. Let\'s start with your name:');
console.log('User name is: ', userName);

var wrongAnswerMsg = 'Sorry you got it wrong';
var rightAnswerMsg = 'You guessed it right, '+ userName;

var question1 = 'Is Football my favourite sport?';
var question2 = 'Is Kobe better than Lebron?';
var question3 = 'Would Duke win NCAA tournament? ';
var question4 = 'Do I think Game Of Thrones tv show is good?';
var question5 = 'Is coming up with questions the toughest part of the lab?';

var answer1 = promptQuestion(question1);
console.log('answer1: ', answer1);

if('Y' === getFirstChar(answer1)){
  alert(rightAnswerMsg);
}
else{
  alert(wrongAnswerMsg);
}

var answer2 = promptQuestion(question2);
console.log('answer2: ', answer2);

if('Y' === getFirstChar(answer2)){
  alert(rightAnswerMsg);
}
else{
  alert(wrongAnswerMsg);
}

var answer3 = promptQuestion(question3);
console.log('answer3: ', answer3);

if('Y' === getFirstChar(answer3)){
  alert(rightAnswerMsg);
}
else{
  alert(wrongAnswerMsg);
}

var answer4 = promptQuestion(question4);
console.log('answer1: ', answer4);

if('Y' === getFirstChar(answer4)){
  alert(rightAnswerMsg);
}
else{
  alert(wrongAnswerMsg);
}

var answer5 = promptQuestion(question5);
console.log('answer1: ', answer5);

if('Y' === getFirstChar(answer5)){
  alert(rightAnswerMsg);
}
else{
  alert(wrongAnswerMsg);
}

function promptQuestion(question){
  var answer = prompt(question, 'Y');
  return answer;
}

function getFirstChar(answer){
  return answer.substr(0,1).toUpperCase();
}
