import React from "react";
import {useParams} from "react-router";

const UserDetail = ({users}) => {
    let {id} = useParams();
    let user = users.filter((item) => item.id === +id)[0];
    return (
        <div className={"project-detail"}>
            <h2>Username: {user.title}</h2>
            <p>First name: {user.first_name}, Last name: {user.last_name}</p>
            <p>balance: {user.balance}</p>
            <p>Phone Number: {user.phone_number}</p>
        </div>
    )
}

export default UserDetail;