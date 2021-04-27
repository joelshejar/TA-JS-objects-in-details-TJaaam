class Question{
    constructor(title, options, correctAnswer){
        this.title = title
        this.options = options
        this.correctAnswer = correctAnswer
    }
    isCorrectAnswer(answer){
        if(answer == this.options[this.correctAnswer]){
            return true
            updateScore
        } else{
            return false
        }
        
    }
    getCorrectAnswer(){
        return this.options[this.correctAnswer]
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
    constructor(allQuestions =[], score=0){
        this.allQuestions = allQuestions
        this.activeIndex = 0
        this.score = score
    }
    nextQuestion(title,options,correctAnswer){
        let question = new Question(title,options,correctAnswer)
        this.allQuestions.push(question)
    }
    createUI(){
        let activeQuestion = this.allQuestions[this.activeIndex]
    }
    updateScore(){
        this.score = this.score+1
    }
}

function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`
    window.open(twitterUrl, '_blank')
}


let quiz = new Quiz()

questions.forEach((elm) => {
    quiz.nextQuestion(elm.question, elm.options, elm.answer)
})

quiz.createUI()









