import DataList from "./DataList";

const DataListItem = (props) => {

    const styles = {
        container: {

        }
    }
    return (<div style={styles.container}>
                <h1>{props.item.selector}</h1>
                <div>{props.item.description}</div>
                <div><a href={props.item.link} target="_blank">Learn More </a></div>
            </div>)
}

export default DataListItem