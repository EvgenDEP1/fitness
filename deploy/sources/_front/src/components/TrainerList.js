import {NavLink as Link} from "react-router-dom";
import React from "react";

const Trainer = ({trainer}) => {
    // console.log('trainer:', trainer);
    return (
        <tr className="trainer-row">
            <td>
                {trainer.id}
            </td>
            <td>
                {trainer.name}
            </td>
            <td>
                {trainer.surname}
            </td>
            <td>
                {trainer.patronymic}
            </td>
        </tr>
    )
}

const TrainerList = ({trainers}) => {
    // console.log('trainers:', trainers);
    return (
        <table className={"trainers-list"}>
            <thead>
            <tr>
                <th>id</th>
                <th>Name</th>
                <th>surname</th>
                <th>patronymic</th>
            </tr>
            </thead>
            <tbody>
            {trainers.map((trainer) => <Trainer key={trainer.id} trainer={trainer}/>)}
            </tbody>
        </table>
    )
}

export default TrainerList;