import DataList from "./DataList";

const DataListItem = (props) => {

    const styles = {
        container: {
            display: 'flex',
            //flex: 1,
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
                <h1>{props.item.selector}</h1>
                <div>{props.item.description}</div>
            </div>
            <div style={styles.learnMore}>
                <a href={props.item.link} target="_blank">Learn More </a>
            </div>
        </div>
    )
}

export default DataListItem