const User = (props) => (
    <div>
        <div>
            {props.userName}
        </div>
        <div>
            {props.currentClinic}
        </div>
        <div>
            {props.date}
        </div>
    </div>
);

export default User;
