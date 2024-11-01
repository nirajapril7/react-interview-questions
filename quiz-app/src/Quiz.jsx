import { useState } from "react"
import QuestionList from './QuestionList'

export default function Quiz() {
    const questions = [
        {
            question:"What is React?",
            options: ['Framework','Library','tool','devops'],
            answer: "Library"
        },
        {
            question: 'What is the capital of India',
            options: ['Delhi','Ahmedabad','Kolkata','Mumbai'],
            answer: 'Delhi'
        }
    ]
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentAnswer, setCurrentAnswer]= useState(null);
    const [score, setScore]=useState(0);2
    const handleOptionClick = (option) => {
        setCurrentAnswer(option);
        if(option === questions[currentQuestionIndex].answer){
            setScore(score+1);
        }
    }
    const handleNextQuestion = ()=>{
        setCurrentQuestionIndex(currentQuestionIndex+1);
        setCurrentAnswer(null);
    }
    return(
        <div>
            {currentQuestionIndex < questions.length ?             <div>
               <QuestionList question={questions[currentQuestionIndex].question}
                options={questions[currentQuestionIndex].options}
                handleOptionClick={handleOptionClick}
               /> 
               <button disabled={currentAnswer === null} className={currentAnswer === null?'btn-disable':'btn'}  onClick={handleNextQuestion}>Next Question</button>
            </div> : <div> Your score is {score} </div> }

        </div>
    )
}