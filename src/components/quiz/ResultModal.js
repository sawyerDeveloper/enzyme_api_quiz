import { useState } from 'react'

const ResultModal = (props) => {

    const dismissModal = () => {
        props.setResultModal(null)
    }

    const styles = {
        container: {
            fontSize: 30,
            color: '#52b69a',
            backgroundColor: 'rgba(30, 96, 145, .9)',
            width: window.innerWidth
        },
        tally: {
            display: 'flex',
            justifyContent: 'space-evenly'
        }
    }


    return (
        <div style={styles.container}>
            Quiz Complete!
            <div style={styles.tally}>
                <div>
                    Number Correct
                    <div>
                        {props.numberCorrect}
                    </div>
                </div>
                <div>
                    Number Incorrect
                    <div>
                        {props.numberIncorrect}
                    </div>
                </div>
            </div>
            <div>
                <button onClick={dismissModal}>Dismiss</button>
            </div>
        </div>
    )
}

export default ResultModal