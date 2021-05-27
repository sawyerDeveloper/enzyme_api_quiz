const QuizAnswer = (props) => {

    const { answer, checked, select } = props

    return (
        <div>
            <label>
                <input checked={checked} onChange={select} type="radio" id={answer} name="answer" value={answer} />
                {answer}
            </label>
        </div>
    )
}

export default QuizAnswer