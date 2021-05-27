import QuizAnswer from "./QuizAnswer"

const QuizQuestion = (props) => {

    const { answers, currentAnswer, question, select, next } = props

    const styles = {
        container: {
            textAlign: 'center'
        },
        submit: {
            marginTop: 10
        }
    }

    return (
        <div>
            <h1>{question}</h1>
            <div style={styles.container}>
                <QuizAnswer checked={currentAnswer === answers[0]} answer={answers[0]} select={select} />
                <QuizAnswer checked={currentAnswer === answers[1]} answer={answers[1]} select={select} />
                <QuizAnswer checked={currentAnswer === answers[2]} answer={answers[2]} select={select} />
                <button style={styles.submit} onClick={next}>Submit</button>
            </div>
        </div>
    )
}

export default QuizQuestion