//- Without Object

let title1 = 'Geography'
let options = ['Kochi','Delhi','Dharamshala','Shillong']
let correctAnswerIndex = 2
function isAnswerCorrect(index){
  if(index == correctAnswerIndex){
    return true
  } else{
    return false
  };
}
function getCorrectAnswer(){
  return options[correctAnswerIndex]
}

//- Organize using object

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

//- Use a function to create object

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
  return question
}

//- Convert the function to use `this` keyword

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
  return question
}
