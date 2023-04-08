const DataListItem = (props) => {

    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'center'
        },
        maybe: {
            alignItems: 'center'
        },
        learnMore: {
            alignSelf: 'flex-end',
            marginLeft: 5
        }
    }
    return (
        <div style={styles.container}>
            <div style={styles.maybe}>
                <h1>{props.item.question}</h1>
                <div>{props.item.answer}</div>
            </div>
            <div style={styles.learnMore}>
                <a href={props.item.learn} rel="noreferrer" target="_blank">Learn More </a>
            </div>
        </div>
    )
}

export default DataListItem