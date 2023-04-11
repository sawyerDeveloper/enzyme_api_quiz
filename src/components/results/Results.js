import ResultsItem from "./ResultsItem"

const Results = () => {

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
        },
        learnMore: {
            alignSelf: 'flex-end',
            marginLeft: 5
        }
    }

    //  for debugging
    const clearData = () => {
        if (window.confirm('Are you sure?')) {
            sessionStorage.removeItem('results')
        }
    }

    const results = JSON.parse(sessionStorage.getItem('results'))

    return (
        <div style={styles.container}>
            <h1>Results</h1>
            {results && <div>
                <button style={{ backgroundColor: 'orange' }} onClick={clearData}>Clear Data</button>
            </div>}
            <div>
                {results && results.map(result => {
                    return <ResultsItem key={result.question} result={result} />
                })}
            </div>
        </div>
    )
}

export default Results