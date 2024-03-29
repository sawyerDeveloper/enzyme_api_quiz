import { useState } from 'react'
import QuizQuestion from './quiz/QuizQuestion'
import { createQuizData } from '../utils/createQuizData'
import { shuffle } from '../utils/array/shuffle'
import ResultModal from './results/ResultModal'

const modals = {
    RESTULT_MODAL: 'result modal'
}

const Quiz = ({ data, openLearn }) => {

    const [currentData, setCurrentData] = useState([])
    const [currentStep, setCurrentStep] = useState(0)
    const [currentAnswer, setCurrentAnswer] = useState(null)
    const [correctAnswer, setCorrectAnswer] = useState(null)
    const [resultModal, setResultModal] = useState(null)

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
                console.log('correct')
            } else {
                console.log('not')
            }
            setCurrentStep(currentStep + 1)
            setCurrentAnswer(null)
            setCorrectAnswer(currentData[currentStep].answers[0])
        }
    }

    const end = () => {
        const newData = currentData
        newData.date = new Date()
        sessionStorage.setItem('results', JSON.stringify(newData));
        setResultModal(modals.RESTULT_MODAL)
    }

    const select = (event) => {
        setCurrentAnswer(event.target.value)
    }

    const numberCorrect = currentData.reduce((acc, curr) => {
        if (curr.correct) {
            acc++
        } return acc
    }, 0)

    let modal
    switch (resultModal) {
        case modals.RESTULT_MODAL:
            modal = <ResultModal
                setResultModal={setResultModal}
                newCurrentData={currentData}
                numberCorrect={numberCorrect}
                numberIncorrect={currentData.length - numberCorrect}
                openLearn={openLearn} />
            break
        default:
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
        content = <QuizQuestion
            next={next}
            select={select}
            question={question}
            currentAnswer={currentAnswer}
            answers={answers} />
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