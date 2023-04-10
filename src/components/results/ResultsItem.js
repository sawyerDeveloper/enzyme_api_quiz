const ResultsItem = ({ result }) => {

    const styles = {
        container: {
            margin: 10
        },
        correct: {
            color: 'green'
        },
        incorrect: {
            color: 'red'
        },
        learnMore: {
            alignSelf: 'flex-end',
            marginLeft: 5
        }
    }

    return (<div style={styles.container}>
                <div style={result.correct ? styles.correct : styles.incorrect}>
                    {result.question}
                </div>
                <div style={styles.learnMore}>
                    <a href={result.url} rel="noreferrer" target="_blank">Learn More</a>
                </div>
            </div>)
}

export default ResultsItem
