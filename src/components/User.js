
const User = (props) => {
    return(
        <div className="user-card">
            <h2>Name : {props.name} </h2>
            <h3>Location: {props.location}</h3>
            <h4>Contact: @vishal943</h4>
        </div>
    );
}

export default User;