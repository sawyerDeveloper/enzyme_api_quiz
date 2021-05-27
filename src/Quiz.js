import { useState } from 'react'
import QuizQuestion from './components/quiz/QuizQuestion'
import Utils from './utils/Utils'

const Quiz = (props) => {

    const data = props.data
    const [currentData, setCurrentData] = useState([])
    const [currentStep, setCurrentStep] = useState(0)
    const [currentAnswer, setCurrentAnswer] = useState(null)
    const [correctAnswer, setCorrectAnswer] = useState(null)

    const start = () => {
        const newData = Utils.createQuizData(data)
        setCurrentData(newData)
        setCurrentStep(0)
        setCorrectAnswer(newData[0].answers[0])
    }

    const next = () => {
        if(currentStep + 1 === data.length){
            end()
        }else{
            if(currentAnswer === correctAnswer){
                currentData[currentStep].correct = true
                console.log('correct')
            }else{
                console.log('not')
            }
            setCurrentStep(currentStep + 1)
            setCurrentAnswer(null)
            setCorrectAnswer(currentData[currentStep].answers[0])
        }
    }

    const end = () => {
        sessionStorage.setItem('results', JSON.stringify(currentData));
        props.openResults()
    }

    const select = (event) => {
        setCurrentAnswer(event.target.value)
    }

    const styles = {
        container: {
            marginTop: 10
        }
    }

    let content
    if(currentData.length === 0){
        content = ( 
            <div>
                <div>Click Start to begin</div>
                <button onClick={start}>Start</button>
            </div>)
    } else {
        let { answers, question } = currentData[currentStep]
        if(!currentAnswer){
            answers = Utils.shuffle(answers)
        }
        console.log(currentAnswer, question)
        content = <QuizQuestion next={next} select={select} question={question} currentAnswer={currentAnswer} answers={answers} />
    }

    return (
        <div style={styles.container}>
            {content}
        </div>
    )

}
export default Quiz