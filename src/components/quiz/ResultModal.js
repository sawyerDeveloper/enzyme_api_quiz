const ResultModal = (props) => {

    const styles = {
        container: {
            fontSize: 30,
            color: '#52b69a',
            backgroundColor: 'rgba(30, 96, 145, .9)',
            width: window.innerWidth
        }
    }

    const dismissModal = () => {
        props.setResultModal(null)
    }
    
    console.log(props)
        return(
            <div style={styles.container}>
                Quiz Complete!
                <div>
                    <button onClick={dismissModal}>Dismiss</button>
                </div>
            </div>
        )
    }
    
    export default ResultModal