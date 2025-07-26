
function ViewList(props) {
    const array = props.array;
    if (!array) return null;
    return (
        array.map((name, index) => {
            return <h1 key={index}>{name}</h1>;
        })
    );
}

export default ViewList;