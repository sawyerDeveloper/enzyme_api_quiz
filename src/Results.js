const Results = (props) => {

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column'
        }
    }

    const results = JSON.parse(sessionStorage.getItem('results'))
    return (
        <div style={styles.container}>
            <h1>Results</h1>
            <div>
                {results.map(result => {
                    
                    return <div></div>
                })}
            </div>
        </div>
    )
}

export default Results