import { useState } from 'react'
import QuizQuestion from './quiz/QuizQuestion'
import { createQuizData } from '../utils/createQuizData'
import { shuffle } from '../utils/array/shuffle'
import ResultModal from './results/ResultModal'

const modals = {
    RESTULT_MODAL: 'result modal'
}

const Quiz = (props) => {

    const data = props.data
    const [currentData, setCurrentData] = useState([])
    const [currentStep, setCurrentStep] = useState(0)
    const [currentAnswer, setCurrentAnswer] = useState(null)
    const [correctAnswer, setCorrectAnswer] = useState(null)
    const [resultModal, setResultModal] = useState(null)
    const [numberCorrect, setNumberCorrect] = useState(0)
    const [numberIncorrect, setNumberIncorrect] = useState(0)


    const start = () => {
        const newData = createQuizData(data)
        setCurrentData(newData)
        setCurrentStep(0)
        setCorrectAnswer(newData[0].answers[0])
    }

    const next = () => {
        if (currentStep + 1 === data.length) {
            end()
        } else {
            if (currentAnswer === correctAnswer) {
                currentData[currentStep].correct = true
                setNumberCorrect(numberCorrect + 1)
                console.log('correct')
            } else {
                setNumberIncorrect(numberIncorrect + 1)
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
            modal = <ResultModal setResultModal={setResultModal} newCurrentData={currentData} numberCorrect={numberCorrect} numberIncorrect={numberIncorrect} openLearn={props.openLearn} />
            break
        default:
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
    if (currentData.length === 0) {
        content = (
            <div>
                <div>Click Start to begin</div>
                <button onClick={start}>Start</button>
            </div>)
    } else {
        let { answers, question } = currentData[currentStep]
        if (!currentAnswer) {
            answers = shuffle(answers)
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