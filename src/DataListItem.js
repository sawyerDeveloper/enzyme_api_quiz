import DataList from "./DataList";

const DataListItem = (props) => {

    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'center'
        },
        maybe: {
            alignItems: 'center',
            color: '#184e77'
        },
        learnMore: {
            alignSelf: 'flex-end',
            marginLeft: 5,
        },
        aTag: {
            color: '#168aad'
        }
    }
    return (
        <div style={styles.container}>
            <div style={styles.maybe}>
                <h1>{props.item.selector}</h1>
                <div>{props.item.description}</div>
            </div>
            <div style={styles.learnMore}>
                <a style ={styles.aTag} href={props.item.link} target="_blank">Learn More </a>
            </div>
        </div>
    )
}

export default DataListItem