import DataListItem from "./DataListItem"

const DataList = (props) => {

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column'
        }
    }
    return (
        <div style={styles.container}>
            <h1>Learn</h1>
            {props.data.map((item) => {
                return (
                    <DataListItem key={item.question} item={item}/>
                )
            })}
        </div>
    )
}

export default DataList