import { useState } from 'react'
import QuizQuestion from './components/quiz/QuizQuestion'
import Utils from './utils/Utils'
import ResultModal from './components/quiz/ResultModal'

const modals = {
    RESTULT_MODAL : 'result modal'
}

const Quiz = (props) => {

    const data = props.data
    const [currentData, setCurrentData] = useState([])
    const [currentStep, setCurrentStep] = useState(0)
    const [currentAnswer, setCurrentAnswer] = useState(null)
    const [correctAnswer, setCorrectAnswer] = useState(null)
    const [resultModal, setResultModal] = useState(null)


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

    let modal 
    switch (resultModal) {
        case modals.RESTULT_MODAL:
            modal = <ResultModal setResultModal={setResultModal}/>
            break
    }

    const end = () => {
        const newCurrentData = currentData
        newCurrentData.date = new Date()
        sessionStorage.setItem('results', JSON.stringify(newCurrentData));
        setResultModal(modals.RESTULT_MODAL)
    }

    const select = (event) => {
        setCurrentAnswer(event.target.value)
    }

    const styles = {
        container: {
            marginTop: 10
        },
        modalContainer: {
            display: 'flex',
            position: 'absolute',
            height: '50%',
            top: 30,
            left: 5
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
        content = <QuizQuestion next={next} select={select} question={question} currentAnswer={currentAnswer} answers={answers} />
    }

    return (
        <div style={styles.container}>
            {content}
            <div style={styles.modalContainer}>
            {modal}
            </div>
        </div>
    )

}
export default Quiz