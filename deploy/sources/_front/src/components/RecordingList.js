import {NavLink as Link} from "react-router-dom";
import React from "react";

const Recording = ({recording}) => {
    // console.log('recording:', recording);
    return (
        <tr className="recording-row">
            <td>
                <Link to={`/recordings/detail/${recording.id}`} className="nav-link">
                        {recording.id}
                </Link>
            </td>
            <td>{recording.created}</td>
            <td>{recording.updated}</td>
            <td>
                <Link to={`/recording/delete/${recording.id}`} className="nav-link">
                        delete
                </Link>
            </td>
        </tr>
    )
}

const RecordingList = ({recordings}) => {
    // console.log('recordings:', recordings);
    return (
        <table className={"recordings-list"}>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Created</th>
                    <th>Updated</th>
                </tr>
            </thead>
            <tbody>
            {recordings.map((recording) => <Recording key={recording.id} recording={recording}/>)}
            </tbody>
        </table>
    )
}

export default RecordingList;