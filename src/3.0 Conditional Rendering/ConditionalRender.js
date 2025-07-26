
function ConditionalRender(props) {
    if (!props.age) return null;
    return (
        <div>
            <h1>
                {props.age >= 18 ? "adult" : "under age"}
            </h1>
        </div>
    );
}

export default ConditionalRender;