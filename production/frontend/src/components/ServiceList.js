import {NavLink as Link} from "react-router-dom";
import React from "react";

const Service = ({service}) => {
    // console.log('service:', service);
    return (
        <tr className="service-row">
            <td>
                {service.id}
            </td>
            <td>
                <Link to={`/services/detail/${service.id}`} className="nav-link">
                        {service.name}
                </Link>
            </td>
            <td>
                {service.price}
            </td>
            <td>
                <Link to={`/services/delete/${service.id}`} className="nav-link">
                        delete
                </Link>
            </td>
        </tr>
    )
}

const ServiceList = ({services}) => {
    // console.log('services:', services);
    return (
        <table className={"service-list"}>
            <thead>
            <tr>
                <th>id</th>
                <th>Name</th>
                <th>Price</th>
                <th>delete</th>
            </tr>
            </thead>
            <tbody>
            {services.map((service) => <Service key={service.name} service={service}/>)}
            </tbody>
        </table>
    )
}

export default ServiceList;