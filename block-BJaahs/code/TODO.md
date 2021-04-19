If we want to build any app the two most important thing to think about is Data and Behavior. So for our quiz app let's break it down. To make a quiz app we need to create Single Question object.

### For single question we need the following data and methods:

- Data:
  - `title` (title of the question)
  - `options` (array of options)
  - `correctAnswerIndex` (index of the correct option)
- Methods:
  - `isAnswerCorrect` (will accept the index and returns `true` or `false` based on the answer is correct or not)
  - `getCorrectAnswer` (will return the correct answer of the quiz when the function is called)

### Create the object using the following ways

For each different ways of creating object write different solutions.

- Without Object
```js
let title1 = 'Geography'
let options = ['Kochi','Delhi','Dharamshala','Shillong']
let correctAnswerIndex = 2
function isAnswerCorrect(index){
  if(index == correctAnswerIndex){
    return true
  } else{
    return false
  }
}
function getCorrectAnswer(){
  return options[correctAnswerIndex]
}
```
- Organize using object
```js
let question1 = {
  title: "Geography",
  options : ['Kochi','Delhi','Dharamshala','Shillong'],
  correctAnswerIndex : 2,
  isAnswerCorrect(index){
    if(index == correctAnswerIndex){
    return true
  } else{
    return false
  }
  },
  getCorrectAnswer(){
    return question1.options[correctAnswerIndex]
  }
}
```
- Use a function to create object
```js
function createQuestion(title, options, index){
  let question = {}
  question.title = title
  question.options = options
  question.correctAnswerIndex = index
  question.isAnswerCorrect = function(index){
    if(question.index == question.correctAnswerIndex){
    return true
  } else{
    return false
  }
  }
  question.getCorrectAnswer = function(){
    return question.options[question.correctAnswerIndex]
  }
}
```
- Convert the function to use `this` keyword
```js
function createQuestion(title, options, index){
  let question = {}
  question.title = title
  question.options = options
  question.correctAnswerIndex = index
  question.isAnswerCorrect = function(index){
    if(this.index == this.correctAnswerIndex){
    return true
  } else{
    return false
  }
  }
  question.getCorrectAnswer = function(){
    return this.options[this.correctAnswerIndex]
  }
}
```
- Write test by creating two objects also test both methods.

### To test use the following data

```js
const testData = {
  title: 'Where is the capital of Jordan',
  options: ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
  correctAnswerIndex: 1,
};
```
