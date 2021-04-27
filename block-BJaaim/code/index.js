class Question{
    constructor(title, options, correctAnswer){
        this.title = title
        this.options = options
        this.correctAnswer = correctAnswer
    }
    isCorrectAnswer(answer){
        if(answer == this.correctAnswer){
            return true
            updateScore
        } else{
            return false
        }
        
    }
    createUI(){
        let questionContainer = document.querySelector('.question-container')
        let li = document.createElement('li')
        li.classList.add('a')
        let a = document.querySelector('.a')
        let input = document.createElement('input')
        let p = document.createElement('p')
        p.innerText = this.options[0]
        
        a.append(input)
        input.addEventListener('click', isCorrectAnswer)
        let question = document.querySelector('.question')
        question.innerText = this.allQuestions[this.activeIndex]
    }
}

class Quiz{
    constructor(allQuestions, activeIndex, score){
        this.allQuestions = allQuestions
        this.activeIndex = activeIndex
        this.score = score
    }
    nextQuestion(){
        this.activeIndex+=1
    }
    createUI(){
        
    }
    updateScore(){
        this.score = this.score+1
    }
}











