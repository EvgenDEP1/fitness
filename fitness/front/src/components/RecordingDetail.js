import React from "react";
import {useParams} from "react-router";

const RecordingDetail = ({recordings, users, services, trainers}) => {
    let {id} = useParams();
    let recording = recordings.filter((item) => item.id === +id)[0];
    let serv = services.find((item) => recording.service === item.id);
    let members = users.filter((item) => recording.user.includes(item.id));
    let train = trainers.filter((item) => recording.trainer.includes(item.id));

    return (
        <div className={"recording-detail"}>
            <h2>Recording: {recording.id}</h2>
            <h3>Service: {serv.name}</h3>
            <h4>Trainer:</h4>
            <ul>
                {train.map((item) => (
                    <li key={item.id}>{item.name}</li>
               ))}
            </ul>
            <p>Created: {recording.created}</p>
            <p>Updated: {recording.updated}</p>
            <h4>Members:</h4>
            <ul>
                {members.map((item) => (
                    <li key={item.id}>{item.username}</li>
               ))}
            </ul>

        </div>

    )
}

export default RecordingDetail;