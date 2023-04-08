const Results = (props) => {

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column'
        },
        correct: {
            color: 'green'
        },
        incorrect: {
            color: 'red'
        }
    }

    const results = JSON.parse(sessionStorage.getItem('results'))
    return (
        <div style={styles.container}>
            <h1>Results</h1>
            <div>
                {results.map(result => {

                    return <div key={result.question}>
                        <div style={result.correct ? styles.correct : styles.incorrect}>
                            {result.question}
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Results