import React from "react";
import {useParams} from "react-router";

const ServiceDetail = ({services}) => {
    let {id} = useParams();
    let service = services.filter((item) => item.id === +id)[0];

    return (
        <div className={"service-detail"}>
            <h2>Service: {service.name}</h2>
            <p>Price: {service.price}</p>
            <p>desc: {service.desc}</p>
        </div>

    )
}

export default ServiceDetail;