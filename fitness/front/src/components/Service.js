const Service = ({service}) => {
    console.log('service:', service);
    return (
        <tr className="service-row">
            <td>
                {service.name}
            </td>
            <td>
                {service.price}
            </td>
        </tr>
    )
}

const ServiceList = ({services}) => {
    console.log('services:', services);
    return (
        <table className={"service-list"}>
            <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>
            {services.map((service) => <Service key={service.name} service={service}/>)}
            </tbody>
        </table>
    )
}

export default ServiceList;