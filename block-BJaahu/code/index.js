//- Prototypal pattern of object creation (Put methods inside an object and create object using Object.create)

let questionMethods = {
    isAnswerCorrect(index){
        if(index == question.correctAnswerIndex){
            return true
        } else{
            return false
        }
    },
    getCorrectAnswer(){
        return question.options[question.correctAnswerIndex]
    }
}

function createQuestion(title, options, correctAnswerIndex){
    let question = object.create(questionMethods)
    question.title = title
    question.options = options
    question.correctAnswerIndex = correctAnswerIndex

    return question
}

//Pseudoclassical Pattern (Put methods inside F.prototype and use `new` to call function)

function CreateQuestion(title, options, correctAnswerIndex){
    
    this.title = title
    this.options = options
    this.correctAnswerIndex = correctAnswerIndex
}
CreateQuestion.prototype = {
    isAnswerCorrect(index){
        if(index == this.correctAnswerIndex){
            return true
        } else{
            return false
        }
    },
    getCorrectAnswer(){
        return this.options[this.correctAnswerIndex]
    }
}

//- Create using class

class Question{
    constructor(title, options, correctAnswerIndex){
        this.title = title
        this.options = options
        this.correctAnswerIndex = correctAnswerIndex
    }
    isAnswerCorrect(index){
        if(index == this.correctAnswerIndex){
            return true
        } else{
            return false
        }
    }
    getCorrectAnswer(){
        return this.options[this.correctAnswerIndex]
    }
}












