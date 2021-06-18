const ResultModal = (props) => {

    const styles = {
        container: {
            fontSize: 30,
            color: '#52b69a',
            backgroundColor: 'rgba(30, 96, 145, .9)',
            width: window.innerWidth
        },
        resultsT: {
            fontSize: 20,
            color: 'green'
        },
        resultsF: {
            fontSize: 20,
            color: 'red'
        }
    }

    const dismissModal = () => {
        props.setResultModal(null)
    }
    
        return(
            <div style={styles.container}>
                Quiz Complete!
                <div  key={props.newCurrentData.date}>{props.newCurrentData.map(result => {
                    return <div style={result.correct ? styles.resultsT : styles.resultsF}> 
                        {result.question}
                    </div>
                })}
                </div>
                <div>
                    <button onClick={dismissModal}>Dismiss</button>
                </div>
            </div>
        )
    }
    
    export default ResultModal